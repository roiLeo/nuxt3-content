[![Content Wind](https://github.com/roiLeo/nuxt3-content/raw/main/public/cover.jpg)](https://content-wind.nuxt.dev)

# Content Wind

A lightweight Nuxt template to write a Markdown driven website, based on [Nuxt Content](https://content.nuxtjs.org), [WindiCSS](https://windicss.org/) and [Iconify](https://iconify.design).

- [Demo & Docs](https://content-wind.nuxt.dev)
- [Play online](https://stackblitz.com/github/roiLeo/nuxt3-content?file=content%2F1.index.md)

## Features

- Create pages in Markdown in the `content/` directory
- Enjoy meta tag generation from Markdown files
- Switch between Light & Dark mode :moon:
- Generated navigation based on your pages
- Access 100,000 icons from 100+ icon sets with the `<Icon>` component
- Highlight code blocks with [Shiki](https://shiki.matsu.io)
- Create Vue components and use them in your Markdown
- Deploy on any Node or Static hosting: GH Pages, Vercel, Netlify, Heroku, etc.

## Usage

Take a look at [content-wind.nuxt.dev](https://content-wind.nuxt.dev) for the complete documentation.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FroiLeo%2Fnuxt3-content) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/roiLeo/nuxt3-content)


### Static Hosting

Pre-render the website to be deployed on any static hosting:

```bash
yarn generate
```

The `dist/` directory is ready to be deployed (symlink to `.output/public`), [learn more on Nuxt docs](https://v3.nuxtjs.org/guide/deploy/static-hosting).

### Node server

Build the application for production:

```bash
yarn build
```

Start the server in production:

```bash
node .output/server/index.mjs
```

Learn more on [Nuxt docs](https://v3.nuxtjs.org/guide/deploy/node-server) for more information.
