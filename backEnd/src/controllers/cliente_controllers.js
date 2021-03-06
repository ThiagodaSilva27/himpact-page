const res = require("express/lib/response");
const bd = require("../infra/sq-litebd");
const clienteConstructor = require("../models/Cliente");

const cliente = (app, bd) => {
  app.get("/clientes", (req, res) => {
    const add = req.body;
    console.log(add);

    bd.all(`SELECT * FROM CLIENTES`, (error, rows) => {
      if (error) {
        res.json("Erro ao selecionar o Banco");
      } else {
        res.status(200).json({ "banco selecionado": rows });
        
      }
    });
  });

  app.get("/clientes/:id", (req, res) => {
    const requisicao = req.params.id;

    bd.all(`SELECT * FROM CLIENTES WHERE id = ${requisicao}`, (error, rows) => {
      if (error) {
        console.log(typeof requisicao, requisicao);
        res.json({ "Erro ao retornar nome": error });
      } else {
        console.log(typeof requisicao, requisicao);
        res.json({ "nome selecionado": rows });
      }
    });
  });

  app.post("/register", (req, res) => {
    const add = req.body;
    console.log(add);

    bd.all(`INSERT INTO CLIENTES (NOME,CPF,EMAIL,SENHA) VALUES(?,?,?,?)`, [
      add.nome,
      add.cpf,
      add.email,
      add.senha,
    ]);
    
    res.status(201).json("Usuário Cadastrado");
  });
};

module.exports = cliente;
