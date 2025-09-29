
import styles from "./styles.module.css";
import { useRef, useState } from "react";

export default function VideoPlayer() {
  const SRC = "/assets/videos/video1.mp4"

    //El video lo guardamos en una referencia de React con useRef()
    const video = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

  //Funcion para pausar y arrancar el video
  const handlePlay = () => {
    if(isPlaying){
        video.current.pause() 
    } else {
        video.current.play()
    }

    setIsPlaying(!isPlaying) //Actualizamos el estado


  }
  return (
    <div>
        <video 
            className={styles.video}
            src={SRC} 
            controls={false}
            ref={video}
            

         />;
         <button 
            onClick={handlePlay}
            className={styles.player}>
         </button>
    </div>
  )
}
