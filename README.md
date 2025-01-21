![Static Badge](https://img.shields.io/badge/usage-sveltekit-orange) ![Vercel Badge](https://deploy-badge.vercel.app/vercel/deploy-badge) ![License](https://img.shields.io/badge/license-MIT-blue)

# FDND We Love Web
Welkom op de website van FDND! Op deze pagina vind je een overzicht van de komende en afgelopen "We Love Webs"-evenementen. Zo mis je er nooit een en kun je je kennis op een handige manier verrijken!

## Inhoudsopgave
  * [Beschrijving](#beschrijving)
  * [Preview](#preview)
  * [Live pagina](live)
  * [Gebruikersaanwijzing](#gebruikersaanwijzing)
  * [Huisstijl](#huisstijl)
  * [Bronnen](#bronnen)
  * [Installatiehandleiding](#installatiehandleiding)

## beschrijving
- Homepagina: Bij het bezoeken van de site word je begroet met een leuke header, waarop een foto van de vorige "We Love Web" te zien is. Als je verder naar beneden scrolt, krijg je een toelichting op de "We Love Webs". Daaronder vind je een dynamische kalender met zowel de komende als de afgelopen evenementen.
- Detailpagina: ...
- SvelteKit & Directus API: De website is gebouwd met SvelteKit en haalt de data dynamisch op via de Directus API.
------------------------------------------------------------------------------------------------------------------
## Screenshot van de main page
<img width="508" alt="Scherm­afbeelding 2024-11-20 om 19 00 23" src="https://github.com/user-attachments/assets/cd84a0aa-b5ce-44d3-882e-f3c450bdc9c0">

------------------------------------------------------------------------------------------------------------------

## Live pagina
Hier bevind zich de live link van de website
bekijk het [hier](#)!

## Gebruikersaanwijzing
### Navigeren door de pagina
* Homepagina: De gebruiker start op de homepagina, waar direct een prachtige hero-sectie met enkele navigatieknoppen zichtbaar is. Bij het scrollen naar beneden verschijnt de dynamische kalender, waarbij de gebruiker met twee knoppen kan kiezen om in de huidige maand te blijven, een maand vooruit te gaan of een maand terug te bladeren. Daarnaast kan de gebruiker op een specifieke "We Love Web" klikken, waarmee een detailpagina over dat specifieke evenement wordt geopend.

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
Instructies voor het lokaal opzetten van de FDND pagina, zodat ontwikkelaars het project kunnen downloaden, installeren en zelf kunnen draaien met behulp van SvelteKit.

**1. Vereisten**

Zorg ervoor dat je de volgende software hebt geïnstalleerd:

- Node.js
- Packetmanager zoals npm of yarn

**2. git repository clonen**

Je kunt op de main pagina de repo clonen en je eigen lokale versie opvragen.

**3. SvelteKit en packets installeren**

Om aan het project te werken, moet je eerst een nieuw SvelteKit-project opzetten. Dit kan eenvoudig gedaan worden met create-svelte.

Open je terminal.
Voer ```npm install``` of ```yarn install``` uit om de juiste packets te installeren om aan het project te werken.

**4. Deployen op vercel**

Op [vercel.com](https://vercel.com/docs/frameworks/sveltekit) kun je verder op weg met het deployen van een svelteproject. 
