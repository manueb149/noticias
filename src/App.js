import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // State para guardar categoria
  const [ categoria, setCategoria ] = useState('general');
  const [ noticias, setNoticia ] = useState([]);

  useEffect(() => {

    // Funcion para manejar errores de la consulta
    const handleErrors = response => {
      if (!response.ok) {
        return Promise.resolve('error');
      }
      return response;
    }

    //  Consular API y guardar array de noticas
    const consultarAPI = async () => {
      const apiKey = '41371624fc1f430abbee66652788177e';
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${apiKey}`;

      const result = await fetch(url)
        .then( handleErrors )
        .then( response => response );

      if(result !== 'error'){
        const noticia = await result.json();
        console.log(noticia.articles);
        setNoticia(noticia.articles);
      }
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo="Buscador de Noticias"
      />
      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
