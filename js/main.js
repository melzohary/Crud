var Name = document.getElementById("Name");
var age = document.getElementById("age");
var phone = document.getElementById("phone");
var search = document.getElementById("search");
var submit = document.getElementById("submit");
var table = document.getElementById("tbody");
var products = []
var index ;


// ==========================  Validation  ===============

//  =================NAME===================
Name.onkeyup = function () {
    let RegexName = /^[A-Z][a-z]{2,8}$/
    if (!RegexName.test(Name.value)) {
        submit.disabled = "true";
        Name.classList.add("is-invalid")
        Name.classList.remove("is-valid")
        myAlert.style.display = "block"
    }
    else {
        submit.removeAttribute("disabled")
        Name.classList.add("is-valid")
        Name.classList.remove("is-invalid")
        myAlert.style.display = "none"
    }

}
// =================AGE===============
age.onkeyup = function () {
    let RegexAge = /^([2-7][0-9]|80)$/
    if (!RegexAge.test(age.value)) {
        submit.disabled = "true";
        age.classList.add("is-invalid")
        age.classList.remove("is-valid")
        myAlert2.style.display = "block"
    }
    else {
        submit.removeAttribute("disabled")
        age.classList.add("is-valid")
        age.classList.remove("is-invalid")
        myAlert2.style.display = "none"
    }
}
// ===================PHONE===========
phone.onkeyup = function () {
    let RegexPhone = /^01([0125][0-9]{8})$/
    if (!RegexPhone.test(phone.value)) {
        submit.disabled = "true";
        phone.classList.add("is-invalid")
        phone.classList.remove("is-valid")
        myAlert3.style.display = "block"
    }
    else {
        submit.removeAttribute("disabled")
        phone.classList.add("is-valid")
        phone.classList.remove("is-invalid")
        myAlert3.style.display = "none"
    }
}


// LocalStorage 

if (JSON.parse(localStorage.getItem("value")) !=null ){
    products  =  JSON.parse(localStorage.getItem("value"));
    displayData()
}

// add Data to array 

submit.onclick = function(){
    var user = {
        Name : Name.value,
        age : age.value,
        phone : phone.value,
    }
    if (submit.innerHTML == "Add Content"){
        products.push(user) 
    }else{
        updateProducts()
    }
    localStorage.setItem("value" , JSON.stringify(products))
    displayData()
    clearData()
    submit.disabled = "true"
    Name.classList.add("is-invalid");
    age.classList.add("is-invalid");
    phone.classList.add("is-invalid");
}


// add Data in HTML 


function displayData(){
var myBox = ''
for( var i = 0 ; i < products.length ; i++ ){
       myBox += `<tr>
       <td>${(i+1)}</td>
       <td>${products[i].Name}</td>
       <td>${products[i].age}</td>
       <td>${products[i].phone}</td>
       <td><button onclick="deleteData(${i})" class="btn text-white btn-danger"><i class="fa-solid fa-trash"></i></button></td>
       <td><button onclick="updateData(${i})" class="btn text-white btn-warning"><i class="fa-solid fa-pen-nib"></i></button></td>
    </tr>
      `
}
table.innerHTML = myBox ;
}


// Clear Data From inputs

function clearData(){
   Name.value = "";
   age.value = "";
   phone.value = "";
}


// Delete Data 

function deleteData(i){
products.splice(i , 1)
displayData()
localStorage.setItem("value", JSON.stringify(products));
}


// Search 

// search.onkeyup = function(){
//     var val = search.value;

//     var myBox = ''
//     for (var i = 0; i < products.length; i++) {
//         if (products[i].name.tolowerCase().includes(val.tolowerCase())){ 
//             myBox += `<tr>
//            <td>${(i + 1)}</td>
//            <td>${products[i].Name}</td>
//            <td>${products[i].age}</td>
//            <td>${products[i].phone}</td>
//            <td><button onclick="deleteData(${i})" class="btn text-white btn-danger"><i class="fa-solid fa-trash"></i></button></td>
//            <td><button class="btn text-white btn-warning"><i class="fa-solid fa-pen-nib"></i></button></td>
//         </tr>
//           `
//         }
        
//     }
//     table.innerHTML = myBox;

// }



// Update

function updateData(i){
Name.value = products[i].Name;
age.value = products[i].age;
phone.value = products[i].phone; 
submit.innerHTML = "Update";
submit.style.background = "orange";
index = i;
}

function updateProducts(){
    var user = {
        Name: Name.value,
        age: age.value,
        phone: phone.value,
    }

products[index] = user;
localStorage.setItem("value" , JSON.stringify(products));
submit.innerHTML = "Add Content";
submit.style.background = "blue";
}