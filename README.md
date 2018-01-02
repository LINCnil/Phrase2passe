# Phrase2passe

## Introduction

#### Le projet Phrase2passe

Ce projet est une implémentation d'un algorithme permettant de générer un bon mot de passe à partir d'une phrase de passe.

#### Mot de passe et Ingénierie Sociale

Le choix d'un mot de passe peut en dire long sur vous et votre vie privée. Il n'est pas conseillé d'utiliser votre nom de famille, vos prénoms ou même les prénoms de vos proches tout comme les dates de naissances...

Il est relativement aisé pour un pirate de faire de l'Ingénierie Sociale (Social Engeneering) et récupérer des données personnelles vous concernant et tenter ainsi de retrouver vos mots de passe. Pour éviter cela nous vous donnons quelques conseils comme par exemple :

- Ne pas choisir vos noms, prénoms, ceux de vos proche ou même de votre animal de compagnie.
- Eviter d'intégrer votre date de naissance dans le mot de passe et ce même en changeant l'ordre des chiffres.
- Ne pas utiliser des titres de roman (toujours le même), le nom de votre artiste préféré, etc.

#### Mais comment faire ?
Oui c'est très compliqué, mais vous pouvez par exemple choisir une citation que vous aimez et vous en servir comme "phrase de passe". C'est-à-dire où par exemple les première lettres de chaque mots vont constituer votre mot de passe final.

Il est également possible d'ajouter des smileys dans votre mot de passe ce qui permettra d'avoir des caractères spéciaux, exemple :

```
Juste 1 clin d'oeil à la CNIL et au LINC !
```

Le mot de passe construit à partir de cette phrase avec la transformation de "clin d'oeil" en smileys ;-) pourrait-être :

```
J1;-)àlC&aL!
```
Entraînez vous avec notre outil de génération de mot de passe sur le site de la CNIL ou avec le code source proposé.

## Installation

#### Configuration environnement Visual Studio 2015

- Télécharger Visual Studio 2015 https://www.visualstudio.com/fr/downloads/
- Télécharger pack langue https://www.microsoft.com/fr-fr/download/details.aspx?id=48157
- Télécharger typeScript https://www.microsoft.com/fr-fr/download/details.aspx?id=48593

## Utilisation

Pour utiliser le plugin vous avez besoin de trois éléments :

- Intégrer le code HTML dans votre page
- Inclure le fichier javascript phrase2passe.js
- Inclure le fichier de style phrase2passe.single.step.css

**Execution du plugin :**

```
window.onload = function () {
    new Phrase2Passe(options);
};
```

ou si vous utilisez phrase2passe.jquery.js (utilisation des sélecteurs jquery pour inclure le plugin)
```
<script type="text/javascript">
   $(document).ready(function () {
      $(".passwordBloc").phrase2Passe();
   });
</script>
```

## Personnalisation du plugin

### Comment ajouter une règle de validation ?

Créer une class héritant de l'interface ValidationRule, interface commune à toute règles de validation, interface contenu dans le fichier phrase2pass.validation.ts.
```
 var options = {
     // Bean name class typescript
     validatorForNextStep: [
        ["NumberOfChararcterInPassWordValidatorRule", ".rule1"],
        ["PresenceLetterMajusculeValidatorRule", ".rule2"],
        ["ContainsCaracterSpecialValidatorRule", ".rule4"],
        ["NumberDifferentValidatorValidatorRule", ".rule7"],
		["LeNomDeMaClasse", "LeSelectorHTMLDuLibelleDeMonErreur"]
     ]
 };
 new Phrase2Passe(options);
```
L'instance sera automatiquement créée et ajoutée.
	 
#### Comment ajouter un élement de transformation ?

Créer une classe héritant de l'interface Transformer, interface commune à toutes les transformations : interface contenue dans le fichier phrase2pass.transformation.ts.
```
 var options = {
     // Bean name class typescript
     transformers: ["FirstLetterWordTransFormer", "SpaceTransformer", "ReplaceWordBycharcterInPassWordTransFormer", "ConversioNnumberTransformer","LeNomDeMaClasse"]
 };
 new Phrase2Passe(options);
```
L'instance sera automatiquement créée et ajoutée.

#### Comment ajouter ou configurer une langue ?

#### Configuration d'une langue

La configuration de la langue est réalisée à partir des paramètres :

- language
- nextLibelleButton
- previousLibelleButton

```
<script type="text/javascript">
    /** Initalise plugin in page */
    $(document).ready(function () {
        $("#passwordBloc").phrase2Passe({
            language: "fr",
            nextLibelleButton: [
                ["Generate your password", 0],
                ["Strengthen your password", 1]
            ],
            previousLibelleButton: [
                ["Back", 1],
                ["Back", 2]
            ]
        });
    });
</script>
```

L'essentiel du texte est contenu dans la partie HTML du plugin, il suffit de modifier le texte dans le HTML, ces modifications non pas d'impact à l'éxécution du code.

#### Intégration d'une langue

Le fichier phrase2pass.language.ts contient les mots ou liste liste de mots utilisés par le moteur du code.

Recopier la liste :
```
private static language_password_fr: any;
```
vers 
```
private static language_password_xx: any;
```

Dans un premier temps, modifier les valeurs et non les clés dans la nouvelle variable.

Puis modifier le code ci-dessous pour intégrer la langue :
```
return Languages.initLanguage([
                   Languages.language_password_fr,
                   Languages.language_password_en,
				   Languages.language_password_xx
        ]);
```

## Contribuer

**Phrase2passe est disponible sous license GPLv3 et peut être enrichi par chacun des utilisateurs.** Les plus expérimentés peuvent améliorer cette version initiale de notre outil ou corriger les bugs éventuels. N'oubliez pas de soumettre vos contributions via des pull-requests.

**Vous avez une idée que vous souhaitez partager avec nous pour améliorer ce projet ?** Vous avez envie de vous appuyer sur cette base pour construire un projet de pédagogie de la traçabilité numérique ? Vous pouvez contacter l’équipe du laboratoire CNIL par mail - ip(at)cnil.fr - ou via le compte Twitter @LINCnil.

Pour de plus amples informations, voir le fichier LICENSE inclus.
