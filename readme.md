# CanJS.com - The CanJS website

Clone the repository and install all the dependencies and submodules (you need [GruntJS](http://gruntjs.com) installed
globally):

  git clone git@github.com:bitovi/canjs.us.git
  cd canjs.us
  git submodule update --init --recursive
  npm install

Now you can run `grunt` to build everything and `grunt watch` to watch for any file changes.

Tasks:

- `js` - Create production JavaScript (including compiled views)
- `default` - Create production JavaScript, compile Less files and generate everything

Specific watch tasks:

- `grunt watch:less` - Watch for changes in Less files and compile to CSS
- `grunt watch:docs` - Watch for changes in the documented files and generate it
- `grunt watch:js` - Watch for changes in JavaScript files
- `grunt watch:pages` - Watch for changes in any documentation pages
- `grunt watch:all` - Watch and run everything
