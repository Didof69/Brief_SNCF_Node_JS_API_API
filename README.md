# Installation de package.json

```bash
npm init -y
```

# Installation des packages

Packages pour le développement :

```bash
npm i -D nodemon ts-node typescript @types/express
```

Packages pour l'application :

```bash
npm i express
```

# Créer un fichier tsconfig.json et intégrer le code ci-dessous 
```bash
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */
    /* Language and Environment */
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    /* Modules */
    "module": "commonjs" /* Specify what module code is generated. */,
    /* Emit */
    "outDir": "./dist" /* Specify an output folder for all emitted files. */,
    "esModuleInterop": true,
    /* Interop Constraints */
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
    /* Completeness */
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  }
```

# Créer un script START dans package.json 
```bash
"start": "nodemon ./src/index.ts"
```

# Initialisation d'un repo git local
```bash
git init
```

# Insérer node_modules dans .gitignore à la racine
```bash
node_modules
```
Permet de ne pas synchroniser le node_modules avec git

# Synchro avec git
```bash
git add .
git commit -m "0 - init espace de travail"
```