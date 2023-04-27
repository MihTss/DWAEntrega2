const commentarios = [{
    "id": 14, 
    "comentarios": [{
        "usuario": "mary",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom, gostei muito!"
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom, gostei!"
    }
    ]
},
{
    "id": 78, 
    "comentarios": [{
        "usuario": "mary",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom, gostei!"
    }
    ]
},
{
    "id": 96, 
    "comentarios": [{
        "usuario": "mary",
        "comentario": "Muito bom, gostei!"
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
},
{
    "id": 39, 
    "comentarios": [{
        "usuario": "mary",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom!"
    }
    ]
},
{
    "id": 80, 
    "comentarios": [{
        "usuario": "mary",
        "comentario": "Adorei!"
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
},
{
    "id": 61, 
    "comentarios": [{
        "usuario": "mary",
        "comentario": "Ótimo filme!"
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
},
{
    "id": 36, 
    "comentarios": [{
        "usuario": "mary",
        "comentario": "Muito bom, Legal demais!"
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
}
]

const noComment = {
    "id": 0, 
    "comentarios": [{
        "usuario": "",
        "comentario": "Não foram encontrados comentários!"
    }
    ]
}

export default function Comments({ id }) {
    const comentariosFilme = commentarios.filter(f =>
        f.id === id
    );

        console.log(id)

    if(comentariosFilme.length === 0){
        comentariosFilme[0] = noComment
    }
    return (
        <div className="container text-center">
            <h3 className="mt-5 mb-4">Comentários</h3>
            {comentariosFilme[0].comentarios.map((comment, i) => (
                <div className="row" key={i}>
                    <div className="col text-end">
                        <b>{comment.usuario}</b>
                    </div>
                    <div className="col text-start">
                        {comment.comentario}
                    </div>
                </div>
            ))}
        </div>
    )
}