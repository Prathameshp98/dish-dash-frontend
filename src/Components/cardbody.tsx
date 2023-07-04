import React from 'react'
import { gql, useQuery } from '@apollo/client'

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

  const { loading, error, data } = useQuery(GET_DISHES)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something Went Wrong</p>;



  return (
    <>
      {!loading && !error && 
        <div className="cards-main">
          {data.dishes.map((dish: any) => (
            <div className="card-outer">
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