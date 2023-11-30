/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Удаление товара из корзины по коду
   * @param code
   */
  removeItemFromBasket(code) {
    const basket = this.state.basket || [];
    const updatedBasket = basket.filter(item => item.code !== code);

    this.setState({
      ...this.state,
      basket: updatedBasket,
    });
    this.calculateTotalPrice();
  }

  /**
   * Добавление товара в корзину, если данный товар уже есть в корзине, то инкремент его количества на 1
   * @param item {Object} Товар для добавления
   */
  addItemToBasket(item) {
    const basket = this.state.basket || [];
    const itemIndex = basket.findIndex(orderItem => orderItem.code === item.code);

    if (itemIndex === -1) {
      this.setState({
        ...this.state,
        basket: [...basket, {...item, quantity: 1}]
      });
    } else {
      const updatedBasket = [...basket];
      updatedBasket[itemIndex] = {...updatedBasket[itemIndex], quantity: updatedBasket[itemIndex].quantity + 1};

      this.setState({
        ...this.state,
        basket: updatedBasket
      });
    }
    this.calculateTotalPrice();
  }

  /**
   * Подсчет общей цены товаров в корзине
   */
  calculateTotalPrice() {
    this.setState({
      ...this.state,
      totalPrice: this.state.basket.reduce((sum, el) => {
        return sum + el.price * el.quantity;
      }, 0),
    });
  }
}

export default Store;
