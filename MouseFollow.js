class MouseFollow extends Component {
    constructor(gameObject) {
        super(gameObject);
    }

    update(delta) {
        // this.transform.x = MouseInput.getX();
        // this.transform.y = MouseInput.getY();

        this.gameObject.transform.x = 100;
        console.log("ieie");
    }
}