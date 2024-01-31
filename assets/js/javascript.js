
setTimeout(auto,6000);
var d1='<div class=home_sw><div class=text><h2>Cost friendly packages on your way</h2><h1>We offer you better deals</h1><button>View Our Tour</button></div>';
function auto()
{
document.getElementById('s').innerHTML=d1;
}
function book_confirm()
{

if(confirm("Are You Sure Book This Ticket")==true)
{
window.print();

}
else
{
window.location.href="booking.html";

}

}


