import { createStore } from 'vuex'

export default createStore({,
  state: {
    summary: 'Hello! I’m Gresiandra Putra from Samarinda. Currently working at Indomaret Group as an Inventory Control Supervisor',
    devSkills: [ 'HTML','CSS','Javascript','Bootstrap','SQL','GIT','Python'],
    otherSkills: [ 'English','Data Analisys','Data Entry','Figma','Ms.Excel'],
    fileCv: 'CV.png',
    projects: [
      {
        title: 'QuranOnline',
        desc: 'Holy Quran in online form! now you can recite Al-Quran anytime and anywhere you go without bringing the actual book. Written using vanilla javascript.',
        link: 'https://gresiandra.github.io/QuranOnline/',
        pic: 'project1.png'
      },
      {
        title: 'Covid Tracker',
        desc: 'Provide latest update of Covid cases in Indonesia. Equipped with a map for detail cases in each province. Written using Leaflet, Bootstrap and Django.',
        link: 'https://covid-indo.herokuapp.com/',
        pic: 'project2.png'
      },
      {
        title: 'Reaction Game',
        desc: "This little game is my first website using Vue. Test how fast is your reaction. My best time is 0.358 second, let's see if you could beat it! ",
        link: 'https://fun-reaction-game.netlify.app/',
        pic: 'project3.png'
      },
      {
        title: 'Personal Website',
        desc: "You are currently looking at the website. it's a simple personal website built using Vue, Vuex library, vanilla CSS and HTML.",
        link: '',
        pic: 'project4.png'
      },
    ]
  },

  actions: {
  }
})
