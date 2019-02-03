/*
This collision detection script uses a generic 2 phase collision detection system: Broad and Fine
It saves on computing power, since you don't have to check every permutation precisely, just the bounding boxes.
*/

collDect.TestBoundingBoxOverlap = function(a, b) // A and B must be of type: "*Collider"
{
    var d1x = b.boundbox.min.x - a.boundbox.max.x;
    var d1y = b.boundbox.min.y - a.boundbox.max.y;
    var d2x = a.boundbox.min.x - b.boundbox.max.x;
    var d2y = a.boundbox.min.y - b.boundbox.max.y;

    if (d1x > 0.0 || d1y > 0.0)
        return false;

    if (d2x > 0.0 || d2y > 0.0)
        return false;

    return true;
}

collDect.Collision_Method_DIAGS = function(r1, r2) // Parameters must be of type: "PolygonCollider"
{
    /*if(typeof r1 != "PolygonCollider" || typeof r1 != "object"){
        console.log("Error: Non-Polygon object passed into Collision_Method_DIAGS() | Type: " + typeof r1);
        return false;
    }
    if(typeof r2 != "PolygonCollider" || typeof r2 != "object"){
        console.log("Error: Non-Polygon object passed into Collision_Method_DIAGS() | Type: " + typeof r2);
        return false;
    }
    */
    var poly1 = r1;
    var poly2 = r2;

    for (var shape = 0; shape < 2; shape++)
    {
        if (shape == 1)
        {
            poly1 = r2;
            poly2 = r1;
        }
        
        // Check diagonals of polygon...
        for (var p = 0; p < poly1.p.length; p++)
        {
            var line_r1s = poly1.pos;
            var line_r1e = poly1.p[p];

            // ...against edges of the other
            for (var q = 0; q < poly2.p.length; q++)
            {
                var line_r2s = poly2.p[q];
                var line_r2e = poly2.p[(q + 1) % poly2.p.length];

                var h = (line_r2e.x - line_r2s.x) * (line_r1s.y - line_r1e.y) - (line_r1s.x - line_r1e.x) * (line_r2e.y - line_r2s.y);
                var t1 = ((line_r2s.y - line_r2e.y) * (line_r1s.x - line_r2s.x) + (line_r2e.x - line_r2s.x) * (line_r1s.y - line_r2s.y)) / h;
                var t2 = ((line_r1s.y - line_r1e.y) * (line_r1s.x - line_r2s.x) + (line_r1e.x - line_r1s.x) * (line_r1s.y - line_r2s.y)) / h;

                if (t1 >= 0.0 && t1 < 1.0 && t2 >= 0.0 && t2 < 1.0)
                    return true;
            }
        }		
    }
    return false;
}