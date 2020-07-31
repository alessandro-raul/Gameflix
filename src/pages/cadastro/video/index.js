import React from 'react';
import PageDefault from '../../../components/PageDefault/index';
import { Link } from  'react-router-dom';

function video() {
  return (
  <PageDefault>
      <h1>Cadastro de vídeo</h1>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
  </PageDefault>
  );
}

export default video;