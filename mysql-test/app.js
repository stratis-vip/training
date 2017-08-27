"use strict";
exports.__esModule = true;
var http = require("http");
var dbase_1 = require("./lib/dbase");
//mysql section
var connected = false;
var counter = 0;
var port = process.env.PORT || 3000;
var requestListener = function (request, response) {
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    counter += 1;
    if (!connected) {
        dbase_1.connectToDb(function (err) {
            if (err) {
                return response.end(JSON.stringify(err));
            }
            response.write('DBServer connected\n');
            connected = true;
            dbase_1.runQuery(function (err, rows) {
                if (rows.length > 0) {
                    rows.forEach(function (element) {
                        response.write(JSON.stringify(element));
                    });
                    //  terminate();
                    response.end("" + counter);
                }
            });
        });
    }
    else {
        dbase_1.runQuery(function (err, rows) {
            response.write('Connected\n');
            if (rows.length > 0) {
                rows.forEach(function (element) {
                    response.write(JSON.stringify(element));
                });
                //  terminate();
                response.end("" + counter);
            }
        });
    }
};
var server = http.createServer(requestListener);
server.listen(port, function (err) {
    console.log("server listen on port " + port);
});
