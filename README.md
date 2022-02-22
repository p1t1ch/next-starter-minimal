# Next Starter

> Project is build with `Next.js`, requires `node` >= 12.22.0 and uses `npm` as the package manager

## Local development

1. **Setup the project**

   Install dependencies and run validation script:

   ```shell
   npm run setup
   ```

1. **Run the application**

   Start the development server on localhost:

   ```shell
   npm start
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## Scripts list

| `npm run <command>` | Description                                                           |
| ------------------- | --------------------------------------------------------------------- |
| `start`             | Build app in dev mode and start development server on port 3000       |
| `build`             | Build app in prod mode                                                |
| `serve`             | Browse production build                                               |
| `analyze`           | Build app in prod mode and open Webpack Bundle Analyzer stats         |
| `storybook`         | Build Storybook in dev mode and start development server on port 8000 |
| `build-storybook`   | Build Storybook in prod mode                                          |
| `lint:ts`           | Run ESLint on `.tsx` and `.ts` files                                  |
| `lint:css`          | Run Stylelint on `.css` files                                         |
| `format`            | Run Prettier in write mode                                            |
| `lint`              | Run ESLint, Stylelint and Prettier                                    |
| `type-check`        | Run Typescript compiler for types checking                            |
| `test`              | Run Jest in watch mode                                                |
| `test:coverage`     | Run Jest in coverage mode                                             |
| `coverage`          | Оpen coverage reports                                                 |
| `validate`          | Full code quality control: `lint`, `type-check` and `test:coverage`   |
| `setup`             | Install dependencies and run validation script                        |

## Initial setup

1. Change name across the project: package.json, README.md
1. Set SEO global tags: \_app.tsx
1. Load favicon & manifest: public
1. Load colors theme: theme.css, colors.stories.mdx, preview.js
1. Load typography theme: theme.css, typography.stories.mdx, preview-head.html, helpers.css, \_document.tsx
1. Load grid theme: theme.css, preview.js
1. Set body style: global.css
1. Remove this section from README.md 😉
