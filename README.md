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

## Conclusion 

Il y avait plein de manière d'arriver au même résultat. Je privilégie normalement les solutions les plus populaires, légères, sûres et les plus accessibles. Par exemple VueJS est plus léger ainsi que Laravel mais j'ai également voulu me challenger sur ce qui représente 8/10 voir 9/10 des demandes actuelle, c'est à dire la paire (Symfony/ReactJS) 

Une remarque particulière (notamment pour bitly) en terme d'accessibilité, même si aujourd'hui tous les navigateurs ont javascript activé par défault, si on désactive le javascript la moitié du produit tombe à l'eau... mais l'ergonomie prime sur l'accessibilité apparemment!

