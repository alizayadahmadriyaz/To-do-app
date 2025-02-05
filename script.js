const input=document.getElementById("ip box");
const lis_cont=document.getElementById("list-container");

function Add_task(){
    if(input.value==''){
        alert("Please enter a task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        lis_cont.append(li);
        let span=document.createElement("span");
        span.innerHTML="x";
        li.append(span);
    }
    saveData();
    input.value="";
}
lis_cont.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
});

function saveData(){
    localStorage.setItem("data",lis_cont.innerHTML);    
}
function show_data(){
    lis_cont.innerHTML=localStorage.getItem("data");
}
show_data();