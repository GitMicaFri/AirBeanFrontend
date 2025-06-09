# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

AirBean
Du ska bygga en webbapp där du kan beställa kaffe och få den levererad via drönare (drönare ingår ej i uppgiften).

Figmaskiss: https://www.figma.com/file/UeUGVefSdgio0sRxPFccJI/AirBean-v.1.0?node-id=0%3A1

ORIGINALLÄNK, FUNGERAR INTE: APIDOCS: https://airbean-api-xjlcn.ondigitalocean.app/api/docs/
ORIGINALLÄNK, FUNGERAR INTE: API: https://airbean-api-xjlcn.ondigitalocean.app/

NY KORREKT LÄNK: API-2: https://airbean-9pcyw.ondigitalocean.app/api/docs/

Instruktioner
Kravspecifikation
För att få Godkänt ska ni:

Gjort enligt Figma skissen
Är en single page application (SPA) med react-router-dom
Använder sig av Zustand som global state
Gå att lägga till produkter i en varukorg
I varukorgen ändra antal/ta bort produkter
Kunna skicka sin order och få ett svar med en ETA och ordernummer
För att Väl Godkänt ska ni:

Hämta alla produkter med fetch
Integrera API:et med SPAn
Lägga till en profilsida där du kan skapa konto/logga in (enbart namn och email)
Om man gör en beställning när man är inloggad ska ordern kopplas till den inloggade användaren
Det ska även finnas en orderhistorik-sida där den inloggade användarens ordrar listas
För att få stilpoäng ska ni:

Göra applikationen säkrare genom att lägga till lösenord på användaren
Authentication ska ske med hjälp av JWT
