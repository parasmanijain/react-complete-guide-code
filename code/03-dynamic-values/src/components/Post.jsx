const names = ['Maximilian', 'Manuel'];

export const Post = () => {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{chosenName}</p>
      <p>js is awesome!</p>
    </div>
  );
}