import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCarAction } from '../redux/actions';

export const CarsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarAction());
  }, []);

  const cars = useSelector((state: { cars: { cars: [] } }) => state.cars.cars);

  const carsList = cars.map(
    (el: {
      _id: string;
      brand: string;
      model: string;
      year: number;
      image: string;
    }) => {
      return (
        <li className="carItem" key={el._id}>
          <img
            src={`http://localhost:5000/cars/uploads/${el.image}`}
            alt="car"
          />
          <Link to={`/cars/${el._id}`}>
            <h3>{`${el.brand} ${el.model}`}</h3>
            <p>{el.year}</p>
          </Link>
        </li>
      );
    }
  );
  return <ul className="carList">{carsList}</ul>;
};
