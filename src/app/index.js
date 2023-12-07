import React, {useCallback, useContext, useEffect, useState} from 'react';
import Main from "./main";
import Basket from "./basket";
import useSelector from "../store/use-selector";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./product-page";

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const activeModal = useSelector(state => state.modals.name);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/:itemId" element={<ProductPage/>}/>
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
      {activeModal === 'basket' && <Basket/>}
    </BrowserRouter>
  );
}

export default App;
