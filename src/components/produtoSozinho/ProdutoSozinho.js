import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const ProdutoSozinho = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const fetchResponse = await fetch(url);
        const fetchResponseJson = await fetchResponse.json();
        setProduto(fetchResponseJson);
        setError(false);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`);
  }, []);

  if (loading) return <div className="loading"></div>;
  if (produto === null) return null;
  if (error) return <h3>Ops, algo deu errado...</h3>;
  return (
    <>
      <div className="ProdutoSozinho_content_box">
        <div className="ProdutoSozinho_img_box">
          {produto.fotos.map((foto) => (
            <img key={foto.src} src={foto.src} alt={foto.src} />
          ))}
        </div>
        <div className="ProdutoSozinho_text_box">
          <h2>{produto.nome}</h2>
          <p>R$ {produto.preco}</p>
          <p>{produto.descricao}</p>
        </div>
      </div>
    </>
  );
};

export default ProdutoSozinho;
