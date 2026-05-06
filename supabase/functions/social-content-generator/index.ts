import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface RequestBody {
  postType: string;
  platform: string;
  visualStyle: string;
  includePerson: boolean;
  includeCta: boolean;
  region: string;
  customTopic?: string;
}

const regionNames: Record<string, string> = {
  cela_cr: "České republice",
  praha: "Praze",
  ostrava: "Ostravě",
  brno: "Brně",
  msk: "Moravskoslezském kraji",
  plzen: "Plzni",
  liberec: "Liberci",
  hradec_kralove: "Hradci Králové",
  olomouc: "Olomouci",
  zlin: "Zlíně",
  pardubice: "Pardubicích",
  usti_nad_labem: "Ústí nad Labem",
  ceske_budejovice: "Českých Budějovicích",
  havirov: "Havířově",
  karvina: "Karviné",
  opava: "Opavě",
  frydek_mistek: "Frýdku-Místku",
};

// ============================================================
// THEMATIC SCENE VARIANTS — expert-level photographic briefs
// Each variant provides a unique, topic-specific scene direction
// that replaces generic "router on desk" compositions.
// ============================================================

const thematicScenes: Record<string, { withPerson: string; withoutPerson: string }> = {
  wifi_problems: {
    withPerson: `Tight 85mm mid-shot of a frustrated 35-year-old Czech man sitting on a gray linen sofa, holding a smartphone at arm's length with a furrowed brow, staring at a buffering circle on screen. A cheap plastic router with blinking red LED sits on a cluttered side table in the midground. Warm tungsten table lamp provides key light from the right; cool blue TV glow fills from the left. Shallow DOF blurs a bookshelf background. Clean negative space occupies the upper-left quadrant.`,
    withoutPerson: `Close-up 50mm shot of a budget plastic router on a dusty wooden shelf, single red LED blinking. A tangled ethernet cable drapes over the edge. A smartphone propped against a stack of books shows a speed test result of "2.3 Mbps" on screen. Warm side-light from a nearby window creates long shadows. Dust particles visible in the light beam. Clean negative space in the left third of the frame.`
  },
  optika: {
    withPerson: `Wide 35mm shot of a Czech technician in a navy work jacket, kneeling beside an open fiber-optic junction box mounted on a clean white apartment wall. Glowing teal fiber strands fan out from the box, casting subtle cyan light on his focused face. A premium white ONT terminal sits on a floating shelf nearby. Natural daylight from a hallway window provides fill. Clean negative space across the top third.`,
    withoutPerson: `Macro 100mm detail shot of fiber-optic cable termination — dozens of glass strands lit from within by teal #2EB698 laser light, fanning out against a pure black background. Each strand shows individual core glow. A precision fusion splicer tool sits in soft focus in the foreground-left. Single spot light from above creates specular highlights on the glass tips. Clean negative space on the right half.`
  },
  fwa: {
    withPerson: `Environmental 50mm portrait of a 40-year-old Czech woman standing on the porch of a countryside house (traditional Czech "chalupa" with whitewashed walls), holding a tablet showing a video call. A compact 5G/FWA outdoor antenna is mounted on the gable end of the roof behind her, subtly catching afternoon sunlight. Green garden and distant Bohemian hills in the background, out of focus. Golden hour light (3200K) wraps around her. Negative space on the left third.`,
    withoutPerson: `Low-angle 24mm wide shot of a modern FWA/5G outdoor antenna mounted on a rural Czech house rooftop against a dramatic cloudy sky at golden hour. The antenna is a sleek white cylinder with a single status LED. Below, a gravel path leads through a tidy garden. A transmission tower is visible on a distant hill, subtly out of focus. Warm directional sunlight creates long shadows. Clean sky negative space in the upper-left quadrant.`
  },
  regional_praha: {
    withPerson: `35mm street-level shot of a young Czech professional (28-year-old woman in a camel coat) walking through Malá Strana cobblestone street, AirPods in, glancing at her phone with a subtle smile. Prague Castle and St. Vitus Cathedral tower rise in soft focus in the background. A modern 5G small cell is discreetly mounted on a baroque lamppost. Overcast European daylight, cool tones. Negative space in the upper third.`,
    withoutPerson: `Wide 24mm establishing shot from Letná Park — panoramic view of Prague's Old Town skyline at blue hour. The Vltějn river reflects city lights. In the foreground, a modern fiber-optic distribution cabinet with a subtle teal LED sits on the park path. Cool blue ambient light with warm orange city glow on the horizon. Clean sky negative space across the top 40%.`
  },
  regional_ostrava: {
    withPerson: `Environmental 50mm portrait of a 30-year-old Czech man in a charcoal henley, sitting at a standing desk in a Dolní Vítkovice coworking space — industrial steel beams and exposed brick visible. A mesh WiFi 6E router sits on the desk. Large factory-style windows let in diffused north light. The Bolt Tower structure is partially visible through the window. Shallow DOF. Negative space on the left side.`,
    withoutPerson: `Wide 24mm shot of the illuminated Dolní Vítkovice industrial complex at dusk — the Bolt Tower and blast furnace structures backlit with teal accent lighting. In the foreground, a modern fiber junction box with a glowing status light sits on a concrete bollard. Industrial textures: rusted steel, weathered concrete, modern glass. Cool blue twilight with warm tungsten spots. Negative space in the upper-right.`
  },
  regional_brno: {
    withPerson: `Mid-shot 85mm of a young Czech couple (late 20s) sitting at a wooden café table in Zelný trh square, sharing a laptop screen. The Cathedral of St. Peter and Paul (Petrov) rises in the background bokeh. A coffee cup and a small portable hotspot sit on the table. Warm afternoon light, European café ambiance. Negative space on the right third.`,
    withoutPerson: `35mm architectural shot of Brno's Villa Tugendhat — clean Bauhaus lines, floor-to-ceiling windows. A sleek mesh router on a minimalist Mies van der Rohe table inside, visible through the glass. Late afternoon sun creates geometric shadow patterns. Modernist aesthetic aligns with tech precision. Clean negative space on the left half.`
  },
  default: {
    withPerson: `Tight 85mm portrait of a 30-year-old Czech woman in a cream knit sweater, checking her phone with a subtle smile, seated at a light oak desk. A matte-white mesh router with a single teal LED sits in soft focus in the foreground-right. Large north-facing window provides cool diffused daylight. Clean negative space occupies the left third of the frame.`,
    withoutPerson: `Overhead flat-lay on dark charcoal slate surface: a matte-black WiFi 6E router centered, surrounded by a ceramic espresso cup, a small succulent in a concrete pot, and a coiled white ethernet cable. Single overhead softbox creates clean shadows at 45°. Negative space in the top-right quadrant.`
  }
};

