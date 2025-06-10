# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# AirBean - Coffee Ordering App

AirBean är en webbapp där du kan beställa kaffe och få den levererad via drönare (drönare ingår ej i uppgiften).

## Figmaskiss

Du kan se designen för AirBean här: [Figma Skiss](https://www.figma.com/file/UeUGVefSdgio0sRxPFccJI/AirBean-v.1.0?node-id=0%3A1).

## API-dokumentation

Den officiella API-dokumentationen hittar du här:

-   [API-2 Docs](https://airbean-9pcyw.ondigitalocean.app/api/docs/)

**Tidigare länkar som inte fungerar**:

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
