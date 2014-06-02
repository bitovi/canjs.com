# CanJS.com - The CanJS website

## Setup

Clone this repository and install all submodules:

	git submodule init
	git submodule update

Next, install the required NPM modules:

	npm install

If you need to re-generate the docs while testing some changes, run:

	./js scripts/doc.js

To simply re-generate the site, docset, and all other content, run:

    grunt docjs

## Additional instructions and options

To adjust __styles__:

* Change what you find in `scripts/static/styles`.
* Don't change documentjs unless you want those changes to be applied to everything.
* What you find in `scripts/static` overwrites what's in `documentjs/site/default/static`.

To adjust __JS__:

* Copy `documentjs/site/default/static/static.js` to `scripts/static/static.js`.
* Add other scripts to `scripts/static/`. Steal those scripts within `static.js`.
* Make sure you use relative paths (`"./path/to.js"`).

To adjust __HTML__:

* change `scripts/templates/` or `_pages`.

After updating static content or templates, delete `documentjs/site/static/dist/production.css` and `docs/static/production.css` and run:

    ./js scripts/doc.js

Add __-f__ to force a new production.js and production.css like:

    ./js scripts/doc.js -f
    
Add __-c__ or __-concatonly__ to leave production unminified.

	./js scripts/doc.js -c

Add __-g__ or __-generateDocset__ to re-generate the docs AND docset directory. (By default, `grunt docjs` will use this option.)

	./js scripts/doc.js -g

__NOTE:__ Do not commit the *.docset directories that this will generate. Instead, after compressing the package and submitting to Kapeli, erase the files.

If you are having trouble building, open `/documentjs/site/static/build/build.html` in your 
browser. This page attempts to load all the static content of the site with steal.

## Folder structure

__NOTE:__ Folders starting with `_` won't show up on the Homepage ([More info about Jekyll](http://jekyllrb.com/docs/structure/)).

- `_guides` - Submodule for the [CanJS Wiki](https://github.com/bitovi/canjs/wiki) Git repository
- `_pages` - Mustache templates which will be rendered as their HTML equivalents in the root folder
- `can` - Submodule for the [CanJS repository](https://github.com/bitovi/canjs) Git repository
- `docs` - The generated documentation (from the `can` folder) - *Do not modify files in this folder*
- `guides` - The generated guides (from the `_guides` markdown files) - *Do not modify files in this folder*
- `img` - Image resources.
- `resources` - Other resources like generated CSS and additional JavaScript.
- `scripts` - Contains the documentjs configuration code, including custom css, js, templates and specifies the scripts that comprise CanJS.

## Deploy

If you changed any of the submodules, commit those changes and push them to GitHub first (more about why [here](http://git-scm.com/book/en/Git-Tools-Submodules)) . Then, commit and push this repository back to `gh-pages`:

	git push origin gh-pages

## Deploying Dash Docsets

These scripts now include a component to generate [Dash](http://kapeli.com/dash)-compatible documentation archives. Once all the documentation has been generated from the above command, you can submit a pull request for their docset integration [here](https://github.com/Kapeli/Dash-User-Contributions). For CanJS docs, we use the following convention (example: for CanJS Version 2.1.0 and today's date):

* use the Major, Minor, and patch version for the CanJS directory (ex. `docsets/CanJS/versions/2.1.0/CanJS.tgz`)
* use the Major, Minor, and patch version with the date in the docset.json file (ex. `"version": 2.1.0/2014-05-16`) and update for specific versions like:

	// ...
	"specific_versions": [
		{ "_comment": "Current and Legacy Versions of CanJS" },
		{
			"version": "2.1.0/2014-05-16",
			"archive": "versions/2.1.0/CanJS.tgz"
		},
		{
			"version": "2.0.6/2014-04-28",
			"archive": "versions/2.0.6/CanJS.tgz"
		},
		{
			"version": "2.0.5/2014-04-10",
			"archive": "versions/2.0.5/CanJS.tgz"
		},
		// ...
	]

For now, do not commit the directories or files created by the docset generation script. Once the pull request has been submitted to Kapeli, erase the *.docset directories and tgz files. In the future, this behavior will be automated.

## Notes

- Always keep submodule references up to date by running the `update` command above.
- When pulling from `gh-pages` (or any other branch off of it), remember to `npm install` in case new packages were added.
- Only push to gh-pages for a new release, it will update the homepage right away
- *Do not modify any HTML and CSS files directly. They are generated when running the Grunt tasks.*

## TODO

- Image resources (`img`) should be moved to `scripts/static/img`.
- Other resources `resources` should be removed.
- Automate the process for preparing and submitting the Docsets for inclusion in Dash.app