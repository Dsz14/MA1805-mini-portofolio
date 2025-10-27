let rgb = [255,100,0];
let words =[
  "what", 
  "are", 
  "arrays",
];

let select = 0;



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (select == 0){
    rgb = [255, 100, 0]
  } else[
    rgb =[250, 200, 0]
  ]
  fill(rgb)
  let i =1;
  while(i<400){
    let r= random(50);
    circle(i, r+300, r);
    i++;
  }

  textSize(30);
  text(select, 50, 50)
  text(words[1], 100, 100)
  console.log(words);
}

function mouseClicked (){
  if(select == 0){
    select = 1;
  }else{
    select = 0;
  }
  alert('hello');
}
