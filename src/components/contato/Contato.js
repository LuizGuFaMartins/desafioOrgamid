import React from 'react';
import './style.css';

const Contato = () => {
  return (
    <div className="Contato_content_box">
      <div className="Contato_img_box">
        <img
          src="https://gobanners.com.br/wp-content/uploads/2018/05/contato-gobanners.jpg"
          alt="img_contato"
        />
      </div>
      <div className="Contato_text_box">
        <h2>Entre em contato</h2>
        <ul>
          <li>email@gmail.com</li>
          <li>+55 (78) 99854-7631</li>
          <li>Rua com asfalto, nº3456</li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
