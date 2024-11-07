let font;  //載入字型文字
let points = [];  //轉成點狀文字
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
    font = loadFont("fonts/RobotoCondensed-Italic-VariableFont_wght.ttf") 
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  rectMode(CENTER)//畫方形以中心點為座標點
  //方形不填入顏色
  angleMode(DEGREES)//設定角度的單位為0~360
  // frameRate(10)//設定每秒進入draw()函數的次數
  points = font.textToPoints("HUDSON", width/2-300,height/2,150, {
    sampleFactor:0.06
  });
  for (let i=0; i<points.length; i++) { 
    noStroke()
    ellipse(points[i].x,points[i].y,15)
  }
}
let angle = 0
function draw() {
  background(0);//背景為黑色
  for(let y=0;y<height;y=y+120){
  for(let x=0;x<width;x=x+120){
  push()
  translate(x,y)//把原點一道視窗的中間
  stroke(255)//線條顏色

    for(let i=0;i<10;i=i+1){

    let r=map(sin(frameCount),-1,1,50,255)
    let g=map(cos(frameCount/2),-1,1,50,255)
    let b=map(sin(frameCount/4),-1,1,50,255)
    stroke(r,g,b)
    rotate(angle)//把物件旋轉10度的角度，以原點(0，0)作為旋轉的基準點
    noFill()
    rect(0,0,100-i*3,100-i*3,20+mouseX/15)//畫一個方形，在視窗的中間，寬高都是600
    angle=sin(frameCount)*20//讓方形的旋轉角度為-100~100度的範圍內
    }
    pop()
    for (let i=0; i<points.length; i++) { 
    noStroke()
    ellipse(points[i].x,points[i].y,15)
       } 
      if (mouseIsPressed){
         fill(100) 
      }else{
        fill(255)
        }
      
    }
  }
}
