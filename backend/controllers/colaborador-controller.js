const express = require("express");
const router = express.Router();
const Colaborador = require("../models/colaborador");

router.get("/", async (req, res) => {
  res.json(await Colaborador.find());
});

router.get("/:id", findPorId, async (req, res) => {
  res.json(req.colaborador);
});

router.post("/", async (req, res) => {
  try {
    let colaborador = new Colaborador(req.body);
    // postagem.autor = req.usuario;  o autor é o usuário logado

    colaborador = await colaborador.save();
    res.status(201).json(colaborador);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", findPorId, async (req, res) => {
  await req.colaborador.remove();
});

router.put("/:id", findPorId, async (req, res) => {
  await req.colaborador.set(req.body).save();
});

// função de middleware para recuperar um usuario pelo id
async function findPorId(req, res, next) {
  try {
    req.colaborador = await Colaborador.findById(req.params.id);

    if (req.colaborador === null) {
      return res.status(404).json({
        message: "Nao foi possivel encontrar um usuário com o id informado",
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  next();
}

module.exports = router;
