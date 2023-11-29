
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
  }



/**
   * Добавление товара в корзину
   * @param item {Object} Товар для добавления
   */

  addItemToBasket(item) {
    const basket = this.state.basket || [];
    const itemIndex = basket.findIndex(orderItem => orderItem.code === item.code);

    if (itemIndex === -1) {
      this.setState({
        ...this.state,
        basket: [...basket, { ...item, quantity: 1 }]
      });
    } else {
      const updatedBasket = [...basket];
      updatedBasket[itemIndex] = { ...updatedBasket[itemIndex], quantity: updatedBasket[itemIndex].quantity + 1 };

      this.setState({
        ...this.state,
        basket: updatedBasket
      });
    }
  }




}

export default Store;




