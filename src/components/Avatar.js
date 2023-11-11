import React from 'react'
import Parts from './Parts'


function Avatar({
  body, 
  clothing1, 
  clothing2,
  clothing3,
  mouth,
  nose,
  eyes,
  eyebrows,
  hair,
  facial,
  earrings,
  glasses,
  hat,
  neckwear,
  randomise
} ) {
  return (
  <>
    <div className='avatar'>
        <Parts partName={'body'} index={body} zIndex={1}></Parts>

        <Parts partName={'clothes/layer_1'} index={clothing1} zIndex={2}></Parts>
        <Parts partName={'clothes/layer_2'} index={clothing2} zIndex={2}></Parts>
        <Parts partName={'clothes/layer_2'} index={clothing3} zIndex={2}></Parts>

        <Parts partName={'mouths'} index={mouth} zIndex={3}></Parts>
        <Parts partName={'noses'} index={nose} zIndex={3}></Parts>
        <Parts partName={'eyes'} index={eyes} zIndex={3}></Parts>
        <Parts partName={'eyebrows'} index={eyebrows} zIndex={3}></Parts>
        <Parts partName={'hair'} index={hair} zIndex={4}></Parts>
        <Parts partName={'facial_hair'} index={facial} zIndex={4}></Parts>

        <Parts partName={'accessories/earrings'} index={earrings} zIndex={4}></Parts>
        <Parts partName={'accessories/glasses'} index={glasses} zIndex={4}></Parts>
        <Parts partName={'accessories/hats'} index={hat} zIndex={5}></Parts>
        <Parts partName={'accessories/neckwear'} index={neckwear} zIndex={3}></Parts>
    </div>
    <div className="text-center">
        <button className="button" onClick={() => randomise()}>
                    Randomize!
        </button>
							
		</div>
  </>


 
  )
}

export default Avatar