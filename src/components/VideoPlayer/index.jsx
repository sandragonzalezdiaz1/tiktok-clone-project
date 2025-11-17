import clsx from "clsx";
import styles from "./styles.module.css";
import { useRef, useState } from "react";
import VideoPlayerActions from "./VideoPlayerActions";

export default function VideoPlayer({ src }) {

    //El video lo guardamos en una referencia de React con useRef()
    const video = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

  //Funcion para pausar y arrancar el video
  const handlePlay = () => {
    const {current: videoElement } = video 

    isPlaying ? videoElement.pause() : videoElement.play() 

    setIsPlaying(!isPlaying) //Actualizamos el estado

  }

  const playerClassName = clsx(styles.player, {
        [styles.hidden]: isPlaying,
    })


  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        src={src}
        loop
        controls={false}
        ref={video}
        onClick={handlePlay}
      />
      ;
      <i className={playerClassName} onClick={handlePlay}/>
      <VideoPlayerActions />
    </div>
  );
}
