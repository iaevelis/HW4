var x=width/2
var y=0
var x2=width/2
var y2=0

stroke(0);

var godown=true;

while (y<=height){
  if(y<=height/2-10){
    line(x,y,x2,y2);
    x=x-10;
    x2=x2+10;
    y=y+10;
    y2=y2+10;
  }else{
    line(x,y,x2,y2)
    x=x+10;
    x2=x2-10;
    y=y+10;
    y2=y2+10;
  }
}
