// import 'core-js/es6';  //dont need for chrome, tring to make file smaller
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

if (process.env.ENV === 'production') {
    // Production
} else {
    // Development

    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}