import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import CardBody from './cardbody';

import '../Assests/CSS/body.css';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
  });
  

const Body: React.FC = () => {
  return (
    <div className='body-main'>
      <ApolloProvider client={client}>
        <CardBody />
      </ApolloProvider>
    </div>
  )
}

export default Body