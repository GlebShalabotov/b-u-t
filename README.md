b-u-t Analyse



## Intro 

Dit is een analyse van de opdracht die ik heb gekregen van b-u-t. Hierbij beschrijf ik kort mijn aanpak aan de hand van mijn commits en mijn denkwijze om dit probleem te tackelen. De technologie die ik heb gebruikt is de jquery lib.

## Het probleem verdelen in kleinere problemen 

Ik ben begonnen met kijken naar de video en zien wat ik al gegeven had. Ik zag al onmiddellijk dat het hele menu gehard code was (absolute waardes aan de pictogrammen geassigned), dit maakt het tevens moeilijk om een logica toe te voegen om te kunnen navigeren.
Ook is deze code niet user-friendly want het toevoegen van een pictogram zou betekenen dat er van allerlei nieuw hardcoded pixel waardes zouden gezocht moeten worden.

Daarnaast zouden de buttons interactief gebruikt moeten worden om te kunnen navigeren door de webapp.

Naast de navigatie zouden we dan ook nog een functie moeten hebben die de data-label van een button displayed.

Dus we hebben de volgende zaken die moeten worden getackled: 
-   Redesign van de grid 
-   Navigeren met behulp van buttons 
-   Implementatie van de navigatie logica
-   Displayen van de data-label

## Redesign van de grid

Brench: refactor-icons

Voor de icons te displayen ben ik voor de optie gegaan om elke icon bij te houden in een array van objects. Zo een object heeft dan verschillende attributen die zeggen hoe een icon er uit moet zien. Dit maakt het makkelijk uitbreidbaar. Hiervoor heb ik ook de styling moeten aanpassen.

## Navigeren met behulp van de buttons 

branch: init-buttons

Dit was redelijk straight forward: met behulp van jquery een onclick event toegevoegd die dan later een directie zou sturen naar de grid om te kunnen navigeren.

## Implementatie van de navigatie logica

Voor dit op te lossen ben ik gegaan voor een oplossing om een grid te zien als array's in een array. Hierdoor betekent het dat als je zou willen navigeren van links naar rechts dat je dan door je 'eigen' array navigeert en als je van onder naar boven wilt navigeren, dan navigeer je naar de volgende of vorige array. In

## Display van de data-label

Dit wordt gedaan met behulp van jquery. 

## Verbeteringen

Deze code zou nog 1 grote refactor moeten krijgen, waarbij ik van mijn code een grote reusable functie van maak om er voor te zorgen dat je bij een grid element 



