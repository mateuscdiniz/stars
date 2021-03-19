const mongoose = require("mongoose");

const colaboradorSchema = new mongoose.Schema(
  {
    cpf: { type: String, required: true, unique: true },
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefone: { type: String, required: true, unique: true },
    endereco: { type: String, required: true },
    empresa: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Colaborador", colaboradorSchema);
