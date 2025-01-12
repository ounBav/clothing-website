// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// On Click Tab Link
function openPage(pageName,element,backgroundColor,color) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    } 
    tabLinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].style.backgroundColor = "none";
      tabLinks[i].style.color = "";
      tabLinks[i].style.textDecoration = "none";
    }
    document.getElementById(pageName).style.display = "block";
    // Adding Style
    // element.style.backgroundColor = backgroundColor;
    element.style.color = color;
    element.style.textDecoration = "underline"; 
}