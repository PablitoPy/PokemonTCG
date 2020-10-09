import React, { useEffect, useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Carousel, Image, Row, Col, Card, Button } from 'antd';
import axios from 'axios';



const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};



function About(props) {

  const [pokemonsFavoritos] = useState([]);

  const getPokemons = () => {
    axios.get('https://api.pokemontcg.io/v1/cards?subtype=Basic')
       .then(res => {
        
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    getPokemons();
  }, [])

  return (
       <>
      <Row>
        {pokemonsFavoritos.map(pokemon => {
          return (
            <Col span={8}>
              <Card title={pokemon.nombre} bordered={true}>
                <Image width src={pokemon.imageurl} />
                <br />
                <p>
                  {pokemon.supertype}
                </p>
                <p>
                  Pokedex: {pokemon.nationalPokedexNumber}
                </p>
                <a href="url" >Ver detalles del pokemon</a>
                <br></br>
                <br></br>
                </Card>
            </Col>
          )
        })}
      </Row>
    </>
  );
}

export default About;