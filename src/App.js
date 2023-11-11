import React, { useState } from 'react'
import './App.css';
import Avatar from './components/Avatar';


const total = {
	body: 17,

	clothing1: 5,
	clothing2: 5,
	clothing3: 9,
  
	mouths: 24,
  nose:1,
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

  function randomise( ){
    setBody(Math.floor(Math.random() * (total.body)));
  //    setClothing1(Math.floor(Math.random() * total.clothing1));
  // setClothing2(Math.floor(Math.random() * total.clothing2));
  // setClothing3(Math.floor(Math.random() * total.clothing3));

  // setMouth(Math.floor(Math.random() * total.mouths));
  // setNose(Math.floor(Math.random() * total.nose));
  // setEyes(Math.floor(Math.random() * total.eyes));
  // setEyebrows(Math.floor(Math.random() * total.eyebrows));
  // setHair(Math.floor(Math.random() * total.hair));
  // setFacial(Math.floor(Math.random() * total.facial));

  // setEarrings(Math.floor(Math.random() * total.earrings));
  // setGlasses(Math.floor(Math.random() * total.glasses));
  // setHat(Math.floor(Math.random() * total.hats));
  // setNeckwear(Math.floor(Math.random() * total.neckwears));
  }
  randomise()
  

 
  







  return(<>
    <h1> CHARACTER </h1>
    <h2> CUSTOMIZATION</h2>
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
      ></Avatar>
  
  
  
  </>)
  ;
}

export default App;
