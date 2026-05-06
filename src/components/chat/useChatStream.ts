import { useState, useCallback } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: 'Ahoj! 👋 Jsem váš internetový poradce. Rád vám pomohu najít nejlepší připojení pro vaše potřeby. Začněme – v jakém městě hledáte internet?'
};

export function useChatStream() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);

  const parseSSELine = (line: string): string | null => {
    if (line.startsWith(':') || line.trim() === '') return null;
    if (!line.startsWith('data: ')) return null;
    
    const jsonStr = line.slice(6).trim();
    if (jsonStr === '[DONE]') return null;
    
    try {
      const parsed = JSON.parse(jsonStr);
      return parsed.choices?.[0]?.delta?.content || null;
    } catch {
      return null;
    }
  };

  const processStreamBuffer = (
    buffer: string, 
    updateMessage: (content: string) => void,
    currentMessage: string
  ): { remaining: string; message: string } => {
    let remaining = buffer;
    let message = currentMessage;
    let newlineIndex: number;

    while ((newlineIndex = remaining.indexOf('\n')) !== -1) {
      let line = remaining.slice(0, newlineIndex);
      remaining = remaining.slice(newlineIndex + 1);

      if (line.endsWith('\r')) line = line.slice(0, -1);
      
      const content = parseSSELine(line);
      if (content) {
        message += content;
        updateMessage(message);
      }
    }

    return { remaining, message };
  };

  const sendMessage = useCallback(async (input: string) => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ messages: [...messages, userMessage] }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Chyba při komunikaci s AI');
      }

      if (!response.body) throw new Error('Žádná odpověď od serveru');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let assistantMessage = '';

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      const updateLastMessage = (content: string) => {
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMsg = newMessages[newMessages.length - 1];
          if (lastMsg?.role === 'assistant') {
            lastMsg.content = content;
          }
          return newMessages;
        });
      };

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const result = processStreamBuffer(buffer, updateLastMessage, assistantMessage);
        buffer = result.remaining;
        assistantMessage = result.message;
      }

      // Flush remaining buffer
      if (buffer.trim()) {
        const result = processStreamBuffer(buffer + '\n', updateLastMessage, assistantMessage);
        assistantMessage = result.message;
      }

    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Omlouváme se, vyskytla se chyba. Zkuste to prosím znovu nebo nás kontaktujte přes formulář na webu.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  return { messages, isLoading, sendMessage };
}
