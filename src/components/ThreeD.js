import React, {useState,Suspense} from 'react';
import { ZapparCanvas, ZapparCamera,InstantTracker } from '@zappar/zappar-react-three-fiber';
import cell from '../../src/assets/3d-assets/cell.glb';
import solsystem from '../../src/assets/3d-assets/solsystem.glb';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Html } from '@react-three/drei';

function Model() {
    const gltf = useLoader(GLTFLoader,cell);
    gltf.scene.traverse((node) => {
      if (node.isMesh) { node.castShadow = true; }
    });
    return (
      <group>
        <primitive castShadow scale="0.15" object={gltf.scene} position={'0'}    />
        <mesh receiveShadow rotation={[-Math.PI/2 ,0 ,0]}>
          <planeBufferGeometry attach="geometry" />
          <shadowMaterial attach="material" opacity={0.2} />
        </mesh>
      </group>
    )
  }

const ThreeD = () => {
 
const [placementMode,setPlacementMode] = useState(true);
const [displayBottomCard,setDisplayBottomCard] = useState(false);

const bottomBannerStyle = {
      padding:'0.8rem',
      backgroundColor:'black',
      color:'white',
      textAlign:'center',
      zIndex:'1000',
      height:'5vh',
      justifyContent:'center',
      alignItems:'center',
      order:'1',
      marginTop:'auto'}

const bottomCardStyle = 
{
  width:'80%',
  position:'absolute',
  bottom:'2rem',
  backgroundColor:'black',
  border:'1px solid gray',
  padding:'1rem',
  color:'white',
  display:displayBottomCard?'block':'none'
}


  return (
    <div style={{width:"100%",position:'relative',display:'flex',flexDirection:'column'}}>
    <ZapparCanvas style={{height:'82vh'}}>
      <ZapparCamera />
      <InstantTracker placementMode={placementMode} placementCameraOffset={[0.5, 0.2, -2]}>
        <Suspense fallback={<Html><div style={{color: "white", fontWeight: "bold"}}>Model Loading...</div></Html>}>
            <Model/>
        </Suspense>
      </InstantTracker>
      <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
    </ZapparCanvas>  
    <div className="bottom-card flex flex-c" style={bottomCardStyle}>
      <div className="top w-100 flex-c">
        <div className="title-bar flex">
          <div className="left title-area" style={{padding:'0.5rem',fontSize:'2.5rem',fontWeight:'300'}}>
            Human Cell
          </div>
          <div className="right close-area">

          </div>
        </div>
        <div className="content-area">
          This is a human cell. Its various parts are labeled as well. Click the button below to view more information about this object.
        </div>
      </div>
      <div className="bottom w-100">
        <div className="left">

        </div>
        <div className="right">

        </div>

      </div>
    </div>
    <div className="bottom-banner flex flex-c w-100" style={bottomBannerStyle}>
       <div>Powered By BKGrand Technologies</div>
    </div>
  </div>
  )
}

export default ThreeD