# Tailwind Starter

This is a starter project for using Tailwind CSS in your web development projects.

## Installation

To use Tailwind CSS in your project, follow these steps:

1. Initialize a new npm project:

   ```bash
   npm init
   ```

2. Install Tailwind CSS as a development dependency:

   ```bash
   npm install -D tailwindcss
   ```

3. Activate IntelliSense for Tailwind CSS:

   ```bash
   npx tailwindcss init
   ```

## Configuration

In your `package.json` file, add the following scripts:

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "tailwind -i ./src/input.css -o ./dist/output.css --watch"
  },
```

## Usage

To compile Tailwind CSS and watch for changes, run the following command:

```bash
npm run dev
```