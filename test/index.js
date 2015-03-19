var assert = require('assert');

describe('The Naive-Request Module', function () {
	it('should get a json object from just a url', function (done) {
		var nr = require('../index');
		var url = '/test/data.json';
		var data = nr.get(url);
		assert.ok(data.data,'test');
		done();
	});
	it('should get a json object from a url endpoint', function (done) {
		var nr = require('../index');
		var url = '/test/data.json';
		var data = nr.get({endpoint:url});
		assert.ok(data.data,'test');
		done();
	});
	it('should get a json node from a url endpoint and node', function (done) {
		var nr = require('../index');
		var url = '/test/data.json';
		var data = nr.get({endpoint:url, node: 'data'});
		assert.ok(data,'test');
		done();
	});

});