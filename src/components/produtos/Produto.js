import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css';

const Produto = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  return (
    <div className="Produto_content_box">
      {produtos &&
        produtos.map((produto) => (
          <div key={produto.id} className="Produto_box">
            <Link to={`/produtos/${produto.id}`}>
              <img src={produto.fotos[0].src} alt="img_produto" />
            </Link>
            <h2>{produto.nome}</h2>
          </div>
        ))}
    </div>
  );
};

export default Produto;
