import './Hero.scss'
function Hero({HeroImage}) {

  return (
    <>
      <section className='hero-page'>
        <div className='hero-page__inner'>
          <div className='image-holder'>
          <img className='image-holder__image' src={HeroImage} alt="Two blue cocktails" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero