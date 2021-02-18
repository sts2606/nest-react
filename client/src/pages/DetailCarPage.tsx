import React, { useEffect, useState } from 'react';
import { CommentForm } from '../components/CommentForm';
import { Comments } from '../components/Comments';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ICar } from './../interfaces/interfaces';

export const DetailCarPage: React.FC = () => {
  const carId = window.location.href.split('/').pop();
  const car = useSelector(
    (state: { cars: { cars: ICar[] }; comments: {}; user: {} }) =>
      state.cars.cars.filter((car) => car._id === carId)[0]
  );

  return (
    <div className="carDetailCard">
      <div>
        <Card className="carCard">
          <Card.Img
            variant="top"
            src={`http://localhost:5000/cars/uploads/${car.image}`}
          />
          <Card.Body>
            <Card.Title>{car.brand}</Card.Title>
            <Card.Text>
              {car.model}
              &nbsp;
              {car.year}
            </Card.Text>
          </Card.Body>
        </Card>
        <CommentForm />
      </div>
      <Comments />
    </div>
  );
};
