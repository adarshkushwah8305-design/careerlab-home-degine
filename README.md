# Career Lab Consulting — React App

The careerlabconsulting.com site rebuilt as a React app (Vite + JSX + React Router + Tailwind CSS).
All content and images come from the HTTrack mirror in the parent folder.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview
```

## Structure

```
src/
  App.jsx                  all routes
  data/                    content (navigation, offices, home sections, case studies)
  hooks/useCountUp.js      animated counters
  utils/color.js           accent-colour helpers
  components/
    layout/                Layout, Navbar, MegaMenu, MobileMenu, Footer, OfficeCard, MobileBottomNav
    ui/                    Button, Badge, SectionHeading, FeatureCard, MiniFeature, StatCard,
                           TerminalWindow, CheckList, Accordion, SocialIcon
    sections/              PageHero, FeatureGrid, SplitSection, CTASection, Legal (policy blocks)
    home/                  one component per home-page section
  pages/                   one component per page (+ legal/)
public/images/             images copied from the mirror
```

To change text, edit the files in `src/data/` or the arrays at the top of each page.
Each product page sets its own `ACCENT` colour and passes it to the shared sections.
