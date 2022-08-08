import React from "react";
import userData from "@constants/data";
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";
import Link from "next/link";

// Icons Source: https://icons.getbootstrap.com 

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

// Footer Component
export default function Footer() {
  const router = useRouter();

  const { t } = useTranslation('footer');

  return (

    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">
            Home
              </a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
            {t('about')}
              </a>
          </Link>
          <Link href="/experience">
            <a className="text-gray-500 hover:text-gray-600 transition">
            {t('experience')}
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-500 hover:text-gray-600 transition">
            {t('projects')}
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-500 hover:text-gray-600 transition">
            {t('contact')}
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href={userData.socialLinks.github}>
            GitHub
          </ExternalLink>
          <ExternalLink href={userData.socialLinks.linkedin}>
            LinkedIn
          </ExternalLink>
          <ExternalLink href={userData.socialLinks.twitter}>
            Twitter
          </ExternalLink>
          <ExternalLink href={userData.socialLinks.instagram}>
            Instagram
          </ExternalLink>
        
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/linkin">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Link In Bio
            </a>
          </Link>
          <ExternalLink href="https://blog.ronnycoste.com">
              Blog
          </ExternalLink>
          <ExternalLink href="https://gallery.ronnycoste.com">
          {t('gallery')}
          </ExternalLink>
          <ExternalLink href="https://store.ronnycoste.com">
          {t('store')}
          </ExternalLink>
        </div>
        
      </div>
      <p className="flex flex-row text-gray-400">&copy; Ronny Coste {new Date().getFullYear()}.  {t('description')}</p>
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      </footer>
      );
      }