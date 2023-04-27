import React from "react";

const planos = [{
  "nome": "Plano Standard",
  "preco": 19.99,
  "qualidade": "Ultra HD",
  "dispositivos": 2
},
{
  "nome": "Plano Premium",
  "preco": 29.99,
  "qualidade": "Ultra HD",
  "dispositivos": 4
},
{
  "nome": "Plano Ultimate",
  "preco": 49.99,
  "qualidade": "4K",
  "dispositivos": 6
}
]


export default function Card() {
  return (
    <div className="container text-center">
      <div className="row">
        {planos.map((plano, i) => (
          <div className="col" key={i}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{plano.nome}</h3>
                <p className="card-text mb-4">R${plano.preco}</p>
                <p className="card-text">{plano.descricao}</p>
                <p className="card-text"><b>Qualidade: </b>{plano.qualidade}</p>
                <p className="card-text mb-4"><b>Dispositivos: </b>{plano.dispositivos}</p>
                <a
                  href=""
                >
                  <div className="btn btn-primary">
                    Adquirir
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