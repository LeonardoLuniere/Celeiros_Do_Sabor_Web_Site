import React from 'react';
import './About.css';

function About() {
  return (
    <div className='block history'>
      <div className='about-container'>
        <div className='image-container'>
          <img
            className='about-image'
            src="./Image/produtosNaturaisHIstory"
            alt='Descrição da imagem'
          />
        </div>

        <div className='text-container'>
          <h1 className='history'>History</h1>
          <label className='Text history'>
            <p className='textP'>
              Com mais de 5 anos de dedicação e compromisso com a qualidade, nossa loja nasceu do desejo genuíno de oferecer 
              um espaço onde as pessoas pudessem adquirir alimentos saudáveis e nutritivos. Nosso catálogo inclui castanhas 
              do Pará, castanhas de caju, nozes, amêndoas e uma variedade de sementes selecionadas, tudo cuidadosamente escolhido 
              para proporcionar uma alimentação equilibrada e saudável.
              Durante esses anos, dedicamos esforços para garantir que cada produto atenda aos mais altos padrões de qualidade, 
              assegurando que nossos clientes tenham acesso a opções que promovam o bem-estar. Além disso, estamos sempre prontos
              para atender às necessidades específicas de nossos clientes. Se estiver procurando por um produto em especial,
              não hesite em entrar em contato conosco. Estamos comprometidos em ajudá-lo a encontrar o que procura.
            </p>
          </label>
        </div>
      </div>
    </div>
  );
}

export default About;
