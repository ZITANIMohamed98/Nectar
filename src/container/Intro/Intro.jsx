import React from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import {natureGirl} from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setplayVideo] = React.useState();
  const vidRef = React.useRef();

  const handleVideo = () => {
    setplayVideo((prevPlayVideo) =>!prevPlayVideo)


    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }
  return (
  <div className='app__video'>
    <video 
      src={natureGirl}
      ref={vidRef}
      type='video/mp4'
      loop
      controls={false}
      muted
    />
    <div className='app__video-overlay flex__center'>
      <div 
        className='app__video-overlay_circle flex__center'
        onClick={handleVideo}
      >
        {playVideo ? (
          <BsPauseFill className="app__video-overlay_playButton"/>
        ) : <BsFillPlayFill className="app__video-overlay_playButton"/> }
      </div>
    </div>
  </div>
  )
};

export default Intro;
