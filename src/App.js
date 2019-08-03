import React from 'react'
import './App.css'
import gear_icon from './gear.svg'

const main_pitch = `I am a novice web developer and designer looking for an entry-level position with opportunity to learn and grow. I work with standard web technologies [1](HTML + CSS + JS), modern tools and libraries[2] and unix-based servers[3]`
const engineering_blurb = 'I work with code, but my degree\'s in engineering, so I know how to solve problems and coordinate with teams.'

function App() {
  return (
    <article>
      <header>Hi, I'm Travis</header>
      <main>{main_pitch}</main>
      <section id='big'>
        <ul>
          <li>
            <img src={gear_icon} alt='mechanical gear icon' />
            {engineering_blurb}
          </li>
        </ul>
      </section>
      <section id='medium'>

      </section>
      <section id='small'>

      </section>
      <footer>

      </footer>
    </article>
  );
}

export default App;
