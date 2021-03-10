change = 0
let alien;
let ship;
v = 0
t = 0
let bx = 100
let bulletstate = 0;
// 0 = in ship
// 1 = firing
by =1000
let gamestate = 1;
//0=winning
//1=starting
//2=playing
//3 = lossing
let max = 18
let score = 0
bossfire = 0
bossfire2 =0
bbbly=1000
bbly = 1000
bossbstate = 0

function preload()
{
  ship = loadImage('ship.png');
  alien3 = loadImage('space p5.png');
  alien = loadImage('space p5.png');
  alien2 = loadImage('Spaceinvadersalien.png')
  soundFormats('mp3', 'ogg');
  mySound = loadSound('2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3');
  mySound2= loadSound('Computer Error Alert-SoundBible.com-783113881.mp3')
  boss = loadImage("ufo.png")
  laser = loadImage('laser.png')
  laser2 = loadImage('Laser2.png')
  space = loadImage('space.jfif')
}
function setup() {
  createCanvas(windowWidth, windowHeight);
   x  =  (windowWidth/2)-40;
  mySound.play();
   s = 340
   m = 410
   e = 480
   r = 550
   k = 620
   g = 690
  bbbl = 1000
  bbl = 1000
  // movement
   c = 1;
   ccs = 340+70
   ccm = 410+70
   cce = 480+70
   ccr = 550+70
   cck = 620+70
   ccg = 690+70
   ccf = 760+70
   cccs = 340-70
   cccm = 410-70
   ccce = 480-70
   cccr = 550-70
   ccck = 620-70
   cccg = 690-70
   cccf = 760-70
  // end movement
  //1st row
  alieny1 = 60
  //2nd row
  alieny2 = 100
   f = 760
   ss = 340
   mm = 410
   ee = 480
   rr = 550
   kk = 620
   gg = 690
   ff = 760
  bbx = 370
  bbbx = 750
  Q = 1
  q = 1
  a=windowHeight-50
  bossdie=0
  bossdie2 = 0
}

