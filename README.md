# js-rectangle-collision
Collision Detection for Rotated Rectangles in Javascript

## Usage:
Import the script in the head tag:
```html
<head>
    ...
    <script type="text/javascript" src="collision_detect/physics_structs.js"></script>
    <script type="text/javascript" src="collision_detect/rectCollision.js"></script>
    <script type="text/javascript" src="collision_detect/lineIntersect.js"></script>
    ...
</head>
```
**Important: You must put `physics_structs.js` first before any of the other imports from this library!**

Then, if you want to give a quick test, you can put this in your body tag:
```html
<body>
    ...
    <script type="text/javascript" src="test_Collision.js"></script>
</body>
```
This should give 3 alerts: "No", "Yes", and "No"

## Full Example:
```html
<!DOCTYPE HTML>
<head>
    <title>Test</title>
    <script type="text/javascript" src="collision_detect/physics_structs.js"></script>
    <script type="text/javascript" src="collision_detect/rectCollision.js"></script>
    <script type="text/javascript" src="collision_detect/lineIntersect.js"></script>
</head>
<body>
    <h1>Test</h1>
    <script type="text/javascript" src="collision_detect/test_Collision.js"></script>
</body>
```