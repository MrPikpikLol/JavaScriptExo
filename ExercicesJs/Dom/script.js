//Part 1
/*  https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener  */

/*
var button = document.getElementsByTagName("button")[0]
*/
/*
button.addEventListener("click", function(){
  console.log("coucou")
})
*/
/*
button.addEventListener("mouseenter", function(){
  console.log("coucou")
})
*/

//Part 2
/*
var button = document.getElementById("enter")
var input = document.getElementById("userinput")

  button.addEventListener("click", function(){
    console.log("ça marche");
  })
*/
//Part 3 adding element in li
/* https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild */
/* https://developer.mozilla.org/fr/docs/Web/API/Document/createTextNode */
/*
var button = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")

  button.addEventListener("click", function(){
    var li = document.createElement("li")
    li.appendChild(document.createTextNode("test"))
    ul.appendChild(li)
  })
*/

//Part 4 adding value input to list
/*
var button = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")
console.log(input.value);

  button.addEventListener("click", function(){
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
  })
*/

//Part 5 add condition input.value
/*
var button = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")

  button.addEventListener("click", function(){
    if (input.value.length > 0) {
      var li = document.createElement("li")
      li.appendChild(document.createTextNode(input.value))
      ul.appendChild(li)
    }
  })
*/

//Part 6 adding keybord function
/*
var button = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")

  button.addEventListener("click", function(){
    if (input.value.length > 0) {
      var li = document.createElement("li")
      li.appendChild(document.createTextNode(input.value))
      ul.appendChild(li)
      input.value = ""
    }
  })

  input.addEventListener("keypress", function(event){
    console.log(event)
  })
*/

//Part 7 Adding keyCode
/*
var button = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")

  button.addEventListener("click", function(){
    if (input.value.length > 0) {
      var li = document.createElement("li")
      li.appendChild(document.createTextNode(input.value))
      ul.appendChild(li)

    }
  })

  input.addEventListener("keypress", function(event){
    if (input.value.length > 0 && event.keyCode === 13) {
      var li = document.createElement("li")
      li.appendChild(document.createTextNode(input.value))
      ul.appendChild(li)

    }

  })
*/
//Part 8 Codin Shortcut

var button = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")
var inputLength = function(){
  return input.value.length
}

  button.addEventListener("click", function(){
    if (inputLength() > 0) {
      var li = document.createElement("li")
      li.appendChild(document.createTextNode(input.value))
      ul.appendChild(li)

    }
  })

  input.addEventListener("keypress", function(event){
    if (inputLength() > 0 && event.keyCode === 13) {
      var li = document.createElement("li")
      li.appendChild(document.createTextNode(input.value))
      ul.appendChild(li)

    }

  })
