import React from 'react';
import "antd/dist/antd.css"
import "./Blog.css";
import Info from "./Info.js";
import { Layout, Menu, Breadcrumb, Image, Divider, Row, Col, Card } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, PictureOutlined, SmileOutlined, TeamOutlined, 
        CompassOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

const infos = [
  {
      title:"Baby Octopus",
      image_url:"https://www.discoveranimals.co.uk/wp-content/uploads/Pumpkin-Sea-Life-Brighton-10-2.jpg"
  },
  {
      title:"Sea Slug",
      image_url:"https://www.uwphotographyguide.com/sites/default/files/DC2000-macrotest-1%281%29.jpg"
  },
  {
      title:"Sunny Fish",
      image_url:"https://www.uwphotographyguide.com/sites/default/files/SeaLifeIndo_Yudi_macro-2.jpg"
  }
]

function Blog (){
    return(
      <Layout>
      <Header className="header">      
   
      </Header>
      
      <Layout>

        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
                  <div className="logo" />
        <div class="Bloglogo">
                    <img src="https://image.freepik.com/free-vector/awesome-colorful-fish-logo-template-beauty-fish-logo-abstract-fish-logo-modern-fish-logo_144543-274.jpg" 
                        height={200}/>
                    </div>    
            <SubMenu key="sub1" icon={<UserOutlined />} title="Who Are We">
              <Menu.Item key="1">How It All Started</Menu.Item>
              <Menu.Item key="2">Meet the Team</Menu.Item>
              <Menu.Item key="3">Completed Projects</Menu.Item>
              <Menu.Item key="4">Future Projects</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="What We Do">
              <Menu.Item key="5">Fish Conservation Programs</Menu.Item>
              <Menu.Item key="6">Educating Fishers</Menu.Item>
              <Menu.Item key="7">The FineFish School</Menu.Item>
              <Menu.Item key="8">The Results so Far</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Contact Us">
              <Menu.Item key="9">Business Inquiries</Menu.Item>
              <Menu.Item key="10">Community Pages</Menu.Item>
              <Menu.Item key="11">Come Visit the HQ!</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <h1> THE COLORFUL FISH SANCTUARIUM </h1>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <h2>Fish are our friends!, so we must keep the seas clean in order to preserve sealife. </h2>
              <h2>Please support our environmental conservation activities in order to preserve sealife for future generations. </h2>
              <br></br>
              <iframe width="900" height="506" src="https://www.youtube.com/embed/cC9r0jHF-Fw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
                        
    <Row>
      <Col span={24}>Images of these beautiful, beautiful animals</Col>
    </Row>

    <Row>{infos.map(info => {
                          return (
                             <Info infos={infos} />
                          )
                        })}
    </Row>

    <Row>
      <br></br>    <br></br>    <br></br>
      <Col span={10}> 
      <h2>Types of Turtles</h2>
      <ul><h5>Aquatic</h5>

      <li>mud turtles and musk turtles (family Kinosternidae)</li>
      <li>pitted shell turtle (Carettochelys insculpta)</li>
      <li>pond turtles (families Emydidae and Bataguridae; most species aquatic)</li>
        <ul>
        <li>family Emydidae</li>
          <ul>
            <li>Blanding’s turtle (Emydoidea blandingii)</li>
            <li>chicken turtle (Deirochelys reticularia)</li>
            <li>painted turtle (Chrysemys picta)</li>
            <li>terrapin (Malaclemys terrapin)</li>
            </ul>
        </ul>
            <li>sea turtles (families Dermochelyidae and Cheloniidae)</li>
        <ul>
        <li>genus Archelon (extinct)</li>
        </ul>
        <li>side-necked turtles (familes Chelidae, Pelomedusidae, and Podocnemididae)</li>
        <ul>
        <li>arrau (Podocnemis expansa)</li>
        </ul>
        <li>snake-necked turtles (family Chelidae)</li>
        <li>snapping turtles (family Chelydridae)</li>
        <li>softshell turtles (family Trionychidae)</li>
    </ul>

    <ul><h5>Terrestrial</h5>
    <li>Asian box turtles (family Geomydidae)</li>
    <li>tortoises (family Testudinae)</li>
    <li>pond turtles (families Emydidae and Bataguridae; most species aquatic)</li>
        <ul>
        <li>family Emydidae</li>
        <ul>
          <li>genus Clemmys (some species semiaquatic)</li>
          <ul>
              <li>spotted turtle (Clemmys guttata)</li>
              <li>wood turtle (Clemmys insculpta)</li>
          </ul>
          <li>North American box turtles (genus Terrapene)</li>
          </ul>
        </ul>
    </ul>
      </Col>
      <Col span={14}>.<SmileOutlined /> Turtles are fun! <SmileOutlined />
      <br></br>
      .<SmileOutlined /> Turtles are friends! <SmileOutlined />
      <br></br>
      .<SmileOutlined /> Turtles are the best! <SmileOutlined />
      <Image
             width={715}
             src=" https://www.tastecafeatchesilbeach.co.uk/public/images/sealife%20centre.png"
            />
      </Col>
    </Row>                  
                            <>
    <p>
      Turtles are reptiles of the order Testudines characterized by a special bony or cartilaginous shell developed from their ribs and acting as a shield. "Turtle" may refer to the order as a whole (American English) or to fresh-water and sea-dwelling testudines (British English). The order Testudines includes both extant (living) and extinct species. The earliest known members of this group date from the Middle Jurassic, making turtles one of the oldest reptile groups and a more ancient group than snakes or crocodilians. Of the 356 known species alive today, some are highly endangered.[
    </p>
    <p>
      Turtles are ectotherms—animals commonly called cold-blooded—meaning that their internal temperature varies according to the ambient environment. However, because of their high metabolic rate, leatherback sea turtles have a body temperature that is noticeably higher than that of the surrounding water. Turtles are classified as amniotes, along with other reptiles, birds, and mammals. Like other amniotes, turtles breathe air and do not lay eggs underwater, although many species live in or around water. 
    </p>
    <Divider plain>Our Mission <TeamOutlined /></Divider>
    <p>
    Here at Colorful Fish we care deeply about our oceans, the creatures that live above and beneath the surface and those we are lucky enough to have in our care.
    </p>
  
    <Divider orientation="left" plain>
      Programs <PictureOutlined />
    </Divider>
   
    <p>
    In 2013, we set up a charity to support projects making a difference to oceans and marine life around the world.
    </p>
    <p>
    Colorful Fish Trust has a vision of oceans that are healthy, protected, and full of diverse, wonderful creatures. Coloful Fish Trust runs sanctuaries that look after poorly creatures such as seals. They also run inspiring campaigns that educate and bring awareness to the dangers our friends in the ocean face.
    </p>
    <p>
    Most recently, Colorful Fish Trust opened the world's first beluga whale sanctuary in Iceland. We’re proud to support them, along with our friends at Merlin Entertainments, and Whale and Dolphin Conservation.
    </p>
    <Divider plain>
      More Information <CompassOutlined />
    </Divider>
    <h3>
    Every year, we welcome over 20 million explorers into our incredible underwater world.
    </h3>
    <p>
    It’s all part of our mission to inspire a love for the ocean and its creatures – and to encourage people to preserve them for the future. With 50 aquariums, 2 sanctuaries, and over 180,000 creatures, we bring our guests closer to the oceans than ever before.
    </p>
    <p>
    So prepare to get up close to glittering scales, humongous tentacles and razor-sharp teeth. Explore different habitats, from the sweltering tropics to tidal rock pools. And discover all about our weird and wonderful creatures with fun and interactive learning experiences – Amazing Discovery
    </p>
    </>,
    <Row>
    <Col span={7} >
           <Image
             width={300}
             src="https://i.pinimg.com/originals/11/20/1e/11201ec9a37f9d4a1cc6e660227129bb.jpg"
            />
    </Col>
    <Col span={8}>
          <Image
            width={350}
            src="https://i.pinimg.com/originals/69/80/3f/69803f0e725f9525a5a0bf5d22b763fa.jpg"
            />
    </Col>
    <Col span={9}>
            <Image
            width={340}
            src="https://4.bp.blogspot.com/_rXvAtsAVfEs/TDW2Jdof0-I/AAAAAAAADgE/cIRpweFpGb4/s1600/dolphin.jpg"
            />
    </Col>
    </Row>
    <Footer>
      Thank you for conserving Sealife! - Follow Colorful Fish on <FacebookOutlined />        <TwitterOutlined />       <InstagramOutlined />      <YoutubeOutlined />
    </Footer>
   
          </Content>
        </Layout>
      </Layout>
    </Layout>




);
}


export default Blog;
