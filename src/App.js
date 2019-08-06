import React, { useEffect } from 'react'
import './App.css'
import { ReactComponent as WrenchIcon } from './wrench.svg'
import { ReactComponent as OfficeIcon } from './office.svg'
import { ReactComponent as PlanetIcon } from './planet.svg'

// main copy
//const main_pitch = `I am a novice web developer and designer looking for an entry-level position with opportunity to learn and grow. I work with standard web technologies [1](HTML + CSS + JS), modern tools and libraries[2] and unix-based command-lines[3]`
//const engineering_blurb = 'I work with code, but my degree\'s in engineering, so I know how to solve problems and coordinate with teams.'
//const engineering_blurb2 = 'These days I build with code, but I was taught engineering, so I know how to solve problems and coordinate with teams.'
//const experience_blurb = 'I have experience working on enterprise codebases, fixing consumer-facing production code, and building internal tools for coworkers.'
const personal_blurb = 'Other hobbies include learning about space & physics, mainstream auteur films, indie electro-pop rock, and mindfulness meditation.'

// project copy
const datum_blurb = 'A personal metrics management platform. Write more copy here, mention features of gui and cli.'
//const bag_n_fits_blurb = 'A python-based command-line program which takes files/directories and produces 1) a csv file containing all metadata, and 2) a checksumed backup'
const bag_n_fits_blurb2 = 'Given a directory, will create a csv containing all metadata of its contents, with optional archiving and error checking.'
const car_wash_blurb = 'A family member is trying to sell a business. I made this page to help advertise it. Features social media embeds (among other widgets), SEO, and mobile-first responsive design'

// other links
const other_links = [
	{
		text: 'github profile',
		url: 'http://github.com/tdkohlbeck',
	},
	{
		text: 'css resume',
		url: 'http://travisk.info/resume',
	},
	{
		text: 'datum code',
		url: 'https://github.com/tdkohlbeck/datum-app',
	},
	{
		text: 'datum (cli version)',
		url:  'https://github.com/tdkohlbeck/datum-cli/blob/master/datum.py',
	},
	{
		text: 'random notes app',
		url: 'https://github.com/tdkohlbeck/react-random-notes',
	},
	{
		text: 'all projects',
		url: 'http://travisk.info/projects',
	},
	{
		text: 'contact info',
		url: 'http://travisk.info/contact',
	},
]

function App() {
	useEffect(() => {
		const dark_mode_toggle = document.querySelector('input[type="checkbox"]')
		function toggle_colors(e) {
			if (e.target.checked) {
				console.log('toggle!')
				document.documentElement.setAttribute('data-theme', 'dark')
			} else {
				document.documentElement.setAttribute('data-theme', 'light')
			}
		}
		dark_mode_toggle.addEventListener('change', toggle_colors, false)
	})
  return (
    <article>
      <header>Hi, I'm Travis.</header>
      <main>I am a novice web developer and designer looking for an entry-level position with opportunity to learn and grow. I work with <a href='#1'>standard web technologies,<sup>1</sup></a> <a href='#2'>modern front-end tools & libraries,<sup>2</sup></a> and <a href='#3'>server backends.<sup>3</sup></a></main>
      <section id='big'>
        <ul>
          <li>
						<WrenchIcon id='wrench-icon' />
            <span>I work with code, but my <a target='_blank' href='#4'>degree is engineering,<sup>4</sup></a> so I know how to solve problems and coordinate with teams.</span>
          </li>
          <li>
						<OfficeIcon id='office-icon' />
            <span>I have <a href='#5'>experience working<sup>5</sup></a> on enterprise codebases, fixing consumer-facing production code, and building internal tools for coworkers.</span>
          </li>
					<li>
						<PlanetIcon id='planet-icon' />
            <span>{personal_blurb}</span>
          </li>
        </ul>
      </section>
      <section id='medium'>
				<header>Projects of Note</header>
				<ul>
					<li>
						<a target='_blank' href='http://dev.getdatum.app' className='project-title'>Datum</a>
						<a href='#6'>A personal metrics tracking app.<sup>6</sup></a> Features quick key-value-pair entry, text auto-completion, csv import/export, and offline storage.
					</li>
					<li>
						<a target='_blank' href='https://github.com/tdkohlbeck/bag-it-fits-it' className='project-title'>Bag 'n Fits</a>
						{bag_n_fits_blurb2}
					</li>
					<li>
						<a target='_blank' href='https://travisk.info/magiccarwash' className='project-title'>Magic Car Wash</a>
						{car_wash_blurb}
					</li>
				</ul>
      </section>
      <section id='small'>
				<header>See Also</header>
				{other_links.map(pair => (
					<span key={pair.text}>
						<a target='_blank' href={pair.url}>{pair.text}</a>
						<span>{' ◦ '}</span>
					</span>
				))}
      </section>
      <footer>
				<header>Footnotes</header>
				<ol>
					<li id='1'>HTML(5), CSS, JavaScript (ES2018), Browser DOM API</li>
					<li id='2'>React.js, Flexbox, DevTools, Progressive Web App design</li>
					<li id='3'>GNU+Linux, Bash, Nginx, MySQL, Node.js</li>
					<li id='4'>Specifically mechanical engineering, but I still learned plenty about code, be it Matlab, numerical methods, or programming robots.</li>
					<li id='5'>See <a target='_blank' href='resume'>my resume</a> for further details.</li>
					<li id='6'>Built with React.js. A <a href='http://github.com/tdkohlbeck/datum-cli'>CLI version</a> built with Python & MySQL features a time-tracking mode and a SMS/chatbot interface.</li>
				</ol>
      </footer>
			<div id='email'>
				<a href='mailto:hi@travisk.info'>hi<span id='at'>@</span>travisk.info</a>
				<label htmlFor='dark-mode-toggle' id='toggle-slot'>
					<input type='checkbox' id='dark-mode-toggle' />
					<div id='toggle-btn' />
				</label>
			</div>
    </article>
  );
}

export default App;
