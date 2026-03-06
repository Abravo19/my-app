# My App

[Español](#español) | [Français](#français) | [English](#english)

---

<h2 id="español">🇪🇸 Español</h2>

## Guía de Configuración y Despliegue

### 1. Requisitos del Entorno
Para ejecutar este entorno de desarrollo, necesitas instalar los siguientes componentes:
- **[Node.js](https://nodejs.org/)** (Se recomienda la versión LTS)
- **Git** para clonar el repositorio
- La aplicación **Expo Go** en tu dispositivo físico (disponible en App Store o Google Play), o **Android Studio / Xcode** si prefieres usar un emulador de dispositivo móvil.

### 2. Instalación
1. Clona el repositorio:
   ```bash
   git clone <url_del_repositorio>
   cd my-app
   ```
2. Instala las dependencias del proyecto (incluye React Native, Expo, Firebase, etc.):
   ```bash
   npm install
   ```
   *(Si prefieres usar `yarn`, ejecuta `yarn install` en su lugar).*

### 3. Configuración de Variables de Entorno (API Keys)
Para que la aplicación y Firebase funcionen correctamente y **evitar exponer tus claves privadas**, debes configurar un archivo de variables de entorno.
1. Crea un archivo llamado `.env` en la raíz del proyecto (la misma carpeta donde está `package.json`).
2. Añade tus credenciales de configuración de Firebase de la siguiente manera:
   ```env
   EXPO_PUBLIC_FIREBASE_API_KEY=tu_api_key
   EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_auth_domain
   EXPO_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
   EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
   EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
   EXPO_PUBLIC_FIREBASE_APP_ID=tu_app_id
   EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=tu_measurement_id
   ```
> **⚠️ Importante:** Asegúrate de que el archivo `.env` esté incluido en tu archivo `.gitignore` para no subir accidentalmente tus contraseñas o claves API a GitHub o cualquier otro repositorio público.

### 4. Ejecutar la Aplicación
Inicia el servidor de desarrollo de Expo:
```bash
npx expo start
```
- Para ver la aplicación en tu teléfono físico, escanea el código QR generado en la terminal usando la aplicación de **Expo Go** (o la cámara si estás en iOS).
- Presiona `a` en la terminal para desplegar la aplicación en un emulador de Android (requiere tener instalado y configurado Android Studio).
- Presiona `i` para abrirla en un simulador de iOS (requiere Mac y Xcode).

---

<h2 id="français">🇫🇷 Français</h2>

## Guide de Configuration et Déploiement

### 1. Prérequis de l'Environnement
Pour exécuter ce projet, vous devez installer les composants d'environnement suivants :
- **[Node.js](https://nodejs.org/)** (Version LTS recommandée)
- **Git** pour cloner le dépôt
- L'application **Expo Go** sur votre téléphone physique (disponible sur l'App Store ou Google Play), ou **Android Studio / Xcode** si vous préférez utiliser un émulateur mobile.

### 2. Installation
1. Clonez le dépôt :
   ```bash
   git clone <url_du_depot>
   cd my-app
   ```
2. Installez les dépendances du projet (inclut React Native, Expo, Firebase, etc.) :
   ```bash
   npm install
   ```
   *(Si vous préférez utiliser `yarn`, exécutez `yarn install` à la place).*

### 3. Configuration des Variables d'Environnement (Clés API)
Pour que l'application et Firebase fonctionnent correctement, et **pour éviter d'exposer vos clés privées**, vous devez configurer un fichier de variables d'environnement.
1. Créez un fichier nommé `.env` à la racine du projet (le même dossier que `package.json`).
2. Ajoutez vos identifiants Firebase de la manière suivante :
   ```env
   EXPO_PUBLIC_FIREBASE_API_KEY=votre_api_key
   EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=votre_auth_domain
   EXPO_PUBLIC_FIREBASE_PROJECT_ID=votre_project_id
   EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=votre_storage_bucket
   EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=votre_messaging_sender_id
   EXPO_PUBLIC_FIREBASE_APP_ID=votre_app_id
   EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=votre_measurement_id
   ```
> **⚠️ Important :** Assurez-vous que le fichier `.env` est inclus dans votre fichier `.gitignore` afin de ne pas pousser accidentellement vos mots de passe ou clés API sur GitHub ou tout autre dépôt public.

### 4. Lancer l'Application
Démarrez le serveur de développement Expo :
```bash
npx expo start
```
- Pour voir l'application sur votre téléphone, scannez le code QR généré dans le terminal à l'aide de l'application **Expo Go** (ou l'appareil photo sur iOS).
- Appuyez sur `a` dans le terminal pour lancer l'application sur un émulateur Android (nécessite Android Studio configuré).
- Appuyez sur `i` pour l'ouvrir sur un simulateur iOS (nécessite un Mac et Xcode).

---

<h2 id="english">🇬🇧 English</h2>

## Setup & Deployment Guide

### 1. Environment Requirements
To run this development environment, you need to install the following components:
- **[Node.js](https://nodejs.org/)** (LTS version recommended)
- **Git** to clone the repository
- The **Expo Go** application on your physical device (available on App Store or Google Play), or **Android Studio / Xcode** if you prefer using a mobile emulator.

### 2. Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd my-app
   ```
2. Install the project dependencies (includes React Native, Expo, Firebase, etc.):
   ```bash
   npm install
   ```
   *(If you prefer using `yarn`, run `yarn install` instead).*

### 3. Environment Variables Configuration (API Keys)
For the application and Firebase to work correctly, and **to prevent exposing your private keys**, you must configure an environment variables file.
1. Create a file named `.env` in the root of the project (the same folder as `package.json`).
2. Add your Firebase configuration credentials as follows:
   ```env
   EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key
   EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
   EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```
> **⚠️ Important:** Make sure the `.env` file is included in your `.gitignore` file so you don't accidentally push your passwords or API keys to GitHub or any other public repository.

### 4. Running the App
Start the Expo development server:
```bash
npx expo start
```
- To view the application on your physical phone, scan the QR code generated in the terminal using the **Expo Go** app (or the camera if on iOS).
- Press `a` in the terminal to deploy the app on an Android emulator (requires Android Studio to be installed and configured).
- Press `i` to open it on an iOS simulator (requires a Mac and Xcode).
