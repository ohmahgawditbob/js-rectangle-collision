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

class PolygonCollider {
    constructor(p, pos, angle, o, overlap){ // p: Vec2D Array, pos: Vec2D, angle: number (float), o: Vec2D Array, overlap: bool
        this.p = p; // Transformed Points (World Coords)
        if(pos) this.pos = pos; // World Space Position of the Center of the Polygon
        else{
            let x = 0;
            let y = 0;
            var i = 0;
            for(i=0; i<p.length; i++){
                x += p[i].x;
                y += p[i].y;
            }
            this.pos = new Vec2D(x/i, y/i);
        }
        this.angle = angle; // Direction / Orientation
        this.o = o; // Polygon "Model" (Local Coords)
        this.overlap = overlap; // Is there overlap occuring upon this polygon?
    }
}