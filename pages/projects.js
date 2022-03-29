import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Projects from "../components/Projects";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})


export default function projects() {
  return (
    <ContainerBlock title="Projects - Ronny Coste">
      <Projects />
    </ContainerBlock>
  );
}
