class Box {
    constructor(x, y, d) {
        var bodyOptions = {
            restitution: 1,
            friction: Infinity
        }

        this.d = d;
        this.r = this.d/2
        this.body = Bodies.circle(x, y, this.r, bodyOptions);
        World.add(world, this.body);
    }

    show() {
        ellipse(this.body.position.x, this.body.position.y, this.d, this.d);
    }
}