const express=require("express");
const app=express();
const port=3000;
app.use(express.json());

let email=[];
let password=[];

app.get("email,password",(req,res)=>{
    ({
        email:required, password:required
    });
    res.send({message: "Successfully" });
})

app.post(email,password,(req,res)=>{
    email=email,
    password=password;
    res.send({message:"Email cannot be empty"});
    res.send({message:"password cannot be empty"});
})

app.listen(port, () => {
    console.log(` server is  running at http://localhost:${port}`);
});