import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Contact from "../components/Contact";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function contact() {
  return (
    <ContainerBlock>
      <Contact />
    </ContainerBlock>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
});
