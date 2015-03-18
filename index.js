module.exports ={ 
    'use strict';
    get: function (opts) {
        var endpoint = opts.endpoint, node = opts.node, data = opts.data, querystring, qstring;
        if (data !== null) {
            querystring = require('querystring');
            qstring = querystring.stringify(data);
            endpoint = endpoint + '?' + qstring;
        }
        var q = new XMLHttpRequest();
        q.open('GET', endpoint, false);
        q.send(null);
        return JSON.parse(q.response)[node];
    }
};