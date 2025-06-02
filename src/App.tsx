import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { Html, OrbitControls, useProgress, useAnimations, useGLTF } from '@react-three/drei';
import { Mesh } from 'three'
import './App.css'
import * as THREE from 'three';
import Gallery from './components/Gallery.tsx';
import Home from './components/Home.tsx'
import Work from './components/Work.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OverrideButton from './components/OverrideButton.tsx';
import CodeEntry from './components/CodeEntry.tsx';
import Inventory from './components/Inventory.tsx'

import Nav from './components/Nav';
import SettingsPage from './components/SettingsPage.tsx';
import { string } from 'three/tsl';
// Define the type for the GLTF model



const Model = () => {
  const { scene, animations } = useGLTF('/models/HelmetBoi.glb');
  const { actions, names } = useAnimations(animations, scene);
  console.log(names);

  useEffect(() => {
    actions[names[0]]?.reset().fadeIn(0.5).play();
  })
  return <primitive object={scene} scale={0.1} />;
};

function Box() {
  const boxRef = useRef<Mesh>(null!);

  useFrame(() => {
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.01;
  })
  return(
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]}/>
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function ThreeScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <Model />
    </Canvas>
  )
}

function App() {
  const [override, setOverride] = useState(false);
  const [homeActive, setHomeActive] = useState(true)
  const [galleryActive, setgalleryActive] = useState(false)
  const [workActive, setWorkActive] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [itemIDs, setItemIDs] = useState(['','','','',''])
  const [itemURLs, setItemURLs] = useState(['','','','',''])
  const [activeItem, setActiveItem] = useState('')
  const [showInventory, setShowInventory] = useState(false)
  const [screwDriverCollected, setScrewDriverCollected] = useState(false)
  const [crowbarCollected, setCrowbarCollected] = useState(false)
  function handleOverride() {
    setOverride(!override)
    // Perform actions in the parent component
  }
  function toggleSettings(on : boolean) {
    setSettingsOpen(on)
    // Perform actions in the parent component
  }
  function getItem(id: string, url: string){
    if (id == 'screwdriver'){
      setScrewDriverCollected(true);
    }
    if (id == 'crowbar'){
      setCrowbarCollected(true);
    }
    const idArray: string[] = [];
    const urlArray: string[] = [];
    let added: boolean = false;
    for (let i = 0; i < 5; i++) {
      if (itemIDs[i] == '' && !added){
        idArray.push(id);
        urlArray.push(url);
        added = true;
      } else {
        idArray.push(itemIDs[i]);
        urlArray.push(itemURLs[i]);
      }
    }
    setItemIDs(idArray);
    setItemURLs(urlArray);
    setShowInventory(true);
    setTimeout(() => setShowInventory(false), 2000)
  }
  const handleSetActiveItem = (index: number) => {
    setActiveItem(itemIDs[index])
    console.log(itemIDs[index])
  }
  const handleUnlockGallery = () => {
    if (activeItem == "screwdriver"){
      setgalleryActive(true);
    } else {
      //Set Hint
    }
  }
  const handleUnlockWork = () => {
    if (activeItem == "crowbar"){
      setWorkActive(true);
    } else {
      //Set Hint
    }
  }
  return (
    <div className='bg-sitegreen'>
    {!override && <Inventory itemIDs={itemIDs} itemURLs={itemURLs} onClick={handleSetActiveItem} show={showInventory}/>}
    <BrowserRouter>
      {!override && false && <div className='row-span-[3]'>
        <CodeEntry imageUrl={`bg-[url('/src/assets/paintings/Present.jpeg')]`} isActive={true} code='PAST' font='font-old' />
        <CodeEntry imageUrl={`bg-[url('/src/assets/paintings/Present.jpeg')]`} isActive={true} code='PRESENT' font='font-now'/>
        <CodeEntry imageUrl={`bg-[url('/src/assets/paintings/Present.jpeg')]`} isActive={true} code='FUTURE' font='font-new'/>
      </div>}
      {settingsOpen && <SettingsPage override={override} screwDriverCollected={screwDriverCollected} onClick={() => toggleSettings(false)} getItem={() => getItem('screwdriver', "bg-[url('/src/assets/screwdriver.png')]")}/>}
      <OverrideButton onClick={handleOverride} isActive={override} />
      <Nav override ={override} home={homeActive} gallery={galleryActive} work={workActive} onClickSettings={() => toggleSettings(true)} unlockGallery={handleUnlockGallery} unlockWork={handleUnlockWork}/>
      <Routes>
        <Route path="/" element={<Home override={override} />} />
        <Route path="/gallery" element={<Gallery override={override} crowbarCollected={crowbarCollected} onClick={() => getItem('crowbar', "bg-[url('/src/assets/crowbar.png')]")} />} />
        <Route path="/work-samples" element={<Work />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
