import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getCarAction, getCommentsAction } from '../redux/actions';
import { Loader } from './../components/Loader';
import { ICar } from './../interfaces/interfaces';

type StateType = {
  cars: {
    cars: [];
    loading: boolean;
  };
};

export const CarsPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarAction());
    dispatch(getCommentsAction());
  }, []);

  const { cars, loading } = useSelector((state: StateType) => state.cars);
  console.log(useStore().getState());
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
