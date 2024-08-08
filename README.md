# Getty Provenance Index landing page

This is [a self-contained landing page](index.webc) for the [Getty Provenance Index](https://www.getty.edu/research/tools/provenance/), as part of [its remodel](https://www.getty.edu/research/tools/provenance/provenance_remodel/index.html).

## Build

It is built using [Eleventy](https://www.11ty.dev) for some “light templating” and “basic ergonomics,” using [WebC](https://www.11ty.dev/docs/languages/webc/).

To run it locally, you’ll need [Node](https://nodejs.org/en). The easiest way to get this (if you have [Homebrew](https://brew.sh) installed) is `brew install node`. Node will do everything else for us, as is custom.

Run `npm install` to pull the dependencies, and `npm run serve` to work locally. The page is output to the `_site` directory (which is not in version control)—with all of its assets bundled into the HTML for ease of implementation.

For sharing, the site is also [built and served](https://mfehrenbach.github.io/getty-provenance-landing/) on GitHub Pages, via [a workflow](.github/workflows/build-deploy.yml).

## Questions

This was designed and put together by [@mfehrenbach](https://github.com/mfehrenbach), if anything else comes up! ✊
