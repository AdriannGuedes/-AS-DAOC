import { db } from "../db.js";

export const getCars = (_, res) => {
  const q = "SELECT * FROM cars";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getCar = (req, res) => {
  const carId = req.params.id
  const q = "SELECT * FROM cars WHERE id = ?";

  db.query(q, [carId], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (data.length === 0) {
      return res.status(404).json({ message: "Carro não encontrado!" });
    }
    return res.status(200).json(data[0]);
  })
}

export const addCar = (req, res) => {

  const q =
    "INSERT INTO cars(`modelo`, `ano`, `kilometragem`, `foto`) VALUES(?)";

  const values = [
    req.body.modelo,
    req.body.ano,
    req.body.kilometragem,
    req.body.foto,
  ];



  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Carro adicionado com sucesso.");
  });
};

export const updateCar = (req, res) => {
  const q =
    "UPDATE cars SET `modelo` = ?, `ano` = ?, `kilometragem` = ?, `foto` = ? WHERE `id` = ?";

  const values = [
    req.body.modelo,
    req.body.ano,
    req.body.kilometragem,
    req.body.foto,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Carro atualizado com sucesso.");
  });
};

export const deleteCar = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "ID não fornecido." });
  }

  const q = "DELETE FROM cars WHERE `id` = ?";

  db.query(q, [id], (err, results) => {
    if (err) {
      console.error("Erro ao tentar excluir o carro:", err);
      return res.status(500).json({ error: "Erro ao deletar carro." });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Carro não encontrado." });
    }
    return res.status(200).json("Carro deletado com sucesso.");
  });
};
