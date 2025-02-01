// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// On Click Tab Link
function openPage(pageName,element) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    } 
    tabLinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].style.textDecoration = "none";
      tabLinks[i].classList.remove('btn-outline-primary');
    }
    document.getElementById(pageName).style.display = "block";
    // Adding Style
    element.style.textDecoration = "underline"; 
    element.classList.remove('btn-outline-dark');
    element.classList.add('btn-outline-primary');
}