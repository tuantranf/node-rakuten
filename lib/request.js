'use strict';

var _ = require('lodash');
var request = require('superagent');

var _config = {};

exports.setup = function(config) {
  _config = _.clone(config);
};

var execute = function(method, path, params, callback) {
  var url = _config.endpoint.url + path;
  var req = request[method](url);

  // application config
  if (_config.app) {
    params.query = params.query || {};
    _.extend(params.query, {
      applicationId: _config.app.application_id,
      affiliateId: _config.app.affiliate_id,
      format: 'json'
    });
  }

  // query parameters
  if (params.query) {
    req.query(params.query);
  }

  // timeout (ms)
  if (_config.timeout) {
    req.timeout(_config.timeout);
  }

  if (params.data) {
    req.send(params.data);
  }

  req.end(function(err, res) {
    if (err) {
      return callback(err);
    }

    if (res.status < 200 || res.status >= 300) {
      var error = new Error(res.body.error);
      return callback(error);
    }

    callback(null, res.body);
  });
};

exports.execute = execute;

exports.get = function(path, params, callback) {
  execute('get', path, params, callback);
};

exports.post = function(path, params, callback) {
  execute('post', path, params, callback);
};

exports.put = function(path, params, callback) {
  execute('put', path, params, callback);
};

exports.del = function(path, params, callback) {
  execute('del', path, params, callback);
};
