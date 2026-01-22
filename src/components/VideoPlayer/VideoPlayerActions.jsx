import styles from "./styles.module.css";
import { Heart } from "../Icons/Heart.jsx";
import { Comment } from "../Icons/Comment.jsx";
import { Share } from "../Icons/Share.jsx";

export default function VideoPlayerActions({
  likes = 5472,
  comments = 345,
  shares = 43,
  hearted = false,
}) {

  const handleLike = () => {
    window.alert("like");
  };

  const handleComment = () => {
    window.alert("comment");
  };

  const handleShare = () => {
    window.alert("share");
  };

  return (
    <aside className={styles.actions}>
      <button className={styles.action} onClick={handleLike}>
        <Heart width="45"/>
        <span title="likes">{likes}</span>
      </button>

      <button className={styles.action} onClick={handleComment}>
        <Comment width="45"/>
        <span title="comments">{comments}</span>
      </button>

      <button className={styles.action} onClick={handleShare}>
        <Share width="45"/>
        <span title="shares">{shares}</span>
      </button>
    </aside>
  );
}
