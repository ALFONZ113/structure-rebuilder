
import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { Link } from 'react-router-dom';

const RegionalContent = React.memo(() => {
  const regionalData = [
    { region: "Ostrava", population: "290 tis. obyvatel", bestProvider: "PODA", maxSpeed: "2 Gb/s", avgPrice: "340 Kč", coverage: "95%", specialNote: "Nejrychlejší optické připojení v ČR", link: "/internet-ostrava", areas: ["Poruba", "Vítkovice", "Hrabůvka", "Kunčice"] },
    { region: "Karviná", population: "55 tis. obyvatel", bestProvider: "PODA", maxSpeed: "1 Gb/s", avgPrice: "390 Kč", coverage: "85%", specialNote: "Výborné pokrytí centra města", link: "/internet-karvina", areas: ["Fryštát", "Ráj", "Nové Město"] },
    { region: "Havířov", population: "70 tis. obyvatel", bestProvider: "PODA", maxSpeed: "1 Gb/s", avgPrice: "390 Kč", coverage: "80%", specialNote: "Rychlé optické připojení", link: "/internet-havirov", areas: ["Město", "Šumbark", "Prostřední Suchá"] },
    { region: "Bohumín", population: "21 tis. obyvatel", bestProvider: "O2", maxSpeed: "500 Mb/s", avgPrice: "399 Kč", coverage: "75%", specialNote: "Nejlepší pokrytí O2", link: "/internet-bohumin", areas: ["Starý Bohumín", "Nový Bohumín"] },
    { region: "Praha", population: "1.3 mil. obyvatel", bestProvider: "O2", maxSpeed: "1 Gb/s", avgPrice: "499 Kč", coverage: "99%", specialNote: "Nejlepší poskytovatel O2, v některých částech PODA", link: "/nejlepsi-internet-praha-2025", areas: ["Praha 1", "Praha 2", "Praha 3", "Praha 4", "Praha 5"] },
    { region: "Brno", population: "380 tis. obyvatel", bestProvider: "PODA", maxSpeed: "2 Gb/s", avgPrice: "300 Kč", coverage: "85%", specialNote: "Nejrychlejší připojení v ČR", link: "/blog", areas: ["Brno-střed", "Brno-sever", "Brno-jih"] },
    { region: "Liberec", population: "103 tis. obyvatel", bestProvider: "O2", maxSpeed: "1 Gb/s", avgPrice: "449 Kč", coverage: "90%", specialNote: "Kvalitní pokrytí v horských oblastech", link: "/blog", areas: ["Liberec I", "Liberec II", "Liberec III", "Vratislavice"] },
    { region: "Plzeň", population: "170 tis. obyvatel", bestProvider: "T-Mobile", maxSpeed: "1 Gb/s", avgPrice: "479 Kč", coverage: "92%", specialNote: "Výborné pokrytí průmyslových zón", link: "/blog", areas: ["Plzeň 1", "Plzeň 2", "Plzeň 3", "Doubravka"] },
    { region: "České Budějovice", population: "93 tis. obyvatel", bestProvider: "O2", maxSpeed: "1 Gb/s", avgPrice: "429 Kč", coverage: "85%", specialNote: "Spolehlivé připojení v jižních Čechách", link: "/blog", areas: ["České Budějovice 1", "České Budějovice 2", "Rožnov"] },
    { region: "Hradec Králové", population: "92 tis. obyvatel", bestProvider: "T-Mobile", maxSpeed: "1 Gb/s", avgPrice: "459 Kč", coverage: "88%", specialNote: "Moderní infrastruktura ve východních Čechách", link: "/blog", areas: ["Hradec Králové", "Slezské Předměstí", "Pražské Předměstí"] },
    { region: "Pardubice", population: "91 tis. obyvatel", bestProvider: "O2", maxSpeed: "1 Gb/s", avgPrice: "439 Kč", coverage: "87%", specialNote: "Stabilní pokrytí v dopravním uzlu", link: "/blog", areas: ["Pardubice I", "Pardubice II", "Zelené Předměstí"] },
    { region: "Ústí nad Labem", population: "93 tis. obyvatel", bestProvider: "T-Mobile", maxSpeed: "1 Gb/s", avgPrice: "449 Kč", coverage: "83%", specialNote: "Kvalitní pokrytí v severních Čechách", link: "/blog", areas: ["Ústí nad Labem-město", "Střekov", "Bukov"] },
    { region: "Zlín", population: "75 tis. obyvatel", bestProvider: "O2", maxSpeed: "1 Gb/s", avgPrice: "419 Kč", coverage: "86%", specialNote: "Moderní připojení v Baťově městě", link: "/blog", areas: ["Zlín-centrum", "Malenovice", "Štípa"] },
    { region: "Olomouc", population: "100 tis. obyvatel", bestProvider: "PODA", maxSpeed: "1 Gb/s", avgPrice: "359 Kč", coverage: "82%", specialNote: "Rychlé optické připojení v centru Moravy", link: "/blog", areas: ["Olomouc-město", "Hodolany", "Černovír"] },
    { region: "Opava", population: "56 tis. obyvatel", bestProvider: "PODA", maxSpeed: "1 Gb/s", avgPrice: "369 Kč", coverage: "78%", specialNote: "Rychlé připojení na Moravskoslezsku", link: "/blog", areas: ["Opava-Východ", "Opava-Západ", "Kateřinky"] },
    { region: "Frýdek-Místek", population: "56 tis. obyvatel", bestProvider: "PODA", maxSpeed: "1 Gb/s", avgPrice: "379 Kč", coverage: "80%", specialNote: "Optické připojení v podhůří Beskyd", link: "/blog", areas: ["Frýdek", "Místek", "Chlebovice"] },
    { region: "Kladno", population: "68 tis. obyvatel", bestProvider: "O2", maxSpeed: "1 Gb/s", avgPrice: "469 Kč", coverage: "89%", specialNote: "Kvalitní pokrytí ve středních Čechách", link: "/blog", areas: ["Kladno-střed", "Švermov", "Rozdělov"] }
  ];

  return (
    <section className="section-editorial bg-background">
      <div className="container-editorial">
        <ScrollReveal>
          <h2 className="heading-lg mb-3">🏘️ Internet podle regionů v ČR</h2>
          <p className="text-body-lg mb-8">
            Najdeme nejlepší internetové připojení ve vašem městě. 
            Aktuální ceny, rychlosti a pokrytí všech poskytovatelů.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regionalData.map((region, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-card border border-border p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-foreground">{region.region}</h3>
                  <span className="text-sm text-muted-foreground">{region.population}</span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nejlepší poskytovatel:</span>
                    <span className="font-medium text-primary">{region.bestProvider}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Max. rychlost:</span>
                    <span className="font-medium text-foreground">{region.maxSpeed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Od:</span>
                    <span className="font-medium text-primary">{region.avgPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pokrytí:</span>
                    <span className="font-medium text-foreground">{region.coverage}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Pokryté oblasti:</h4>
                  <div className="flex flex-wrap gap-1">
                    {region.areas.map((area, areaIndex) => (
                      <span 
                        key={areaIndex}
                        className="text-xs px-2 py-1 bg-secondary text-secondary-foreground"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-3 border-t border-border">
                  <p className="text-sm text-primary font-medium mb-3">{region.specialNote}</p>
                  <Link 
                    to={region.link}
                    className="btn-primary w-full text-center"
                  >
                    Zobrazit nabídky v {region.region}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <div className="bg-primary/5 border border-primary/20 p-6">
            <h3 className="text-lg font-semibold mb-2 text-foreground">Nenašli jste své město?</h3>
            <p className="text-muted-foreground mb-4">
              Pokrýváme celou Českou republiku. Kontaktujte nás pro individuální konzultaci.
            </p>
            <a 
              href="#lead-form" 
              className="btn-primary"
            >
              Najít internet pro mou adresu
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
});

RegionalContent.displayName = 'RegionalContent';
export default RegionalContent;
