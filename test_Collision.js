var p1 = collDect.Point(1, 1);var q1 = collDect.Point(10, 1); 
var p2 = collDect.Point(1, 2);var q2 = collDect.Point(10, 2); 

collDect.doIntersect(p1, q1, p2, q2)? alert("Yes\n"): alert("No\n"); 
  
p1 = collDect.Point(10, 0); q1 = collDect.Point(0, 10); 
p2 = collDect.Point(0, 0); q2 = collDect.Point(10, 10); 
collDect.doIntersect(p1, q1, p2, q2)? alert("Yes\n"): alert("No\n"); 

p1 = collDect.Point(-5, -5), q1 = collDect.Point(0, 0); 
p2 = collDect.Point(1, 1), q2 = collDect.Point(10, 10); 
collDect.doIntersect(p1, q1, p2, q2)? alert("Yes\n"): alert("No\n"); 