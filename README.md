# ontiime-ls

Un projet FullStack (Backend/Frontend) de type Shorten Link "réducteur de lien".

## Todo List 
- Redirection avant affichage pour aller d'un lien raccourci à un lien d'origine (PHP)
- Un formulaire de création de shorten link sans refresh (JS + API)
- Un affichage des résultats sans refresh (JS)
- Des liens différents selon les navigateurs (utilisateurs)
- Sauvegare des liens (base de données relationnelle SQL) 
- Un bouton de copie de lien dans le clipboard

Le projet est évoluable. Par exemple on pourrait rajouter des comptes utilisateurs (actuellement l'ensemble des liens est ajouté dans une base de données et une copie de la liste des liens propre à l'utilisateur est sauvegardé en localStorage). On pourrait également créer plus de page, le router pour ReactJS est installé mais pour le moment les liens du haut ne sont pas actifs. 

## Languages utilisés
Html, Css, Php, JS, Sql

## Frameworks utilisés
- Symfony (avec entre autre le FOSRestBundle pour l'API)
- ReactJS
- Bootstrap (+couche UX/UI Webpixels) 

## Environnement de développement 
- NodeJS (CSS avec SASS, run watch ReactJS)
- Symfony-CLI (symfony start:server)
- MySQL

