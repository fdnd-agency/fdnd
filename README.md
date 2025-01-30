![Static Badge](https://img.shields.io/badge/usage-sveltekit-orange) ![Vercel Badge](https://deploy-badge.vercel.app/vercel/deploy-badge) ![License](https://img.shields.io/badge/license-MIT-blue)

# FDND We Love Web
Welkom op de website van FDND - We Love Web! Op deze pagina vind je een overzicht van de komende en afgelopen "We Love Webs" gastlezingen. Zo mis je er nooit een en kun je terugkijken op afgelopen sessies!

## Inhoudsopgave
  * [Beschrijving](#beschrijving)
  * [Afbeelding](#afbeelding)
  * [Live pagina](#live-pagina)
  * [Missie & Visie](#missie--visie)
  * [Gebruikersaanwijzing](#gebruikersaanwijzing)
  * [Huisstijl](#huisstijl)
  * [Bronnen](#bronnen)
  * [Installatiehandleiding](#installatiehandleiding)

## Beschrijving
- Homepagina: op de homepagina van de We Love Web sessies worden de we love webs van het huidige schooljaar weergegeven.
- Archiefpagina: Op de archiefpagina worden de afgelopen we love webs weergegeven gesorteerd op jaar.
- Detailpagina: Op de detailpagina wordt meer informatie over de geselecteerde we love web sessie weergegeven, zoals beschrijving, tags en links.
- SvelteKit & Directus API: De website is gebouwd met SvelteKit en haalt de data dynamisch op via de Directus API.
------------------------------------------------------------------------------------------------------------------
## Afbeelding hoofdpagina
Op deze screenshot is de hoofdpagina van de We Love Web-site te zien. Hier worden alle aankomende en afgelopen We Love Webs van dit schooljaar weergegeven, gesorteerd op sprints. Er zijn drie kleuren voor de kaartjes: grijze kaartjes geven de reeds gehouden We Love Webs aan, het groene kaartje markeert de eerstvolgende sessie, en de blauwe kaartjes vertegenwoordigen de resterende geplande We Love Webs van dit jaar. Verder zie je hieronder een uitleg van wat deze site is en hoe je mee kan doen.
![v4 0](https://github.com/user-attachments/assets/ac1654a1-cbab-490c-9b49-758a44e964d3)

## Afbeelding detail pagina
Wanneer je op een kaartje klikt, word je doorgestuurd naar de detailpagina ervan. Hier vind je de naam van de spreker, de sprint en de datum van de sessie. Daarnaast bevat de pagina een grote afbeelding, een beschrijving van de spreker en enkele tags die aangeven waar de lezing over gaat. Onder de tags vind je links naar de spreker.
![screencapture-weloveweb-agency-fdnd-nl-9a3af20f-7c50-4e8e-b3ee-df38abaa5bcd-2025-01-30-14_23_42](https://github.com/user-attachments/assets/28c81c4c-4aee-4c3a-a754-ad7fd1ea9703)

## Afbeelding archief pagina
Op de archiefpagina vind je een overzicht van alle We Love Webs uit voorgaande jaren. Mocht je een sessie gemist hebben of geïnteresseerd zijn in eerdere edities, dan kun je ze hier terugvinden. De opzet lijkt op die van de hoofdpagina, maar met aanzienlijk meer kaartjes. Alle kaartjes zijn grijs, omdat deze sessies al hebben plaatsgevonden.
![screencapture-weloveweb-agency-fdnd-nl-collectie-2025-01-30-14_24_01](https://github.com/user-attachments/assets/a19d91ec-6581-44ed-958b-0cad6c1e03dd)

------------------------------------------------------------------------------------------------------------------

## Live pagina
De link naar de live site kun je [hier](https://weloveweb.agency.fdnd.nl/) vinden!

## Missie & Visie
De *opdrachtgever van de site zijn FDND*, en wilden deze site om een overzicht te creeëren voor mensen geintereseerd in hun gastlezingen. Daarom is het doel geweest tijdens het maken van deze site om de core functionality naar voren te duwen zodat de site meer gericht is op het overzicht van we love webs.

## Gebruikersaanwijzing
Dit is de uitgebreide gebruikersaanwijzing voor personen die gebruik willen maken van de We Love Web website:

### Navigeren door de pagina
* Homepagina: De gebruiker start op de homepagina, waar gelijk de core functionality zichtbaar is; de we love web kalender.
Verder is er een duidelijke archief knop die leidt naar de archiefpagina, en de kaartjes in de kalender leiden naar hun respectievelijke detailpaginas

## Huisstijl
Informatie over de ontwerpkeuzes en branding van de We love Web pagina, inclusief kleurenpaletten, typografie en andere visuele elementen die bijdragen aan het FDND thema.

### Thema
Voor deze website hebben we de nieuwe huisstijl van FDND toegepast. In de briefing werd aangegeven dat ze niet tevreden waren met de huidige huisstijl en dat er op verschillende FDND-pagina's inconsistenties waren in de stijl. Wij waren enthousiast over de nieuwe huisstijl en besloten dat alle pagina's dezelfde uitstraling en sfeer moesten krijgen, zodat er meer eenheid ontstaat.

### Code Conventies
Er zijn verschillende code conventies afgesproken, de code is gebasseerd op deze regels:
*Bestands- en Mapstructuur*


*Componentstructuur*
- Volg de volgorde: script -> markup -> styles in een .svelte bestand.
- Declareer geïmporteerde componenten bovenaan in de `<script>`.
- Gebruik export voor props

*Indentering en Spaties*
- Gebruik 2 spaties per niveau van inspringing.
- Laat een lege regel tussen script, styles, en markup.

*CSS en Styling*
- Gebruik scoped styles door standaard `<style>` zonder `global` te gebruiken (met uitzondering op variabele en body styling).
- Beperk het gebruik van !important.
- Gebruik CSS variabele voor consistente styling.
- Gebruik kebabcase voor variabele en functies: let userName.

*Naming Conventions*
- Gebruik kebabcase voor variabele: `--css-var: myvariable;`.
- Gebruik camelcase voor functies en js variabele: `let myVar = any;`.
- Gebruik camelcase namen voor componentbestanden: `myComponent.svelte`.

*Reactiviteit*
- Gebruik $-syntax voor reactieve declaraties.

*API-aanroepen*
- Haal data server-side op met load in SvelteKit waar mogelijk (in +page.server.js).

*Toegankelijkheid (A11y)*
- Voeg altijd alt-teksten toe waar nodig.
- Gebruik semantische HTML: `<button>`, `<article>`, `<section>`, etc.

*Git Conventies*
- Schrijf beschrijvende commit messages in version control format
- Gebruik branches voor features of bugs


------------------------------------------------------------------------------------------------------------------

## Bronnen
Hier vind je de bronnen van de tools die we hebben gebruikt. 

### [Sveltekit](https://kit.svelte.dev/)
![image](https://github.com/user-attachments/assets/27f8ed03-7202-4a01-9924-0f358fc5e75c)

### [Vercel Docs](https://vercel.com/docs/frameworks/sveltekit)
![image](https://github.com/user-attachments/assets/f55ed6b2-1d62-4999-9d23-7e4fb1f00cf3)

## Installatiehandleiding
Instructies voor het lokaal opzetten van de FDND-pagina, zodat ontwikkelaars het project kunnen downloaden, installeren en lokaal draaien met behulp van SvelteKit.

### **1. Vereisten**
Zorg ervoor dat je de volgende software hebt geïnstalleerd voordat je begint:

- **[Node.js](https://nodejs.org/):** Zorg ervoor dat je een recente versie hebt (bij voorkeur de LTS-versie).  
- **Packetmanager:** zoals `npm` (meegeleverd met Node.js) of [Yarn](https://yarnpkg.com/).

### **2. Repository clonen**
Clone de repository naar je lokale machine met de volgende stappen:

1. Open je terminal.  
2. Voer het volgende commando uit:  
  ```
  git clone [repository-url]
  ```
3. Ga naar de projectmap:
  ```
  cd [project-map]
  ```
  Hiermee wordt de lokale server gestart en kun je het project openen via http://localhost:5173 (of een andere poort die in de terminal wordt vermeld).


### **3. SvelteKit en packets installeren**

Volg deze stappen om het project op te zetten en de benodigde pakketten te installeren:

1. Open je terminal in de projectmap.
2. Installeer de afhankelijkheden:
```
npm install
```
of, als je Yarn gebruikt:

```
yarn install
```

3. Start de ontwikkelomgeving:
```
npm run dev -- --open
```
Hiermee wordt de lokale server gestart en kun je het project openen via http://localhost:5173 (of een andere poort die in de terminal wordt vermeld).

### **4. Deployen op vercel**
Volg deze stappen om het project te deployen op Vercel:

1. Ga naar [vercel.com](https://vercel.com/docs/frameworks/sveltekit).
2. Maak een account aan of log in.
3. Koppel je Git-repository aan Vercel.
4. Vercel detecteert automatisch dat je project SvelteKit gebruikt en stelt de juiste configuraties in.
5. Klik op *Deploy* om je project live te zetten.

### **5. Belangrijke NPM-scripts**
Hieronder staan de belangrijkste scripts die je kunt gebruiken tijdens de ontwikkeling:

- npm run dev: Start de ontwikkelserver en zorgt voor live reload. Gebruik dit tijdens het ontwikkelen.

- `npm run build`: Bouwt de applicatie voor productie. Dit genereert geoptimaliseerde bestanden in de `build`-map.

- `npm run preview`: Voer een preview uit van de gebouwde applicatie. Handig om te controleren hoe de applicatie eruitziet voordat je deze deployt.

