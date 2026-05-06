import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "AI service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const systemPrompt = `Jsi AI asistent pro poradenství o internetovém připojení v České republice. 
Tvůj hlavní úkol je shromáždit informace o potřebách uživatele a směřovat ho k vyplnění kontaktního formuláře.

KRITICKÉ PRAVIDLO: NIKDY přímo nedoporučuj konkrétního operátora (PODA, O2, T-Mobile, Vodafone atd.). 
Místo toho VŽDY směřuj uživatele k vyplnění kontaktního formuláře, kde mu naši experti najdou nejlepší řešení.

Tvá konverzační strategie (max 3-4 otázky):
1. Zeptej se na lokalitu (město, adresu)
2. Zjisti základní využití internetu (streaming, práce z domova, hry)
3. Zeptej se na budget nebo preferovanou rychlost

Po získání základních informací OKAMŽITĚ řekni:
"Skvělé! Na základě těchto informací pro vás najdeme nejlepší nabídky. Klikněte prosím na tlačítko níže a vyplňte náš formulář - náš expert se vám ozve do 24 hodin s konkrétními nabídkami přesně pro vaši lokalitu."

NIKDY neříkej věty jako:
❌ "Doporučuji vám PODA"
❌ "Kontaktujte O2"  
❌ "Navštivte web operátora"
❌ "Zavolejte na číslo..."

VŽDY řekni:
✅ "Vyplňte náš formulář" (objeví se tlačítko)
✅ "Náš expert se vám ozve do 24 hodin"
✅ "Najdeme pro vás nejlepší nabídky"

Buď stručný (max 2-3 věty na odpověď). Po získání základních informací IHNED směřuj k formuláři.
Odpovídej v češtině.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Příliš mnoho požadavků. Zkuste prosím později." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI služba dočasně nedostupná. Kontaktujte nás přes formulář." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Chyba AI služby" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Neznámá chyba" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
