function openLink_Algorithms() {
  window.open("https://github.com/PrathameshBhatkar");
}
function openLink_VideoGames() {
  window.open("https://prathamesh-bhatkar.itch.io/");
}

function Home() {
  document.getElementById("Home").style.display = ""; // show
  document.getElementById("Skill").style.display = "none"; // hide
  document.getElementById("Forum").style.display = "none"; // show


  //   $(".Home-Page").hide();
  console.log("clicked home");
}
function Skill() {
  document.getElementById("Home").style.display = "none"; // hide
  document.getElementById("Skill").style.display = ""; // show
  document.getElementById("Forum").style.display = "none"; // show

}

function Forum() {
  document.getElementById("Home").style.display = "none"; // hide
  document.getElementById("Skill").style.display = "none"; // show
  document.getElementById("Forum").style.display = ""; // show
}