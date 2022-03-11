import React from 'react';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Contato from './components/contato/Contato';
import Produtos from './components/produtos/Produto';
import ProdutoSozinho from './components/produtoSozinho/ProdutoSozinho';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />}></Route>
          <Route path="/produtos/:id" element={<ProdutoSozinho />}></Route>
          <Route path="/contatos" element={<Contato />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
