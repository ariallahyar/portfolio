export const getFeatureProjects = () => projects.filter((project) => project.type === "feature");
export const getProjects = () => projects.filter((project) => project.type === "normal");

const projects = [
  {
    "brief": "GitHub tracker",
    "title": "GitHub tracker using GitHub's REST API",
    "type": "feature",
    "id": "1",
    "image": "https://imgur.com/McpU7Fr.png",
    "github": "https://github.com/ariallahyar/project-github-tracker",
    "netlify": "https://githubtracker-ari.netlify.app/",
    "description": "Using GitHub's REST API with authentication to track Technigo projects.",
    "tools": ["JavaScript", "HTML", "CSS"]
  }, 
  {
    "brief": "Weather app",
    "title": "Weather app built with open weather API",
    "type": "feature",
    "id": "2",
    "image": "https://imgur.com/3rPWShI.png",
    "github": "https://github.com/ariallahyar/project-weather-app",
    "netlify": "https://aurora-weather-app.netlify.app/",
    "description": "Weather forecast for different cities using Open Weather API and working in feature branches.",
    "tools": ["HTML", "CSS", "JavaScript"]
  }, 
  {
    "brief": "Music releases",
    "title": "Spotify music releases",
    "type": "feature",
    "id": "3",
    "image": "https://imgur.com/80q3ReX.png",
    "github": "https://github.com/ariallahyar/project-music-releases",
    "netlify": "https://spotifynewreleases2022.netlify.app/",
    "description": "Music releases API built with React, designed as a music streaming platform with icons and hover effects.",
    "tools": ["React", "JavaScript", "HTML", "CSS"]
  },
  {
    "brief": "Guess who game",
    "title": "Guess who game",
    "type": "feature",
    "id": "4",
    "image": "https://imgur.com/zmRTsow.png",
    "github": "https://github.com/ariallahyar/project-guess-who",
    "netlify": "https://guess-who-aa.netlify.app/",
    "description": "Guess who game that filters characters based on user guesses.",
    "tools": ["JavaScript", "HTML", "CSS"]
  },
  {
    "brief": "Business site",
    "title": "Business site",
    "type": "normal",
    "id": "5",
    "image": "https://imgur.com/aIowvsS.png",
    "github": "https://github.com/ariallahyar/project-business-site",
    "netlify": "https://supper-society.netlify.app/",
    "description": "Working with HTML form elements and JavaScript accordion.",
    "tools": ["HTML", "CSS", "JavaScript"]
  },
  {
    "brief": "Chatbot",
    "title": "Chatbot built with JavaScript",
    "type": "normal",
    "id": "6",
    "image": "https://imgur.com/vd0jZTi.png",
    "github": "https://github.com/ariallahyar/project-chatbot",
    "netlify": "https://hello-friend-chatbot.netlify.app/",
    "description": "Chat bot that interacts in friendly conversation based on your mood.",
    "tools": ["JavaScript", "HTML", "CSS"]
  }
]

