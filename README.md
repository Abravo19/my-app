my-app
Este es un proyecto creado con React Native y Expo, integrado con Firebase para la autenticación y base de datos.

La versión inicial de este proyecto es la 1.0.0 y el punto de entrada de la aplicación es index.js.

📋 Requisitos Previos
Antes de descargar e instalar este proyecto en otra computadora, asegúrate de tener instalado:

Node.js (recomendable la versión LTS)

npm o yarn como gestor de paquetes.

Aplicación de Expo Go instalada en tu dispositivo móvil (iOS o Android) si deseas probarlo físicamente.

(Opcional) Android Studio o Xcode para emuladores.

🚀 Instalación y Despliegue Local
Sigue estos pasos para desplegar el proyecto en una computadora nueva:

Clonar o descargar el repositorio:
Descarga los archivos del proyecto a tu computadora y abre una terminal en la carpeta principal del proyecto (donde se encuentra el archivo package.json).

Instalar las dependencias:
Ejecuta el siguiente comando para instalar todas las librerías necesarias (como Expo ~55.0.5, React 19.2.0, React Native 0.83.2 y Firebase ^12.10.0):

Bash
npm install
Configurar las Variables de Entorno (Importante):
El proyecto utiliza Firebase y requiere sus credenciales, las cuales se leen a través de variables de entorno.
Crea un archivo llamado .env en la raíz de tu proyecto y añade las siguientes variables con las credenciales de tu consola de Firebase:

Extrait de code
EXPO_PUBLIC_FIREBASE_API_KEY="tu_api_key_aqui"
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN="tu_auth_domain_aqui"
EXPO_PUBLIC_FIREBASE_PROJECT_ID="tu_project_id_aqui"
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET="tu_storage_bucket_aqui"
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="tu_messaging_sender_id_aqui"
EXPO_PUBLIC_FIREBASE_APP_ID="tu_app_id_aqui"
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID="tu_measurement_id_aqui"
Iniciar el servidor de desarrollo:
Para arrancar la aplicación con Expo, ejecuta el comando start:

Bash
npm start
Este comando ejecuta expo start e iniciará Metro Bundler y te mostrará un código QR. Escanéalo con la aplicación Expo Go en tu teléfono para abrir la aplicación.

📱 Otros Comandos Disponibles
El proyecto tiene configurados diferentes scripts de inicio dependiendo de la plataforma que necesites probar:

Para Android: Inicia la app y abre automáticamente un emulador Android (si está configurado). Ejecuta expo start --android.

Bash
npm run android
Para iOS: Inicia la app y abre el simulador de iOS (solo aplicable en macOS). Ejecuta expo start --ios.

Bash
npm run ios
Para Web: Inicia la aplicación en tu navegador web. Ejecuta expo start --web.

Bash
npm run web
📦 Actualizar y Administrar Componentes
Instalar una nueva librería: Es muy recomendable usar npx expo install <nombre-del-paquete> en lugar de npm install para que Expo se encargue de instalar la versión compatible exacta con tu entorno (como lo hace actualmente con react-native-safe-area-context o react-native-screens en las dependencias).

Actualizar dependencias: Si necesitas actualizar, puedes modificar las versiones dentro del archivo package.json y luego ejecutar npm install nuevamente, o usar npm update. Si actualizas la versión principal de Expo, debes ejecutar npx expo update.

🛠 Estructura Principal
firebaseConfig.js: Contiene la inicialización de Firebase App, Firestore y Auth (usando persistencia en AsyncStorage).

package.json: Administra las dependencias del proyecto, incluyendo React Navigation para las rutas (@react-navigation/native y @react-navigation/native-stack). Soporta TypeScript.

my-app
Ce projet est créé avec React Native et Expo, intégré avec Firebase pour l'authentification et la base de données.

La version initiale de ce projet est la 1.0.0 et le point d'entrée de l'application est index.js.

📋 Prérequis
Avant de télécharger et d'installer ce projet sur un autre ordinateur, assurez-vous d'avoir installé :

Node.js (version LTS recommandée)

npm ou yarn comme gestionnaire de paquets.

L'application Expo Go installée sur votre appareil mobile (iOS ou Android) si vous souhaitez le tester physiquement.

(Optionnel) Android Studio ou Xcode pour les émulateurs.

🚀 Installation et Déploiement Local
Suivez ces étapes pour déployer le projet sur un nouvel ordinateur :

Cloner ou télécharger le dépôt :
Téléchargez les fichiers du projet sur votre ordinateur et ouvrez un terminal dans le dossier principal du projet (où se trouve le fichier package.json).

Installer les dépendances :
Exécutez la commande suivante pour installer toutes les bibliothèques nécessaires (comme Expo ~55.0.5, React 19.2.0, React Native 0.83.2 et Firebase ^12.10.0) :

Bash
npm install
Configurer les Variables d'Environnement (Important) :
Le projet utilise Firebase et nécessite ses identifiants, qui sont lus via des variables d'environnement.
Créez un fichier nommé .env à la racine de votre projet et ajoutez les variables suivantes avec les identifiants de votre console Firebase :

Extrait de code
EXPO_PUBLIC_FIREBASE_API_KEY="votre_api_key_ici"
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN="votre_auth_domain_ici"
EXPO_PUBLIC_FIREBASE_PROJECT_ID="votre_project_id_ici"
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET="votre_storage_bucket_ici"
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="votre_messaging_sender_id_ici"
EXPO_PUBLIC_FIREBASE_APP_ID="votre_app_id_ici"
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID="votre_measurement_id_ici"
Démarrer le serveur de développement :
Pour lancer l'application avec Expo, exécutez la commande start :

Bash
npm start
Cette commande exécute expo start, lancera Metro Bundler et vous montrera un code QR. Scannez-le avec l'application Expo Go sur votre téléphone pour ouvrir l'application.

📱 Autres Commandes Disponibles
Le projet a configuré différents scripts de démarrage selon la plateforme que vous devez tester :

Pour Android : Lance l'application et ouvre automatiquement un émulateur Android (s'il est configuré). Exécutez expo start --android.

Bash
npm run android
Pour iOS : Lance l'application et ouvre le simulateur iOS (uniquement applicable sur macOS). Exécutez expo start --ios.

Bash
npm run ios
Pour le Web : Lance l'application dans votre navigateur web. Exécutez expo start --web.

Bash
npm run web
📦 Mettre à jour et Gérer les Composants
Installer une nouvelle bibliothèque : Il est fortement recommandé d'utiliser npx expo install <nom-du-paquet> au lieu de npm install pour qu'Expo se charge d'installer la version exacte compatible avec votre environnement (comme il le fait actuellement avec react-native-safe-area-context ou react-native-screens dans les dépendances).

Mettre à jour les dépendances : Si vous devez mettre à jour, vous pouvez modifier les versions dans le fichier package.json puis exécuter à nouveau npm install, ou utiliser npm update. Si vous mettez à jour la version principale d'Expo, vous devez exécuter npx expo update.

🛠 Structure Principale
firebaseConfig.js : Contient l'initialisation de Firebase App, Firestore et Auth (en utilisant la persistance dans AsyncStorage).

package.json : Gère les dépendances du projet, y compris React Navigation pour le routage (@react-navigation/native et @react-navigation/native-stack). Supporte TypeScript.
