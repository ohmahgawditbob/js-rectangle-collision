var collDect = {};

collDect.Point = function(x, y){
    return {
        x: x,
        y: y
    };
};

collDect.onSegment =function(p, q, r) { 
    // Given three colinear points p, q, r, the function checks if 
    // point q lies on line segment 'pr' 
    if (q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) &&
        q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y))
        return true; 
    return false; 
};

collDect.orientation = function(p,q,r) {
    var val = (q.y - p.y) * (r.x - q.x) - 
    (q.x - p.x) * (r.y - q.y); 

    if (val == 0) return 0;  // colinear 
    return (val > 0)? 1: 2; // clock or counterclock wise 
};

collDect.doIntersect = function(p1, q1, p2, q2) { 
    // Find the four orientations needed for general and 
    // special cases 
    var o1 = collDect.orientation(p1, q1, p2); 
    var o2 = collDect.orientation(p1, q1, q2); 
    var o3 = collDect.orientation(p2, q2, p1); 
    var o4 = collDect.orientation(p2, q2, q1); 
  
    if (o1 != o2 && o3 != o4) 
        return true; 
  
    // Special Cases 
    // p1, q1 and p2 are colinear and p2 lies on segment p1q1 
    if (o1 == 0 && collDect.onSegment(p1, p2, q1)) return true; 
  
    // p1, q1 and q2 are colinear and q2 lies on segment p1q1 
    if (o2 == 0 && collDect.onSegment(p1, q2, q1)) return true; 
  
    // p2, q2 and p1 are colinear and p1 lies on segment p2q2 
    if (o3 == 0 && collDect.onSegment(p2, p1, q2)) return true; 
  
     // p2, q2 and q1 are colinear and q1 lies on segment p2q2 
    if (o4 == 0 && collDect.onSegment(p2, q1, q2)) return true; 
  
    return false; // Doesn't fall in any of the above cases 
};