jslint  devel: true

//functions

function check_age(name, age) {
    if (age < 16) {
        alert("you can not drive!");
    } else if (age = 16) {
        alert("you just can!");
    } else {
        alert("sure man!");
    }
	return name;
}

function go(){
	alert("hi");
}

var my_list = ["apple","orange","ted", check_age("zhangyic", 18), go];
//1. crtl+shift+j on chrome. type in my_list, it will print my_list array
//2. my_list[0] will return "apple"
//3. inside array, you can give any types including function which is also a var type
//4. my_list[3] will give whatever the function's return is
//5. my_list[3] is a value, not a function as there is a return value 
//6. my_list[4] will give function go(){
//	alert("hi");}
//7. to call the function, my_list[4]()
//8. shift() = pop_front(), pop() = pop_back(), forEach()
my_list.forEach(function(value,index){
	console.log(value,index);
});

//it is like, foreach () {what you want to do}, here forEach(), inside (), is what you want to do, you need to define your function in the forEach(). It will basically, for each element, it calls function(value,index){do action here}. Note the function does not have a function name because it is temperary
//forEach is new thing, new browser supports


console.log("--------------- var types -----------------");
//function split_section() {
//	console.log("--------------- section seperation -----------------");
//}		
//split_section();

//loops
var a = 0;
while(a<2){
	//as long as true, loop doing it
	a ++;
	console.log("a = ", a)
}
//do {} while(); for(var i=0;i<2;i++) {}

//js has a "document" object, this represent the page, that is how you can access html css through js.
//document has many APIs, or function calls. If you think doc as an object, //then, it has many function calls.
//eg.  document.getElementsByTagName(), Tag are <p>, <tr>, <body> ...  
//ById

console.log("--------------- js document -----------------");

var p_array = document.getElementsByTagName("p");
console.log(p_array);
//note, it returns the <p>....</p>, this whole chunk is returned in the p_array
console.log(p_array[1]); //this returns the index 1 of the p tag

var link_c_array = document.getElementsByClassName("link");

//Lets do some fun stuff.
first_p = p_array[0];
first_p.innerHTML = "new first paragrah <strong>content</strong>"
//here, document is a object, p_array is an array of object, first_p is a p_obj. first_p.innerHTML = "", the innerHTML is like a function that can alter the webpage. When page loads, and when it executes to <scripit> tab in html, it will load main.js file. It will just execute from top to bottom, then eventually hit "first_p.innerHTML" line, and perform the action

first_l = link_c_array[0];
first_l.className = ""; //first_l is the pointer of link_c_array[0]. thus, 
//changing className attribute = changing on real mem location.
//so, you will find, link_c_array[0] is no longer class "link", while link_c_array[1] is still class "link"

//othger functions:
//link_c_array.parentElement  li.parentElement.children[0]


console.log("--------------- js event -----------------");
var age_check_l = document.getElementsByTagName("input");
//events are: click, focus, blur,mouseenter, mouseleave,mousedown,mouseup,mosemove,keydown,keyup, input(when anything change) search for there are many events
//addEventListener, 2 arguments, first is "event", second is a function.
var in_name = age_check_l[0];
var in_age = age_check_l[1];
var button = document.getElementById("submit");

function check_age2() {
    //alert(in_name.value, in_age.value);
    alert("fuck");
}

button.addEventListener("click", check_age2 ); //NOTE: !!! check_age2() dose not work!!!!
//by default, .value = string type
//button.addEventListener("click", function() {alert("haha") });
//check HOW addEventListener() is defined!!!!
















