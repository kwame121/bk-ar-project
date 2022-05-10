import React, {useState,Suspense} from 'react';
import { ZapparCanvas, ZapparCamera,ImageTracker } from '@zappar/zappar-react-three-fiber';
import lionImage from '../../src/assets/trackingImages/train_lion.zpt';
import monaLisa from '../../src/assets/trackingImages/mona_lisa.zpt';
import kwameNkrumah from '../../src/assets/trackingImages/Kwame_Nkrumah.zpt';
import starryNight from '../../src/assets/trackingImages/starryNight2.zpt';
import garcon from '../../src/assets/trackingImages/Garcon.zpt';
import fishing from '../../src/assets/trackingImages/fishing.zpt';
import { Modal} from 'antd';
import { monaLisaDescription,kwameNkrumahDescription,lionDescription,starryNightDescription,garconDescription,ghanaFishing } from './Constants';
import train_lion from '../../src/assets/trackingImages/train_lion.jpg';
import mona_lisa from '../../src/assets/trackingImages/mona_lisa.jpg';
import kwame_nkrumah from  '../../src/assets/trackingImages/Kwame_Nkrumah.jpg';
import starry_night from '../../src/assets/trackingImages/starryNight2.jpg';
import garcon_image from '../../src/assets/trackingImages/Garcon.jpg';
import fishing_image from '../../src/assets/trackingImages/fishing.JPG';


const imageDataArray = [
  {name:"Lion",backgroundImage:train_lion,description:lionDescription,embedURL:"https://www.youtube.com/embed/OMkEVX23BdM"},
  {name:"Mona Lisa",backgroundImage:mona_lisa,description:monaLisaDescription,embedURL:"https://www.youtube.com/embed/ElWG0_kjy_Y"},
  {name:"Kwame Nkrumah",backgroundImage:kwame_nkrumah,description:kwameNkrumahDescription,embedURL:'https://www.youtube.com/embed/TMY0iTcspNA'},
  {name:"Starry Night",backgroundImage:starry_night,description:starryNightDescription,embedURL:'https://www.youtube.com/embed/wk9L1N9bRRE'},
  {name:'Garçon à la pipe',backgroundImage:garcon_image,description:garconDescription,embedURL:"https://www.youtube.com/embed/ij89i9g9jgg"},
  {name:'Fishing in the Volta',backgroundImage:fishing_image,description:ghanaFishing,embedURL:"https://www.youtube.com/embed/5PDYBg2nSVc"}
]

const Main = () => {
    let [infoModal,setInfoModal] = useState(false);
    let [selectedTarget,setSelectedTarget] = useState(0);
    let [mediaMode,setMediaMode] = useState("image"); /* media mode is either 'image' or 'video' (embedded video from youtube) */
    
  
    const infoCardStyle = 
    {
      backgroundColor:"black",
      color:"white"
    }

    const bottomBannerStyle = 
    {
      padding:'0.8rem',
      backgroundColor:'black',
      color:'white',
      textAlign:'center',
      zIndex:'1000',
      height:'5vh',
      justifyContent:'center',
      alignItems:'center',
      order:'1',
      margiTop:'auto'
    }

    const actionAreaStyle = 
    {
      padding:'0.5rem',
      marginTop:'2rem'
    }

    const actionBtnStyle = 
    {
      borderRadius:'2rem',
      padding:'0.7rem',
      border:'1px solid gray',
      backgroundColor:'white',
      color:'black',
      fontWeight:600,
      textAlign:'center'      
    }

    const toggleView = () => 
    {
      let view = mediaMode==="video"?"image":"video";
      setMediaMode(view);
    }


    return (
      <div style={{width:"100%",position:'relative',display:'flex',flexDirection:'column'}}>

        <Modal
          title={``}
          centered
          visible={infoModal}
          onOk={() => {setInfoModal(false)}}
          onCancel={() => {setInfoModal(false)}}
          footer={null}
          className="info-modal"
        >
        <div className="info-card flex flex-c" style={infoCardStyle}>
          <div className="top flex-flex-c">
          </div>
          <div className="bottom flex flex-c">
            <div className="top">
                {imageDataArray[selectedTarget].name}
            </div>
            <div className="bottom flex flex-c">
                <div className="image w-100" style={{borderRadius:'0.5rem',padding:'1rem',marginBottom:'2rem',backgroundImage:mediaMode!=='video'?`url(${imageDataArray[selectedTarget].backgroundImage})`:'unset',
                height:'200px',backgroundSize:"cover"}}>
                   {imageDataArray[selectedTarget]?.embedURL && mediaMode === 'video'? 
                    <iframe width="100%" 
                      height="200" src={`${imageDataArray[selectedTarget]?.embedURL}`}
                      title="YouTube video player" frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen>
                   </iframe>:<></>}
                </div>
                <div  style={{height:'200px',overflowY:"auto"}}>
                  <div style={{fontSize:'1.25rem',marginBottom:'1rem'}}>Description</div>
                  {imageDataArray[selectedTarget].description}
                </div>
                <div classname="action-area flex flex-c" style={actionAreaStyle}>
                    <div className="action-btn" style={actionBtnStyle} onClick={()=>{toggleView()}}>{mediaMode==="video"?"View Image":"View Video"}</div>
                </div>
            </div>
          </div>
        </div>
        </Modal>
        <ZapparCanvas style={{height:'82vh'}}>
          <ZapparCamera />
          <Suspense fallback={null}>
          <ImageTracker targetImage={lionImage} onVisible={()=>{setInfoModal(true);setSelectedTarget(0)}}/>
          <ImageTracker targetImage={monaLisa}  onVisible={()=>{setInfoModal(true);setSelectedTarget(1)}}/>
          <ImageTracker targetImage={kwameNkrumah}  onVisible={()=>{setInfoModal(true);setSelectedTarget(2)}} />
          <ImageTracker targetImage={starryNight}  onVisible={()=>{setInfoModal(true);setSelectedTarget(3)}} />
          <ImageTracker targetImage={garcon}  onVisible={()=>{setInfoModal(true);setSelectedTarget(4)}} />
          <ImageTracker targetImage={fishing}  onVisible={()=>{setInfoModal(true);setSelectedTarget(5)}} />
        </Suspense>
          <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
        </ZapparCanvas>  
        <div className="bottom-banner flex flex-c w-100" style={bottomBannerStyle}>
           <div>Powered By BKGrand Technologies</div>
        </div>
      </div>
    );
}

export default Main;