// Jacob Gibbons
// 3/23/2022
// Approximating pi with the leibniz formula
// https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80


let iters = 0;
let step = -1; // will switch between 1 and -1
let total = 1;
let totals  = [];


function setup() {
  createCanvas(800, 800);


  piApproxDiv = createDiv('');
  totalDiv = createDiv('');
}

function draw() {
  background(0);
  stroke(255);
  noFill();

  let denom = iters * 2 + 3; // denominator is the set of odd numbers > 1, so 3, 5, 7, 9, etc.
  total += 1 / (step * denom);
  step *= -1;
  totals.push(total * 4)
  let spacing = width/totals.length;
  beginShape();
  for (let i = 0; i < totals.length; i++){
    let x = i * spacing;
    let y = map(totals[i], min(totals), max(totals), height, 0);
    vertex(x, y)
    // point(x, y);
  endShape();
  }
  piApproxDiv.html('Current Approx: ' + totals[totals.length - 1]);
  totalDiv.html('Total Nums Checked: ' + totals.length);
  iters++
  



}
