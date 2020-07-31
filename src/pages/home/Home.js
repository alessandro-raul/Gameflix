import React from 'react';
import Menu from '../../components/Menu/index';
import BannerMain from '../../components/BannerMain/index';
import Carousel from '../../components/Carousel/index';
import Footer from '../../components/Footer/index';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div style={{backgroundColor: "#141414"}}>
      <Menu/>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Playstation 5 ou Xbox Series X - Qual vídeo game da nova geração terá os melhores gráficos? Confira o novo comparativo do Adrenaline e tire suas próprias conclusões ;)"}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[1]}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[2]}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[3]}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[4]}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[5]}
        />

        <Footer/>
    </div>
  );
}

export default Home;