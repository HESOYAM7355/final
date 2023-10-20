const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('posts');

db.serialize(()=>{

    // Создание таблицы.    
    // db.run("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, userName TEXT, password TEXT)")
    // db.run("CREATE TABLE posts (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INT, text TEXT, FOREIGN KEY(user_id) REFERENCES users (id))")

    // Добавление тестовых данных.
    // db.run("INSERT INTO users(username, password) VALUES('user1','pass') ")
    // db.run("INSERT INTO users(username, password) VALUES('VITYA','nepomnyashij') ")



    // db.run("INSERT INTO posts(user_id, text) VALUES(1,'Некая интересная новость') ")
    // db.run("INSERT INTO posts(user_id, text) VALUES(2,'Некая интересный комментарий.') ")

db.all('SELECT * FROM USERS', (err, data)=>{
    console.log(data)
    
})


db.all('SELECT * FROM posts', (err, data)=>{
    console.log(data)
})
// const stmt1 = db.prepare('INSERT INTO users VALUES (?,?)')

// stmt1.run('user1','pass')
// stmt1.run('user2','nepomnyashij')

// stmt1.finalize()

// const stmt2 = db.prepare('INSERT INTO posts VALUES (?, ?)')

// stmt2.run(1, 'Некая интересная новость')

// stmt2.run(2, 'Некий интересный комментарий.')
// stmt2.finalize()

})
db.close()