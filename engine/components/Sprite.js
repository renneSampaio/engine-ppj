class Sprite extends Component {
    constructor(gameObject, textureName) {
        super(gameObject);
        this.texture = textures[textureName];
        this.width = this.texture.image.width;
        this.height = this.texture.image.height;
    }

    update(delta) {
    }

    render(ctx) {
        ctx.drawImage(
            this.texture.image,
            0, 0,
            this.texture.image.width,
            this.texture.image.height,
            this.gameObject.transform.x,
            this.gameObject.transform.y,
            this.width * this.gameObject.transform.scaleX,
            this.height * this.gameObject.transform.scaleY,
        );
    }
}