function draw() {
  background("grey");
  fill("black");
  image(space,270,5,600,windowHeight-10)
  if (gamestate == 0)
    {
       fill("lightgreen")
       textSize(25)
       textFont('Alegreya')
       text("YOU WIN!",470,100)
       textFont("Chela One")
       text("TO PLAY AGAIN REFRESH THE PAGE " ,300,220)
    }
   
  if (gamestate==1)
    {
      fill("green")
      textSize(35)
      textFont('Alegreya')
      text("SPACE INVADERS  -- ADHI",370,70)
      textFont('Chela One')
      text("RULES :-",500,130)
      text("1) IF INVADER HITS YOU<GAME OVER>",300,190)
      text("2) USE ARROW KEYS TO MOVE",300,220)
      text("3) USE SPACE TO SHOOT",300,250)
       text("4) BOSS X2 STONG AND SHOOTS ALSO ",300,280)
      text("click <s> to Start",460,520)
    }
  if (score == max)
      {
        gamestate = 0;
      }
  
  if (gamestate == 2){
    bbbly+=10
    bbly+=10
  image(boss,bbx,10,90,40)
  image(boss,bbbx,10,90,40)
  image(laser2,bbbl,bbbly,5,20)
    if (bossfire==100)
      { 
        if (bossbstate == 0)
            {
            bbbly = 20
            bbbl = bbx+10
            bossbstate = 1
           }
        bossfire=0
      }
    if (bbbly >= windowHeight + 20)
      {
        bossbstate = 0
      }
   image(laser2,bbl,bbly,5,20)
    if (bossfire2==50)
      { 
        if (bossbstate == 0)
            {
            bbly = 20
            bbl = bbbx+10
            bossb2state = 1
           }
        bossfire2=0
      }
    if (bbly >= windowHeight + 20)
      {
        bossb2state = 0
      }
  bbbx-=Q
    bbx+=q
    if (bx>bbx&&bx<bbx+90&&by<=10)
      {
        bossdie2++
        score++
        t = 1
      }
    if (bx>bbbx&&bx<bbbx+90&&by<=10)
      {
        bossdie++
        score++
        t = 1
      }
    if (bossdie<2)
      {
         bbbx-=Q
    
    if (bbbx < 270 || bbbx > 780 )
      {
        Q = -Q 
      }
      }
    else if ( bossdie == 2)
      {
        bbbx =10000
      }
    if (bossdie2<2)
      {
        bbx+=q
    if (bbx > 780 || bbx < 270)
      {
        q =-q
      }
      }
    else if ( bossdie2 == 2)
      {
        bbx =10000
      }
  image(alien,s,alieny1, 40,30);
  image(alien,m,alieny1,40,30);
  image(alien,e,alieny1,40,30);
  image(alien,r,alieny1,40,30);
  image(alien,k,alieny1,40,30);
  image(alien,g,alieny1,40,30);
  image(alien,f,alieny1,40,30);
  // second row
  image(alien,ss,alieny2,40,30);
  image(alien,mm,alieny2,40,30);
  image(alien,ee,alieny2,40,30);
  image(alien,rr,alieny2,40,30);
  image(alien,kk,alieny2,40,30);
  image(alien,gg,alieny2,40,30);
  image(alien,ff,alieny2,40,30);
    // ship
  image(ship,x,windowHeight-50,40,40);
    if (bbl>x&&bbl<x+40&&bbly>=windowHeight-50&&bbly<windowHeight)
      {
        gamestate=3;
      }
     if (bbbl>x&&bbbl<x+40&&bbbly>=windowHeight-50&&bbbly<windowHeight)
      {
        gamestate=3;
      }
    // call 
  bullet();
  alieninvade1()
    // end call
  if (keyIsDown(LEFT_ARROW))
    {
      x--;
      x-- ; 
    }
  if (keyIsDown(RIGHT_ARROW))
    {
      x++;
      x++;
    }
  if (x<270)
    {
      x = 270;
    }
  if (x >= 830)
    {
      x = 830;
    }
 if(bx>s&&bx<s+40&&by<=alieny1+30&&by>alieny1)
      {
        stop();
        mySound2.play();
        // 2000 = dustbin
        s = 2000;
        // t = 0   target dead
        t = 1
        score++
      }
   if(bx>m&&bx<m+40&&by<=alieny1+30&&by>alieny1)
      {
        mySound2.play();
        // 2000 = dustbin
       m = 2000;
        // t = 0   target dead
       t = 1
        score++
      }
    if(bx>e&&bx<e+40&&by<=alieny1+30&&by>alieny1)
      {
        mySound2.play();
        // 2000 = dustbin
        e = 2000;
        // t = 0   target dead
        t = 1
        score++
      }
   if(bx>r&&bx<r+40&&by<=alieny1+30&&by>alieny1)
      {
        mySound2.play();
        // 2000 = dustbin
       r = 2000;
        // t = 0   target dead
       t = 1
        score++
      }
    if(bx>k&&bx<k+40&&by<=alieny1+30&&by>alieny1)
      {
        mySound2.play();
        // 2000 = dustbin
        k = 2000;
        // t = 0   target dead
        t = 1
        score++
      }
   if(bx>g&&bx<g+40&&by<=alieny1+30&&by>alieny1)
      {
        mySound2.play();
        // 2000 = dustbin
       g = 2000;
        // t = 0   target dead
       t = 1
        score++
      }
    if(bx>f&&bx<f+40&&by<=alieny1+30&&by>alieny1)
      {
        mySound2.play();
        // 2000 = dustbin
       f = 2000;
        // t = 0   target dead
       t = 1
        score++
      }
     if(bx>ss&&bx<ss+40&&by<=alieny2+30&&by>alieny1)
      {
        mySound2.play();
        // 2000 = dustbin
        ss = 2000;
        // t = 0   target dead
        t = 1
        score++
      }
   if(bx>mm&&bx<mm+40&&by<=alieny2+30&&by>alieny1)
      {
        mySound2.play();
        // 2000 = dustbin
       mm = 2000;
        // t = 0   target dead
       t = 1
        score++
      }
    if(bx>ee&&bx<ee+40&&by<=alieny2+30&&by>alieny1)
      {
        mySound2.play();
        // 2000 = dustbin
        ee = 2000;
        // t = 0   target dead
        t = 1
        score++
      }
   if(bx>rr&&bx<rr+40&&by<=alieny2+30&&by>alieny1)
      {
        mySound2.play();
        // 2000 = dustbin
       rr = 2000;
        // t = 0   target dead
       t = 1
        score++
      }
    if(bx>kk&&bx<kk+40&&by<=alieny2+30&&by>alieny1)
      {
        mySound2.play();
       
        // 2000 = dustbin
        kk= 2000;
        // t = 0   target dead
        t = 1
        score++
      }
   if(bx>gg&&bx<gg+40&&by<=alieny2+30&&by>alieny1)
      {
        mySound2.play();
        // 2000 = dustbin
       gg = 2000;
        // t = 0   target dead
       t = 1
        score++
      }
    if(bx>ff&&bx<ff+40&&by<=alieny2+30&&by>alieny1)
      {
        mySound2.play();
        // 2000 = dustbin
       ff = 2000;
        // t = 0   target dead
       t = 1
        score++
      }
 }
  if (gamestate == 3)
    {
      textSize(40)
      mySound.stop()
      stroke("red")
      strokeWeight(4)
      line(450,85,730,85)
      fill("red")
      noStroke()
      textFont('Monoton')
      text("GAME OVER",450,80)
      textFont('Black Ops One')
      textSize(30)
      text("<REFRESH TO PLAY AGAIN>",360,380)
      text("> ALILENS DESTROYED YOU",360,130)
    }
} 
function bullet()
{
  fill("white")
  image(laser,bx,by,5,20)
  if (bulletstate == 0)
     {
      bx = x + 20     
      }
    if (bulletstate == 1)
      {
       by-=10
      }
     if (by<=-10 || t == 1)
       {
         bulletstate = 0
         t = 0;
         by = 1000;
       }
}
function alieninvade1()
{
  if (change == 15)
    {
      alien = alien2
      
    }
  else if(change==25)
    {
      alien = alien3
      change=0
    }
//1st row
   s+=c
   m+=c
   e+=c
   r+=c
   k+=c 
   g+=c
   f+=c
  change++
  bossfire++
  bossfire2++
 // 2nd row 
   ss+=c
   mm+=c 
   ee+=c
   rr+=c
   kk+=c
   gg+=c
   ff+=c
  if (s == ccs|| m == ccm|| e == cce || r == ccr || k == cck || g == ccg|| f == ccf)
    {
      alieny1+=40
      alieny2+=40
      c = -c;
    }
  if  (s == cccs|| m == cccm|| e == ccce || r == cccr || k == ccck || g == cccg|| f == cccf)
    {
      alieny1+=40
      alieny2+=40
      c = -c
    }
  if ( alieny2 >= windowHeight - 80)
      {
        gamestate = 3;
        print ("game over ")
        mySound.stop()
      }
}
function keyPressed() {
  switch (keyCode) {
    case 32:
      if (bulletstate == 0)
        {
      print ("fire") 
      bulletstate=1;
      bx = x + 20
      by = windowHeight - 50
        } 
      break;
      case 83:
      gamestate = 2
      let max = 14
      score =0
       x  =  (windowWidth/2)-40;
   s = 340
   m = 410
   e = 480
   r = 550
   k = 620
   g = 690
   f = 760
  ss = 340
   mm = 410
   ee = 480
   rr = 550
   kk = 620
   gg = 690
   ff = 760
  a=windowHeight-50
      break;      
  }
}
