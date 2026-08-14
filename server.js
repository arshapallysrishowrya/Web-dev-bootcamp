const express=require('express');
const app=express();
const port=process.env.PORT|| 8080;

app.use(express.static("frontend"));
app.use(express.json());
var users=[{
    "id":1,
    "name":"manuel",
    "image":"https://randomuser.me/api/portraits/men/73.jpg"
},
{
    "id":2,
    "name":"robo",
    "image":"https://randomuser.me/api/portraits/men/33.jpg"
},
{
    "id":3,
    "name":"nick",
    "image":"https://randomuser.me/api/portraits/men/88.jpg"
},
{
    "id":4,
    "name":"rush",
    "image":"https://randomuser.me/api/portraits/men/36.jpg"
},
{
    "id":5,
    "name":"lids",
    "image":"https://randomuser.me/api/portraits/men/87.jpg"
},
{
    "id":6,
    "name":"rome",
    "image":"https://randomuser.me/api/portraits/women/67.jpg"
},
{
    "id":7,
    "name":"kris",
    "image":"https://randomuser.me/api/portraits/women/25.jpg"
},
{
    "id":8,
    "name":"pinky",
    "image":"https://randomuser.me/api/portraits/men/61.jpg"
},
{
    "id":9,
    "name":"surk",
    "image":"https://randomuser.me/api/portraits/men/85.jpg"
},
{
    "id":10,
    "name":"peddy",
    "image":"https://randomuser.me/api/portraits/women/86.jpg"
}
]
var nextId=11;
function findIndex(id){
    for(var i=0;i<users.length;i++){
        if(id==users[i].id){
            return i;
        }
    }
    return -1;
}
app.get("/api/users",function(req,res){
    return res.json(users);
})
app.get("/api/users/:id",function(req,res){
    var id=Number(req.params.id);
    var index=findIndex(id);
    if(index==-1){
        res.status(404).json({"message":"user not found with id:"+id});
    }
    var user=users[index];
    return res.json(user);
})
app.get("/api/random-user",function(req,res){
    if(users.length==0){
        res.status(404).json({"message":"no user found"});
    }
    var randomIndex=Math.floor(users.length*Math.random());
    return res.json(users[randomIndex]);
})
app.post("/api/users",function(req,res){
    var newUser=req.body;
    var tempUser={
        "id":nextId,
        "name":newUser.name,
        "gender":newUser.gender,
        "image":newUser.image
    };
    nextId=nextId+1;
    users.push(tempUser);
    return res.status(201).json({"message":"user created successfully",
           "user":tempUser
    })
})






app.use(express.static("frontend"));
app.listen(port,function(){
    console.log("server running on http://localhost:"+port);
});