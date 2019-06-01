class MouseInput {
    constructor() {
        MouseInput.mouseEvent = null;
        MouseInput.x = 0;
        MouseInput.y = 0;
    }

    static getX() {
        return MouseInput.x;
    }

    static getY() {
        return MouseInput.y;
    }

    static onMouseMove(event) {
        MouseInput.x = event.clientX;
        MouseInput.y = event.clientY;
    }
}