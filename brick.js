let currentcount= 1;
let brickarray = ['<div class = "brick"></div>'];
    function add(){
        if(currentcount<=12){
        currentcount++;
        brickarray.push('<div class = "brick"></div>');
        document.getElementById("right-container").innerHTML = brickarray;
        }
        //output
        document.getElementById("count").innerHTML = currentcount;
        document.getElementById("count").style.color ="white";
    }
    function remove(){
        if(currentcount>=1){
            currentcount--;
            brickarray.pop();
            document.getElementById("right-container").innerHTML = brickarray;
        }
        //output
        document.getElementById("count").innerHTML = currentcount;
        document.getElementById("count").style.color ="gold";
    }

