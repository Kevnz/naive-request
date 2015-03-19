## Naive-Request

This is a simple xmlhttp module to perform synchronous requests. Just meant to grab json data from your own server.

```
var nr = require('naive-request');

nr.get({endpoint:url});
//or just
nr.get('/mydata.json');
//or just want a node of data?
nr.get({endpoint:url, node: 'myNode'});
```