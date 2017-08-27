import * as http from 'http';
import * as db from './lib/dbase';
import { connectToDb, runQuery } from './lib/dbase';
//mysql section
let connected: boolean = false;
let counter: number = 0;


const port = process.env.PORT || 3000;
const requestListener = (request, response) => {
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    counter += 1;

    if (!connected) {
        connectToDb((err) => {
            if (err) { return response.end(JSON.stringify(err)); }
            response.write('DBServer connected\n');
            connected = true;

            runQuery((err, rows) => {
                if (rows.length > 0) {
                    rows.forEach((element) => {
                        response.write(JSON.stringify(element));
                    });
                    //  terminate();
                    response.end(`${counter}`);
                }
            });

        });
    } else {
        runQuery((err, rows) => {
            response.write('Connected\n');
            if (rows.length > 0) {
                rows.forEach((element) => {
                    response.write(JSON.stringify(element));
                });
                //  terminate();
                response.end(`${counter}`);
            }
        });
    }
};

const server = http.createServer(requestListener);

server.listen(port, (err) => {
    console.log(`server listen on port ${port}`);
});
