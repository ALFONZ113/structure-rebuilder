
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';

const BlogSEOArticles = () => {
  const articles = [
    { title: "Jak vybrat nejlepší internet v Ostravě 2025", excerpt: "Kompletní průvodce výběrem internetového připojení v Ostravě. Porovnání PODA, O2, Vodafone a dalších poskytovatelů.", slug: "/blog/jak-vybrat-internet-ostrava-2025", category: "Průvodce", readTime: "8 min", keywords: ["internet Ostrava", "PODA Ostrava", "výběr internetu"] },
    { title: "PODA vs O2 vs Vodafone - Který je nejlepší v Moravskoslezském kraji?", excerpt: "Detailní srovnání tří největších poskytovatelů internetu v regionu. Ceny, rychlosti a pokrytí v roce 2025.", slug: "/blog/poda-vs-o2-vs-vodafone-2025", category: "Srovnání", readTime: "12 min", keywords: ["PODA vs O2", "Vodafone srovnání", "Moravskoslezský kraj"] },
    { title: "Nejlevnější internet v Karviné - Kde ušetřit v roce 2025", excerpt: "Tipy jak najít nejlevnější internetové připojení v Karviné. Aktuální ceny a akce všech poskytovatelů.", slug: "/blog/nejlevnejsi-internet-karvina-2025", category: "Tipy", readTime: "6 min", keywords: ["levný internet Karviná", "internetové akce", "ušetřit na internetu"] },
    { title: "Optické připojení vs VDSL - Co je lepší pro váš domov?", excerpt: "Vysvětlujeme rozdíly mezi optickými a VDSL připojeními. Která technologie je vhodnější pro vaše potřeby?", slug: "/blog/optika-vs-vdsl-2025", category: "Technologie", readTime: "10 min", keywords: ["optické připojení", "VDSL internet", "technologie internetu"] },
    { title: "Gigabitový internet - Kdo ho potřebuje a kolik stojí?", excerpt: "Vše o gigabitovém internetu v ČR. Pro koho se hodí rychlosti nad 1 Gb/s a kde je dostupný.", slug: "/blog/gigabitovy-internet-2025", category: "Rychlosti", readTime: "7 min", keywords: ["gigabitový internet", "rychlý internet", "1 Gb/s internet"] },
    { title: "Změna poskytovatele internetu - Postup krok za krokem", excerpt: "Jak rychle a bez problémů změnit poskytovatele internetu. Praktické tipy a právní informace.", slug: "/blog/zmena-poskytovatele-internetu-2025", category: "Návody", readTime: "9 min", keywords: ["změna poskytovatele", "přenos čísla", "výpovědní lhůta"] }
  ];

  return (
    <section className="section-editorial bg-surface">
      <div className="container-editorial">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">📚 Průvodce internetem 2025</h2>
            <p className="text-body-lg max-w-3xl mx-auto">
              Nejnovější články o internetu, poskytovatelích a technologiích. 
              Pomůžeme vám vybrat to nejlepší připojení pro váš domov.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="p-6 h-full flex flex-col hover:border-primary/30 transition-all duration-300 rounded-none">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10">
                    {article.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                  <Link 
                    to={article.slug}
                    className="text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.keywords.slice(0, 3).map((keyword, keyIndex) => (
                    <span 
                      key={keyIndex}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={article.slug}
                  className="text-primary font-medium hover:text-primary/80 transition-colors duration-200"
                >
                  Číst článek →
                </Link>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link 
            to="/blog"
            className="btn-primary"
          >
            Zobrazit všechny články
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogSEOArticles;
