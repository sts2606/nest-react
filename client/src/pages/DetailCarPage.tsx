import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Comments } from '../components/Comments';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ICar } from './../store/types/car';
import { useDispatch } from 'react-redux';
import { getAllCommentsOfCar } from '../store/actions/carsAction';

export const DetailCarPage: React.FC = () => {
  const dispatch = useDispatch();

  const carId = window.location.href.split('/').pop()!;

  useEffect(() => {
    dispatch(getAllCommentsOfCar(carId));
  }, []);

  const car: ICar = useTypedSelector((state) => {
    return state.cars.cars.filter((car) => car._id === carId)[0];
  });

  const header = (
    <img alt="Card" src={`http://localhost:5000/cars/uploads/${car.image}`} />
  );

  return (
    <div className="carCard">
      <Card
        title={car.brand}
        subTitle={`${car.model} ${car.year}`}
        style={{ width: '25em' }}
        header={header}
      >
        <p className="p-m-0" style={{ lineHeight: '1.5' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </Card>
      <Comments />
    </div>
  );
};
