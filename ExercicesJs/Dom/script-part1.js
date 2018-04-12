// https://www.w3schools.com/jsref/default.asp
// https://www.w3schools.com/js/js_htmldom_navigation.asp
/* part 1
document.write("bonjour") // document.method()
window
window.alert("dom dom dom")
window.
*/
/* part 2
DOM Selectors
--------------
getElementsByTagName
getElementsByClassName
getElementById
querySelector
querySelectorAll
getAttribute
setAttribute
##Changing Styles
style.{property} //ok
className //best
classList //best
classList.add
classList.remove
classList.toggle
*/
document.getElementsByTagName("h1")
document.getElementsByClassName("second")
document.getElementById("first")
document.getElementsByClassName("second")[0]
// part 3 : Selectors
document.querySelector("h1")
document.querySelectorAll("h1,li")
document.querySelector("a")
document.querySelector("a").getAttribute("href")
document.querySelector("a").setAttribute("href", "http://www.bnp.fr")
document.querySelector("a")
// Change Style :
// style.{property} //ok
document.querySelector("h1")
document.querySelector("h1").style
document.querySelector("h1").style.background = "blue"
var h1 = document.querySelector("h1")
h1
h1.className = "effet"
ClassList
document.querySelector("li").classList // ajouter des class ds le li
document.querySelector("li").classList.add("effet")
document.querySelector("li").classList.remove("effet")
document.querySelector("li").classList.add("fait")
document.querySelector("li").classList.toggle("fait") // activer - désactiver
