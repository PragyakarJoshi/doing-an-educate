window.onload = getCourses;
$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('small');
    }
    else {
        $('nav').removeClass('small');
    }
});


function getCourses() {
    var output='';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState==4 && xhttp.status==200){            
            var response = JSON.parse(xhttp.responseText);
            var courses = response.courses;
            for (var i = 0; i < courses.length;i++){
                output += '<div class="course" style="background-image: url('+ courses[i].image+')"><div class="overlay"><p class="course-name">'+courses[i].name +'</p></div></div>';
            } 
            output += '<div class="allcourse"><div class="overlay"><p class="course-name">View All</p></div>';
        }
        
        console.log(output);
        document.getElementById('courses').innerHTML = output; 
    };
    xhttp.open("GET", "js/courses.json", true);
    xhttp.send();
}