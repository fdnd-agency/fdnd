### FDND Sprint 16 - 17 - 18

## 17-11-2024 
De toggle button voor het vertonen van de volledige agenda naast de sprints, wordt amper gebruikt en is niet goed zichtbaar. 
We hebben de feedback gekregen een aantal weken geleden om de toggle weg te halen en de volledige agenda standaard te tonen. Ik heb dit namelijk geprobeerd, maar in mijn opininie ziet dit er niet professioneel uit. 

Om dit probleem weg te halen heb ik de toggle button een call-to-action kleur gegeven waardoor het een stuk meer opvalt. Zo hoop ik dat de gebruikers van de website de toggle button goed kunnen zien en vaken gebruiken.

```css
  input[type="checkbox"].toggle:checked + label::after {
    content: "";
    transform: translateX(1.5em);
    background: var(--call-to-action);
    color: var(--call-to-action);
  }

  input[type="checkbox"].toggle:hover + label::after,
  input[type="checkbox"].toggle:focus + label::after,
  input[type="checkbox"].toggle:checked:hover + label::after {
    background: var(--call-to-action);
    color: var(--call-to-action);
  }

  input[type="checkbox"].toggle:checked + label::before {
    background-color: var(--blueberry);
    opacity: 0.5;
    border-color: var(--call-to-action);
  }
  ```

  Voor de rest ben ik bezig geweest met een nieuw idee uitschetsen voor de nieuwe layout die ik gedesigned en gecodeerd heb voor de sprintlinks. Ik vind dat het grijs te erg opvalt en heel erg 'saai' overkomt onder de witte secties. Wellicht dat er een kleine achtergrond komt om de grijze vertoning uit de cancelen. 


## 26-11-2024
Tijdens de sprint review en de les hebben we de opdracht gekregen om reduced motion toe te passen op onze code. Vooral omdat de pacman voortdurend beweegt en niet tot stilstand komt. Dit is namelijk niet goed voor de gebruikers die last hebben van bewegingsziekte, epilepsie of andere aandoeningen. 
Om deze reduced motion toe te passen, heb ik gekeken naar de best passende manier. Door een artikel te lezen over reduced motion, kwam ik erachter dat je dit het beste kan doen door een media query toe te voegen. Het kan tamelijk ook met JavaScript, maar omdat de animatie volledig in CSS is gebouwd, was dit niet nodig. 

Door het in de browser te testen, ben ik erachter gekomen of het werkt of niet. Door een forum te lezen, ben ik meer te weten gekomen hoe je dit het beste kan testen, en dat is namelijk ook je animaties uit te zetten via je Windows settings. Het werkt!

**Artikelen**: 
* [Reduced Motion](https://alvin.codes/snippets/sveltekit-reduced-motion)
* [Reduced Motion Testing](https://stackoverflow.com/questions/59708960/how-do-i-change-the-prefers-reduced-motion-setting-in-browsers)

Na het toepassen van reduced motion op de pacman, heb ik dit ook toe kunnen passen op de hover animaties in sprintLink (ons component voor de sprints).

```css
 @media (prefers-reduced-motion: reduce) {
    .pacman::before,
    .pacman::after {
      animation: none;
    }
  }
  ```

  ```css  
  @media (prefers-reduced-motion: reduce) {
    li a {
      transition: none;
    }
  }
  ```