// Map post types and topics to thematic scene keys
function getThematicKey(postType: string, region: string, customTopic?: string): string {
  const topic = (customTopic || "").toLowerCase();
  
  // Check custom topic keywords first
  if (topic.includes("wifi") || topic.includes("wi-fi") || topic.includes("signál") || topic.includes("výpadky") || topic.includes("pomalý")) return "wifi_problems";
  if (topic.includes("optik") || topic.includes("fiber") || topic.includes("ftth") || topic.includes("vlákn")) return "optika";
  if (topic.includes("fwa") || topic.includes("5g") || topic.includes("bezdrát") || topic.includes("venkov")) return "fwa";
  
  // Check region
  if (region === "praha") return "regional_praha";
  if (region === "ostrava" || region === "havirov" || region === "karvina" || region === "opava" || region === "frydek_mistek") return "regional_ostrava";
  if (region === "brno") return "regional_brno";
  
  // Check post type
  if (postType === "problem_solution") return "wifi_problems";
  if (postType === "tip") return "wifi_problems";
  if (postType === "regional" && region === "msk") return "regional_ostrava";
  
  return "default";
}

// ============================================================
// BRAND CONTEXT — "Nejvýhodnější Připojení"
// ============================================================

const brandingStyles: Record<string, string> = {
  teal_editorial: `VISUAL DIRECTION: Premium editorial photography, dark & sophisticated.
COLOR PALETTE: Rich black #0A0A0A base, brand teal #2EB698 as accent (glow, edge-light, UI element), warm gold #D4A517 for subtle highlights.
LIGHTING: Single dramatic key light from 45° left, soft teal-gelled fill from opposite side, deep shadows for cinematic mood.
TEXTURE: Subtle grain (ISO 400 film look), no plastic/smooth AI rendering.
CAMERA: Canon EOS R5, 85mm f/1.8, shallow DOF, 8K resolution.`,

  speed_tech: `VISUAL DIRECTION: Cyberpunk-lite technology aesthetic, cutting-edge but grounded.
COLOR PALETTE: Midnight blue #0A1628, electric cyan #00D4FF neon glow, white #FFFFFF specular highlights.
LIGHTING: Cool ambient base with sharp cyan neon edge-lighting on technology surfaces, subtle volumetric haze.
TEXTURE: Matte metal surfaces, subtle reflection, fiber-optic light trails.
CAMERA: Sony A7R V, 35mm f/2.0, medium DOF, motion blur on background particles only.`,

  home_comfort: `VISUAL DIRECTION: Warm lifestyle editorial, Kinfolk/Cereal magazine aesthetic.
COLOR PALETTE: Natural linen #F5E6D3, warm oak #8B7355, cream white #FAFAFA, soft amber accent.
LIGHTING: Large window soft light from camera-left, golden hour color temperature (3200K), gentle shadows.
TEXTURE: Natural materials — wood grain, cotton, ceramic. No plastic or synthetic surfaces.
CAMERA: Fujifilm X-T5, 56mm f/1.4, Classic Chrome film simulation, shallow DOF on background.`,

  business_pro: `VISUAL DIRECTION: Corporate premium, Bloomberg/Forbes ad quality.
COLOR PALETTE: Charcoal slate #1E293B, warm gold #D4A517 accent, crisp white highlights.
LIGHTING: Professional 3-point studio setup — soft key from 30° right, subtle fill, hard rim light for subject separation.
TEXTURE: Brushed metal, glass, premium matte finishes. No glossy reflections.
CAMERA: Phase One IQ4, 80mm f/2.8, deep DOF f/5.6, tethered studio quality.`,

  regional_czech: `VISUAL DIRECTION: Modern Czech identity, architectural + cultural pride.
COLOR PALETTE: Charcoal #1A1A1A base, Czech blue #11457E accent, subtle burgundy red #D7141A detail.
LIGHTING: Natural European overcast daylight, soft diffused shadows, slightly cool color temperature.
TEXTURE: Stone, brick, historic facades juxtaposed with modern tech elements.
CAMERA: Nikon Z8, 24mm f/2.8, deep DOF f/8, documentary color grading.`,

  clean_minimal: `VISUAL DIRECTION: Swiss-style minimalism, product photography precision.
COLOR PALETTE: Pure white #FAFAFA background, light gray #F0F0F0 surfaces, charcoal #1A1A1A subjects, teal #2EB698 single accent point.
LIGHTING: Bright, even, nearly shadowless — large overhead softbox with white reflectors on all sides.
TEXTURE: Matte product surfaces, no reflections, no environmental distractions.
CAMERA: Hasselblad X2D, 90mm f/5.6, product-sharp focus, clean color profile.`,
};

