'use strict';

/**
 * @fileOverview Ichiba API
 * @name text.js
 */

var request = require('../request');

exports.item = {

  /**
   * Search item
   * @param  {[type]}   data     [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  search: function(data, callback) {
    request.get('/IchibaItem/Search/20140222', data, callback);
  },

  /**
   * Get item ranking
   * @param  {[type]}   data     [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  ranking: function(data, callback) {
    request.get('/IchibaItem/Ranking/20120927', data, callback);
  }
};

exports.product = {

  /**
   * Search item
   * @param  {[type]}   data     [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  search: function(data, callback) {
    request.get('/Product/Search/20140305', data, callback);
  }
};
