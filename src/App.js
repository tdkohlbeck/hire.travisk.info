import React from 'react'
import './App.css'
import gear_icon from './white-gear.svg'
import office_icon from './office-building.svg'
import book_icon from './book.svg'

// main copy
const main_pitch = `I am a novice web developer and designer looking for an entry-level position with opportunity to learn and grow. I work with standard web technologies [1](HTML + CSS + JS), modern tools and libraries[2] and unix-based command-lines[3]`
const engineering_blurb = 'I work with code, but my degree\'s in engineering, so I know how to solve problems and coordinate with teams.'
//const engineering_blurb2 = 'These days I build with code, but I was taught engineering, so I know how to solve problems and coordinate with teams.'
const experience_blurb = 'I have experience working on enterprise codebases, fixing consumer-facing production code, and building internal tools for coworkers.'
const personal_blurb = 'Other hobbies include learning about space & physics, camping & hiking, and mainstream auteur films.'

// project copy
const datum_blurb = 'A personal metrics management platform. Write more copy here, mention features of gui and cli.'
const bag_n_fits_blurb = 'A python-based command-line program which takes files/directories and produces 1) a csv file containing all metadata, and 2) a checksumed backup'
const car_wash_blurb = 'A family member is trying to sell a business. I made this page for him to help sell it. Features social media embeds, 3rd-party React components, etc.'

// other links
const other_links = [
	{
		text: 'my profile on github',
		url: 'http://github.com/tdkohlbeck',
	},
	{
		text: 'my resume (css, not pdf or LaTeX!)',
		url: 'http://travisk.info/resume',
	},
	{
		text: 'something else',
		url: 'http://travisk.info',
	},
]

function App() {
  return (
    <article>
      <header>Hi, I'm Travis.</header>
      <main>{main_pitch}</main>
      <section id='big'>
        <ul>
          <li>
            <img src={gear_icon} id='gear' alt='mechanical gear icon' />
            <span>{engineering_blurb}</span>
          </li>
          <li>
            <img src={office_icon} id='gear' alt='mechanical gear icon' />
            <span>{experience_blurb}</span>
          </li>
					<li>
            <img src={book_icon} id='gear' alt='mechanical gear icon' />
            <span>{personal_blurb}</span>
          </li>
        </ul>
      </section>
      <section id='medium'>
				<header>Projects of Note</header>
				<ul>
					<li>
						<span className='project-title'>Datum</span>
						{datum_blurb}
					</li>
					<li>
						<span className='project-title'>Bag 'n Fits</span>
						{bag_n_fits_blurb}
					</li>
					<li>
						<span className='project-title'>Marketing Page</span>
						{car_wash_blurb}
					</li>
				</ul>
      </section>
      <section id='small'>
				<header>See Also</header>
				{other_links.map(pair => (
					<>
						<a href={pair.url} key={pair.text}>{pair.text}</a>
						<span key={pair.url}>{'◦'}</span>
					</>
				))}
      </section>
			<hr />
      <footer>
				<header>Annotations</header>
				<ol>
					<li>HTML, CSS, JavaScript (ES2018), Browser DOM API</li>
				</ol>
      </footer>
    </article>
  );
}

export default App;
