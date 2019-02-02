var collDect = {};

class Vec2D {
    constructor(x, y){ // Everyday average 2D vector
        if(typeof(x) == "number" && typeof(y) == "number"){
            this.x = x;
            this.y = y;
        }
    }
}

class BoundingBox { // Min is the point of the bounding box closest to the origin (0,0), while max is the furthest from the origin
    constructor(min, max){
        if(typeof min == "Vec2D" && typeof max == "Vec2D"){
            this.min = min;
            this.max = max;
        }
    }
}

class RectangleCollider { //Currently just a holder for the bounding box, but soon will create the bounding box on it's own given the position of it's center, apothem x, apothem y, and rotation
    constructor(bound){
        this.boundbox = bound;
    }
}