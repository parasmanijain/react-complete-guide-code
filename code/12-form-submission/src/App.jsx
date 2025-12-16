import { useState } from 'react';

import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

export const App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  export const showModalHandler() {
    setModalIsVisible(true);
  }

  export const hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}


