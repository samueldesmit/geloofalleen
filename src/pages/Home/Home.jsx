import './Home.scss'
import over_mij from '../../assets/famfoto.jpg'
import over_mij_two from '../../assets/jedidja.png'
import Quote from '../../components/Quote/Quote'
import Hero from '../../components/Hero/Hero'
import SfeerOne from '../../assets/room.jpeg'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <Hero HeroImage={SfeerOne} />
      <section className='home-page'>
        <Quote title="~ Welkom ~" text="Wat leuk dat je een kijkje neemt op onze site. Dan heb jij de kaart ontvangen voor Proclamaties Zwangerschap & Bevalling. Graag stel ik mijzelf even voor en neem ik je mee in het hart achter deze kaart." />
        <div className='home-page__inner'>
          <div className='text-holder'>
            <h5 className='text-holder__title'>Even voorstellen
            </h5>
            <p className='text-holder__text'>
              Mijn naam is Jedidja van den Born, ik ben getrouwd met Patrick en samen hebben wij 4 prachtige kinderen; Nathan, Mirthe, Daniel (leeft bij Jezus) en Aron. </p>         </div>
          <div className='image-holder'>
            <img className='image-holder__image' src={over_mij} alt="Two blue cocktails" />
          </div>
        </div>
        <Quote title="~ Proclamatie ~" text="U geeft mij nieuw leven en bewaart mijn voeten voor struikelen. U zet mij op de Rots hoog boven mij, U beschermt mij en mijn baby altijd." />

        <div className='home-page__inner home-page__inner-last'>
          <div className='text-holder text-holder-two'>
            <h5 className='text-holder__title'>Wil meer weten?</h5>
            <Link className='text-holder__link' to="/over_mij">
              Klik hier om meer te weten te komen over ons verhaal! En hoe de kaart tot stand is gekomen.
            </Link>
          </div>
          <div className='image-holder image-holder-two'>
            <img className='image-holder__image' src={over_mij_two} alt="Two blue cocktails" />
          </div>
        </div>
      </section>

    </>
  )
}

export default Home