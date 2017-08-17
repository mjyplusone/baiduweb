var btn = document.getElementsByClassName("btn");
for(var i = 0; i < btn.length; i++)
{
    (function(i){
        btn[i].onclick = function(){
            var square = document.getElementsByClassName("square")[0];
            switch (i){
                case 0: square.style.left = -400 + "px"; break;
                case 1: square.style.left = -200 + "px"; break;
                case 2: square.style.left = 0 + "px"; break;
            }
        }
    })(i);
}