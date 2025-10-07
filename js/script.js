// alert("hellooou");
window.onload = setInterval(getCurrentDate);
function getCurrentDate() {
    var actualDate = new Date();
    var dateDay = actualDate.getDate();
    var dateYear = actualDate.getFullYear();
    var dateMonth = actualDate.getMonth();
    var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    dateMonth = monthArr[dateMonth];
    document.getElementById("date").innerHTML = dateMonth + " " + dateDay +", " + dateYear;
}