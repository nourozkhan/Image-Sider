x = document.getElementsByTagName("img");

var i = 0;
function next()
{
    if(i<3)
       {
           x[i].className = "hide";
           x[i+1].className = "show";
           i += 1;
           return i;
       }
       else
       {
           x[i].className = "hide";
           i = 0;
           x[i].className = "show";
           return i;
       }
}
function previous()
{
       if(i>0)
       {
            x[i].className = "hide";
            x[i-1].className = "show";
            i = i - 1;
            return i;
       } 
       else
       {
           x[i].className = "hide";
           i = 3;
           x[i].className = "show";
           return i;
       }
}
 