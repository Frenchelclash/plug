import React, { useState } from 'react';
import './App.css';

function App() {
  const [lang, setLang] = useState(true)
  const [input, setInput] = useState(true)
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [value, setValue] = useState('')

  function handleValue(e) {
    setValue(e.target.value);
    console.log(e.target.value)
  }

  function handleFormSubmit(e) {
    const reg = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    e.preventDefault();
    if (value && reg.test(value)){
      setEmail(value)
      setInput(false)
      setValue('')
      setError(false)
    } else {
      setError(true)
    }
  } 

  return (
    <div className="app">
      <header className="header">
        <img className='header_logo' src='./img/logo.svg' alt='rima logo' />
      </header>
      <body className='body'>
          <nav className='plug_lang-nav'>
            <button className='plug_lang-nav-button' style={{borderBottom: lang   && '1px solid black'}} onClick={()=>setLang(true)}>РУС</button>
            <button className='plug_lang-nav-button'  style={{borderBottom: !lang && '1px solid black'}} onClick={()=>setLang(false)}>ENG</button>
          </nav>
          <p className='plug_par'>{lang ? 'RIMA — это проект, созданный Бард колледжем и ПЕН-Америка, чтобы сохранить материалы независимых медиа, столкнувшихся с цензурой в России.' : 'RIMA is a project started by Bard college and PEN America to preserve the work of Russian media threatened by censorship.'} </p>
          <p className='plug_par'>{lang ? 'Мы хотим собрать архив независимых медиа, работавших в России с 2000 года, и превратить его в  инструмент исследования и понимания истории авторитаризма в России и борьбы за свободу слова в других странах мира.': 'Our task is to create a digital archive and turn the work of Russian independent journalists into a powerful tool that will help investigate and understand the dynamics of Russia’s authoritarian transformation and serve journalist communities all over the world.'}</p>
          {input && <form className='plug_subcsr' onSubmit={handleFormSubmit}>
              <input className='plug_subscr-input' required placeholder={lang ? 'Введите свою почту' : 'Enter your email'} value={value} onChange={handleValue} style={{color: error && '#FF2A00', borderColor: error && '#FF2A00' }}/>
              <label className='plug_subscr-label' style={{color: error && '#FF2A00'}}>{!error ? `${lang ? 'Подпишитесь на наши обновления' : 'Subscribe to our news and updates'}` : `${lang ? 'Это не похоже на почту' : 'Doesn\'t look like email'}`}</label>
              <button type='submit' className='plug_subscr-button' >{lang ? 'Подписаться' : 'Subscribe'}</button>
              <button type='submit' className='plug_subscr-button-arrow'></button>
          </form> }
          {!input && <div className='subscribed'>
              <div className='subscribed_check'></div>
              <p className='subscribed_par'>{lang ? 'Спасибо, что подписались на наши обновления' : 'Thank you for subscribing to our news and updates'}</p>
            </div>}
      </body>
      <footer className='footer'>
        <a href='https://bard.edu/' className='footer_link'> <img className='footer_link-img' src='./img/bard.svg' alt='bard logo' /> </a>
        <a href='https://pen.org/' className='footer_link'> <img className='footer_link-img' src='./img/pen.svg' alt='bard logo' /> </a>
      </footer>
    </div>
  );
}

export default App;