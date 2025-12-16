import { Post } from "./components/Post";

export const App = () => {
  return (
    <main>
      <Post author="Maximilian" body="js is awesome!" />
      <Post author="Manuel" body="Check out the full course!" />
    </main>
  );
};
