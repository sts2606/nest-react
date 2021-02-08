import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { getCarAction } from '../redux/actions';

type carProps = {
  cars: [
    { _id: string; brand: string; model: string; year: number; image: string }
  ];
};

const CarsPage: React.FC<carProps> = (cars) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarAction());
  }, []);
  const carsList = cars.cars.map((el) => {
    return (
      <li className="carItem" key={el['_id']}>
        <img
          src={`http://localhost:5000/cars/uploads/${el['image']}`}
          alt="car"
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

const mapStateToProps = (state: { cars: any }) => {
  console.log('state', state);
  return {
    cars: state.cars.cars,
  };
};

export default connect(mapStateToProps, null)(CarsPage);
