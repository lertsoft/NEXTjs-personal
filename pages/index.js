import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavoriteProjects from "../components/FavoriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Developer. Photographer. FilmMaker. Creator."
      description="I've been developing websites for more than 5 years straight. Get in touch with me to know more. This sitewas built with Next.js, React, and Tailwind-CSS." >
      <Hero />
      <FavoriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}
// Fetching data from github and also from the local translations.
// Use getStaticProps function to get the site to work on a deployment site or server.
// serverSideRender function produces a 500 error on the deployed site which is pretty hard to debug amd time consuming...
// Learned this today the hard way lol but We learn and we improve everyday
export const getStaticProps = async ({ locale }) => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
       ...await serverSideTranslations(locale, ['common', 'footer']),
    },
  };
};
