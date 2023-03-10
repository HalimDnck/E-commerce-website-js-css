const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})




/*login page*/
var logpage = document.getElementById('login-page');

window.onclick = function(event) {
    if (event.target == logpage) {
        logpage.style.display = "none";
    }
}
/*side nav*/
var navpage = document.getElementById('sidenav');

window.onclick = function(event) {
    if (event.target == navpage) {
        navpage.style.display = "none";
    }
}





/*collections dropdown*/

var dropdown = document.getElementsByClassName("sidenav-dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
      document.querySelector('.fa-caret-right').style.transform
                       = 'rotate(0deg)';
    } else {
      dropdownContent.style.display = "flex";
      document.querySelector('.fa-caret-right').style.transform
                       = 'rotate(90deg)';
    }
  });
}