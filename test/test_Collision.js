/*
alert("This should provide a test to the collDect.checkLineIntersect() function for right now.\n\nExpected Output: 'No', 'Yes', 'No'\nA bug has occured if this is not the output. Make an issue on github right away!");

var p1 = new Vec2D(1, 1);var q1 = new Vec2D(10, 1); 
var p2 = new Vec2D(1, 2);var q2 = new Vec2D(10, 2); 

collDect.checkLineIntersect(p1, q1, p2, q2)? alert("Yes\n"): alert("No\n"); 
  
p1 = new Vec2D(10, 0); q1 = new Vec2D(0, 10); 
p2 = new Vec2D(0, 0); q2 = new Vec2D(10, 10); 
collDect.checkLineIntersect(p1, q1, p2, q2)? alert("Yes\n"): alert("No\n"); 

p1 = new Vec2D(-5, -5), q1 = new Vec2D(0, 0); 
p2 = new Vec2D(1, 1), q2 = new Vec2D(10, 10); 
collDect.checkLineIntersect(p1, q1, p2, q2)? alert("Yes\n"): alert("No\n"); 
*/

var hexpoints_elements = [
    {"x": document.querySelector("#hex0x"), "y": document.querySelector("#hex0y")},
    {"x": document.querySelector("#hex1x"), "y": document.querySelector("#hex1y")},
    {"x": document.querySelector("#hex2x"), "y": document.querySelector("#hex2y")},
    {"x": document.querySelector("#hex3x"), "y": document.querySelector("#hex3y")},
    {"x": document.querySelector("#hex4x"), "y": document.querySelector("#hex4y")},
    {"x": document.querySelector("#hex5x"), "y": document.querySelector("#hex5y")},
];

var tripoints_elements = [
    {"x": document.querySelector("#tri0x"), "y": document.querySelector("#tri0y")},
    {"x": document.querySelector("#tri1x"), "y": document.querySelector("#tri1y")},
    {"x": document.querySelector("#tri2x"), "y": document.querySelector("#tri2y")},
];

var tripoints = [];
var hexpoints = [];

var output = document.querySelector("#out");

var ctx = document.querySelector("canvas").getContext("2d");
ctx.strokeStyle = "white";
ctx.lineWidth = 3;

function updateViewport(){
    tripoints = [];
    hexpoints = [];
    for (var i = 0; i < tripoints_elements.length; i++)
        tripoints.push(new Vec2D(tripoints_elements[i]["x"].value, tripoints_elements[i]["y"].value));
    for (var i = 0; i < hexpoints_elements.length; i++)
        hexpoints.push(new Vec2D(hexpoints_elements[i]["x"].value, hexpoints_elements[i]["y"].value));
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);

    ctx.beginPath();// Level 1 crook
    ctx.moveTo(tripoints[0].x, tripoints[0].y);
    ctx.lineTo(tripoints[1].x, tripoints[1].y);
    ctx.lineTo(tripoints[2].x, tripoints[2].y);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();//Level 50 Mafia Boss
    ctx.moveTo(hexpoints[0].x, hexpoints[0].y);
    for(i=1; i<hexpoints.length; i++) ctx.lineTo(hexpoints[i].x, hexpoints[i].y);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();

    var p1 = new PolygonCollider(tripoints);
    var p2 = new PolygonCollider(hexpoints);
    if(collDect.Collision_Method_DIAGS(p1, p2)) output.innerHTML = "Overlap: true";
    else output.innerHTML = "Overlap: false";
}

for (var i = 0; i < tripoints_elements.length; i++){
    tripoints_elements[i]["x"].onchange = updateViewport;
    tripoints_elements[i]["y"].onchange = updateViewport;
}

updateViewport();