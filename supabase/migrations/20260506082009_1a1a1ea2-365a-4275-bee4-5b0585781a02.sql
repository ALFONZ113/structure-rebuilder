
-- updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- blog_posts
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  meta_description TEXT NOT NULL,
  hero_image TEXT NOT NULL,
  content JSONB NOT NULL,
  keywords TEXT[] NOT NULL DEFAULT '{}',
  author TEXT NOT NULL DEFAULT 'Redakce Nejvýhodnější Připojení',
  category TEXT NOT NULL DEFAULT 'Průvodce',
  read_time TEXT NOT NULL DEFAULT '5 min čtení',
  publish_date DATE NOT NULL DEFAULT CURRENT_DATE,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Blog posts are viewable by everyone" ON public.blog_posts FOR SELECT USING (published = true);
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON public.blog_posts(published, publish_date DESC);
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- leads
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  city TEXT NOT NULL,
  street TEXT NOT NULL,
  current_provider TEXT,
  monthly_payment TEXT,
  services TEXT[] NOT NULL DEFAULT '{}',
  additional_requirements TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous insert leads" ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);

-- contact_messages
CREATE TABLE public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous insert contact" ON public.contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE INDEX idx_contact_messages_created_at ON public.contact_messages(created_at DESC);

-- roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$ SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role) $$;
CREATE POLICY "Users view own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Admins manage roles" ON public.user_roles FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- social_posts
CREATE TABLE public.social_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    post_type TEXT NOT NULL CHECK (post_type IN ('problem_solution', 'why_free', 'review', 'tip', 'regional', 'custom')),
    platform TEXT NOT NULL CHECK (platform IN ('facebook', 'instagram', 'both')),
    visual_style TEXT NOT NULL CHECK (visual_style IN ('teal_editorial', 'speed_tech', 'home_comfort', 'business_pro', 'regional_czech', 'clean_minimal')),
    include_person BOOLEAN DEFAULT false,
    include_cta BOOLEAN DEFAULT true,
    region TEXT DEFAULT 'cela_cr',
    custom_topic TEXT,
    facebook_text TEXT,
    facebook_hashtags TEXT[],
    facebook_image_prompt TEXT,
    facebook_image_url TEXT,
    instagram_text TEXT,
    instagram_hashtags TEXT[],
    instagram_image_prompt TEXT,
    instagram_image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE public.social_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users view own posts" ON public.social_posts FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Users create own posts" ON public.social_posts FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users update own posts" ON public.social_posts FOR UPDATE TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Users delete own posts" ON public.social_posts FOR DELETE TO authenticated USING (user_id = auth.uid());

-- storage bucket
INSERT INTO storage.buckets (id, name, public) VALUES ('social-images', 'social-images', true);
CREATE POLICY "Anyone view social images" ON storage.objects FOR SELECT USING (bucket_id = 'social-images');
CREATE POLICY "Auth upload social images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'social-images' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Auth update social images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'social-images' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Auth delete social images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'social-images' AND auth.uid()::text = (storage.foldername(name))[1]);
