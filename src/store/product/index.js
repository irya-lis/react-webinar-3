import StoreModule from "../module";

class Product extends StoreModule {
  constructor(store, name) {
    super(store, name);
  }

  initState() {
    return {
      description: '',
      madeIn: '',
      category: '',
      edition: '',
      price: '',
      title: ''
    }
  }

  async getProduct(count) {
    const response = await fetch(`/api/v1/articles/${count}?fields=*,madeIn(title,code),category(title)`);
    const json = await response.json();
    this.setState({
      ...this.getState(),
      description: json.result.description,
      madeIn: json.result.madeIn.title,
      category: json.result.category.title,
      edition: json.result.edition,
      price: json.result.price,
      title: json.result.title
    }, 'Загружен товар из АПИ');
  }
}

export default Product;