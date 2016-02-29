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
    
    function setPos(id,t,r,b,l){
        t = ( t == -1 ) ? "auto" : t;
        r = ( r == -1 ) ? "auto" : r;
        b = ( b == -1 ) ? "auto" : b;
        l = ( l == -1 ) ? "auto" : l;
        $(id).css({
            "top": t,
            "right": r,
            "bottom": b,
            "left": l
        });
    }
    
    setPos("#bln1","20%",-1,-1,"10%");
    setPos("#bln2","45%","10%",-1,-1);
    setPos("#bln3",-1,-1,"5%","40%");
    
    setPos("#cld1","5%",-1,-1,-1);
    setPos("#cld2","14%",0,-1,-1);
    setPos("#cld3","24%",-1,-1,"1%");
    setPos("#cld4","36%",-1,-1,"10%");
    setPos("#cld5","50%","2%",-1,-1);
    
    setPos("#cld-sm1","60%",-1,-1,"3%");
    setPos("#cld-sm2",-1,"10%","22%",-1);
    setPos("#cld-sm3",-1,"40%","18%",-1);
    setPos("#cld-sm4",-1,-1,"5%","3%");
    
    
    function setAni(id,startX,startY,endX,endY) {
        $(id).attr("data-bottom-top", "-webkit-transform: translate(" + startX + "%," + startY + "%);opacity:1;" );
        $(id).attr("data-top-bottom", "-webkit-transform: translate(" + endX + "%," + endY + "%);opacity:0.9;" );
    }
    
    setAni("#blnb",50,0,-100,0);
    
    setAni("#bln1",0,0,0,-80);
    setAni("#bln2",0,0,0,-120);
    setAni("#bln3",0,0,0,-220);
    
    setAni("#cld1",0,0,-30,0);
    setAni("#cld2",-20,0,40,0);
    setAni("#cld3",10,0,-30,0);
    setAni("#cld4",20,0,-40,0);
    setAni("#cld5",-20,0,20,0);
    
    setAni("#cld-sm1",-20,0,80,0);
    setAni("#cld-sm2",40,0,-30,0);
    setAni("#cld-sm3",50,0,-40,0);
    setAni("#cld-sm4",-20,0,40,0);
    
    setAni("#hashtags img",-100,-100,300,300);
    
    
    s.refresh();
    
    
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