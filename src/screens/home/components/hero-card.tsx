
export const HomeHeroCard = () => {
  return (
    <video 
      width='100%'
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={"/images/passport_card.mp4"} type='video/mp4' />
    </video>
  );
};
