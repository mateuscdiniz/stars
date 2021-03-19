const mongoose = require("mongoose");
const Email = require("mongoose-type-email");

const EmpresaSchema = new mongoose.Schema(
  {
    cnpj: { type: String, required: true, unique: true },
    nome: { type: String, required: true, unique: true },
    email: { type: Email, required: true, unique: true },
    telefone: { type: String, required: true, unique: true },
    endereco: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Empresa", EmpresaSchema);
