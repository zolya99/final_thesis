const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM posts", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

// Route to get one post
app.get("/api/getFromId/:id", (req,res)=>{

const id = req.params.id;
 db.query("SELECT * FROM users WHERE id = ?", id, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

// Route for creating the post
app.post('/api/create', (req,res)=> {

const fname = req.body.fname;
const lname = req.body.lname;
const email = req.body.email;
const pw = req.body.pw;

db.query("INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)",[fname, lname, email, pw], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })



// Route to delete a post

app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM users WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})