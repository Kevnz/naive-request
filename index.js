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
        q.open('GET', endpoint, false);
        q.send(null); 
        if (node) {
           return JSON.parse(q.response)[node]; 
        }
        return JSON.parse(q.response);
    },
    post: function (url, data) {
        var q = new XMLHttpRequest(); 
        q.open('POST', endpoint, false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        q.send(data); 
        return JSON.parse(q.response);
    }
};