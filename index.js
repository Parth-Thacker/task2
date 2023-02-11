

let setAttribute = false;
function CahngeBackground(){
    //console.log("clicked")
    const container = document.getElementById("container")
    if(container){
        document.getElementById("container").setAttribute("id", "democlass");
    }else{
        document.getElementById("democlass").setAttribute("id", "container");
    }
}

function AddChield(){
    //console.log("clicked")
    const container =  document.querySelector(".container")
    const chield = document.createElement("div")
    chield.setAttribute("id", "chield"); 
    container.appendChild(chield)
}

function RemoveChield(){
    const container =  document.querySelector(".container")
    container.removeChild(container.lastElementChild)
}
