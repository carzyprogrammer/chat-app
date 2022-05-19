function sendsms(){
    user1=document.getElementById("user1").value;
    user2=document.getElementById("user2").value;
    if(user1!=""){
        let welement=document.createElement("welement");
        welement.append(user1);

        mydiv=document.getElementById("ansbox");
        mydiv.append(welement);
        welement.style.color="yellow",fontsize="10";
        name1=document.getElementById("user1"\n).value;
        mydiv.append(name1);
        document.getElementById("user1").value="";
        const chars = text.split("");
        document.getElementById("ansbox").innerHTML= chars[1]; 
        
    }
    else if(user2!=""){
        let welement=document.createElement("welement");
        welement.append(user1);
        mydiv=document.getElementById("ansbox");
        mydiv.append(welement);
        welement.style.color="blue";
        name2=document.getElementById("user2"\n).value;
        mydiv.append(name2);
        document.getElementById("user2").value="";
        const chars = text.split("");
        document.getElementById("ansbox").innerHTML= chars[1]; 
        
    }
}
function clearsms(){
    document.getElementById("ansbox").value="";

}

let str = "Hello World!\nThis is my string";

console.log(str);