import React from 'react';

const Noticia = ({ noticia }) => {
  const { url, title, description, source, urlToImage } = noticia;

  const imagen = (urlToImage)
    ?
        <img src={urlToImage} alt={title} />
    : 
        null

  return (
    <div className="col s12 m12 l12">
      <div className="card">
        <div className="card-image">
          {imagen}
          {/* <span className="card-title">{source.name}</span> */}
        </div>
        <div className="card-content">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className="card-action">
            <a 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="waves-effect waves-ligth btn"
            >Ver Noticia Completa</a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
