// let btn = document.getElementById('button')
let ball = document.getElementById('ball')
let ball1 = document.getElementById('ball')
let y=1; 
let x =1;
let a=1;
let b = 1;

 setInterval (function  ()
{

if (y>=innerHeight)
{
    a=0;
}
else if (y<=0)
{
   a=1;
}

if ( a==0 )
{
 y = y -1;
 ball.style.top = (y) + 'px';

}
else if ( a==1)
{
    y= y +1;
    ball.style.top = (y) + 'px';
}

},10);

setInterval ( function ()
{
if (x>=window.innerWidth)
{
    b=0;
}
else if (x<=0)
{
   b=1;
}
if ( b==0 )
{
 x = x -1;
 ball.style.left = (x) + 'px';

}
else if ( b==1)
{
    x= x +1;
    ball.style.left = (x) + 'px';
}
},10);




