const express = require('express')
const app = express()
const PORT = 4000
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('posts');
const bcrypt = require('bcrypt')
const cors = require('cors');


app.use(bodyParser.json())
app.use(cors())


app.get('/getAllUsers', (req, res)=>{
    db.all("SELECT * FROM users", (err,data)=>{
        console.log(1)
        res.json(data)
    })
})

app.get('/getAllPosts', (req, res)=>{
    db.all("SELECT * FROM posts", (err,data)=>{
        res.json(data)
    })
})

app.post('/checkUser', (req, res)=>{
    // console.log(req.body)
    const {name, password} = req.body

    db.get(`SELECT * FROM users WHERE userName = '${name}'`, (err, data)=>{
        
        if(bcrypt.compareSync(password,data.password)){
            // db.run(`INSERT INTO users(userName, password) VALUES ('${name}', '${password}')`)
            return res.json({userId: data.id, userName: data.userName})
        }
        else
        res.sendStatus(401);
        console.log(err)
    })
    // res.sendStatus(200)
})


// app.post("/addPost", (req,res)=>{
//     const {userName, text} = req.body
//             db.run(`INSERT INTO posts(userName, text) VALUES('${userName}', '${text}')`)
//             res.sendStatus(208)
// })



app.post("/addUser", (req,res)=>{
    const {name, password} = req.body
    db.all(`SELECT * FROM users WHERE userName='${name}'`, (err, data)=>{
        if(!data.length){
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            db.run(`INSERT INTO users(userName, password) VALUES('${name}', '${hash}')`)

            db.get("SELECT users.id, userName FROM users WHERE userName=?", name, (err, data)=>{
                return res.json(data)

            })
        }
        else
            res.sendStatus(401)
        console.log(err)
    })
})

app.get('/delelePost/:id', (req, res)=>{
    db.run(`DELETE FROM posts WHERE id=${req.params.id}`)
    db.all("SELECT posts.id, text, name FROM posts JOIN users ON posts.user_id=users.id", (req, res)=>{
        res.json(data)
    })
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})