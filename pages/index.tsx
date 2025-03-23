import { useRef } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ProjectsGrid from '@/components/ProjectsGrid';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio - Developer & Designer</title>
        <meta name="description" content="Personal portfolio website showcasing my projects and skills as a developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <HeroSection />
        <ProjectsGrid projects={projects} />
        <AboutSection />
        <ContactSection />
      </Layout>
    </>
  );
}