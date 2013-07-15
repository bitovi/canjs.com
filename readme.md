# CanJS.com - The CanJS website

## Installation

Clone the repository and install all the dependencies and submodules (you need [GruntJS](http://gruntjs.com) installed
globally):

    git clone git@github.com:bitovi/canjs.com.git
    cd canjs.com
    git submodule update --init --recursive
    npm install

Now you can run `grunt` to generate the entire page (needs to run after every change) or the more convenient
`grunt watch:all` to watch for any file changes.

## Folder structure

Folders starting with `_` won't show up on the Homepage (Jekyll).

- `_guides` - Submodule for the [CanJS Wiki](https://github.com/bitovi/canjs/wiki) GIT repository
- `_pages` - Mustache templates which will be rendered as their HTML equivalents in the root folder
- `_styles` - Additional Less/CSS stylesheets for this project (e.g. setting color configurations before including the shared styles)
- `can` - The [CanJS repository](https://github.com/bitovi/canjs) submodule
- `docs` - The generated documentation (from the `can` folder) - *Do not modify files in this folder*
- `guides` - The generated guides (from the `_guides` markdown files) - *Do not modify files in this folder*
- `img` - Image resources
- `resource` - Other resources like generated CSS and additional JavaScript
- `shared` - The [shared-web](https://github.com/bitovi/shared-web) submodule

## Deploy

Update all submodules and submodule references first and push them to GitHub, then commit and push this
repository back to `gh-pages`.

## Notes

- Always keep submodule references up to date
- Only push to gh-pages for a new release, it will update the homepage right away
- *Do not modify any HTML and CSS files directly. They are generated when running the Grunt tasks.*

