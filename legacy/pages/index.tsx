import { useRef } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import dynamic from 'next/dynamic';
import { projects } from '../data/projects';

// Use dynamic imports with SSR disabled to avoid hydration issues with animations
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false });
const ProjectsList = dynamic(() => import('@/components/ProjectsList'), { ssr: false });
const AboutSection = dynamic(() => import('@/components/AboutSection'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Matthias Lochbrunner</title>
        <meta name="description" content="Personal portfolio website showcasing my projects and skills as a developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <HeroSection />
        <ProjectsList projects={projects} />
        <AboutSection />
        <ContactSection />
      </Layout>
    </>
  );
}