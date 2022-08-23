import React from "react";
import userData from "@constants/data";
import { useTranslation } from 'next-i18next';
import Link from "next/link";
import { RainbowHighlight } from "./RainbowHighlight";

import { RoughNotation } from "react-rough-notation";
import Image from "next/image";

// About me component
// Tech Stacks, social link texts, and resume.
export default function AboutMe() {
  const { t } = useTranslation('common');
  const animationDuration = Math.floor(30 * "Email".length);
  
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        {t('about')}
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {t('about-title')} {t('about-work')} {" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              < Link href="/contact">
                <a>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                {t('contact')}
              </h1>
              </a>
              </Link>{" "}
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
              {t('about-side.des')} {" "}
              <RoughNotation animationDelay={1000} type="circle" color="red" show={true}>
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  
                  email
                  
                </a>
                {" "}</RoughNotation> 
                {t('about-side.fin')}
              </p>
            </div>
            <div className="mt-8">
            
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              {t('about-job')}
              </h1>
              
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
              {t('about-side.opo')}
              {t('about-side.check')}{" "}
              <RoughNotation animationDelay={2000} type="circle" color="red" show={true}>
                <a
                  href={userData.resumeUrl} 
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  
                  {/* Resume is a hyperlink to resume */}
                  Resume
                </a></RoughNotation>{" "}
                
                {t('about-side.work')}
              </p>
            </div>
            {/* Social Links text */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {t('about-description.1')}
              </p>
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {t('about-description.2')}
              </p>
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {t('about-description.3')}
              </p>
              <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {t('about-description.4')}
              </p>
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {t('about-description.5')}
              </p>
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {t('about-description.6')}
              </p>
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {t('about-description.11')}
              </p>
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {t('about-description.7')}
              </p>
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {t('about-description.8')}
              </p>
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {t('about-description.9')}
              </p>
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {t('about-description.10')}
              </p>
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {t('about-description.12')}
              </p>
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {t('about-description.0')}
              </p>

            
            {/* Images */}
            <div className="flex flex-row flex-wrap mt-8">
            <img
                src="https://skillicons.dev/icons?i=js,html,css,bash,cpp,perl,py,r,react,solidity,ts"
                alt="Programming languages Ronny Knows"
                className="mx-4 my-4"
              />
               <img
                src="https://skillicons.dev/icons?i=wasm,angular,d3,electron,express,nextjs,nodejs,nuxtjs,redux,sass,styledcomponents,vite,vue,webpack"
                alt="Libraries and frameworks Ronny Knows"
                className="mx-4 my-4"
              />
               <img
                src="https://skillicons.dev/icons?i=aws,azure,cloudflare,docker,firebase,git,github,linux,md,bsd,mongodb,mysql,postgres,raspberrypi"
                alt="Infraestructures tools Ronny Knows"
                className="mx-4 my-4"
              />
               <img
                src="https://skillicons.dev/icons?i=au,ai,ps,pr,bootstrap,figma,tailwind"
                alt="Designing tools Ronny Knows"
                className="mx-4 my-4"
              />
              {/* <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4" alt="Javascript logo"
              /> */}
              {/* <img
                src="https://raw.githubusercontent.com/nodejs/nodejs.org/main/static/legacy/images/logo-header.png"
                className="h-20 w-20 mx-4 my-4" alt="Node JS logo"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                className="h-20 w-20 mx-4 my-4" alt="Typescript logo"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-20 w-20 mx-4 my-4" alt="React JS logo"
              />
              <img
                src="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67"
                className="h-20 w-20 mx-4 my-4" alt="NEXT JS logo"
              />
              
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4" alt="HTML logo"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4" alt="CSS logo"
              />
              <img
                src="https://raw.githubusercontent.com/python/pythondotorg/main/static/img/python-logo.png"
                className="h-20 w-20 mx-4 my-4" alt="Python logo"
              />
              <img
                src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/.github/logo-light.svg"
                className="h-20 w-20 mx-4 my-4" alt="TailwindCSS logo"
              />
               <img
                src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo-shadow.png"
                className="h-20 w-20 mx-4 my-4" alt="Bootstrap logo"
              />
               <img
                src="https://raw.githubusercontent.com/ConsenSysMesh/solidity-logo/master/solidity-logo.svg"
                className="h-20 w-20 mx-4 my-4" alt="Solidity logo"
              />
               <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                className="h-20 w-20 mx-4 my-4" alt="Firebase logo"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                className="h-20 w-20 mx-4 my-4" alt="MySQL logo"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                className="h-20 w-20 mx-4 my-4" alt="MongoDB logo"
              />
                <img
                src="https://raw.githubusercontent.com/wireshark/wireshark/master/resources/icons/wireshark.ico"
                className="h-20 w-20 mx-4 my-4" alt="Wireshark logo"
              />
              
              <img
                src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96"
                className="h-20 w-20 mx-4 my-4" alt="Google Cloud logo"
              />
               <img
                src="https://raw.githubusercontent.com/adobe/business-website/main/styles/favicon.svg"
                className="h-20 w-20 mx-4 my-4" alt="Adobe logo"
              />
                 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
