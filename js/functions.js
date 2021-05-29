function linkTo(url) {
  location.href=url;
}


function onHover(link){
  if(link == 'about'){
    document.getElementById("home-page-img").src = "img/placeholder-home.png";
  }
  if(link == 'projects'){
    document.getElementById("home-page-img").src = "img/placeholder-home-1.png";
  }
  if(link == 'contact'){
    document.getElementById("home-page-img").src = "img/placeholder-home.png";
  }
  if(link == 'style-guide'){
    document.getElementById("home-page-img").src = "img/placeholder-home-1.png";
  }
  if(link == 'gitHub1'){
    document.getElementById("about-github").src = "img/GitHub-normal.png";
  }
  if(link == 'gitHub2'){
    document.getElementById("about-github").src = "img/GitHub-hover.png";
  }
}


function playPause(val){
  if(val == 0){
    document.getElementById("project-1-preview").pause();
  }
  if(val == 1){
    document.getElementById("project-1-preview").play();
  }
}

function prev(){
  if(window.getComputedStyle(document.getElementById("project-1")).display == "block"){
    console.log("success");
    document.getElementById("project-1").style.display = "none";
    document.getElementById("project-2").style.display = "block";
  }
  else if(window.getComputedStyle(document.getElementById("project-2")).display == "block"){
    document.getElementById("project-1").style.display = "block";
    document.getElementById("project-2").style.display = "none";
  }
}
function next(){
  if(window.getComputedStyle(document.getElementById("project-1")).display == "block"){
    document.getElementById("project-1").style.display = "none";
    document.getElementById("project-2").style.display = "block";
  }
  else if(window.getComputedStyle(document.getElementById("project-2")).display == "block"){
    document.getElementById("project-1").style.display = "block";
    document.getElementById("project-2").style.display = "none";
  }
}
