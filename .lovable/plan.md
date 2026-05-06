## Prečo dizajn nesedí

Zdrojový projekt (Vite + Tailwind v3) má kompletný dizajn systém v `src/index.css` — krémovo-zelená paleta inšpirovaná ArboristCare, font Fraunces (serif) + Inter, pill CTA tlačidlá, editorial sekcie atď. Definuje tokeny HSL (`--primary: 95 65% 45%` …) a komponentové triedy (`.btn-primary`, `.heading-display`, `.section-editorial`, `.container-editorial`, `.card-editorial`, `.text-gradient`…).

Tento nový projekt beží na **TanStack Start + Tailwind v4**. Pri migrácii sme síce skopírovali `src/index.css`, ale:

1. **Načítava sa iný CSS súbor.** `src/routes/__root.tsx` importuje `../styles.css?url` (default šablóny). Pôvodný `src/index.css` sa do buildu nikdy nedostane → tokeny ani komponentové triedy neexistujú a komponenty padajú na defaultnú oklch sivo-modrú paletu šablóny.
2. **Iná verzia Tailwindu.** `styles.css` používa Tailwind v4 syntax (`@theme inline`, `oklch`, `--color-*`). Pôvodný systém je písaný pre v3 (`@tailwind base`, `hsl(var(--primary))`, `@apply border-border`). Aj keby sme len importovali `index.css`, `@tailwind` direktívy a `@apply` HSL tokenov v Tailwind v4 nefungujú tak isto.
3. **Chýba font Fraunces** (preload Google Fonts) — preto headingy renderujú default sans namiesto editorial serif.

Výsledok: layout/komponenty sú tam, ale farby, typografia, spacing tokeny a všetky pomocné triedy (`heading-display`, `btn-primary`, `container-editorial`…) sú prázdne alebo majú inú hodnotu → vizuálne to vyzerá ako úplne iný web.

## Plán opravy

1. **Prepísať `src/styles.css` na ekvivalent pôvodného dizajn systému v Tailwind v4 syntaxi**
   - Zachovať `@import "tailwindcss"` + `@source` šablóny.
   - Pridať `@import` Google Fonts pre **Fraunces** + **Inter**.
   - V `@theme inline` namapovať farby z pôvodnej HSL palety (cream background, deep forest foreground, grass-green primary `oklch` ekvivalenty) tak, aby `bg-background`, `text-primary`, `border-border` atď. dávali rovnaký výsledok ako v zdroji.
   - Definovať aj light a dark variant (`.dark { … }`) s rovnakými hodnotami ako pôvodne.
   - Nastaviť `--radius: 1.25rem`, `--font-sans: Inter`, `--font-display: Fraunces`.

2. **Preniesť všetky pomocné/komponentové triedy** z pôvodného `src/index.css` do `src/styles.css`:
   - Typografia: `.heading-display(-light)`, `.heading-xl/lg/md/sm`, `.heading-page`, `.heading-hero(-light)`, `.text-body(-lg)`, `.text-label`, `.text-premium`, `.text-gradient`, `.font-display`, `.font-mono`.
   - Tlačidlá: `.btn-primary/secondary/text`, `.button-primary/outline/ghost`, `.section-label`.
   - Layout: `.section-editorial`, `.container-editorial`, `.section`, `.section-container`, `.container-premium`.
   - Karty/efekty: `.card-editorial`, `.card-fluid`, `.glass-card`, `.shadow-glow`, `.divider`, `.link-underline`, `.reveal-up`, `.bg-surface`, `.bg-grid`, `.step-circle`.
   - Animácie: `fade-in-up`, `progress-bar`, `glow-pulse`, scrollbar a ::selection štýly.
   - Prepísať `@apply border-border` a podobné v3-only patterny tak, aby fungovali v Tailwind v4 (väčšinou stačí ponechať, prípadne nahradiť `border-color: var(--color-border)`).

3. **Načítať aj zvyšné kúsky z `src/index.css` (riadky 500–505)** — overiť konce súboru a doplniť čokoľvek, čo som ešte nevidel (.glow-line atď.).

4. **Vyradiť alebo presmerovať `src/index.css`**, aby tu nebola duplicita. Buď ho zmazať, alebo nechať len ako alias `@import "./styles.css";`.

5. **Verifikácia v preview**
   - Otvoriť `/` v sandboxe a vizuálne porovnať s referenčným remixom (rovnaké farby pozadia, zelené pill CTA, serif headingy, spacing).
   - Skontrolovať konzolu na chýbajúce CSS triedy alebo varovania Tailwind v4.

## Mimo rozsahu (nemením)
- React komponenty (`Hero`, `LeadForm`, `Navigation`, …) — tie sú už migrované 1:1 zo zdroja a budú vyzerať správne, akonáhle dostanú správne tokeny a fonty.
- Backend, edge funkcie, routovanie SPA cez `App.tsx`.

Po schválení prepíšem `src/styles.css`, vyčistím `src/index.css` a overím vizuál v preview.