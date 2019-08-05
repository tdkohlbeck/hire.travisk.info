import React from 'react'
import './App.css'
import gear_icon from './white-gear.svg'
import office_icon from './office-building.svg'
import book_icon from './book.svg'

// main copy
//const main_pitch = `I am a novice web developer and designer looking for an entry-level position with opportunity to learn and grow. I work with standard web technologies [1](HTML + CSS + JS), modern tools and libraries[2] and unix-based command-lines[3]`
//const engineering_blurb = 'I work with code, but my degree\'s in engineering, so I know how to solve problems and coordinate with teams.'
//const engineering_blurb2 = 'These days I build with code, but I was taught engineering, so I know how to solve problems and coordinate with teams.'
//const experience_blurb = 'I have experience working on enterprise codebases, fixing consumer-facing production code, and building internal tools for coworkers.'
const personal_blurb = 'Other hobbies include learning about space & physics, camping & hiking, and mainstream auteur films.'

// project copy
const datum_blurb = 'A personal metrics management platform. Write more copy here, mention features of gui and cli.'
//const bag_n_fits_blurb = 'A python-based command-line program which takes files/directories and produces 1) a csv file containing all metadata, and 2) a checksumed backup'
const bag_n_fits_blurb2 = 'Given a directory, will create a csv containing all metadata of its contents, with optional archiving and error checking.'
const car_wash_blurb = 'A family member is trying to sell a business. I made this page for him to help sell it. Features social media embeds, 3rd-party React components, etc.'

// other links
const other_links = [
	{
		text: 'my github profile',
		url: 'http://github.com/tdkohlbeck',
	},
	{
		text: 'my (css) resume',
		url: 'http://travisk.info/resume',
	},
	{
		text: 'my linkedin profile',
		url: 'http://travisk.info',
	},
	{
		text: 'something else',
		url: 'http://travisk.info',
	},
	{
		text: 'another placeholder',
		url: 'http://travisk.info',
	},
	{
		text: 'my bookmarks maybe',
		url: 'http://travisk.info',
	},
	{
		text: 'Datum (CLI version)',
		url:  'https://github.com/tdkohlbeck/datum-cli/blob/master/datum.py',
	},
]

function App() {
  return (
    <article>
      <header>Hi, I'm Travis.</header>
      <main>I am a novice web developer and designer looking for an entry-level position with opportunity to learn and grow. I work with <a href='#1'>standard web technologies,<sup>1</sup></a> <a href='#2'>modern front-end tools & libraries,<sup>2</sup></a> and <a href='#3'>server backends.<sup>3</sup></a></main>
      <section id='big'>
        <ul>
          <li>
            <img src={gear_icon} id='gear' alt='mechanical gear icon' />
            <span>I work with code, but my <a target='_blank' href='#4'>degree is engineering,<sup>4</sup></a> so I know how to solve problems and coordinate with teams.</span>
          </li>
          <li>
            <img src={office_icon} id='gear' alt='mechanical gear icon' />
            <span>I have <a href='#5'>experience working<sup>5</sup></a> on enterprise codebases, fixing consumer-facing production code, and building internal tools for coworkers.</span>
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
						<a target='_blank' href='http://getdatum.app' className='project-title'>Datum</a>
						<a href='#6'>A personal metrics tracking app.<sup>6</sup></a> Features quick key-value-pair entry, text auto-completion, csv import/export, and offline storage.
					</li>
					<li>
						<a target='_blank' href='https://github.com/tdkohlbeck/bag-it-fits-it' className='project-title'>Bag 'n Fits</a>
						{bag_n_fits_blurb2}
					</li>
					<li>
						<a target='_blank' href='#' className='project-title'>Marketing Page</a>
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
					<li id='1'>HTML, CSS, JavaScript (ES2018), Browser DOM API</li>
					<li id='2'>React.js, so on and so forth.</li>
					<li id='3'>GNU+Linux, Bash, Nginx, MySQL, Node.js</li>
					<li id='4'>Specifically mechanical engineering, but I still learned plenty about code, be it Matlab, numerical methods, or programming robots.</li>
					<li id='5'>See <a target='_blank' href='resume'>my resume</a> for further details.</li>
					<li id='6'>Built with React.js. A <a href='http://github.com/tdkohlbeck/datum-cli'>CLI version</a> built with Python & MySQL features a time-tracking mode and a SMS/chatbot interface.</li>
				</ol>
      </footer>
    </article>
  );
}

export default App;
