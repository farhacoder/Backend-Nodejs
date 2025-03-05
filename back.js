const express=require("express")
const app=express()
var users=[{
    name:"john",
    kidney:[{healthy:false},
    ]
}]

app.use(express.json());

app.get("/",function(req,res){
    const johnKidneys=users[0].kidney
    const noOfKindneys=johnKidneys.length
    let noOfHealthyKidney=0
    for(let i=0 ;i<johnKidneys.length;i++)
        {
            if(johnKidneys[i].healthy){
                noOfHealthyKidney+=1
            }
        }
    const unHealthyKidney=noOfKindneys-noOfHealthyKidney
    res.json({noOfKindneys,noOfHealthyKidney,unHealthyKidney})
})
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy
    users[0].kidney.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done"
    })
})

app.put("/", function(req,res){
    for(let i=0;i<users[0].kidney.length;i++){
        users[0].kidney[i].healthy=true
    }
    res.json({})
})
app.listen(3000)