/**
 * Хранилище состояния приложения
 */
class Store {
    constructor(initState = {}) {
        this.state = initState;
        this.listeners = []; // Слушатели изменений состояния
        this.initializeExistingCodes();
    }

    /**
     * Инициализация коллекции уникальных кодов
     */
    initializeExistingCodes() {
        this.existingCodes = new Set(this.state.list.map(item => item.code));
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
     * Добавление новой записи
     */
    addItem() {
        this.setState({
            ...this.state,
            list: [...this.state.list, {code: this.generateUniqueNumber(), title: 'Новая запись', numberClicks: 0}]
        })
    };

    /**
     * Генерация уникального числа. Проверка наличия сгенерированного числа в {@code existingCodes},
     * если существует - генерация нового уникального числа,
     * если данное число отсутствует - добавление этого числа в {@code existingCodes} и возврат этого числа
     * @return Уникальное число
     */
    generateUniqueNumber() {
        const randomKey = Math.random().toString(36).slice(2);
        const hash = this.generateHash(randomKey);
        const uniqueNumber = Math.abs(hash % 1000);

        if (this.existingCodes.has(uniqueNumber)) {
            return this.generateUniqueNumber();
        } else {
            this.existingCodes.add(uniqueNumber);
            return uniqueNumber;
        }
    }

    /**
     * Удаление записи по коду
     * @param code
     */
    deleteItem(code) {
        this.setState({
            ...this.state,
            list: this.state.list.filter(item => item.code !== code)
        })
    };

    /**
     * Выделение записи по коду и автоинкремент счетчика кликов на данную запись
     * @param code
     */
    selectItem(code) {
        this.setState({
            ...this.state,
            list: this.state.list.map(item => {
                if (item.code === code) {
                    item.selected = !item.selected;
                    if (item.selected) {
                        item.numberClicks += 1;
                    }
                } else {
                    item.selected = false;
                }
                return item;
            })
        })
    }

    /**
     * Генерация хэш кода из строки
     * @param randomKey Рандомный строковый ключ
     * @return Сгенерированный хэш код из строки
     */
    generateHash(randomKey) {
        let hash = 0;

        for (let i = 0; i < randomKey.length; i++) {
            const char = randomKey.charCodeAt(i);
            hash = (hash << 5) - hash + char;
        }

        return hash;
    }
}

export default Store;
