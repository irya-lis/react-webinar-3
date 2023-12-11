import StoreModule from "../module";

class Basket extends StoreModule {

  initState() {
    return {
      list: [],
      sum: 0,
      amount: 0
    }
  }

  /**
   * Добавление товара в корзину
   * @param _id Код товара
   */
  async addToBasket(_id) {
    let sum = 0;
    let exist = false;
    const list = this.getState().list.map(item => {
      let result = item;
      if (item.result._id === _id) {
        exist = true;
        result = { ...item, amount: item.amount + 1 };
      }

      sum += result.result.price * result.amount;
      return result;
    });

    if (!exist) {
      try {
        // Выполняем запрос к API для получения информации о товаре по _id
        const response = await fetch(`/api/v1/articles/${_id}`);
        if (response.ok) {
          const item = await response.json();
          list.push({ ...item, amount: 1 });

          sum += item.result.price;

        } else {
          console.error(`Ошибка при выполнении запроса: ${response.status}`);
        }
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    }

    this.setState({
      ...this.getState(),
      list,
      sum,
      amount: list.length
    }, 'Добавление в корзину');
  }

  /**
   * Удаление товара из корзины
   * @param _id Код товара
   */
  removeFromBasket(_id) {
    let sum = 0;
    const list = this.getState().list.filter(item => {
      if (item.result._id === _id) return false;
      sum += item.result.price * item.amount;
      return true;
    });

    this.setState({
      ...this.getState(),
      list,
      sum,
      amount: list.length
    }, 'Удаление из корзины');
  }
}

export default Basket;
