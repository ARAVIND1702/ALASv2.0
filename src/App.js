import logo from './logo.svg';
import './App.css';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Side from './pages/sidebar';
import MyComponent from './pages/MyComponent'
import styled from "styled-components";
import Sphere from './Animation/animatedSphere';
import Background from "./Animation/Background";
import TextSection from "./Animation/TextSection";
import Alas from './pages/Alas';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Model } from './Animation/car';
import { Canvas } from '@react-three/fiber';
import { OrbitControls ,Lightformer} from '@react-three/drei';
import { Suspense } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Light, LightProbe } from 'three';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Side />}>
          <Route path="/Home"  element={<Home />} />
          <Route path="/Alas" element={<Alas/>} />
          <Route path="/Map" element={<MyComponent/>} />
          <Route path="/home" exact></Route>
        </Route>
      </Routes>
    </BrowserRouter>
   
   

    </div>
  );
}


export default App;
