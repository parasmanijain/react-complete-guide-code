import { Post } from "./Post";
import { NewPost } from "./NewPost";
import classes from "./PostsList.module.css";

export const PostsList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Maximilian" body="js is awesome!" />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
};
