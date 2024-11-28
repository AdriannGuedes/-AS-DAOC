import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./carEditForm.css";

const FormEditCar = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [modelo, setModelo] = useState("");
    const [ano, setAno] = useState("");
    const [kilometragem, setKilometragem] = useState("");
    const [foto, setFoto] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCarDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/car/${id}`);
                const { modelo, ano, kilometragem, foto } = response.data;
                setModelo(modelo);
                setAno(ano);
                setKilometragem(kilometragem);
                setFoto(foto);
            } catch (error) {
                console.error("Erro ao buscar os detalhes do carro:", error);
            }
        };

        getCarDetails();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.put(`http://localhost:8800/car/${id}`, {
                modelo,
                ano,
                kilometragem,
                foto,
            });
            navigate(`/car/${id}`);
        } catch (error) {
            console.error("Erro ao atualizar o carro:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main-container">
            <form onSubmit={handleSubmit} className="car-form">
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
                    {loading ? "Salvando..." : "Salvar Alterações"}
                </button>
            </form>
        </div>
    );
};

export default FormEditCar;