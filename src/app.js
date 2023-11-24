import React from 'react';
import './styles.css';
import {pluralForm} from './utils';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

    const list = store.getState().list || [];

    return (
        <div className='App'>
            <div className='App-head'>
                <h1>Приложение на чистом JS</h1>
            </div>
            <div className='App-controls'>
                <button onClick={() => store.addItem()}>Добавить</button>
            </div>
            <div className='App-center'>

                <div className='List'>{
                    list.map(item =>
                        <div key={item.code}
                             className={`List-item ${item.selected ? 'List-item_selected' : ''}`}
                             >
                            <div className={`Item ${item.selected ? ' Item_selected' : ''}`}
                                 onClick={() => store.selectItem(item.code)}>

                                <div className='Item-code'>
                                    {item.code}
                                </div>

                                <div className='Item-title'>
                                    {item.title}
                                    {item.numberClicks > 0 && (
                                        <span className='Item-click'>
                                            | Выделяли {item.numberClicks} {pluralForm(item.numberClicks, 'раз', 'раза')};
                                        </span>
                                    )}
                                </div>

                                <div className='Item-actions'>
                                    <button onClick={() => store.deleteItem(item.code)}>
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
