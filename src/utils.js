const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
    const element = document.createElement(name);

    // Назначение свойств и атрибутов
    for (const name of Object.keys(props)) {
        if (propNames.has(name)) {
            element[name] = props[name];
        } else {
            element.setAttribute(name, props[name]);
        }
    }

    // Вставка вложенных элементов
    for (const child of children) {
        element.append(child);
    }

    return element;
}

/**
 * Склонение слова по падежам в зависимости от числа
 * @param value {Number} Число
 * @param formOne {String} Первая форма склонения
 * @param formTwo {String} Вторая форма склонения
 * @returns {String} Склоненная форма слова
 */

export function pluralForm(value, formOne, formTwo) {
    const mod100 = value % 100;
    const mod10 = value % 10;

    if (mod10 === 1 && mod100 !== 11) {
        return formOne;
    } else if ((mod10 >= 2 && mod10 <= 4) && (mod100 < 10 || mod100 >= 20)) {
        return formTwo;
    } else {
        return formOne;
    }
}
