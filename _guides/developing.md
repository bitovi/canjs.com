@page Developing Developing CanJS
@parent guides 3

To develop CanJS, add features, etc, you first must install DoneJS. DoneJS is the parent project of CanJS. DoneJS is the 4.0 version of JavaSciptMVC. It has DocumentJS and Steal as submodules that are used to generate the documentation and build the CanJS downloads.

## Installing

1. `fork` CanJS on [GitHub](https://github.com/bitovi/canjs).

2. Clone DoneJS with:

		git clone git@github.com:bitovi/donejs

3. Open the donejs folder’s .gitmodule file and change the URL of the "can" submodule:

		url = git://github.com/bitovi/canjs.git

	to your `fork`ed URL like

		url = git://github.com/justinbmeyer/canjs.git

4. Install all submodules by running

		cd donejs
		git submodule update --init --recursive

Depending on your version of git, you might need to cd into each submodule and run `git checkout`.

## Developing

After installing CanJS and DoneJS, you’ll find CanJS’s files in a `can` folder. Within `can`, you’ll find a folder for each feature of CanJS: `construct`, `control`, `model`, etc.

Within each feature folder, for example `construct`, you’ll find a file for:

* the implementation of the feature - `construct.js`
* a demo of the feature - `construct.html`
* an overview documentation page - `construct.md`
* the feature’s tests - `construct_test.js`
* a page to run those tests - `qunit.html`

Any plugins for that feature will be folders within the feature’s folder. Ex: `proxy`, `super`.

The `can/test` folder contains:

* a `test.html` page which tests jQuery by default. Load e.g. `test.html?library=mootools` to test another library.
* a test page that tests all libraries and plugins: `index.html`
* a file that loads all feature tests: `can_test.js`
* a `plugin_test.html` file that tests all plugins

The `can/util` folder contains the compatibility layer for each library.

To develop CanJS:

1. Edit the feature’s file.
2. Add tests to the feature’s test file.
3. Open the feature’s test page. Make sure it passes.
4. Open can/test/index.html in every browser to test everything.
5. Submit a pull request!

## Documentation

To edit the documentation at [DoneJS.com](http://doneJS.com/docs.html):

 1. [install](#developing_canjs-installing) CanJS and DoneJS.
 2. Edit the markdown and js files in the [CanJS github repo](https://github.com/bitovi/canjs).  For example, to edit [can.Control's overview page](http://donejs.com/docs.html#!can.Control),
change [can/control/control.md](https://github.com/bitovi/canjs/blob/master/control/control.md).  To edit [can.Control's destroy method](http://donejs.com/docs.html#!can.Control.prototype.destroy),
change [can/control/control.js](https://github.com/bitovi/canjs/blob/master/control/control.js#L939)
where you find the `destroy` comment.
 3. Generate the docs with:

        ./js site/scripts/doc.js

    View them at `site/docs.html`

 4. Submit a pull request.

## Making a build

To make the CanJS builds, run:

@codestart
./js can/build/build.js
@codeend

It puts the downloads in `can/dist/edge`.

## List of heroes

The following lists everyone who's contributed something to CanJS.  If we've forgotten you, please add yourself.

First, thanks to everyone who's contributed to [JavaScriptMVC](https://github.com/bitovi/javascriptmvc/contributors)
and [jQueryMX](https://github.com/jupiterjs/jquerymx/contributors), and the people at
[Bitovi](http://bitovi.com/people/).  You deserve heaps of recognition as CanJS is direcly based
off JavaScriptMVC.  This page is for contributors after CanJS's launch. Thank you

- [noah](https://github.com/iamnoah)
([1](https://github.com/bitovi/canjs/commit/8193e359cde3b77a44c683ca9f8a5268fc9df44b),
[2](https://github.com/bitovi/canjs/commit/b865588710e7e7dd8a9588ebf8e8c0f4d19fd800),
[3](https://github.com/bitovi/canjs/commit/83a48e7bcb05ed9f179159f540b181db4dcf6e9c),
[4](https://github.com/Spredfast/canjs/commit/dc7ddd2dc619619f3955c31be1435c6f927b7a35),
[5](https://github.com/bitovi/canjs/pull/214), [6](https://github.com/bitovi/canjs/pull/310))
- [thecountofzero](https://github.com/thecountofzero)
([1](https://github.com/bitovi/canjs/commit/e920434fa53975013688d065ce2e304f225fae75),
[2](https://github.com/bitovi/canjs/commit/8e98186e00b7d6b88869baeb97244877f143034e),
[3](https://github.com/bitovi/canjs/pull/315))
- [roissard](https://github.com/roissard) ([1](https://github.com/bitovi/canjs/commit/44bc72063e429bbc3f8a9a696a3ae4a7e57d12c8),
[2](https://github.com/bitovi/canjs/commit/c711fe05e1cdc99c72df8ac0f415c2ccb536d197))
- [Michael Kebbekus](https://github.com/makebbekus)
([1](https://github.com/bitovi/canjs/commit/d658d4910e8f3f391e9394449efe2f0c67581dbe))
- Daniel Salet ([1](https://github.com/bitovi/canjs/commit/92487178255360d40b75be49681dc65cbfbf3e18))
- [Daniel Franz](https://github.com/daniel-franz)
([1](https://github.com/bitovi/canjs/commit/4aae36eea9d671a12f9c459733c48b6fd1e99af4))
- [trickeyone](https://github.com/trickeyone)
([1](https://github.com/trickeyone/canjs/commit/2c11f56e0a0511749243055276e3b806984b15fa))
- [rjgotten](https://github.com/rjgotten)
([1](https://github.com/bitovi/canjs/commit/92c98e7c80d5fd7357eae69a60313d3d06efbdcb))
- Amy Chen ([1](https://github.com/bitovi/canjs/commit/3eee6ba9c69410ac549b909b1c8f860e6d591612))
- [Max Sadrieh](https://github.com/ms)
([1](https://github.com/bitovi/canjs/commit/06c5a4b3d50d14c5881ee55642fa10f37b71af0b))
- [dimaf](https://github.com/dimaf)
([1](https://github.com/bitovi/canjs/commit/fc8a4d57c99a280025eb7c613cef92de28c3c160),
[2](https://github.com/bitovi/canjs/pull/145))
- [yusufsafak](https://github.com/yusufsafak) ([1](https://github.com/bitovi/canjs/pull/30))
- [verto](https://github.com/verto) ([1](https://github.com/bitovi/canjs/pull/32))
- [WearyMonkey](https://github.com/WearyMonkey) ([1](https://github.com/bitovi/canjs/issues/27))
- [cohuman](https://github.com/cohuman)
([1](https://github.com/bitovi/canjs/pull/23), [2](https://github.com/bitovi/canjs/pull/26))
- [roelmonnens](https://twitter.com/roelmonnens)
- [Craig Wickesser](https://github.com/mindscratch) ([1](https://github.com/bitovi/canjs/pull/188))
- [Jeff Rose](https://github.com/jeffrose) ([1](https://github.com/bitovi/canjs/pull/201))
- [Brad Momberger](https://github.com/bmomberger-reciprocity) ([1](https://github.com/bitovi/canjs/pull/292))
- [Pablo Aguiar](https://github.com/scorphus) ([1](https://github.com/bitovi/canjs/pull/303),
[2](https://github.com/bitovi/canjs/pull/313),
[3](https://github.com/bitovi/canjs/pull/317))
- [David Schovanec](https://github.com/schovi) ([1](https://github.com/bitovi/canjs/pull/325),
[2](https://github.com/bitovi/canjs/pull/332))
- [Dan Connor](https://github.com/onyxrev) ([1](https://github.com/bitovi/canjs/pull/284))
- [Jesse Baird](https://github.com/jebaird) ([1](https://github.com/bitovi/canjs/pull/319))

for helping us with new features, bug fixes, and getting this out the door.
