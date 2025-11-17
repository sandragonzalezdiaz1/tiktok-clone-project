import VideoPlayer from "../VideoPlayer";
import styles from "./styles.module.css";

const VIDEOS = [
  {
    id: 1,
    author: "majolomas0",
    description: ":)",
    likes: 259,
    shares: 65,
    comments: 98,
    songTitle: "",
    albumCover: "",
    src: "/assets/videos/video1.mp4",
  },
  {
    id: 2,
    author: "andersoco",
    description: "sin que se de cuenta #fyp #parati",
    likes: 388,
    shares: 103,
    comments: 250,
    songTitle: "sonido original - strawberry shortcakKe 🍓",
    albumCover: "",
    src: "/assets/videos/video2.mp4",
  },
];

export default function FeedVideos() {
  return (
      VIDEOS.map((video) => {
        return (
        <div className={styles.item} key={video.id}>
            <VideoPlayer {...video} />
        </div>
        )
      })
  )
}
