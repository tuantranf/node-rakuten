'use strict';

/**
 * Rakuten Client
 *
 */

function RakutenClient(config) {
  require('./request').setup(config);

  this.api = require('./api');
}

module.exports = RakutenClient;