// Generate unique scene description using AI with thematic fallbacks
async function generateSceneDescription(
  topic: string, 
  postType: string, 
  visualStyle: string, 
  includePerson: boolean,
  region: string,
  customTopic: string | undefined,
  apiKey: string
): Promise<string> {
  const personRules = includePerson 
    ? `PEOPLE IN THE SCENE — MANDATORY:
- Include exactly 1 or 2 people. Portraits, mid-shots, environmental all allowed.
- ANATOMY: Each hand EXACTLY 5 fingers. Face bilaterally symmetric, natural skin with pores.
- POSING: Candid, relaxed. No stock-photo stiffness.
- WARDROBE: Modern casual/smart-casual, no logos or text on clothing.`
    : `NO PEOPLE — MANDATORY:
- Zero humans, faces, hands, silhouettes anywhere.
- Show only: technology, architecture, interiors, objects.`;

  const thematicKey = getThematicKey(postType, region, customTopic);
  const fallbackScene = thematicScenes[thematicKey] || thematicScenes.default;
  const fallback = includePerson ? fallbackScene.withPerson : fallbackScene.withoutPerson;

  const sceneSystemPrompt = `You are a senior advertising art director creating photographic briefs for AI image generation.

BRAND: "Nejvýhodnější Připojení" — premium Czech internet comparison service. Tone: trustworthy, modern, premium.

${personRules}

Write a hyper-specific 2-3 sentence photographic scene brief. Include:
1. CAMERA + FRAMING (exact shot type, focal length)
2. SUBJECT + DETAILS (specific objects with material/texture)
3. ENVIRONMENT + DEPTH (foreground/midground/background)
4. NEGATIVE SPACE location for text overlay

FORBIDDEN: Never mention text/typography/headlines/logos. No filler words ("beautiful", "stunning"). No abstract concepts. No "etc." or "various".

Output ONLY the scene brief. No intro, no explanation.`;

  try {
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: sceneSystemPrompt },
          { role: "user", content: `Create a unique photographic scene for: "${topic}". Post type: ${postType}. Visual style: ${visualStyle}. Region: ${region}.` },
        ],
      }),
    });

    if (!response.ok) {
      console.error("Scene generation failed, using thematic fallback:", thematicKey);
      return fallback;
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content?.trim() || fallback;
  } catch (error) {
    console.error("Scene generation error:", error);
    return fallback;
  }
}

