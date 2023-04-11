


import "./car.css"
import styled from "styled-components";
import Sphere from '../Animation/animatedSphere';
import Background from "../Animation/Background";
import TextSection from "../Animation/TextSection";
import Text from "../fonts/Text";
import Beam from "../UI/Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Model } from '../Animation/car';
import { Canvas } from '@react-three/fiber';
import { OrbitControls ,Lightformer} from '@react-three/drei';
import { Suspense } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Light, LightProbe } from 'three';

function Home() {
  return (
    <div className="home">
   
   <Wrapper>
      
      <Background  />
      <Beam/>
      <Text/>
      {/* <TextSection /> */}
      
      {/* 3D */}
      <Canvas className='canvas'  >
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intensity={2} />
        <Suspense  fallback={null}>
         <Sphere/> 
        </Suspense>
      </Canvas>
      <Canvas  style={{height:"568px",left:"200px"}}   className='can'>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={20} />
        <directionalLight position={[-2,5,2]} intensity={30}  />
        <directionalLight position={[2,7,2]} intensity={10} />
        <hemisphereLight intensity={200} />
        <spotLight distance={5} angle={0.5} attenuation={5} anglePower={5} />
        <Suspense  fallback={null}>
         <Model /> 
        </Suspense>
      </Canvas>
      
    </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
  width:-webkit-fill-available;
  .canvas {
    height:500px;
    top:-119px;
  }
  `;

export default Home;
