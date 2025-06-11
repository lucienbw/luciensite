import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery.tsx';
import Home from './components/Home.tsx'
import Work from './components/Work.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OverrideButton from './components/OverrideButton.tsx';
import Inventory from './components/Inventory.tsx';
import { eventEmitter } from './game/GamePlayer.tsx';

import Nav from './components/Nav';
import SettingsPage from './components/SettingsPage.tsx';
// Define the type for the GLTF model

function App() {
  const [override, setOverride] = useState(false);
  const [galleryActive, setgalleryActive] = useState(false)
  const [workActive, setWorkActive] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [itemIDs, setItemIDs] = useState(['','','','',''])
  const [itemURLs, setItemURLs] = useState(['','','','',''])
  const [activeItem, setActiveItem] = useState('')
  const [showInventory, setShowInventory] = useState(false)
  const [screwDriverCollected, setScrewDriverCollected] = useState(false)
  const [crowbarCollected, setCrowbarCollected] = useState(false)
  const [coinCollected, setCoinCollected] = useState(false)
  function handleOverride() {
    setOverride(!override)
    // Perform actions in the parent component
  }
  function toggleSettings(on : boolean) {
    setSettingsOpen(on)
    // Perform actions in the parent component
  }

  eventEmitter.on('gameWon', () => {getItem('coin', "bg-[url('/src/assets/coin.png')]")})

  function getItem(id: string, url: string){
    if (id == 'screwdriver'){
      setScrewDriverCollected(true);
    }
    if (id == 'crowbar'){
      setCrowbarCollected(true);
    }
    if (id == 'coin'){
      if (coinCollected){
        return;
      }
      setCoinCollected(true);
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
      {settingsOpen && <SettingsPage override={override} screwDriverCollected={screwDriverCollected} onClick={() => toggleSettings(false)} getItem={() => getItem('screwdriver', "bg-[url('/src/assets/screwdriver.png')]")}/>}
      <OverrideButton onClick={handleOverride} isActive={override} />
      <Nav override ={override} gallery={galleryActive} work={workActive} onClickSettings={() => toggleSettings(true)} unlockGallery={handleUnlockGallery} unlockWork={handleUnlockWork}/>
      <Routes>
        <Route path="/luciensite/" element={<Home override={override} />} />
        <Route path="/luciensite/gallery" element={<Gallery override={override} crowbarCollected={crowbarCollected} onClick={() => getItem('crowbar', "bg-[url('/src/assets/crowbar.png')]")} />} />
        <Route path="/luciensite/work-samples" element={<Work />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
