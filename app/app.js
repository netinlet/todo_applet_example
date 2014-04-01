// # app
//
// add dependencies
// host should include pouchdb
// host should include angular
require('angular-local-storage/angular-local-storage');


// main module info
angular.module('applet', [])
  .directive('applet', require('./directives/applet'));

angular.module('mytodo', ['LocalStorageModule'])
  .directive('mytodo', require('./directives/my_todo'));
