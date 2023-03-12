const Users=require('./userSchema')
const mongoose=require('mongoose')



const userController={
     get:async(req,res)=>{

        const users=await Users.find()
        res.send(users)
        },
    add:async(req,res)=>{
       
        const user=Users.create({name:req.body.name,email:req.body.email,password:req.body.password})
        res.send("user Created")
      
    },
    update:async(req,res)=>{
     
     await Users.updateOne({name:req.body.name},{name:req.body.newName})
     res.send("user updated")
    },
    delete:async(req,res)=>{
       
          const test=  await Users.deleteOne({name:req.body.name})

          if(test.deletedCount>0)
            res.send("user deleted")
           else res.send("erreur")
     
      
        
    }

}

module.exports=userController