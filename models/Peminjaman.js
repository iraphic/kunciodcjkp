const mongoose = require("mongoose");

const peminjamanScheme = new mongoose.Schema({
  ID: {
    type: Number,
    required: true,
  },
  STO: {
    type: String,
    required: true,
  },
  NamaPeminjam: {
    type: String,
    required: true,
  },
  Perusahaan: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  JenisKunci: {
    type: String,
    required: true,
  },
  NamaKunci: {
    type: String,
    required: true,
  },
  tipePekerjaan: {
    type: String,
    required: true,
  },
  petugasSAS: {
    type: String,
    required: true,
  },
  FotoKTP: {
    type: [],
    required: true,
  },
  FotoPeminjam: {
    type: [],
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  petugasPengembalian: {
    type: String,
    required: false,
  },
  FotoPengembalian: {
    type: [],
    required: false,
  },
  waktuPengembalian: {
    type: Date,
    required: false,
  },
  timeStamp: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Peminjaman", peminjamanScheme);