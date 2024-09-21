import './Contact.scss'
import Hero from '../../components/Hero/Hero'
import SfeerOne from '../../assets/room.jpeg'
function Contact() {

  return (
    <>
      <Hero HeroImage={SfeerOne} />

      <section className='contact-page'>
        <div className='contact-page__inner'>
          <div className='text-holder'>
            <h1 className='text-holder__title'>Contact</h1>
            <p> Heb je vragen, wil je iets delen of gewoon even praten? Stuur me een <a href="mailto:jedidjadesmit@gmail.com">mailtje</a>
              . Ik probeer altijd snel te reageren en sta voor je klaar.
            </p> <p>Ik hoor graag van je!</p><br></br>
            <p>Zou je graag de proclamatie kaart willen bestellen (afnamen per 25) stuur dan ook een <a href="mailto:jedidjadesmit@gmail.com">mail</a></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact