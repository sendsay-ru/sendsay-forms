var tester = (function() {
    var args = window.__karma__.config.args;
    var config = args[0];
    if(config && config.match && config.match.trim() !== '' ) {
        return new RegExp(config.match);
    } else if(config &&  config.filename && config.filename.trim() !== '' ) {
        return new RegExp(config.filename + '\\.spec\\.js$');
    } else {
        return new RegExp('\\.spec\\.js$');
    }
})();

var specFiles = Object.keys(window.__karma__.files).filter(function (file) {
    return tester.test(file);
});

var specModules = specFiles.map(function(moduleUrl){
    return moduleUrl
        .replace(/\/base\/src\//g, '');
});

specModules = specFiles;


System.config({
        baseURL: '/'
      });
document.addEventListener('load', function() {
    console.log('testsetsetsets');
})
// loads /app/main.js
console.log(specModules);
System.import(specModules[0]).then(function() {
    console.log('test');
    window.__karma__.start();
});
