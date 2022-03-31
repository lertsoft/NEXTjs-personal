import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "../components/AboutMe";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function about() {
  return (
    <ContainerBlock>
      <AboutMe />
    </ContainerBlock>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
});
