# Projet : API Géo-adresse avec Leaflet.js

## 🔍 Description

Cette application web permet d'afficher une carte interactive centrée sur la France, d’entrer un code postal, puis de sélectionner une commune associée pour centrer dynamiquement la carte sur celle-ci.

Elle utilise :

* L'API **geo.api.gouv.fr** pour récupérer les coordonnées géographiques des communes
* La librairie **Leaflet.js** pour l'affichage de la carte
* **TailwindCSS** pour le style

## 🚀 Fonctionnalités

* Entrée du **code postal**
* Sélection d'une **ville correspondante**
* Mise à jour de la **carte centrée** sur la ville avec **marqueur dynamique**

## 📁 Fichiers principaux

* `index.html` : structure HTML avec champs d’entrée, sélecteur, carte
* `script.js` : logique JS pour la requête API, manipulation du DOM et de Leaflet

## 📄 Installation

1. Cloner le repo
2. Placer le JS dans `js/script.js` et ajouter `css/style.css` (vide ou à personnaliser)
3. Ouvrir `index.html` dans un navigateur

## 🚩 Remarques

* Utilise des liens CDN pour Leaflet et Tailwind
* Aucune clé API n’est requise

## 🚀 Exemple d'URL API utilisée

```bash
https://geo.api.gouv.fr/communes?codePostal=75001&fields=centre&format=json
```

## 📊 Aperçu

* Champ code postal → remplit dynamiquement la liste des villes
* Choix d’une ville → carte centrée avec marqueur

## 📆 Auteurs

Projet développé par : *Charles LINDECKER*

---

📖 Licence : MIT
