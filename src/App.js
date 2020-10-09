import React, { useState } from 'react';
import './App.css';
import { Layout, Menu, Carousel, Row, Col } from 'antd';
import "antd/dist/antd.css";
import PokemonList from './components/PokemonList';
import PokemonCat from './PokemonCat';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppstoreOutlined, DingdingOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined, MailOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Footer, Content } = Layout;
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


function AppMenu() {
  const [current, setCurrent] = useState()
  return (
    // Definicion del menu principal
    <Menu onClick={(value) => setCurrent(value)} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Pokemons</Link>
      </Menu.Item>
      <Menu.Item key="pokemons" icon={<AppstoreOutlined />}>
        <Link to="/catalogo">Catálogo</Link>
      </Menu.Item>
      <SubMenu key="administracion" icon={<AppstoreOutlined />} title="Administración">
        <Menu.Item key="administracion:1"><Link to="/pokemons">Pokemons</Link></Menu.Item>
        <Menu.Item key="administracion:2"><Link to="/proveedores">Proveedores</Link></Menu.Item>
      </SubMenu>
      <Menu.Item key="about" icon={<AppstoreOutlined />}>
        <Link to="/about">About</Link>
      </Menu.Item>
    </Menu>
  );
}






function App() {
  return (
    <Router>
      <Layout>
      <Header style={{ color: 'white', 
          height: 140, fontSize: 30, textAlign: 'center', background: 'green' }}>  
                    <img src="https://toucantoco.com/blog/wp-content/uploads/2016/07/Capture-d%E2%80%99e%CC%81cran-2016-07-19-a%CC%80-15.27.31.png" width={230} />
                    </Header>

        <Content>
        <PokemonCat/> 
        </Content>

        <Footer style={{ textAlign: 'center' }}>
        <Row>
                    <Col span={8}>
                        <div id="test6">
                            <FacebookOutlined /> Pokedex
                <br></br>
                            <InstagramOutlined /> @Pokedex

                        </div>
                      

                    </Col>
                    <Col span={8}>
                    <DingdingOutlined />Webpage designed by the Pokemon Company
                    </Col>
                    <Col span={8}>
                        <div id="test7">
                            <TwitterOutlined /> @PokemonCompany
                 <br></br>
                            <MailOutlined />contact@pokemon.com
                 </div>
                    </Col>
                </Row>

                <br></br>
        </Footer>
      </Layout>
    </Router>
    

  );
}

export default App;