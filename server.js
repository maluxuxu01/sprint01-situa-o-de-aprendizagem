import express from 'express';
const app = express()

const aluno = {
    nome: "Augusto",
    turma: "TDS1",
    curso:"ds"
};

const cursos = [
  {
    "id": 1,
    "nome": "Ciência da Computação"
  },
  {
    "id": 2,
    "nome": "Engenharia de Software"
  },
  {
    "id": 3,
    "nome": "Defesa Cibernética / Redes"
  }
];


const professores = [
  {
    "nome": "Prof.Eduardo",
    "disciplina": "Ciência da Computação"
  },
  {
    "nome": "Prof. Roberto Costa",
    "disciplina": "Engenharia de Software"
  },
  {
    "nome": "Prof. Luka Martins",
    "disciplina": "Defesa Cibernética / Redes"
  }
]

app.get ("/", (req, res) => {
    res.send("Servidor ta funcionando certinho :D");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor em http://localhost:${PORT}`);
}); 

app.get("/paginaInicial", (req, res) => {
    res.send("Boas vindas à Central de Informações da Escola!")
});


app.get("/aluno", (req, res) => {
    res.json(aluno);
});


app.get("/disciplina", (req, res) => {
    res.send("BackEnd I")
});


app.get("/ajuda", (req, res) => {
    res.send("Seja bem-vindo à Central de Informações da Escola! Aqui você pode encontrar informações sobre alunos, cursos, professores e muito mais. Coloque a rota desejada na barra de endereço do navegador para acessar as informações que você procura. Por exemplo, para obter informações sobre os cursos oferecidos, digite /cursos na barra de endereço logo após o domínio. Aproveite a navegação!")
});


app.get("/status", (req, res) => {
    res.json({ status: "online", sprint: 1})
})


app.get("/escola", (req, res) => {
    res.json({ escola: "Senai", cidade: "Valinhos", tipo: "Cursos profissionalizantes"})
});


app.get("/cursos", (req, res) => {
    res.json({cursos})
});


app.get("/professor", (req, res) => {
    res.json({professores})
});


app.get("/requisicao", (req, res) => {
    res.json({
        metodo: req.method,
        caminho: req.path,
        mensagem: "A solicitação foi recebida com sucesso!"
    });
});
