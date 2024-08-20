var enterbutton = document.getElementById("enter"); // دکمه
var input = document.getElementById("userinput"); // کادر ورودی
var ul = document.querySelector("ul"); // لیست ها
var item = document.getElementsByTagName("li"); // همون کارهایی که روشون کلیک میشه و سیز میشن

//function inputlength() {   //فانکشن برای اعتبار سنجی کلمات یا جمله
//  return input.value.length;
//}

function createlistelement() {  // اضاقه کردن به لیست
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = " ";
    
    function crossout() {   // اگر روش کلیک شد سبز بشه
     li.classList.toggle("done");
    }  
    li.addEventListener("click", crossout);

    var deletebtn = document.createElement("button");
    deletebtn.appendChild(document.createTextNode("x"));
    li.appendChild(deletebtn);

    deletebtn.addEventListener("click", deletelistitem);

    function deletelistitem(){
      //  li.classList.add("delete");
      ul.removeChild(li);
    }

}


function addlistafterclick() {
    if (input.value.length > 0) {
        createlistelement(); // فانکشن ساختن لیست

    }
}

function addlistafterclickkeypress(event) {
    if (input.value.length > 0 && event.which === 13) {
        createlistelement();
    }
}

enterbutton.addEventListener("click", addlistafterclick);
input.addEventListener("keypress", addlistafterclickkeypress);// اگه داخل اینپوت چیزی نوشته شه و روی اینتر کلیک شه هم اضافه کنه به لیست