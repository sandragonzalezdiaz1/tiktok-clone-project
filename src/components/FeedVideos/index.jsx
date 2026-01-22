import VideoPlayer from "../VideoPlayer";
import styles from "./styles.module.css";

const VIDEOS = [
  {
    id: 1,
    author: "majolomas0",
    description: "En medio del caos",
    likes: 259,
    shares: 65,
    comments: 98,
    songTitle: "original sound- UrFave_Clipss",
    albumCover: "https://media.revistagq.com/photos/66212f9ff13b16b8f6997c4d/master/w_1600%2Cc_limit/Best%2520pop%2520albums%2520of%2520the%252021st%2520century_0005_The%2520Fame%2520-%2520Lady%2520Gaga%2520(2008).jpg",
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
    albumCover: "https://mussica.info/wp-content/uploads/2021/09/rauw-portada.jpeg",
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
