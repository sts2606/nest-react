import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const CarsPage: React.FC = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${window.location.href}`);
      const data = await result.json();
      console.log('DATA', data);
      setCars(data);
    };
    fetchData();
  }, []);
  const carsList = cars.map((el) => {
    return (
      <li className="carItem" key={el['_id']}>
        <img
          src={`http://localhost:5000/cars/uploads/${el['image']}`}
          alt="just car"
        />
        <Link to={`/cars/${el['_id']}`}>
          <h3>{`${el['brand']} ${el['model']}`}</h3>
          <p>{el['year']}</p>
        </Link>
      </li>
    );
  });
  return <ul className="carList">{carsList}</ul>;
};
