import React, { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'

import Spinner from './spinner';

import '../Assests/CSS/card-body.css';

import NonVeg from '../Assests/Images/non-veg.webp';
import Vegan from '../Assests/Images/vegan.webp';
import Veg from '../Assests/Images/veg.webp';

const GET_DISHES = gql`
  query getDishes {
    dishes {
      id,
      name,
      dishImage,
      ingredients,
      instructions,
      category,
      type,
      userId
    }
  }
`

const CardBody: React.FC = () => {

  const [timer, setTimer] = useState(false)

  const { loading, error, data } = useQuery(GET_DISHES)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimer(true)
    }, 1000);
    return () => clearTimeout(timer);
  })

  if (loading || !timer) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && timer && 
        <div className="cards-main">
          {data.dishes.map((dish: any) => (
            <div id={dish.id} className="card-outer">
                <div className="card-inner">
                    <img src={dish.dishImage} alt="" />
                    {dish.type === 'Non Veg' &&
                      <img className='type-img' src={NonVeg} alt="" />
                    }
                    {dish.type === 'Veg' &&
                      <img className='type-img' src={Veg} alt="" />
                    }
                    {dish.type === 'Vegan' &&
                      <img className='type-img' src={Vegan} alt="" />
                    }
                    <div className='info-body'>
                      <h2>{dish.name}</h2>
                      <div className='info-body-inner'>
                        <p className='instruction-heading'>Instructions</p>
                        <p className='instructions' dangerouslySetInnerHTML={{__html: dish.instructions.slice(0,85) + '...'}} />
                      </div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      }
    </>
  )
}

export default CardBody