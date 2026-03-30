
# A11y Examples

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

A documentation site outlining a11y best practices and failures in actual HTML code with annoations explaining accessibility failure and success techniques.

## Local Development Note
The project uses a `base` path for GitHub Pages compatibility. When running locally, the site is accessible at `http://localhost:4321/`. If `NODE_ENV` is set to production, it will expect the `/a11y-examples` subpath.

## Project Structure
* `src/content/docs/`: Where the documentation and code examples live as `.mdx` files.
* `src/styles/`: Contains `global.css` with refactored Starlight variables for light/dark mode support.
* `.github/workflows/`: Contains the automated deployment script for GitHub Pages.

this project uses the [Astro Starlight](https://starlight.astro.build/) documentation framework.

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

### Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
