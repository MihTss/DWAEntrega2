import { useEffect, useState } from "react";
import "./filmes.css";
import axios from "axios";

export const Filmes = ({ filter, findTitle }) => {
  const [listaFilmes, setListaFilmes] = useState([])

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/marycamila184/movies/movies')
      .then(response => {
        console.log(response.data);
        setListaFilmes(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  const sortedFilms = listaFilmes.sort((a, b) => {
    if (filter === 'ano') {
      return a.ano - b.ano;
    } else if (filter === 'nota') {
      return b.nota - a.nota;
    } else {
      return a.titulo.localeCompare(b.titulo);
    }
  });

  const filteredFilms = sortedFilms.filter(filme => {
    if (!findTitle) {
      return true;
    }
    return filme.titulo.toLowerCase().includes(findTitle.toLowerCase());
  });

  return (
    <div className="container text-center">
      {filteredFilms.length === 0 && <p>Nenhum filme encontrado.</p>}
      <div className="d-flex flex-wrap justify-content-center">
        {
          filteredFilms.map((filme, i) => (
            <div className="w-25 m-4" key={i}>
              <div className="card">
                <img src={filme.poster} alt={filme.titulo} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{filme.titulo} ({filme.ano}) </h5>
                  <p>{filme.duracao}</p>
                  <p>{filme.genero}</p>
                  <p>{filme.nota}</p>
                  <p>{filme.assistido ? "Assistido ✔" : "Não assistido"}</p>
                  <a
                    href={`/detalhes/${filme.id}/${filme.titulo}`}
                  >
                    <div className="btn btn-primary">
                      {filme.assistido ? "Assistir Novamente" : "Assistir"}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}