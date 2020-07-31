import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault/index";
import FormField from "../../../components/FormField/index";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/index";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    cor: "",
    descricao: "",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(text) {
    setValue(text.target.getAttribute("name"), text.target.value);
  }

  useEffect(()=>{
     const URL = window.location.hostname.includes('localhost')
     ? 'http://localhost:8080/categorias'
     : 'https://gameflixx.herokuapp.com/categorias';
     fetch(URL)
     .then(async (serverResponse)=> {
       const response = await serverResponse.json();
       setCategorias(response);
     });
  }, []);

  return (
    <PageDefault>
      <h1>Nova categoria</h1>
      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([...categorias, values.nome]);

          setValues(valoresIniciais);
        }}
      >
        <FormField label="Nome da categoria:" value={values.nome} onChange={handleChange} type="text" name="nome" inputType="input"/>

        <FormField label="Descrição da categoria:" value={values.descricao} onChange={handleChange} type="textarea" name="descricao" inputType="textarea"/>

        <FormField label="Cor:" value={values.cor} onChange={handleChange} type="color" name="cor" inputType="input"/>

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>
      <Link to="/cadastro/video">Cadastrar vídeo</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
