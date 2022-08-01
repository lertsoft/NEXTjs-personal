## Portfolio Website For Developers 💯

**UPDATE:**

 Included the `constants` folder, where you can directly add your details and it'll get reflected throughout the application. No more customizations for the template required, just add your data and it'll reflect immediately.

Portfolio for developers is a simple and minimalistic website to showcase your skills and projects as a developer. The design is inspired by [Kevin Clark](https://kevinclark.ca). The website is completely Open Source, you can use it for whatever purpose you want.

![HomeGif](https://github.com/lertsoft/NEXTjs-personal/blob/main/demo-images/websitegif.gif)

# Features

- Responsive layout, works well on both Mobile and Desktop
- Dark mode support. Click buttons to toggle dark mode and light mode.
- Clear React components and tailwind styling.
- Exact sections that a developer needs to showcase their skills.
- Clear call to actions.
- Scroll to top button.
- Translation button.

# Structure

├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── locales              # English and Spanish translation files
│   ├── images               # Images
├── pages                    # Next JS pages
│   ├── api                  # api's and easter
├── components               # Components and other utilities.
├── styles                   # PostCSS style folder with Tailwind
├── lib                      # API fetch
├── fonts                    # Fonts
├── cypress                  # Testing files
├── constants                # Constant data and information.
├── demo-images              # Demo Images for the Readme file
├── tailwind.config.js       # Tailwind CSS configuration
├── cypress.config.js        # End-to-End Testing
└── next-i118next.config.js  # i18n configuration

# Pages

I've kept the pages as simple as possible. Only the required sections are included with minimal content.

## Landing

![Hompage](https://github.com/lertsoft/NEXTjs-personal/blob/main/demo-images/home.png)

## Landing in spanish

![Hompage](https://github.com/lertsoft/NEXTjs-personal/blob/main/demo-images/home_es.png)

## About

![Hompage](https://github.com/lertsoft/NEXTjs-personal/blob/main/demo-images/about.png)

## Projects

![Hompage](https://github.com/lertsoft/NEXTjs-personal/blob/main/demo-images/projects.png)

## Experience

![Hompage](https://github.com/lertsoft/NEXTjs-personal/blob/main/demo-images/experience.png)

## Contact

![Hompage](https://github.com/lertsoft/NEXTjs-personal/blob/main/demo-images/contact.png)

## Link In Bio

![Hompage](https://github.com/lertsoft/NEXTjs-personal/blob/main/demo-images/linkIn.jpg)

# Tech Stack

The website is built in my favourite Tech Stack and deployed on [Vercel](https://vercel.com)

- [Next.js](https://nextjs.org) for building React Components.
- [Next-I18next](https://github.com/isaachinman/next-i18next) for internationalyzing / Translating the website.
- [tailwindcss](https://tailwindcss.com) for styling.
- [React Rough Notation](https://roughnotation.com) for Hero section highlighting.
- [Vercel](https://vercel.com) for deployments and CI/CD.
- [Cypress](https://go.cypress.io) for End-to-End Testing.

# Usage

- Clone the repository using `git clone https://github.com/manuarora700/simple-developer-portfolio-website.git`
- Install all the modules by using `npm i` or `npm install` or `yarn`
- Run the local development server by using `npm run dev` or `yarn dev`
- Make the required edits and deploy to YOUR GitHub repo for CI/CD.

# Deployment

Deployment can be done in 3 easy steps.

- Login to [Vercel](https://vercel.com) or signup for an account if you don't have one.
- Create a `New Project` and select YOUR GitHub repository of the portfolio project.
- Wait for Vercel to deploy your project to production.

# License

This template is completely open source and free to use. Use it for client projects or your own portfolio project. Give me credits at the footer (If you wish, it'll help me a lot :)).
