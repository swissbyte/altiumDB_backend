const mysql = require('mysql');

let res;
//
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "comp",
//     password: "comp",
//     database: "component"
// });
//
// export function connectToDB() {
//     con.connect(function (err) {
//         if (err) throw err;
//         console.log("Connected!");
//     });
// }
//
function queryCB(err, result) {
    if (err) throw err;
    console.log(Object.keys(result).length);
    res = result;
}

//
// export async function sqlQuery(query) {
//
//     res = null;
//     await con.query(query, queryCB);
//
//     console.log(res);
//     return "";
// }

export function connectToDB() {
    console.log("connected");
}

export function sqlQuery(query, callback) {
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'comp',
        password: 'comp',
        database: 'component'
    });

    conn.query(query, callback);
}

// all queries are done