function buildSystemPrompt(body: RequestBody): string {
  const regionName = regionNames[body.region] || "České republice";
  
  return `Jsi expert na social media marketing pro českou firmu "Nejvýhodnější Připojení".

FIREMNÍ INFORMACE:
- Název: Nejvýhodnější Připojení  
- Služba: Bezplatné porovnávání internetových poskytovatelů
- Web: nejvyhodnejsipripojeni.cz
- Kontakt: info@nejvyhodnejsipripojeni.cz, +420 756 756 147
- Statistiky: 15 000+ spokojených zákazníků, hodnocení 4.9/5, 98% doporučuje
- Hlavní hodnota: 100% ZDARMA - bez skrytých poplatků

REGION PRO TENTO PŘÍSPĚVEK: ${regionName}

STYL TEXTŮ - DŮLEŽITÉ:
Piš DLOUHÉ, POUTAVÉ texty podobné tomuto příkladu:

"""
Už vás nebaví, že se vám film sekne zrovna v té nejnapínavější scéně, zatímco si děti stahují hru a partner se snaží volat přes video? 🤯 Rodinná pohoda u internetu vypadá jinak – a my víme, jak na to!

Máme pro vás řešení, které utáhne celou domácnost bez jediného zaváhání. 🚀 S **gigabitovou rychlostí** můžete zapomenout na čekání. Stahování velkých souborů, online výuka i 4K streamování poběží současně a naprosto plynule.

A to nejlepší? K superrychlému internetu vám přibalíme i **85+ TV programů**, takže o večerní zábavu pro celou rodinu je postaráno. Žádné skryté háčky nečekejte – **aktivaci i kvalitní router máte od nás za 0 Kč.** 🌐

Nenechte svou rodinu čekat na načítání a dopřejte si internet, který s vámi udrží krok. Změna je snadná a my vám se vším pomůžeme.

📢 **Chcete vědět víc?**
Zavolejte nám: 📞 **+420 756 756 147**
Nebo nám napište do zpráv! 💬
"""

PRAVIDLA:
1. Piš v češtině (ne slovensky!)
2. Texty musí být DLOUHÉ (min. 800-1500 znaků pro Facebook)
3. Používej emoji přirozeně ale ne přehnaně 🎯
4. Používej **tučný text** pro důležité informace
5. Formátuj text s odstavci pro čitelnost
6. Zahrň konkrétní výhody a čísla kde to dává smysl
7. VŽDY ukonči textem s kontaktem: +420 756 756 147
8. Hashtags musí být relevantní pro český trh

${body.includeCta ? `POVINNÉ CTA na konci:
📢 **Chcete vědět víc?**
Zavolejte nám: 📞 **+420 756 756 147**
Nebo vyplňte formulář na našem webu → odkaz v bio` : ""}

FORMÁT ODPOVĚDI (JSON):
{
  "facebook": {
    "text": "Dlouhý poutavý text pro Facebook (800-1500 znaků, s emoji a formátováním)",
    "hashtags": ["#hashtag1", "#hashtag2", "..."],
    "topic": "Krátký hlavní titulok v češtině (max 8 slov) - téma příspěvku",
    "subheadline": "Podtitulek v češtině (max 12 slov)"
  },
  "instagram": {
    "text": "Kratší poutavý text pro Instagram (400-800 znaků, více emoji)",
    "hashtags": ["#hashtag1", "#hashtag2", "..."],
    "topic": "Krátký hlavní titulok v češtině (max 8 slov) - téma příspěvku",
    "subheadline": "Podtitulek v češtině (max 12 slov)"
  }
}`;
}

