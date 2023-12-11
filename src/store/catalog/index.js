import StoreModule from "../module";

class Catalog extends StoreModule {
  constructor(store, name) {
    super(store, name);
  }

  initState() {
    return {
      list: [],
      count: 0,
    };
  }

  async load(number) {
    const response = await fetch(
      `/api/v1/articles?limit=10&skip=${(number - 1) * 10}`
    );
    const responseCount = await fetch(
      `/api/v1/articles?limit=10&skip=10&fields=items(_id, title, price),count`
    );
    const json = await response.json();
    const jsonCount = await responseCount.json();
    const totalCount = Math.ceil(jsonCount.result.count / 10);
    this.setState(
      {
        ...this.getState(),
        list: json.result.items,
        count: totalCount,
      },
      "Загружены товары из АПИ"
    );
  }
}

export default Catalog;
