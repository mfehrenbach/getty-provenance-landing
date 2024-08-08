# Getty Provenance Index landing page

This is a self-contained landing page for the [Getty Provenance Index](https://www.getty.edu/research/tools/provenance/).

## Development

It is built using [Eleventy](https://www.11ty.dev) for some “light templating” and “basic ergonomics.”

To run it locally, you’ll need [Node](https://nodejs.org/en). The easiest way to get this (if you have [Homebrew](https://brew.sh) installed) is `brew install node`. Node will do everything else for us.

Run `npm install` to pull the dependencies, and `npm run serve` to develop locally. The page and its assets are output to the `_site` directory.

For sharing, the site is also [built and served](https://mfehrenbach.github.io/getty-provenance-landing/) on GitHub Pages, via [a workflow](.github/workflows/build-deploy.yml).