function buildUserPrompt(body: RequestBody): string {
  const typePrompts: Record<string, string> = {
    problem_solution: "Vytvoř příspěvek zaměřený na PROBLÉM → ŘEŠENÍ. Osloví lidi s pomalým internetem, výpadky, slabým signálem. Ukaž že my jsme řešení. Topic by měl být otázka nebo problém.",
    why_free: "Vytvoř příspěvek vysvětlující PROČ JE TO ZDARMA. Zdůrazni že porovnání a pomoc je 100% bezplatná, bez háčků. Topic by měl zdůraznit 'ZDARMA'.",
    review: "Vytvoř příspěvek s RECENZÍ ZÁKAZNÍKA. Vymysli realistický příběh spokojeného zákazníka který ušetřil nebo dostal lepší internet. Topic může být citát nebo výsledek.",
    tip: "Vytvoř EDUKAČNÍ příspěvek s tipem. Praktická rada o WiFi, bezpečnosti internetu, rychlosti připojení. Topic by měl být 'Jak...' nebo tip.",
    regional: "Vytvoř REGIONÁLNÍ příspěvek pro daný region. Zdůrazni lokální dostupnost a pomoc. Topic by měl obsahovat název regionu.",
    custom: `Vytvoř příspěvek na zadané téma. Vytvoř vhodný topic a subheadline.`,
  };

  const customTopicContext = body.customTopic 
    ? `\n\nSPECIFICKÁ TÉMA OD UŽIVATELE: "${body.customTopic}"\nZahrň tuto tému do obsahu příspěvku.`
    : '';

  return `${typePrompts[body.postType]}${customTopicContext}

DŮLEŽITÉ:
- topic a subheadline MUSÍ být v ČEŠTINĚ (budou zobrazeny na obrázku)
- Texty na obrázku musí být krátké a čitelné
- Topic by měl být provokativní/zajímavý

Vytvoř obě verze (Facebook i Instagram) i když bude použita jen jedna.
Odpověz POUZE validním JSON objektem.`;
}

