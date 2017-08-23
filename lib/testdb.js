var sqlite3 = require('sqlite3')
    .verbose();
var db = new sqlite3.Database('training', function (err) {
    if (err) {
        return console.log('Λάθος:' + err);
    } else {
        console.log('Η βάση συνδέθηκε');
        checkTable('athletes');
        db.close();
    }
});

//Δημιουργία των πινάκων που λείπουν (αν λείπουν)
function createTable(tableName) {
    var query = 'CREATE TABLE ' + tableName + '(';
    switch (tableName) {
    case 'athletes':
        query += `id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
                name TEXT NOT NULL, 
                weight REAL NOT NULL, 
                height REAL NOT NULL, 
                sex INTEGER NOT NULL, 
                age TEXT NOT NULL,  
                vo2max TEXT NOT NULL)`;
        break;
    }

    db.run(query, [], function (err) {
        if (err !== null) {
            console.log('createTable (' + tableName + ') error:' + err);
        }
        return (err === null);
    });
}

//checks for tables
function checkTable(tableName) {
    db.all('SELECT name ' +
        'FROM sqlite_master ' +
        'WHERE type= ? AND name=?', ['table', tableName],
        function (err, row) {
            if (err) {

                console.log(err);
            }
            if (row.length === 0) {

                if (createTable(tableName, "") === false) {
                    return false;
                } else {
                    return true;
                }
            }
            console.log(tableName + ' ' + JSON.stringify(row));
            return true;
        });
}
