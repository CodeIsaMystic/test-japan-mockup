<div align="center">
  <h1>BIGBUMP TEST</h1>
  <a href="" >
    <img
      height="auto"
      width="200"
      alt="big bump agency logo"****
      src="face-sun-sticker.f508ddff.png"
    />
  </a>

  <h2>Julien Orjollet</h2>

  <div>
    <a href="https://www.linkedin.com/in/julien-orjollet-22984516b/" width="40">
      <img
        height="auto"
        width="40"
        alt="linkedin logo"
        src="icons8-linkedin-48.png"/>
    </a>
    <a href="https://github.com/CodeIsaMystic" width="40">
      <img
        height="auto"
        width="40"
        alt="github logo"
        src="icons8-github-50.png"/>
    </a>
  </div>

  <br />
  <br />
  <br />
  <br />

</div>

### Requirements

<br />
<br />

### Choix et contenu du workflow

Pour ce test, j'ai décidé d'utiliser **le starter pack que avec lequel je prends le plus de plaisir.** N'ayant pas eu beaucoup de temps pour intégration car j'étais focalisé sur React, Redux, PHP et d'autres sujets, beaucoup de "vulnerabilities" ressortent dans le bundle via la command NPM run dev.

> J'utilise postCSS pour ce projet mais cela aurai pu très bien être SASS ou bien sur du CSS natif.

**J'ai fait au plus vite car il fallait également mettre en place tout le projet et proposer une approche plus complexe et professionnelle.**

J'aime bien ce starter car il réalise pas mal d'opérations itéressantes avec pas mal de plugins chargés depuis NPM.

Il y a donc **le lazyloading, la compression, pas mal d'options de gestions du CSS, notamment avec PostCSS, un environnement de Dev puis de Build, la possibilité de "Chunk" les fichiers...**

<br />
<br />

### Note sur la balise HEAD

Rapide résumé du contenu de la balise Head:

- ajout des meta tags pour le SEO et PWA (pas de fichiers js concerant les service worker mais c'est carrément faisable. Il faudrait, en ce sens, aller plus loin prévoyant peut être une maquette prévu à cet effet si nécessaire)
- ajout des google fonts Lato & EB Garamond
- ajout des fichiers classiques link (CSS), et title (page)
- ajout des fichiers pour la gestion icons selon les "devices"
- le fichier web.manifest pour android

<br />
<br />

### Note sur le HTML

La sémantique est ici simplifier aux vue de l'exercice, **je n'ai pas compter que le "hero" serait un "header"**, c'est plus une prise d'opinion je pense. J'aurai mis un header s'il y avait par exemple une navbar, un logo...

J'aurai ainsi garder en tête l'idée d'**une section hero réutilisable**, et ce, même s'il était amené à être géré différemment sur d'autres pages alors que le **header aurait été grossièrement toujours le même**.

J'ai rajouté quelques attributs pour les web accessibilities, mais c'est un petit plus, faisant travailler ma mémoire sur ce sujet. Ce n'était pas vraiment un travail sérieux, détaillé et très pro. Cela aurait bien évidemment demandé un peu plus de temps.

**J'ai du coup essayé de respecter la sémantique HTML5 et la structure du layout sur l'implémentation de cette maquette.**

<br />
<br />

### Gestion des images

**Les images ont été diminué en terme de poids** via la plateforme "sqoosh", le format a été changé pour du ".webp".

La gestion des images avec les balises `<picture>, <source> et <img>` sur la maquette. Cela aurait pu être plus avancé et mieux peaufiné. Je n'ai par exemple pas eu le temps de faire des tests d'affichage avec des mockups réalisés en ce sens...

> Possibilité d'utilisation de deux formats différents d'images avec une version aux dimensions doublées (hi-dpi) pour les écrans dernières générations, et un format plutôt pour les appareils plus classiques.

<br>

Je n'ai également pas vraiment eu le temps de tester le lazyloading des images, juste l'implémentation.

- pas d'utilisation de mockup de test
- utilisation des balises `<picture>, <source>, <img>` et de l'attr "srcset"
- implémentation de lazyload (NPM package)
- optimization des images via sqoosh
- rajout d'autres images pour compléter la démarche. Parti pris???

<br>
<br>

### L'approche Responsive

Vu la maquette, il s'agirai **de prendre en compte les directives de l'équipe design afin d'optimiser le comportement du layout selon les différents "devices".**

De mon côté, et principalement pour la vue sur Mobile, ce que je pourrai ainsi proposer, tout en réfléchissant avec la méthode BEM serait déjà d'identifier les blocks.

**La compléxité viendrai au niveau du "hero"**, à savoir comment gérer le mouvement des blocks que sont le titre H1, le drapeau du Japon, ainsi que les deux images de Tokyo (j'imagine).
**L'animation a implémenter jouerai bien évidemment un rôle important dans cette reflexion.**

Vu les délais, je n'ai pas chercher à trouver la disposition idéale mais plutôt à poser le travail,pour un layout très classique pour les Mobile qui a consisté à superposer tout les éléments sur la pleine (quasi) largeur du "screen". Aussi l'ordre pourrait être différent. Pour plus de détails je reviens sur cette secton sur la question du layout...

Pour les sections de textes (fiche info & titre + paragraphe) la question ne se pose par trop, vu que cela prendra naturellement la pleine largeur.

Finalement, il aurait également pu être implémenter une version de la maquette pour mobile comme une application via les notions PWA, où l'on aurai du coup le header ou peut être la navigation plutôt en bas pour ainsi faciliter l'UX sur mobile.
J'ai commencé à implémenter le mockup avec cette perspective rajoutant les balises dans les Head, les favicons et modifiant légèrement le layout...

Des médias queries plus avancés pourrait être rajouté, il s'agissait de respecter les 4 heures définies pour le test.

<br>
<br>

### Note sur le Layout

#### FELXBOX vs GRID

Pour le layout et des raisons de respect du temps imparti, j'ai décidé de ne pas m'aventurer sur un GRID complexe mais simplement à jouer avec le CSS Flexbox.

#### Mobile first

Pas trop de travail détaillé sur le côté Mobile first même si utilisant des min-width (média queries), je partais sur cette logique.
J'ai supprimé la bordure top pour cette raison car il fallait trouver une solution pour l'affichage de la maquette posant la réflexion de la Progressive Web App.

#### Animations
