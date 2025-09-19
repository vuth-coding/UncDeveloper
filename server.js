const express = require("express")
const app = express();
const PORT = 3000;
const name = "Heab Dara";
const group = "SV11.12"

app.use(express.json());
app.get("/" , (req, res) => {
    res.send("Server nodejs is running!"+"<br>"+
        "My Fullname is : "+ name+ "<br>"+
        "I come from : "+ group
    );

});
app.get('/api' , (req , res)=>{
    const name=req.query.name || 'Welcome';
    res.send(`Hello, ${name}`);
});

app.post('/add',(req,res)=>{
    const {name,gender,age,position}=req.body;
    res.json({
        message:"User add successfully!!",
        data:{name,gender,age,position},
    });
});

app.delete("/delete/:id",(req,res)=>{
    const id =req.params.id;
    res.json({
        message:`User has id :${id} delete successfully`,
    });
});

app.listen(PORT,() => {
 console.log(`Nodejs is running with http://localhost:${PORT}`);
});
