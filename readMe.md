# ngTestApp

## To Run
 1. Clone repository
 2. run `npm install`
 3. run `npm install typings install`
 4. run `npm start`
 
 ## Note on Typescript
 Typescript is only included, because it is my transpiler of choice.  Babel could also be used. The code should all be
 ES6 compliant plus decorators, and ES7 feature supported by both Typescript and Babel (with plug-in).
 
 ## Packaging
 As of today (08/15/2016) packaing is not part of the process. SystemJS is currently used as the loader, but we will
 probably re-tool this for Webpack.
 
 ## Note on HTML and CSS
 The HTML and CSS files are output from Axure. Axure is a good prototyping tool, but it's web output is not usable
 for building real applications. The HTML structure is flattened, and the CSS is heavy in absolute positioning and
 z-indexes.  Enough changes were made to overcome these issues.  Otherwise, this is the HTML and CSS provided.
 