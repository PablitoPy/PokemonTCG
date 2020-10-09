import React, { useState, useEffect } from 'react';
//import React from 'react';
import "antd/dist/antd.css";
import './App.css';
import axios from 'axios';

import { ShoppingCartOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Card, Image, Pagination, Space } from 'antd';

const { Content } = Layout;



function PokemonCat(props) {

    const [pokemons, setPokemons] = useState([]);

    const getPokemons = () => {
        // axios.get('primer-trabajo-grupal/rest/catalogo/paginated', { params: { pageSize: 2, first: 0 }})
        axios.get(`https://api.pokemontcg.io/v1/cards?subtype=Basic`)
            .then(res => {
                setPokemons(res.data.cards);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getPokemons();
    }, [])

    //     return(

    return (
        <Content>
            <Row>
                {pokemons.map(pokemon => {
                    return (
                        <Col span={6}>
                            <Space direction="vertical">
                            <Card title={pokemon.name} bordered={true}>
                                <Image width src={pokemon.imageUrl} />
                                <br />                             
                                <p>
                                    Pokedex #: {pokemon.nationalPokedexNumber}
                                </p>
                                <p>
                                    Supertype: {pokemon.supertype}
                                    <br></br>
                                    Subtype: {pokemon.subtype}
                                    <br></br>
                                    HP: {pokemon.hp}
                                </p>
                                <p>
                                    Converted Retreat Cost: {pokemon.convertedRetreatCost}
                                    <br></br>
                                    Number: {pokemon.number}
                                    <br></br>
                                    Artist: {pokemon.artist}
                                    <br></br>
                                    Rarity: {pokemon.rarity}
                                    <br></br>
                                    Series: {pokemon.series}
                                    <br></br>
                                    Set: {pokemon.set}
                                    <br></br>
                                    Set Code: {pokemon.setCode}
                                </p>
                                <a href="url" >Ver detalles del pokemon</a>
                                <br></br>
                                <br></br>                                
                            </Card>
                            </Space>
                        </Col>
                    )
                })}
            </Row>
            <Row>
            
                <br /> <br />

            </Row>
            <br />
            <Pagination defaultCurrent={1} total={10} pageSize= {8} />
                        
        </Content>
    )
}

export default PokemonCat;