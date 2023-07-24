import express  from "express";
import path from "path";


const users=[];
const server=express();
server.set("view engine", "ejs")

server.use(express.static(path.join(path.resolve(),"public")))

server.use(express.urlencoded({extended:true}))

server.get("/",(req,res)=>{
    res.render("index")
});
server.get("/success",(req,res)=>{
    res.render("success")
});

server.post("/",(req,res)=>{
    users.push({username:req.body.name,useremail:req.body.email})

    res.redirect("/success");
})


server.get("/users",(req,res)=>{
    res.json({
        users
    })
})
server.listen(5000,()=>{
    console.log("server is working")
})