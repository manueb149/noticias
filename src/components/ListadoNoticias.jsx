import React from "react";
import Noticia from "./Noticia";
import { v4 as uuidv4 } from "uuid";

const ListadoNoticia = ({ noticias }) => (
  <div className="row">
    {noticias.map((noticia) => (
      <Noticia key={uuidv4()} noticia={noticia} />
    ))}
  </div>
);

export default ListadoNoticia;
