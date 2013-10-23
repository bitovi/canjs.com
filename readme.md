# CanJS.com - The CanJS website

## Setup

Clone the repository and install all submodules.

To generate the site, run:

    ./js scripts/doc.js

To adjust __styles__, change what you 
find in `scripts/static/styles`. Don't change documentjs unless you want those changes to be 
applied to everything.  What you find in `scripts/static` overwrites what's in `documentjs/site/default/static`.

To adjust __JS__, copy  `documentjs/site/default/static/static.js` to `scripts/static/static.js`. 
Add other scripts to `scripts/static/`. Steal those scripts within `static.js`.  Make sure you use relative paths (`"./path/to.js"`).

To adjust __HTML__, change scripts/templates/ or _pages.

After updating static content or templates, delete `documentjs/site/static/dist/production.css` and `docs/static/production.css` and run:

    ./js scripts/doc.js

Add __-f__ to force a new production.js and production.css like:

    ./js scripts/doc.js -f
    
Add __-c__ or __-concatonly__ to leave production unminified.


If you are having trouble building, open `/documentjs/site/static/build/build.html` in your 
browser. This page attempts to load all the static content of the site with steal.

## Folder structure

Folders starting with `_` won't show up on the Homepage (Jekyll).

- `_guides` - Submodule for the [CanJS Wiki](https://github.com/bitovi/canjs/wiki) GIT repository
- `_pages` - Mustache templates which will be rendered as their HTML equivalents in the root folder
- `can` - The [CanJS repository](https://github.com/bitovi/canjs) submodule
- `docs` - The generated documentation (from the `can` folder) - *Do not modify files in this folder*
- `guides` - The generated guides (from the `_guides` markdown files) - *Do not modify files in this folder*
- `img` - Image resources. This should be moved to `scripts/static/img`
- `resources` - Other resources like generated CSS and additional JavaScript. This should also be removed.
- `scripts` - Contains the documentjs configuration code, including custom css, js, templates and specifies the scripts
  that comprise CanJS.

## Deploy

Update all submodules and submodule references first and push them to GitHub, then commit and push this
repository back to `gh-pages`.

## Notes

- Always keep submodule references up to date
- Only push to gh-pages for a new release, it will update the homepage right away
- *Do not modify any HTML and CSS files directly. They are generated when running the Grunt tasks.*

