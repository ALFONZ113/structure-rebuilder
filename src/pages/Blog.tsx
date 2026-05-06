import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Bell } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Všechny články");

  const categories = [
    "Všechny články",
    "Průvodce",
    "Novinky",
    "Srovnání",
    "Tipy a triky",
    "Technologie",
    "Bezpečnost",
    "Televizní služby"
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('publish_date', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Static posts for backward compatibility
  const staticPosts = [
    {
      title: "Internet v Česku 2026: Rychlost, AI a konec 'hluchých míst'?",
      excerpt: "Rok 2026 přinese do Česka masivní rozšíření optiky, 100% 5G v městech a nové kybernetické hrozby. Zjistěte, zda bude váš internet konečně rychlejší a bezpečnější.",
      date: "6. ledna 2026",
      author: "Nejvýhodnější Připojení",
      image: "/src/assets/internet-cesko-2026-hero.jpg",
      slug: "/blog/internet-cesko-2026",
      category: "Novinky",
      readTime: "10 min čtení"
    },
    {
      title: "Jak vybrat nejlepší internetové připojení pro domácnost",
      excerpt: "Podrobný průvodce výběrem správného internetového připojení podle vašich potřeb, rozpočtu a dostupných technologií.",
      date: "20. dubna 2025",
      author: "Nejvýhodnější Připojení",
      image: "/src/assets/jak-vybrat-internet-hero.jpg",
      slug: "/blog/jak-vybrat-internet",
      category: "Průvodce",
      readTime: "8 min čtení"
    },
    {
      title: "Nejlepší internet na doma 2025",
      excerpt: "Kompletný sprievodca výberom najlepšieho internetu na doma v Česku. PODA od 250 Kč, O2, Vodafone porovnanie.",
      date: "10. července 2025",
      author: "Redakce",
      image: "/src/assets/nejlepsi-internet-doma-2025-hero.jpg",
      slug: "/blog/nejlepsi-internet-na-doma-2025",
      category: "Průvodce",
      readTime: "12 min čtení"
    },
    {
      title: "Optika vs 5G: Které připojení je lepší pro domácnost?",
      excerpt: "Detailní srovnání optického internetu a 5G připojení. Výhody, nevýhody a doporučení pro různé typy domácností.",
      date: "28. srpna 2025",
      author: "Nejvýhodnější Připojení",
      image: "/src/assets/optika-vs-5g-hero.jpg",
      slug: "/blog/optika-vs-5g",
      category: "Srovnání",
      readTime: "9 min čtení"
    },
    {
      title: "IPTV vs Kabelová TV: Co je lepší volba v roce 2025?",
      excerpt: "Kompletní srovnání IPTV a kabelové televize. Zjistěte, která technologie je vhodnější pro vaši domácnost.",
      date: "25. srpna 2025",
      author: "Nejvýhodnější Připojení",
      image: "/src/assets/iptv-vs-kabelova-tv-hero.jpg",
      slug: "/blog/iptv-vs-kabelova-tv",
      category: "Srovnání",
      readTime: "8 min čtení"
    },
    {
      title: "FWA Technologie: Budoucnost připojení v oblastech bez optiky",
      excerpt: "Objevte, jak Fixed Wireless Access revolucionalizuje internet v oblastech, kam se optika ještě nedostala.",
      date: "28. srpna 2025",
      author: "Nejvýhodnější Připojení",
      image: "/src/assets/fwa-technologie-hero.jpg",
      slug: "/blog/fwa-technologie-2025",
      category: "Technologie",
      readTime: "7 min čtení"
    },
    {
      title: "Jak ušetřit na internetu v roce 2025",
      excerpt: "Praktické tipy a triky, jak snížit náklady na internet bez ztráty kvality připojení. Ušetřete až 40% ročně.",
      date: "28. srpna 2025",
      author: "Nejvýhodnější Připojení",
      image: "/src/assets/jak-usetrit-internet-hero.jpg",
      slug: "/blog/jak-usetrit-na-internetu-2025",
      category: "Tipy a triky",
      readTime: "6 min čtení"
    },
    {
      title: "Nové technologie v internetu 2025 - Revoluce v připojení",
      excerpt: "Objevte nejnovější trendy v internetových technologiích. 5G, Wi-Fi 7, satelitní internet Starlink a další inovace.",
      date: "28. července 2025",
      author: "Technický tým",
      image: "/src/assets/plan-internetu-2025-hero.jpg",
      slug: "/blog/plan-internetu-2025",
      category: "Technologie",
      readTime: "6 min čtení"
    },
    {
      title: "Optické sítě v srpnu 2025 - Nové možnosti připojení",
      excerpt: "Přehled nejnovějších trendů v optických sítích. Rozšiřování FTTH, nové technologie a dostupnost optického internetu v ČR.",
      date: "31. července 2025",
      author: "Redakce",
      image: "/src/assets/opticke-site-2025-hero.jpg",
      slug: "/blog/opticke-site-srpen-2025",
      category: "Technologie",
      readTime: "3 min čtení"
    },
    {
      title: "Kybernetická bezpečnost domácích sítí 2025",
      excerpt: "Naučte se chránit svou domácí síť před kybernetickými hrozbami. Praktické tipy pro zabezpečení routeru a Wi-Fi.",
      date: "30. července 2025",
      author: "Bezpečnostní expert",
      image: "/src/assets/kyberneticka-bezpecnost-hero.jpg",
      slug: "/blog/kyberneticka-bezpecnost",
      category: "Bezpečnost",
      readTime: "7 min čtení"
    },
    {
      title: "Nejlepší internet v Moravskoslezském kraji 2025",
      excerpt: "Kompletní průvodce výběrem nejlepšího internetového připojení v Ostravě, Karviné, Havířově a okolí.",
      date: "8. ledna 2025",
      author: "Redakce",
      image: "/src/assets/moravskoslezsky-kraj-hero.jpg",
      slug: "/blog/moravskoslezsky-kraj",
      category: "Průvodce",
      readTime: "12 min čtení"
    },
    {
      title: "Najlepší poskytovatelia internetu v Česku 2025",
      excerpt: "Komplexný sprievodca najlepšími poskytovateľmi internetu. PODA od 250 Kč, Vodafone vs O2, T-Mobile porovnanie.",
      date: "10. července 2025",
      author: "Redakce",
      image: "/src/assets/najlepsie-poskytovatelia-hero.jpg",
      slug: "/blog/najlepsi-poskytovatelia-2025",
      category: "Srovnání",
      readTime: "15 min čtení"
    },
    {
      title: "Srovnání televizních služeb 2025: IPTV vs. kabelová TV",
      excerpt: "Podrobné srovnání moderních televizních služeb. Jakou volbu udělat pro nejlepší zážitek ze sledování?",
      date: "25. března 2025",
      author: "Lukáš Malý",
      image: "/src/assets/srovnani-tv-sluzeb-hero.jpg",
      slug: "/blog/srovnani-televiznich-sluzeb",
      category: "Televizní služby",
      readTime: "8 min čtení"
    },
    {
      title: "Nejlepší internet v Praze 2025",
      excerpt: "Kompletní průvodce výběrem nejlepšího internetového připojení v Praze a okolí.",
      date: "15. června 2025",
      author: "Redakce",
      image: "/src/assets/nejlepsi-internet-praha-hero.jpg",
      slug: "/blog/nejlepsi-internet-praha-2025",
      category: "Průvodce",
      readTime: "10 min čtení"
    }
  ];

  // Combine static and dynamic posts
  const allPosts = [...posts.map(p => ({
    title: p.title,
    excerpt: p.meta_description,
    date: new Date(p.publish_date).toLocaleDateString('cs-CZ'),
    author: p.author,
    image: p.hero_image,
    slug: `/blog/${p.slug}`,
    category: p.category,
    readTime: p.read_time
  })), ...staticPosts];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Všechny články" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageLayout>
      <ScrollReveal>
        <div className="container-editorial py-8 xs:py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center mb-8 xs:mb-12">
            <h1 className="heading-lg mb-3 xs:mb-4">Blog a Novinky</h1>
            <p className="text-body-lg">
              Aktuální informace, tipy a rady ze světa internetového připojení
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-8 xs:mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Hledat články..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4"
              />
            </div>
            <div className="flex justify-center mt-4">
              <Button variant="outline" className="gap-2 min-h-[44px]">
                <Bell className="h-4 w-4" />
                Odebírat novinky
              </Button>
            </div>
          </div>

          {/* Categories - Scrollable on mobile */}
          <div className="mb-8 xs:mb-12 -mx-4 xs:mx-0 px-4 xs:px-0">
            <div className="flex xs:flex-wrap xs:justify-center gap-2 overflow-x-auto pb-2 xs:pb-0 scrollbar-hide">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/10 transition-colors whitespace-nowrap flex-shrink-0 min-h-[36px] flex items-center"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {filteredPosts.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">Žádné články nenalezeny</p>
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <Skeleton className="h-48 w-full" />
                  <CardContent className="p-4 xs:p-6">
                    <Skeleton className="h-4 w-20 mb-2" />
                    <Skeleton className="h-6 w-full mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8">
              {filteredPosts.map((post, index) => (
                <Link key={index} to={post.slug} className="group">
                  <Card className="overflow-hidden hover:shadow-lg hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 xs:h-48 object-cover"
                    />
                    <CardContent className="p-4 xs:p-6">
                      <Badge variant="secondary" className="mb-2">
                        {post.category}
                      </Badge>
                      <h3 className="text-lg xs:text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3 text-sm xs:text-base">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs xs:text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </ScrollReveal>
    </PageLayout>
  );
};

export default Blog;