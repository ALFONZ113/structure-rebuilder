import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ImagePromptStructured {
  headline: string;
  subheadline: string;
  ctaButton?: string | null;
  scene: string;
  style: string;
  fullPrompt?: string;
  mood?: string;
}

interface RequestBody {
  imagePrompt: string | ImagePromptStructured;
  platform: "facebook" | "instagram";
  userId: string;
}

function buildImageGenerationPrompt(
  promptData: string | ImagePromptStructured,
  platform: "facebook" | "instagram"
): string {
  const dimensions = platform === "instagram" 
    ? { width: 1080, height: 1080, aspect: "1:1 square" } 
    : { width: 1200, height: 630, aspect: "1.91:1 landscape" };

  // Simple string (legacy)
  if (typeof promptData === "string") {
    return `Generate a single photorealistic social media advertisement image.
Format: ${dimensions.aspect}, ${dimensions.width}x${dimensions.height}px.

SCENE: ${promptData}

VISUAL DIRECTION: Premium editorial photography, dark sophisticated aesthetic.
COLOR PALETTE: Rich black #0A0A0A, brand teal #2EB698 accent, warm gold #D4A517 highlights.
LIGHTING: Dramatic 45° key light, soft teal fill, cinematic mood.
CAMERA: 85mm f/1.8, shallow DOF, 8K resolution, subtle film grain.

CZECH LANGUAGE: All visible text must be in Czech (čeština). Correct diacritics: č ř ž š ě ú ů á é í ó ý.
DO NOT render structural labels — only content text.
QUALITY: Photorealistic, zero artifacts, no watermarks. Indistinguishable from professional advertisement.`;
  }

  // Pre-built prompt from social-content-generator — use directly
  if (promptData.fullPrompt) {
    return promptData.fullPrompt;
  }

  // Legacy structured fallback
  const { headline, subheadline, ctaButton, scene, style } = promptData;

  const typographyPosition = platform === "instagram"
    ? "Position text centered in the bottom third."
    : "Position text left-aligned in the right third over negative space.";

  return `Generate a single photorealistic social media advertisement image.
Format: ${dimensions.aspect}, ${dimensions.width}x${dimensions.height}px.

SCENE: ${scene}
${style}

TEXT OVERLAY:
HEADLINE (large, bold): "${headline}"
SUBTITLE (smaller, lighter): "${subheadline}"
${ctaButton ? `CTA BADGE (teal #2EB698 pill): "${ctaButton}"` : ""}

TYPOGRAPHY: Clean sans-serif. White #FFFFFF with subtle drop shadow. Dark gradient behind text for readability.
${typographyPosition}

CZECH LANGUAGE: ALL text CZECH (čeština). No Slovak, no English. Correct diacritics: č ř ž š ě ú ů.
DO NOT render structural labels — only content text.
QUALITY: Photorealistic, zero artifacts, no watermarks.`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!LOVABLE_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Missing required environment variables");
    }

    const body: RequestBody = await req.json();
    const { imagePrompt, platform, userId } = body;

    if (!imagePrompt || !platform || !userId) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const fullPrompt = buildImageGenerationPrompt(imagePrompt, platform);
    
    console.log("Generating image, prompt length:", fullPrompt.length);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-pro-image-preview",
        messages: [
          { role: "user", content: fullPrompt },
        ],
        modalities: ["image", "text"],
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
          JSON.stringify({ error: "Payment required. Please add credits." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("Failed to generate image");
    }

    const data = await response.json();
    const imageData = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!imageData) {
      console.error("No image in response:", JSON.stringify(data));
      throw new Error("No image in response");
    }

    const base64Data = imageData.replace(/^data:image\/\w+;base64,/, "");
    const imageBuffer = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    
    const fileName = `${userId}/${platform}-${Date.now()}.png`;
    
    const { error: uploadError } = await supabase.storage
      .from("social-images")
      .upload(fileName, imageBuffer, {
        contentType: "image/png",
        upsert: false,
      });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      throw new Error("Failed to upload image");
    }

    const { data: urlData } = supabase.storage
      .from("social-images")
      .getPublicUrl(fileName);

    return new Response(
      JSON.stringify({ imageUrl: urlData.publicUrl }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
