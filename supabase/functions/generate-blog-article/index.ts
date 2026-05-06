import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting blog article generation...');
    
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Topics for Czech internet/telecom articles
    const topics = [
      'Jak vybrat nejlepšího internetového poskytovatele v roce 2025',
      'Srovnání mobilních operátorů v České republice',
      '5G vs optický internet: Co je lepší volba?',
      'Jak ušetřit na internetu a televizi',
      'Tipy pro lepší Wi-Fi signál v domácnosti',
      'Nejčastější problémy s internetem a jak je řešit',
      'Smart home a rychlý internet: Co potřebujete vědět',
      'Streamování 4K: Jakou rychlost internetu potřebujete?',
      'Kybernetická bezpečnost pro domácí uživatele',
      'Budoucnost internetového připojení v ČR'
    ];

    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    
    console.log(`Generating article about: ${randomTopic}`);

    // Generate article content with AI
    const articlePrompt = `Napiš podrobný, SEO optimalizovaný článek v češtině na téma: "${randomTopic}"

Požadavky:
- Délka: 800-1200 slov
- Formát: JSON s následující strukturou
- Zaměř se na český trh a české poskytovatele (PODA, O2, T-Mobile, Vodafone)
- Praktické rady a tipy
- Aktuální informace pro rok 2025

Vrať JSON v tomto formátu:
{
  "title": "Catchy nadpis max 60 znaků",
  "metaDescription": "Meta popis 150-160 znaků",
  "keywords": ["klíčové", "slovo", "min 5"],
  "sections": [
    {
      "heading": "Nadpis sekce",
      "content": "Obsah sekce v markdown formátu"
    }
  ]
}`;

    const textResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: 'Jsi expert na internet a telekomunikace v České republice. Píšeš SEO optimalizované články.' },
          { role: 'user', content: articlePrompt }
        ],
      }),
    });

    if (!textResponse.ok) {
      console.error('AI text generation failed:', await textResponse.text());
      throw new Error('Failed to generate article text');
    }

    const textData = await textResponse.json();
    
    let articleContent;
    try {
      const rawContent = textData.choices[0].message.content;
      // Remove markdown code blocks if present
      const cleanedContent = rawContent.replace(/```json\n?|\n?```/g, '').trim();
      articleContent = JSON.parse(cleanedContent);
    } catch (parseError) {
      console.error('Failed to parse article content:', parseError);
      throw new Error('Failed to parse generated article content');
    }
    
    console.log('Article content generated:', articleContent.title);

    // Generate hero image with AI
    const imagePrompt = `Professional hero image for article about "${randomTopic}". Modern, clean design. Technology, internet, telecommunications theme. 16:9 aspect ratio. Ultra high resolution.`;
    
    console.log('Generating hero image...');
    
    const imageResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash-image-preview',
        messages: [
          { role: 'user', content: imagePrompt }
        ],
        modalities: ['image', 'text']
      }),
    });

    if (!imageResponse.ok) {
      console.error('AI image generation failed:', await imageResponse.text());
      throw new Error('Failed to generate hero image');
    }

    const imageData = await imageResponse.json();
    const heroImageUrl = imageData.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!heroImageUrl) {
      throw new Error('No image URL in response');
    }

    console.log('Hero image generated successfully');

    // Create slug from title
    const slug = articleContent.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Insert into database
    const { data, error } = await supabase
      .from('blog_posts')
      .insert({
        title: articleContent.title,
        slug: `${slug}-${Date.now()}`,
        meta_description: articleContent.metaDescription,
        hero_image: heroImageUrl,
        content: articleContent.sections,
        keywords: articleContent.keywords,
        category: 'Průvodce',
        read_time: '5 min čtení',
        published: true
      })
      .select()
      .single();

    if (error) {
      console.error('Database insert error:', error);
      throw error;
    }

    console.log('Article saved to database:', data.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        article: {
          id: data.id,
          title: data.title,
          slug: data.slug
        }
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error generating article:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});