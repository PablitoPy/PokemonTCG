import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Space, Tooltip, Button } from 'antd';
import { EditFilled, DeleteFilled, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import axios from 'axios';

const dummyPokemons = [
    {
        "id": 'dps-90',        
        "name": 'Cubone',
        "nationalPokedexNumber": 104,
        "imageUrl": '"https://images.pokemontcg.io/dp6/90.png"',
        "imageUrlHiRes": '"https://images.pokemontcg.io/dp6/90_hires.png"',
        "types": {
            "supertype": "Pokémon",
            "subtype": "Basic",
            "hp": '60',            
        },
        "retreatCost": {
            "convertedRetreatCost": 1,
            "number": '90',
            "artist": 'Kagemaru Himeno',
            "rarity": 'Common',
            "series": 'Diamond & Pearl',                 
        }
    }
]

function PokemonList (props) {

    const [pokemons, setPokemons] = useState([]);

    const getPokemons = () => {        
        axios.get('https://api.pokemontcg.io/v1/cards?subtype=Basic')
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

    const deletePokemon = id => {
        axios.delete(`/primer-trabajo-grupal/rest/productos/${id}`)
            .then(res => {
                alert(`Pokemon con ID: ${id} borrada correctamente`);
                getPokemons();
            })
            .catch(err => {
                console.log(err);
            });
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'National Pokedex Number',
          dataIndex: 'nationalPokedexNumber',
          key: 'nationalPokedexNumber',
        },
  
        {
            title: 'Image URL',
            dataIndex: 'imageUrl',
            key: 'imageUrlHiRes',
          },
        {
          title: 'Types',
          key: 'types',
          dataIndex: 'types',
        },
        {
          title: 'Actions',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
                <Tooltip title="Edit">
                    <Button 
                        type="primary" 
                        shape="circle" 
                        onClick={() => props.history.push(`${props.match.url}/edit/${record.id}`)} 
                        icon={<EditFilled />} />
                </Tooltip>
                <Tooltip title="Delete">
                    <Button 
                        type="danger" 
                        shape="circle" 
                        onClick={() => deletePokemon(record.id)} 
                        icon={<DeleteFilled />} />
                </Tooltip>
            </Space>
          ),
        }
    ];

    return (
        <div>
            <Row style={{ padding: 20 }}>
                <Col span={22}></Col>
                <Col span={2}>
                <Tooltip title="New">
                    <Button 
                        type="primary" 
                        shape="round" 
                        onClick={() => props.history.push(`${props.match.url}/new`)}
                        icon={<PlusOutlined />}>New Pokemon</Button>
                </Tooltip>
                </Col>
            </Row>
            <Table pagination={{ defaultCurrent:1, pageSize: 5, total:pokemons.length }} columns={columns} dataSource={pokemons} />
        </div>
    )
}

export default PokemonList;