"use strict";

var fs = require('fs');
var path = require('path');
var _ = require('lodash');

_.forEach(fs.readdirSync(__dirname), function(name) {
  if ((name !== 'index.js') && (path.extname(name) === '.js')) {
    var basename = path.basename(name, '.js');
    exports[basename] = require('./' + basename);
  }
});
