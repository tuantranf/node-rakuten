/* global describe, it */

'use strict';

var expect = require('expect.js');

var client = require('../')(require('./config'));

// testing
describe('Ichiba', function() {
  describe('#item', function() {
    describe('#search', function() {
      it('can search item from server', function(done) {
        var params = {
          query: {
            keyword: '楽天',
            genreId: 559887,
            shopCode: 'rakuten24'
          }
        };
        client.api.ichiba.item.search(params, function(err, result) {
          if (err) {
            return done(err);
          }
          expect(result).to.be.an('object');
          done();
        });
      });
    });

    describe('#ranking', function() {
      it('can get item ranking from server', function(done) {
        var params = {};
        client.api.ichiba.item.ranking(params, function(err, result) {
          if (err) {
            return done(err);
          }
          expect(result).to.be.an('object');
          done();
        });
      });
    });
  });

  describe('#product', function() {
    describe('#search', function() {
      it('can get item ranking from server', function(done) {
        var params = {
          query: {
            keyword: 'golf'
          }
        };
        client.api.ichiba.product.search(params, function(err, result) {
          if (err) {
            return done(err);
          }
          expect(result).to.be.an('object');
          done();
        });
      });
    });
  });
});
