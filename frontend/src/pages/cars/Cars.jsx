import React, { useState, useEffect } from "react";
import "./Cars.css";
import Header from "../../components/header/Header";
import CarForm from "../../components/carForm/CarForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Cars = () => {
    const [cars, setCars] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleAddCar = (newCar) => {
        setCars((prevCars) => [...prevCars, newCar]);
    };

    const getCars = async () => {
        try {
            const res = await axios.get("http://localhost:8800/cars");
            setCars(res.data.sort((a, b) => (a.modelo > b.modelo ? 1 : -1)));
        } catch (error) {
            console.log(error(error));
        }
    };

    const deleteCar = async (carId) => {
        try {
            const response = await axios.delete(`http://localhost:8800/car/${carId}`);

            if (response.status === 200) {
                setCars(prevCars => prevCars.filter(car => car.id !== carId));
            }
        } catch (error) {
            console.error("Erro ao remover o carro:", error.response || error.message);
            alert("Ocorreu um erro ao tentar remover o carro.");
        }
    };


    useEffect(() => {
        getCars();
    }, [setCars]);




    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="cars-container">

                <h1>Modelos:</h1>
                <button className="toggle-form-btn" onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Fechar Formulário" : "Cadastrar carro"}
                </button>

                {showForm && <CarForm onAddCar={handleAddCar} />}

                <div className="cars-list">
                    {cars.map((car) => (
                        <div className="car-card" key={car.id}>
                            <img src={car.foto} alt={car.modelo} className="car-image" />
                            <h3>{car.modelo}</h3>
                            <div className="button-container">
                                <button className="deleteCar" onClick={() => deleteCar(car.id)}>Deletar</button>
                                <button className="detalhesCar" onClick={() => navigate(`/carDetails/${car.id}`)}>Detalhes</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Cars;