import React, { useState } from 'react';
import './App.css';
import { Layout, Menu, Carousel, Row, Col } from 'antd';
import "antd/dist/antd.css";
import PokemonList from './components/PokemonList';
import PokemonCat from './PokemonCat';
import PokemonForm from './components/PokemonForm';
import Home from './components/Home';
import About from './components/About';
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
        <Link to="/">Principal</Link>
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
          height: 140, fontSize: 30, textAlign: 'center', background: 'pink' }}>  
                    <img src="/foreverYoung.png" width={230} />
          {/* <div>Forever Young</div> */}

                    </Header>

        <Content>           
        </Content>

        <Footer style={{ textAlign: 'center' }}>
        <Row>
                    <Col span={8}>
                        <div id="test6">
                            <FacebookOutlined /> Forever Young
                <br></br>
                            <InstagramOutlined /> @foreveryoungpy

                        </div>
                      

                    </Col>
                    <Col span={8}>
                    <DingdingOutlined />Webpage designed by KaPaKaFre
                    </Col>
                    <Col span={8}>
                        <div id="test7">
                            <TwitterOutlined /> @foreveryoungpy
                 <br></br>
                            <MailOutlined />contactos@foreveryoung.com
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