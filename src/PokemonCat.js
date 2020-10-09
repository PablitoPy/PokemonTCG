import React, { useState, useEffect } from 'react';
//import React from 'react';
import "antd/dist/antd.css";
import './App.css';
import axios from 'axios';

import { ShoppingCartOutlined } from '@ant-design/icons';
import {Button, Layout, Row, Col, Card, Image, Pagination, Space } from 'antd';

const { Content } = Layout;



function PokemonCat(props) {

    const [pokemons, setPokemons] = useState([]);

    const getPokemons = () => {
        // axios.get('primer-trabajo-grupal/rest/catalogo/paginated', { params: { pageSize: 2, first: 0 }})
        axios.get('primer-trabajo-grupal/rest/pokemons')
            .then(res => {
                setPokemons(res.data);
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