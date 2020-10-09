import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Space, Tooltip, Button } from 'antd';
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
        axios.get(`https://api.pokemontcg.io/v1/cards?subtype=Basic${props.match.params.id}`)
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
            key: 'imageUrl',
        },
        {
            title: 'Image URL High Resolution',
            dataIndex: 'imageUrlHiRes',
            key: 'imageUrlHiRes',
        },
        {
            title: 'Image URL High Resolution',
            dataIndex: 'imageUrlHiRes',
            key: 'imageUrlHiRes',
        },

        {
          title: 'Types',
          key: 'types',
          dataIndex: 'types',
        },
           ];

    return (
        <div>
            <Row style={{ padding: 20 }}>
                <Col span={22}></Col>
                <Col span={2}>                
                </Col>
            </Row>
            <Table pagination={{ defaultCurrent:1, pageSize: 5, total:pokemons.length }} columns={columns} dataSource={pokemons} />
        </div>
    )
}

export default PokemonList;