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