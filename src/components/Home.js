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

  const [pokemonsFavoritos, setPokemonFavoritos] = useState([]);

  const getPokemons = () => {
    axios.get('https://api.pokemontcg.io/v1/cards?subtype=Basic')
    // axios.get('PokemonTCG/rest/pokemons')
      .then(res => {
        setPokemonsFavoritos(res.data.filter(pokemon => pokemon.favorito == false))
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
      <Carousel autoplay>
        <div>
          <Image
            src="https://forever21.imgix.net/img/app/shopmedia/production/1/16-66-5293.jpg?w=1087&auto=format"
          />
        </div>
        <div>
          <Image src="https://www.forever21.com/images/f21/us/en/web/20200407/0929_WGA_JACKETS_D_M_082604_f21.jpg?1" />
        </div>
        <div>
          <Image
            src="https://forever21.imgix.net/img/app/shopmedia/production/1/16-66-5323.jpg?w=1349&auto=format"
          />
        </div>
        <div>
          <Image
            src="https://forever21.imgix.net/img/app/shopmedia/production/1/16-66-5310.jpg?w=1349&auto=format"
          />
        </div>
      </Carousel>
      <br></br>
      <h3 style={{ fontSize: 49, textAlign: 'center', color:'hotpink' }}><strong>NOVEDADES</strong></h3>
      <br></br>

      <Row>
        {pokemonsFavoritos.map(pokemon => {
          return (
            <Col span={8}>
              <Card title={pokemon.nombre} bordered={true}>
                <Image width src={pokemon.url} />
                <br />
                <p>
                  {pokemon.descripcion}
                </p>
                <p>
                  Precio: {pokemon.precio} Gs.
                </p>
                <a href="url" >Ver detalles del pokemon</a>
                <br></br>
                <br></br>
                <Button onClick={() => alert("Añadido a carrito")} type="primary" shape="round" icon={<ShoppingCartOutlined />} size={30}   >
                  Añadir a carrito  </Button>
              </Card>
            </Col>
          )
        })}
      </Row>
    </>
  );
}

export default About;