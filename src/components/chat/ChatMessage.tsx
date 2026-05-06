interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  onFormClick?: () => void;
}

export default function ChatMessage({ role, content, onFormClick }: ChatMessageProps) {
  const isUser = role === 'user';
  const showFormButton = role === 'assistant' && content.toLowerCase().includes('formulář');

  const handleFormClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onFormClick?.();
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] p-3 rounded-lg ${
          isUser
            ? 'bg-primary text-primary-foreground'
            : 'bg-background border border-border'
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">{content}</p>
        {showFormButton && (
          <a 
            href="/#formular" 
            className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
            onClick={handleFormClick}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Vyplnit formulář
          </a>
        )}
      </div>
    </div>
  );
}
