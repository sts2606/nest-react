import React, { useEffect, useState } from 'react';
import { Comments } from '../components/Comments';

export const DetailCarPage: React.FC = () => {
  const [car, setCar] = useState({
    _id: '',
    brand: '',
    model: '',
    year: 0,
    image: '',
    comments: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${window.location.href}`);
      const data = await result.json();
      setCar(data);
    };
    fetchData();
  }, []);
  return (
    <div className="carDetailCard">
      <div className="carInfo">
        <img
          src={`http://localhost:5000/cars/uploads/${car.image}`}
          alt="img"
        />
        <div>
          <h2>{car.brand}</h2>
          <p>{car.model}</p>
          <p>{car.year}</p>
        </div>
      </div>
      {car._id !== '' ? <Comments carId={car._id} /> : null}
    </div>
  );
};
