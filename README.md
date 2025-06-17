## AirBean - Teknisk dokumentation

# Teknikstack

React (v18+)

Vite (snabbare build & dev-server)

Zustand (global state-management för varukorg och orderstatus)

React Router DOM (routing — HashRouter används för deployment på GitHub Pages)

Git & GitHub (versionshantering, branch-workflow och merge)

GitHub Pages (deployment av färdigbyggd app via gh-pages branch)

JavaScript (ES6+)

# Funktionalitet

Single Page Application (SPA) enligt kravspecifikation.

Dynamisk meny hämtas via API med fetch().

Användare kan lägga till produkter i varukorg.

Öka, minska och ta bort produkter från varukorgen.

Orderstatus-sida som visar bekräftelse.

About-sida med företagspresentation och bild.

Overlay för varukorgen implementerad med Zustand och komponent-styrning.

# Deployment

Appen är deployad via vite build och gh-pages till GitHub Pages.

# Live-version:

https://gitmicafri.github.io/AirBeanFrontend/

Routing fungerar med HashRouter för att fungera korrekt på GitHub Pages (pga statisk hosting).

# Utvecklingsprocess

Projektet är utvecklat i egen branch-struktur:

Feature-branch (Fix-css)

Merge:ad via GitHub Pull Requests till main

Deployment sker manuellt efter varje stabil version via:
bash
npm run deploy

# API

API-dokumentation använd:
https://airbean-9pcyw.ondigitalocean.app/api/beans/

Orderdata skickas till API vid beställning.

# AirBean - Coffee Ordering App

AirBean är en webbapp där du kan beställa kaffe och få den levererad via drönare (drönare ingår ej i uppgiften).

## Figmaskiss

Du kan se designen för AirBean här: [Figma Skiss](https://www.figma.com/file/UeUGVefSdgio0sRxPFccJI/AirBean-v.1.0?node-id=0%3A1).

## API-dokumentation

Den officiella API-dokumentationen hittar man här:

-   [API-2 Docs](https://airbean-9pcyw.ondigitalocean.app/api/docs/)

**Tidigare länkar till uppgiften, som inte fungerar**:

-   [Gamla API-dokumentationen](https://airbean-api-xjlcn.ondigitalocean.app/api/docs/)
-   [Gamla API-länken](https://airbean-api-xjlcn.ondigitalocean.app/)

## Instruktioner

### Kravspecifikation

För att få **Godkänt** ska du:

-   Bygga enligt Figma-skissen
-   Göra en Single Page Application (SPA) med `react-router-dom`
-   Använda Zustand som global state
-   Kunna lägga till produkter i en varukorg
-   I varukorgen ska användaren kunna ändra antal och ta bort produkter
-   Kunna skicka sin order och få ett svar med ETA och ordernummer

### För att få **Väl Godkänt**:

-   Hämta alla produkter med `fetch`
-   Integrera API:et med SPA
-   Lägga till en profilsida där du kan skapa konto/logga in (endast namn och email)
-   Om användaren är inloggad ska ordern kopplas till den inloggade användaren
-   Skapa en orderhistorik-sida som visar den inloggade användarens ordrar

### För att få **Stilpoäng**:

-   Gör applikationen säkrare genom att lägga till lösenord för användaren
-   Authentication ska ske med hjälp av JWT

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
