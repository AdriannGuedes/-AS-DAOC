import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import "./carsDetail.css";

const CarsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/car/${id}`);
                setCar(response.data); 
                setLoading(false); 
            } catch (error) {
                console.error("Erro ao buscar os detalhes do carro:", error);
                setLoading(false);
            }
        };

        fetchCarDetails();
    }, [id]); 

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (!car) {
        return <p>Carro não encontrado!</p>;
    }



    return (
        <>
            <Header />
            <div className="car-detail-container">
                <h1>Especificações do Veiculo:</h1>
                <img src={car.foto} alt={car.modelo} style={{ width: "300px", height: "200px" }} />
                <h2>{car.modelo}</h2>
                <p>Ano: {car.ano}</p>
                <p>Kilometragem: {car.kilometragem}</p>

                <button onClick={() => navigate('/cars')}>Voltar</button>
                <button onClick={() => navigate(`/carEdit/${id}`)}>Editar</button>
            </div>

        </>
    )
}

export default CarsDetail;