const express = require("express");
const app = express();
const path = require("path");
const {v4} = require('uuid');


const CONTACTS = [
    {id:v4(),name:"Alexander",value:"+996770360239",marked:false},
    {id:v4(),name:"Victoria",value:"+9967203126029",marked:false},
    {id:v4(),name:"Riccardo",value:"+996722160456",marked:false},

];
app.use(express.json());
app.get('/api/contacts',(req,res) => {
    res.status(200).json(CONTACTS)
});
app.post('/api/contacts',(req,res)=>{
    const contact = {...req.body,id:v4(),marked:false};
    CONTACTS.push(contact);
    console.log(req.body);
    res.status(201).json(contact);
});



app.use(express.static(path.resolve(__dirname,"client")));
app.listen("8082", ()=> console.log("Server is working on port :8082"));
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","index.html"));
});