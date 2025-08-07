import React from 'react';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

export const metadata = {
  title: 'Ivan Septa | Fullstack Web Developer',
  description:
    'Portofolio pribadi Ivan Septa Adi Pratama — Fullstack Developer dengan keahlian React, Next.js, dan machine learning.',
  keywords: [
    'Ivan Septa',
    'Portofolio Web Developer',
    'Fullstack Developer',
    'React Developer',
    'Next.js',
    'Machine Learning',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Ivan Septa | Fullstack Web Developer',
    description:
      'Portofolio pribadi Ivan Septa Adi Pratama — Fullstack Developer dengan keahlian React, Next.js, dan machine learning.',
    url: 'https://ivanseptaadipratama.vercel.app/',
    images: [
      {
        url: '/images/preview.png',
        width: 1200,
        height: 630,
        alt: 'Ivan Septa Portofolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ivan Septa | Fullstack Developer',
    description: 'Fullstack Web Developer yang fokus pada Next.js dan teknologi modern.',
    images: ['/images/preview.png'],
  },
};

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Section */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-accent dark:text-white">Fullstack Web Developer</span>

            <h1 className="h1 mb-6 text-black dark:text-white/60">
              Hello I'm <br />
              <span className="text-accent dark:text-new">Ivan Septa Adi Pratama</span>
            </h1>

            <p className="max-w-[500px] mb-10 text-dark dark:text-white/60 leading-relaxed">
              I am an IT graduate specializing in fullstack web development, with additional experience in machine
              learning.
            </p>

            {/* Button & Social Media */}
            <div className="flex flex-col xl:flex-row items-center gap-8 justify-between xl:justify-start">
              <a href="/uploads/Resume.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase items-center gap-1 bg-white dark:bg-background text-dark dark:text-accent hover:bg-accent-dark hover:bg-accent rounded-4xl border-2 border-accent"
                >
                  <span>Download CV</span>
                  <FiDownload />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-8 text-2xl"
                  iconStyles="text-accent dark:text-accent hover:text-accent"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
