import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

// Meta data for bots and container design template for the entire website.
export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Ronny Coste - Developer. Photographer. Writer. Creator.",
    description: `I am Ronny Coste. software Engineer and Photographer based in NYC. This site was built with Next.js, React, and Tailwind-CSS.`,
    image: "/rccolor.JPG",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description}  />
        <meta
          property="og:url"
          content={`https://ronnycoste.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://ronnycoste.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Ronny Coste" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="Ronny Coste - Software Engineer and Creator" />
        <meta name="twitter:site" content="@costeronny" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/* <!-- Cloudflare Web Analytics --> */}
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_ANALYTICS_ID}"}`}></script>
        {/* <!-- End Cloudflare Web Analytics --> */}
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <ScrollTop />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
