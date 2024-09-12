import './Quote.scss'
function Quote({title, text}) {

  return (
    <>
      <section className='quote-page'>
        <div className='quote-page__inner'>
          <div className='text-holder'>
            <h1 className='text-holder__title'>{title} </h1>
            <p className='text-holder__text'> {text}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Quote