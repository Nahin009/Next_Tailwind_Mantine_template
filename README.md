# Getting Started

First clone the project, then enter inside the test_app folder

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



# Some important info for Mantine

Currently, in the project, only mantine core and mantine date components are being used, 
so inside the layout.tsx, only these two imports are present :

```javascript
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
```

if you use more components inside the project, make sure to import 
corresponding package's style.css

```javascript
import "@mantine/{your_component_containing_package}/style.css";
```

But remember,
Only core is requred all time. Never delete that import.



# Changes made for mantine after creating the project via create-next-app@latest

Run the folllowing command:

```bash
npm install @mantine/core @mantine/hooks @mantine/form @mantine/dates dayjs @mantine/charts recharts@2 @mantine/notifications @mantine/code-highli
ght @mantine/tiptap @tabler/icons-react @tiptap/react @tiptap/extension-link @tiptap/starter-kit @mantine/dropzone @mantine/carousel embla-carousel-react @mantine/spotlight @mantine/modals @mant
ine/nprogress
```
Then, 
```bash
npm install --save-dev postcss postcss-preset-mantine postcss-simple-vars
```

### Then following changes were made in the directory:

1. In globals.css, delete the styles, just keep the top 3 lines
1. Copy paste the layout.tsx to work properly.
1. Create the postcss.config.cjs file in the root directory and copy the contents
1. Added 2 extensions for postcss 
    - PostCSS Intellisense and Highlighting
    - CSS Variable Autocomplete extension
1. Create the .vscode directory and add the following file for auto suggestion for postcss

These changes are made after creating next app with tailwind to support mantine.


# Help taken from

1. [Mantine Getting Started](https://mantine.dev/getting-started/), mainly
1. [Mantine Usage eith Next.js](https://mantine.dev/guides/next/), to fix hydration error
1. [Template for next-app-tailwind](https://github.com/hasib-rashid/next-app-tailwind-template), Though this template gives Hydration error for its layout.js file error.