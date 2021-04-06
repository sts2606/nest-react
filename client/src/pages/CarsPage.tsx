import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Loader } from './../components/Loader';
import { ICar } from '../interfaces/interfaces';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { carsGetFetch } from '../store/actions/carsAction';

export const CarsPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(carsGetFetch());
  }, []);
  const { cars, loading } = useTypedSelector((state) => state.cars);
  const carsList = cars.map((el: ICar) => {
    return (
      <li className="carItem" key={el._id}>
        <img src={`http://localhost:5000/cars/uploads/${el.image}`} alt="car" />
        <Link to={`/cars/${el._id}`}>
          <h3>{`${el.brand} ${el.model}`}</h3>
          <p>{el.year}</p>
        </Link>
      </li>
    );
  });
  return <ul className="carList">{loading ? <Loader /> : carsList}</ul>;
};
