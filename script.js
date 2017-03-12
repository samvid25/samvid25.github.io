function show()
{
  document.getElementsByClassName('name')[0].style.animation = "fadeOutName 1s ease";
  document.getElementsByClassName('name')[0].style.display = "none";

  document.getElementsByClassName('address')[0].style.display = "block";
  document.getElementsByClassName('address')[0].style.animation = "fadeInName 1s ease";
}
function hide()
{
  document.getElementsByClassName('address')[0].style.animation = "fadeOutName 1s ease";
  document.getElementsByClassName('address')[0].style.display = "none";

  document.getElementsByClassName('name')[0].style.display = "block";
  document.getElementsByClassName('name')[0].style.animation = "fadeInName 1s ease";
}


function displayDB(id){
  document.getElementById('dropZoneText').style.display = "none";
  document.getElementById('dropZone').style.backgroundColor = "rgba(255,255,255,0)";

  document.getElementById('skills').style.display = "none";
  document.getElementById('projects').style.display = "none";
  document.getElementById('resume').style.display = "none";
  document.getElementById('contact').style.display = "none";
  document.getElementById('about').style.display = "none";

  var dz = document.getElementById('dropZone');
  switch (id) {
    case "projectsMenuItem":  document.getElementById('projects').style.display = "block";
                              dz.appendChild(document.getElementById('projects'));
                              break;
    case "skillsMenuItem":    document.getElementById('skills').style.display = "block";
                              dz.appendChild(document.getElementById('skills'));
                              break;
    case "resumeMenuItem":    document.getElementById('resume').style.display = "block";
                              dz.appendChild(document.getElementById('resume'));
                              break;
    case "contactMenuItem":   document.getElementById('contact').style.display = "block";
                              dz.appendChild(document.getElementById('contact'));
                              break;
    case "aboutMenuItem":     document.getElementById('about').style.display = "block";
                              dz.appendChild(document.getElementById('about'));
                              break;
    default:

  }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {

    document.getElementById('dropZoneText').style.display = "none";
    document.getElementById('dropZone').style.backgroundColor = "rgba(255,255,255,0)";
    //for(var i = 1; i<5; i++){
    //  document.getElementsByClassName('page')[i].style.display = "none";
    //}
    document.getElementById('skills').style.display = "none";
    document.getElementById('projects').style.display = "none";
    document.getElementById('resume').style.display = "none";
    document.getElementById('contact').style.display = "none";
    document.getElementById('about').style.display = "none";

    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var dz = document.getElementById('dropZone');
    switch (data) {
      case "projectsMenuItem":  document.getElementById('projects').style.display = "block";
                                dz.appendChild(document.getElementById('projects'));
                                break;
      case "skillsMenuItem":    document.getElementById('skills').style.display = "block";
                                dz.appendChild(document.getElementById('skills'));
                                break;
      case "resumeMenuItem":    document.getElementById('resume').style.display = "block";
                                dz.appendChild(document.getElementById('resume'));
                                break;
      case "contactMenuItem":   document.getElementById('contact').style.display = "block";
                                dz.appendChild(document.getElementById('contact'));
                                break;
      case "aboutMenuItem":     document.getElementById('about').style.display = "block";
                                dz.appendChild(document.getElementById('about'));
                                break;
      default:

    }
}

function clearDropZone()
{
  document.getElementById('dropZone').style.backgroundColor = "rgba(255,255,255,0.1)";
  var pages = document.getElementById('dropZone').getElementsByClassName('page');
  for(var i = 0; i< pages.length; i++){
    pages[i].style.display = 'none';
  }
  document.getElementById('dropZoneText').style.display = "block";
}

function showCodeText()
{
  document.getElementById('code').style.animation = "fadeOut 1s ease";
  document.getElementById('code').style.display = "none";

  document.getElementById('codeText').style.display = "block";
  document.getElementById('codeText').style.animation = "fadeIn 1s ease";
}

function hideCodeText(){
  document.getElementById('codeText').style.animation = "fadeOut 1s ease";
  document.getElementById('codeText').style.display = "none";

  document.getElementById('code').style.display = "block";
  document.getElementById('code').style.animation = "fadeIn 1s ease";
}

function showWebText()
{
  document.getElementById('web').style.animation = "fadeOut 1s ease";
  document.getElementById('web').style.display = "none";

  document.getElementById('webText').style.display = "block";
  document.getElementById('webText').style.animation = "fadeIn 1s ease";
}

function hideWebText(){
  document.getElementById('webText').style.animation = "fadeOut 1s ease";
  document.getElementById('webText').style.display = "none";

  document.getElementById('web').style.display = "block";
  document.getElementById('web').style.animation = "fadeIn 1s ease";
}

function showToolsText()
{
  document.getElementById('tools').style.animation = "fadeOut 1s ease";
  document.getElementById('tools').style.display = "none";

  document.getElementById('toolsText').style.display = "block";
  document.getElementById('toolsText').style.animation = "fadeIn 1s ease";
}

function hideToolsText(){
  document.getElementById('toolsText').style.animation = "fadeOut 1s ease";
  document.getElementById('toolsText').style.display = "none";

  document.getElementById('tools').style.display = "block";
  document.getElementById('tools').style.animation = "fadeIn 1s ease";
}

$(document).ready(function() {

  $("#linkedinImg").hover(function(){
      $("#linkedinImg2").animate({ opacity: 0 }, 'slow');
  }, function() {
      $("#linkedinImg2").animate({ opacity: 1 }, 'slow');
  });

    $("#facebookImg").hover(function(){
        $("#facebookImg2").animate({ opacity: 0 }, 'slow');
    }, function() {
        $("#facebookImg2").animate({ opacity: 1 }, 'slow');
    });



    $("#githubImg").hover(function(){
        $("#githubImg2").animate({ opacity: 0 }, 'slow');
    }, function() {
        $("#githubImg2").animate({ opacity: 1 }, 'slow');
    });

});
