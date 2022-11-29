function rand(){

a = Math.floor(Math.random() * (4 - 1)) + 1

if(a==1){
   document.getElementById("im2").src = "/rock.jpg";
}
else if(a==2){
   document.getElementById("im2").src = "/papper.jpg";
}
else if(a==3){
   document.getElementById("im2").src = "/scissor.jpg";
}
}
ps = 0
cs = 0
count= 10

    function clk(c) {

    if(count>0){
    count --

        if(c==1){rock()}
        else if(c==2){papper()}
        else{scissor()}

        rand()
   
        if (a == c) {
            document.getElementById("m").innerHTML = "TIE"
        }
        else if (a == 1 && c == 2) {
            document.getElementById("m").innerHTML = "YOU WIN"
            document.getElementById("pscore").innerHTML = ps += 1
            
        }
        else if (a == 1 && c == 3) {
            document.getElementById("m").innerHTML = "YOU LOOSE"
            document.getElementById("cscore").innerHTML = cs += 1
        }
        else if (a == 2 && c == 1) {
            document.getElementById("m").innerHTML = "YOU LOOSE"
            document.getElementById("cscore").innerHTML = cs += 1
        }
        else if (a == 2 && c == 3) {
            document.getElementById("m").innerHTML = "YOU WIN"
            document.getElementById("pscore").innerHTML = ps += 1
        }
        else if (a == 3 && c == 1) {
            document.getElementById("m").innerHTML = "YOU WIN"
            document.getElementById("pscore").innerHTML = ps += 1
        }
        else if (a == 3 && c == 2) {
            document.getElementById("m").innerHTML = "YOU LOOSE"
            document.getElementById("cscore").innerHTML = cs += 1
        }
    }
    else{
        document.getElementById("m").innerHTML = "GAME OVER"
        if(cs>ps){window.alert("Computer won");}
        else if(cs==ps)
        {window.alert("Match tie");}
        else
        {window.alert("You won");}
    }
    }

      function rock(){
         document.getElementById("im").src = "/rock.jpg";}
      
      function papper(){
         document.getElementById("im").src = "/papper.jpg";}
      
      function scissor(){
         document.getElementById("im").src = "/scissor.jpg";
      }





