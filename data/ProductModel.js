class ProductModel {
    constructor(id, title, type, description, image, price, selected, instructorId) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.description = description;
        this.image = image;
        this.price = price;
        this.selected = selected;
        this.instructorId = instructorId;
    }
}

export default ProductModel;
