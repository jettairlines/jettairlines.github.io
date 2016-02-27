var skills = [
    {
        "name": "HTML/CSS",
        "level": 4
    },
    {
        "name": "jQuery",
        "level": 2
    },
    {
        "name": "C/C++",
        "level": 4
    }
];



$(document).ready(function(){
    
    skills.forEach(function(skill){
        var clds = $();
        for(i=0;i<skill.level;i++) {
            var puff = document.createElement("img");
            puff.src = "../img/cldpff.svg";
            clds = clds.add(puff);
        }
        
        $("#skills").append(clds);
    });
    

});