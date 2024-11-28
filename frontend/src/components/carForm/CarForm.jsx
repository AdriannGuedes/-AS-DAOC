import React, { useState } from "react";
import axios from "axios";
import "./CarForm.css";

const CarForm = ({ onAddCar }) => {

    const [modelo, setModelo] = useState("");
    const [ano, setAno] = useState("");
    const [kilometragem, setKilometragem] = useState("");
    const [foto, setFoto] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!modelo || !ano || !kilometragem || !foto) {
            alert("Preencha todos os campos!");
            return;
        }

        setLoading(true);

        const newCar = {
            id: Date.now(),
            modelo,
            ano,
            kilometragem,
            foto,
        };

        try {
            // Requisição POST para o backend
            const response = await axios.post("http://localhost:8800/car", newCar);

            
            if (response.status === 200) {
                alert("Carro adicionado com sucesso!");
                onAddCar({ ...newCar, id: Date.now() }); 
                setModelo("");
                setAno("");
                setKilometragem("");
                setFoto("");
            } else {
                alert("Erro ao adicionar o carro!");
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            alert("Ocorreu um erro. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="carForm">
            <input
                type="text"
                placeholder="Modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
            />
            <input
                type="number"
                placeholder="Ano"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
            />
            <input
                type="number"
                placeholder="Kilometragem"
                value={kilometragem}
                onChange={(e) => setKilometragem(e.target.value)}
            />
            <input
                type="text"
                placeholder="URL da Foto"
                value={foto}
                onChange={(e) => setFoto(e.target.value)}
            />
            <button type="submit" disabled={loading}>
                {loading ? "Adicionando..." : "Adicionar Carro"}
            </button>
        </form>
    );
};

export default CarForm;