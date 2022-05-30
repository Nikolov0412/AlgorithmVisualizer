import React from "react";
import Navigation from "../Global Components/Navbar";
import 'antd/dist/antd.css';
import './home.css'
import { Layout,Carousel,Typography,Card, Col, Row,Space,Button } from "antd";
import {  Link } from "react-router-dom";
import Foot from "../Global Components/Footer";
import carouselImage from './carousel.jpg'
import bubbleSort from './bubbleSort.gif'
import pathfinding from './pathfinding.gif'
import graphs from './graphs.gif'
const { Header, Content, Footer} = Layout;
const {Title,Paragraph} = Typography;

const contentStyle = {
    height: '700px',
    color: '#fff',
    lineHeight: '700px',
    textAlign: 'center',
};


function Home(){
    return(
        <Layout>
            <Header className="header">
                <Navigation default='/'/>
            </Header>
            <Space direction="vertical" size={50} style={{ display: 'flex',backgroundColor:'#F2FAFF' }}>
            <Content style={{backgroundColor:'#F2FAFF'}}>

            <Space direction="vertical" size={50} style={{ display: 'flex',backgroundColor:'#F2FAFF' }}>
  <Carousel autoplay>
    <div className="container">
    <img alt="" src={carouselImage} style={{height:'700px',width:'100%'}}/>
     <div className="centered"><Title level={3} style={contentStyle}>Welcome to Algo Visualization</Title></div>
    </div>
  </Carousel>

<div className="site-card-wrapper" >
  <Row gutter={16}>
      <Col span={8}>
        <Card title="Pathfinding" bordered={false} className="container">
        <img alt="" src={pathfinding} style={{height:'300px'}} />
        <div className="Text">
            <Paragraph style={{paddingTop:'20px'}}>Pathfinding is the plotting, by a computer application, of the shortest route between two points. It is a more practical variant on solving mazes.</Paragraph>
        </div>
        <Button type='dashed' align='center'><Link to='/pathfind'>Click</Link></Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Sorting" bordered={false} className="container">
        <img alt="" src={bubbleSort} style={{height:'300px'}} className="container"/>
        <div className="Text">
            <Paragraph > In computer science, arranging in an ordered sequence is called "sorting". Sorting is a common operation in many applications, and efficient algorithms to perform it have been developed. </Paragraph>
       </div>
       <Button type='dashed' align='center'><Link to='/sorting'>Click</Link></Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Graphs" bordered={false} className="container">
        <img alt="" src={graphs} style={{height:'300px'}} />
            <div className="Text">
            <Paragraph style={{paddingTop:'20px'}}> Graph theory is the study of graphs, which are mathematical structures used to model pairwise relations between objects. </Paragraph>
            </div>
            <Button type='dashed' align='center'><Link to='/graphs'>Click</Link></Button>
        </Card>
      </Col>
    </Row>
    </div>
     </Space>

             </Content>

             <Footer style={{backgroundColor:'#001529'}}>
                <Foot/>
            </Footer>
</Space>
        </Layout>
    )
}
export default Home;
