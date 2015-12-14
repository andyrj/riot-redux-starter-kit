# riot-redux-starter-kit
Yet another todo app, using RiotJS and Redux...  I threw in a counter for good measure!

**Not pretty html, need to style it with purecss or something**

This is a simple project that has everything setup for TDD/BDD nodejs and browser javascript development with RiotJS and Redux.

I am not taking advantage of the immutable state in my components.render methods, I should probably add some === comparisons before updating each of them somehow.

I followed along with [Dan Abramov on egghead.io](https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree) to build this project. Redux is a brilliant little development pattern and Dan is awesome.

To be sure I attribute credit for the config and testing portions I adapted for this project I used bits and pieces/inspiration from the following:
 * Inspired from [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) only part I am really missing is a hot-loader, live-loader is sufficient for my purposes
 * Some parts of my test code is from [full-stack-redux-tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)
 * Uses [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) - I only tested with the chrome extension but I assume the others work as well.
 * I am not the first person to put together a riot redux project and had tried the following projects before making my own bare bones project
 	* [isomorphic-proof-of-concept](https://github.com/PabloSichert/isomorphic-proof-of-concept)
 	* just as I was wrapping this up I saw a pretty similar project from the riot forums, oh well, I'm not using mixin's...  [redux-poc](https://github.com/nikek/redux-poc)
 	* [riotjs-loader](https://github.com/esnunes/riotjs-loader) made working with webpack and riot much easier


