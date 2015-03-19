'use strict';
module.exports = {
    get: function (opts) {
        console.log(typeof opts);
        var endpoint, node, data, querystring, qstring;
        if (typeof opts === 'string') {
            endpoint = opts;
        } else {
            endpoint = opts.endpoint;
            node = opts.node;
            data = opts.data; 
        }
        
        if (data !== null) {
            querystring = require('querystring');
            qstring = querystring.stringify(data);
            endpoint = endpoint + '?' + qstring;
        }
        var q = new XMLHttpRequest();
        console.log(q);
        q.open('GET', endpoint, false);
        q.send(null);
        console.log(q.response);
        if (node) {
           return JSON.parse(q.response)[node]; 
        }
        return JSON.parse(q.response);
    }
};