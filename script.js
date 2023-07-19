let popup = document.getElementById("popup")
let Name1 = document.getElementById("view_name")
let age = document.getElementById("view_age")
let gender = document.getElementById("view_gender")
let designation = document.getElementById("view_designation")
let close = document.getElementById("view_close")


function openpopup(){
    let a = "zaid"
    popup.classList.add("open-popup")
    Name1.innerHTML="    "+a
    age.innerHTML="21"
    gender.innerHTML="male"
    designation.innerHTML="solution analyst"
}

function closepopup(){
    popup.classList.remove("open-popup")
}