// alert("welcome to web bootcamp");
var users=[
    /*{
      "name":"John doe",
      "gender":"Male",
      "image":"john.png"
    },
    {
        "name":"Jane doe",
      "gender":"Female",
      "image":"jane.png"

    },
    // {
        // "name":"meghana",
        // "gender":"female",
        // "image":"WhatsApp Image 2026-08-13 at 10.32.14 PM.jpeg"
    // },
    // {
        //  "name":"chandrika",
        //  "gender":"female",
        //  "image":"WhatsApp Image 2026-08-13 at 10.40.25 PM.jpeg"
    // },
     {
         "name":"baddiescrew",
         "gender":"female",
         "image":"WhatsApp Image 2026-08-13 at 10.48.30 PM.jpeg"
     }*/
    {
        "name":"varsha",
        "gender":"female",
        "image":"varsha.jpeg"
    },
    {
        "name":"showrya",
        "gender":"female",
        "image":"showrya.jpeg"
    }
]
var curId=0;
function toggleUser(){
    curId=(curId+1)%2;
    var userName=document.getElementById("user-name");
    var userGender=document.getElementById("user-gender");
    var userImage=document.getElementById("user-image");
    userName.innerHTML=users[curId].name;
    userGender.innerHTML=users[curId].gender;
    userImage.src=users[curId].image;
}
