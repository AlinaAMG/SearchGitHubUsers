# 🧑‍💻 GitHub User Insight Dashboard

![React-ApolloClientApp](https://github.com/AlinaAMG/SearchGitHubUsers/blob/master/public/dashboard.png)

Dit is een compacte, moderne webapplicatie voor het zoeken en analyseren van GitHub-gebruikersprofielen. De applicatie maakt gebruik van de krachtige GitHub GraphQL API om real-time gebruikersstatistieken op te halen en te visualiseren via interactieve datavisualisaties (charts).

## 🚀 Technologieën

Dit project is gebouwd met een moderne stack, gericht op snelheid, typeveiligheid en een uitstekende gebruikerservaring.


| Categorie | Technologie | Rol |
| :--- | :--- | :--- |
| Frontend | React (Vite) | Snelle, lichte development omgeving en component-gebaseerde UI. |
| Taal | TypeScript | Zorgt voor typeveiligheid en betere onderhoudbaarheid van de code. |
| Data Fetching | Apollo Client | Efficiënte interactie met de GitHub GraphQL API. |
| Styling & Componenten | Tailwind CSS / shadcn/ui | Utility-first CSS framework voor snelle styling, aangevuld met hoogwaardige UI-componenten. |
| Visualisatie | **Recharts** | **Specialistische bibliotheek voor het renderen van de data-visualisaties.** |

## ✨ Kernfunctionaliteiten

### 1. Gebruikers zoeken
* Snel zoeken op GitHub gebruikersnaam
* Directe toegang tot het GitHub-profiel van de gebruiker.

### 2. Overzichtskaart (Card)
* Toont de profielfoto, naam en een directe link naar het GitHub-profiel.

### 3. Gedetailleerde Statistieken
Het profiel toont de belangrijkste metrieken van de gebruiker:
* Total Repositories
* Followers
* Following
* Gists

### 4. Data Visualisaties (Charts)
De kern van de applicatie is de data-analyse, gepresenteerd in drie duidelijke grafieken:
1.  **Used Languages:** Een overzicht van de meest gebruikte programmeertalen in de publieke repositories van de gebruiker.
2.  **Popular Repositories:** Visualisatie van repositories op basis van populariteit (bijv. aantal sterren of forks).
3.  **Forked Repos:** Inzicht in de repositories die de gebruiker heeft geforkt.

### Vereisten

* **Node.js:** Vereist voor het uitvoeren van `npm`/`yarn` en de Vite development server.
*  **Een code-editor** (zoals VS Code)
* **GitHub Personal Access Token (PAT):** Noodzakelijk voor authenticatie bij de GitHub API.
