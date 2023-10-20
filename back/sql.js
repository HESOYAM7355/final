
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('posts');


db.all("SELECT * FROM users", (err, data)=>{
    console.log(data)
})