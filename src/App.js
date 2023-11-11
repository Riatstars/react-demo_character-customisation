import React, { useState,useEffect } from 'react'
import './App.css';
import Avatar from './components/Avatar';

import PartsList from './components/PartsList'

const total = {
	body: 17,

	clothing1: 5,
	clothing2: 5,
	clothing3: 9,
  
	mouths: 24,
  noses:1,
	eyes: 17,
	eyebrows: 15,
	hair: 73,
  facial: 17,

  earrings:32, 
	glasses: 17,
	hats: 28,
  neckwears:18

};

function App() {

  const [body, setBody] = useState(1)

  const [clothing1, setClothing1] = useState(1)
  const [clothing2, setClothing2] = useState(1)
  const [clothing3, setClothing3] = useState(1)

  const [mouth, setMouth] = useState(1)
  const [nose, setNose] = useState(1)
  const [eyes, setEyes] = useState(1)
  const [eyebrows, setEyebrows] = useState(1)
  const [hair, setHair] = useState(1)
  const [facial, setFacial] = useState(1)

  const [earrings, setEarrings] = useState(1)
  const [glasses, setGlasses] = useState(1)
  const [hat, setHat] = useState(1)
  const [neckwear, setNeckwear] = useState(1)

  function randomise () {
    setBody(Math.floor(Math.random() * (total.body)));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));

    setMouth(Math.floor(Math.random() * total.mouths));
    setNose(1);
    setEyes(Math.floor(Math.random() * total.eyes));
    setEyebrows(Math.floor(Math.random() * total.eyebrows));
    setHair(Math.floor(Math.random() * total.hair));
    setFacial(Math.floor(Math.random() * total.facial));

    setEarrings(Math.floor(Math.random() * total.earrings));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setHat(Math.floor(Math.random() * total.hats));
    setNeckwear(Math.floor(Math.random() * total.neckwears));
  }

  useEffect(() => {
    randomise()
  }, [])
  

  return(<>
  <div className='App'>
    <div className="title">CHARACTER</div>
	  <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
	  <div className="divider"></div>
    <div className='avatar-group gap-30'>
      <div>
        <div className='avatar-wrapper'>
          <Avatar 
          body={body}
          clothing1={clothing1}
          clothing2={clothing2}
          clothing3={clothing3}
          mouth={mouth}
          nose={nose}
          eyes={eyes}
          eyebrows={eyebrows}
          hair={hair}
          facial={facial}
          earrings={earrings}
          glasses={glasses}
          hat={hat}
          neckwear={neckwear}
          randomise={randomise}
            ></Avatar>
        </div>
      </div>
      
      <div>
        <div className="list-section">
          <h2>Body</h2>
          <PartsList 
          total={total.body} 
          path="body" set={setBody} 
          selected={body} />
        </div>
        <div className="list-section">
          <h2>Clothing 1</h2>
          <PartsList 
          total={total.clothing1} 
          path="clothes/layer_1" 
          set={setClothing1} 
          selected={clothing1} />
        </div>
        <div className="list-section">
          <h2>Clothing 2</h2>
          <PartsList 
          total={total.clothing2} 
          path="clothes/layer_2" 
          set={setClothing2} 
          selected={clothing2} />
        </div>
        <div className="list-section">
          <h2>Clothing 3</h2>
          <PartsList 
          total={total.clothing3} 
          path="clothes/layer_3" 
          set={setClothing3} 
          selected={clothing3}
          zoom={1.5}
          top="-10px" 
            />
        </div>
        <div className="list-section">
          <h2>Mouths</h2>
          <PartsList 
          total={total.mouths} 
          path="mouths" 
          set={setMouth} 
          selected={mouth}
          zoom={2.5}
          top="15px" />
        </div>
        
        <div className="list-section">
          <h2>Eyes</h2>
          <PartsList 
          total={total.eyes} 
          path="eyes" 
          set={setEyes} 
          selected={eyes}
          zoom={2.5}
          top='40px'
            />
        </div>
        <div className="list-section">
          <h2>Eyebrows</h2>
          <PartsList 
          total={total.eyebrows} 
          path="eyebrows" 
          set={setEyebrows} 
          selected={eyebrows}
          zoom={2}
          top='40px'
            />
        </div>
        <div className="list-section">
          <h2>Hair</h2>
          <PartsList 
          total={total.hair} 
          path="hair" 
          set={setHair} 
          selected={hair}
            />
        </div>
        <div className="list-section">
          <h2>Facial Hair</h2>
          <PartsList 
          total={total.facial} 
          path="facial_hair" 
          set={setFacial} 
          selected={facial}
          zoom={1.5}
            />
        </div>
        <div className="list-section">
          <h2>Earrings</h2>
          <PartsList 
          total={total.earrings} 
          path="accessories/earrings" 
          set={setEarrings} 
          selected={earrings}
          zoom={1.5}
            />
        </div>
        <div className="list-section">
          <h2>Glasses</h2>
          <PartsList 
          total={total.glasses} 
          path="accessories/glasses" 
          set={setGlasses} 
          selected={glasses}
          zoom={1.5}
          top='30px'
            />
        </div>
        <div className="list-section">
          <h2>Hats</h2>
          <PartsList 
          total={total.hats} 
          path="accessories/hats" 
          set={setHat} 
          selected={hat}
            />
        </div>
        <div className="list-section">
          <h2>Neckwears</h2>
          <PartsList 
          total={total.neckwears} 
          path="accessories/neckwear" 
          set={setNeckwear} 
          selected={neckwear}
          zoom={2}
          top='-10px'
            />
        </div>
      </div>
    </div>
  </div>
  
  
  
  </>)
  ;
}

export default App;
