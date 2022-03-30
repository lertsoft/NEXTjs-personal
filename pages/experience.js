import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Experience from "../components/Experience";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function experience() {
  return (
    <ContainerBlock title="Experience - Ronny Coste">
      <Experience />
    </ContainerBlock>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
