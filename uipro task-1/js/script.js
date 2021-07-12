const toggle=document.getElementsByClassName('toggle')[0]
const navbarlinks=document.getElementsByClassName('navbar_links')[0]
toggle.addEventListener('click',()=>{
    navbarlinks.classList.toggle('active')
})
// ************************Load google charts******************************///////
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

//*******************************Draw the chart and set the chart values//////////////////
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['skills', 'rate by 10 '],
  ['HTML', 8],
  ['CSS', 8],
  ['JAVASCRIPT', 5],
  ['PYTHON', 7],
  ['ANGULAR', 5],
  ['MYSQL',5]
]);
  // Optional; add a title and set the width and height of the chart
  var options = {'title':'MY TECHNICAL SKILLS', };
  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart_experience'));
  chart.draw(data, options);
}
//*****************cursor**************************** */
var cursor=document.querySelector(".cursor");
var cursor2=document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
  cursor.style.cssText=cursor2.style.cssText="left: "+e.clientX+"px; top: "+ e.clientY + "px;";
});
//*************************window refresh for every 30s****************** */
   setTimeout(()=>{
      window.location.reload();
    },100000);

    function changeText(){
      document.getElementBYId("").innerHTML=("I WILL DIE FOR SEEKING KNOWLEDGE");
  }
   
  