// Build final image prompt — senior prompt engineer level
function buildFinalImagePrompt(
  platform: string,
  scene: string,
  topic: string,
  subheadline: string,
  visualStyle: string,
  includeCta: boolean
): Record<string, string | null> {
  const isSquare = platform === "instagram";
  const dimensions = isSquare ? "1080x1080" : "1200x630";
  const aspect = isSquare ? "1:1 square" : "1.91:1 landscape";
  const branding = brandingStyles[visualStyle] || brandingStyles.teal_editorial;
  
  const ctaText = includeCta ? "Více informací →" : null;

  // Typography placement differs by platform
  const typographyPosition = isSquare
    ? `Position text in the bottom third of the frame, centered horizontally. Stack vertically: headline → subtitle → CTA.`
    : `Position text in the right third of the frame over designated negative space. Left-align. Stack vertically: headline → subtitle → CTA.`;

  const fullPrompt = `Generate a single photorealistic social media advertisement image.
Format: ${aspect}, ${dimensions}px.

═══ PHOTOGRAPHIC SCENE ═══
${scene}

${branding}

═══ TEXT OVERLAY ═══
Render as professional typographic overlay ON the photograph:

HEADLINE (large, bold): "${topic}"
SUBTITLE (smaller, lighter): "${subheadline}"
${ctaText ? `CTA BADGE (teal #2EB698 pill): "${ctaText}"` : ""}

TYPOGRAPHY:
- Font: Clean geometric sans-serif (Montserrat Bold headline, Inter Regular subtitle).
- Headline: ~40-60pt, tight tracking (-20).
- Subtitle: ~20-30pt, sentence case.
- Color: white #FFFFFF, subtle drop shadow (2px, 30% opacity).
- READABILITY: Dark-to-transparent gradient behind text area (rgba(0,0,0,0.7) → transparent). Must feel organic, not a box.
- ${typographyPosition}

═══ QUALITY RULES ═══
CZECH LANGUAGE (CRITICAL):
- ALL text must be CZECH (čeština). Never English or Slovak.
- Correct diacritics: č ř ž š ď ť ň ě ú ů á é í ó ý
- "Jak" not "Ako", "Proč" not "Prečo", "Připojení" not "Pripojenie"
- DO NOT render structural labels (HEADLINE, SUBTITLE) — only content text.

ANATOMY (if people present):
- Hands: exactly 5 fingers each. Face: bilateral symmetry.
- Skin: realistic pores, natural color. No waxy/plastic look.

IMAGE INTEGRITY:
- Zero artifacts, extra limbs, distorted objects.
- No watermarks, stock badges, lorem ipsum, URL text.
- Indistinguishable from professionally shot advertisement.`;

  return {
    headline: topic,
    subheadline: subheadline,
    ctaButton: ctaText,
    scene: scene,
    style: branding,
    fullPrompt,
  };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const body: RequestBody = await req.json();

    // Determine topic for scene generation
    const topicForScene = body.customTopic || 
      (body.postType === "regional" ? `Internet v ${regionNames[body.region] || "České republice"}` : 
       body.postType === "tip" ? "WiFi optimalizace a tipy" :
       body.postType === "problem_solution" ? "Řešení problémů s internetem" :
       body.postType === "why_free" ? "Bezplatné porovnání internetu" :
       body.postType === "review" ? "Spokojený zákazník" :
       "Internet pro domácnost");

    // STEP 1: Generate unique scene description using AI (with thematic fallbacks)
    console.log("Generating scene for topic:", topicForScene, "thematic key:", getThematicKey(body.postType, body.region, body.customTopic));
    const uniqueScene = await generateSceneDescription(
      topicForScene,
      body.postType,
      body.visualStyle,
      body.includePerson,
      body.region,
      body.customTopic,
      LOVABLE_API_KEY
    );
    console.log("Generated scene:", uniqueScene);

    // STEP 2: Generate text content
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: buildSystemPrompt(body) },
          { role: "user", content: buildUserPrompt(body) },
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required. Please add credits to your workspace." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No content in response");
    }

    // Parse JSON from response
    let jsonContent = content;
    if (content.includes("```json")) {
      jsonContent = content.replace(/```json\n?/g, "").replace(/```\n?/g, "");
    } else if (content.includes("```")) {
      jsonContent = content.replace(/```\n?/g, "");
    }

    const parsed = JSON.parse(jsonContent.trim());

    // STEP 3: Build final image prompts with AI-generated scene + branding
    const result = {
      facebook: {
        text: parsed.facebook?.text || "",
        hashtags: parsed.facebook?.hashtags || [],
        imagePromptEN: buildFinalImagePrompt(
          "facebook",
          uniqueScene,
          parsed.facebook?.topic || topicForScene,
          parsed.facebook?.subheadline || "",
          body.visualStyle,
          body.includeCta
        ),
      },
      instagram: {
        text: parsed.instagram?.text || "",
        hashtags: parsed.instagram?.hashtags || [],
        imagePromptEN: buildFinalImagePrompt(
          "instagram",
          uniqueScene,
          parsed.instagram?.topic || topicForScene,
          parsed.instagram?.subheadline || "",
          body.visualStyle,
          body.includeCta
        ),
      },
    };

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
