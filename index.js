// Evaluation U4C2




const express =require("express");
const mongoose= require("mongoose");

const app=express();
// app.use(express.json());
const connect=()=>{
    return mongoose.connect(
        "mongodb://127.0.0.1:27017/Banking"
    )

};


// creating schema



// user schema


const userschema=new mongoose.Schema(
    {
        firstName:{type:String,required:true},
        middleName:{type:String,required:false},
        lastName:{type:String,required:true},
        age:{ type:Number,required:true},
        email:{type:String,required:true},
        address:{type:String,required:true},
        gender:{type:String,required:false},
        type:{ type:String,required:false},

    },
    {
        versionKey:false,
        timestamps:true,
    }
)


// model

const User=mongoose.model("user",userschema);



// bankdetails schema

const bankdetailschema=new mongoose.Schema(

{

name:{type:String,required:true},
address:{type:String,required:true},
IFSC:{type:String,required:true},
MICR:{type:Number,required:true},

},
{
    versionKey:false,
    timestamps:true,
}
)

// model 

const Bankdetail=mongoose.model("bankdetail",bankdetailschema);


// masteraccount schema

const masteraccountschema=new mongoose.Schema(

    {

balance:{type:Number,required:true},

    },{
        versionKey:false,
        timestamps:true,
    }
)
// model

const Masteraccount=mongoose.model("masteraccount",masteraccountschema)


// Fixedaccount Schema

const fixedaccountschema=new mongoose.Schema(
    {
        account_number:{type:Number,required:true,unique:true},
        balance:{type:Number,required:true},
        interestRate:{type:Number,required:true},
        startDate:{type:Number,required:true},
        maturityDate:{type:Number,required:true},

    },{
        versionKey:false,
        timestamps:true,
    }
)
// model

const Fixedaccount=mongoose.model("fixedaccount",fixedaccountschema)


// savingaccountschema

const savingaccountschema=new mongoose.Schema({

    account_number:{type:Number,required:true,unique:true},
        balance:{type:Number,required:true},
        interestRate:{type:Number,required:true},
},
{
    versionKey:false,
    timestamps:true,
})
// // model

const Savingaccount=mongoose.model("savingaccount",savingaccountschema)





// get

app.get("/user",async(req,res)=>{


    try{
        const user=await User.find().lean.exec() 

        return res.status(200).send({user:user})
   }
   catch(err){
return res.status(500).send({message:err.message})
   }
})

// post 

app.post("/user",async(req,res)=>{


    try{
        const user=await User.crate(req.body);
        

        return res.status(201).send({user:user})
   }
   catch(err){
return res.status(500).send({message:err.message})
   }
})
app.get("/user/:id",async(req,res)=>{


    try{
        const user=await User.findById(req.params.id).lean.exec() 

        return res.status(201).send({user:user})
   }
   catch(err){
return res.status(500).send({message:err.message})
   }
})

app.patch("/user/:id",async(req,res)=>{


    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        }).lean.exec() 

        return res.status(200).send({user:user})
   }
   catch(err){
return res.status(500).send({message:err.message})
   }
})






app.patch("/user/:id",async(req,res)=>{


    try{
        const user=await User.findByIdAndDelete(req.params.id).lean.exec() 

        return res.status(200).send({user:user})
   }
   catch(err){
return res.status(500).send({message:err.message})
   }
})





// Bankdetail

app.get("/bankdetail",async(req,res)=>{


    try{
        const user=await Bankdetail.find().lean.exec() 

        return res.status(200).send({bankdetail:bankdetail})
   }
   catch(err){
return res.status(500).send({message:err.message})
   }
})

// post 

app.post("/bankdetail",async(req,res)=>{


    try{
        const bankdetail=await Bankdetail.crate(req.body);
        

        return res.status(201).send({bankdetail:bankdetail})
   }
   catch(err){
return res.status(500).send({message:err.message})
   }
})
app.get("/bankdetail/:id",async(req,res)=>{


    try{
        const bankdetail=await Bankdetail.findById(req.params.id).lean.exec() 

        return res.status(201).send({bankdetail:bankdetail})
   }
   catch(err){
return res.status(500).send({message:err.message})
   }
})

app.patch("/bankdetail/:id",async(req,res)=>{


    try{
        const bankdetail=await Bankdetail.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        }).lean.exec() 

        return res.status(200).send({bankdetail:bankdetail})
   }
   catch(err){
return res.status(500).send({message:err.message})
   }
})






app.patch("/user/:id",async(req,res)=>{


    try{
        const user=await User.findByIdAndDelete(req.params.id).lean.exec() 

        return res.status(200).send({user:user})
   }
   catch(err){
return res.status(500).send({message:err.message})
   }
})














app.listen(4700,async(req,res)=>{
try{
    await connect();
}
catch(err){
    console.log(err)

}
console.log("listening at port 4700")
})