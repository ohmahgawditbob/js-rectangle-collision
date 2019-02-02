/*
This collision detection script uses a generic 2 phase collision detection system: Broad and Fine
It saves on computing power, since you don't have to check every permutation precisely, just the bounding boxes.
*/

function TestBoundingBoxOverlap(a, b) // A and B must be of type: "RectangleCollider"
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