const express = require("express");
const router = express.Router();
const Empresa = require("../models/empresa");

// retorna todas as empresas
router.get("/", async (req, res) => {
  res.json(await Empresa.find());
});

// retorna a empresa por id
router.get("/:id", findPorId, async (req, res) => {
  res.json(req.empresa);
});

// cadastra uma nova empresa
router.post("/", async (req, res) => {
  try {
    let empresa = new Empresa(req.body);
    // postagem.autor = req.usuario;  o autor é o usuário logado

    empresa = await empresa.save();
    res.status(201).json(empresa);
  } catch (e) {
    res.status(500).json(e);
  }
});

// deleta uma empresa
router.delete("/:id", findPorId, async (req, res) => {
  await req.empresa.remove();
});

// altera uma empresa
router.put("/:id", findPorId, async (req, res) => {
  await req.empresa.set(req.body).save();
});

// função de middleware para recuperar uma empresa pelo id
async function findPorId(req, res, next) {
  try {
    req.empresa = await Empresa.findById(req.params.id);

    if (req.usuario === null) {
      return res.status(404).json({
        message: "Nao foi possivel encontrar a empresa com o id informado",
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  next();
}

module.exports = router;
