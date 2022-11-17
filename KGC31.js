//Force window to scroll to top of the page when refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

//Trigger animation on scroll
window.onscroll = function() {myFunction()};

function myFunction() {
    if(document.documentElement.scrollTop > 100){
        document.getElementById("Mypic").className = "Slide";
        document.getElementById("First_Intro").className = "Appear";
    }
    if(document.documentElement.scrollTop > 1050){
        document.getElementById("cpp").className = "Skills showSkills";
        document.getElementById("html").className = "Skills showSkills";
        document.getElementById("css").className = "Skills showSkills";
        document.getElementById("js").className = "Skills showSkills";
        document.getElementById("python").className = "Skills showSkills";
    }
}
