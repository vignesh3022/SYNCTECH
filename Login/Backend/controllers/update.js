const users=require("../data.json");
const fs=require("fs");

const doGet=(req,res)=>{
    console.log("success");
    return res.json(users);
}
const doPost=(req,res)=>{
    const {username,password}=req.body;
    const existingUser=users.find((u)=>u.username===username&&u.password===password);
    if(existingUser){
        console.log("valid user");
        return res.status(200).json({message:"Login successfull"});
    }
    else{
        console.log("invalid user");
        return res.status(400).json({message:"Invalid username or password"});
    }
};

const doPostt=(req,res)=>{
    const {username,email,password}=req.body;
    const existingUser=users.find((u)=>u.username===username);
    if(existingUser){
        console.log("user already exist");
        return res.status(400).json({message:"Failed to add"});
    }else{
        console.log("user added");
        const newuser={username,email,password};
        users.push(newuser);
        fs.writeFile("./data.json",JSON.stringify(users),(err)=>{
            if(err){
                return res.status(500).json({message:"Failed to add"});
            }
            return res.status(201).json({message:"user created"});
        });
    }
};
module.exports={
    doPost,
    doPostt,
    doGet
};