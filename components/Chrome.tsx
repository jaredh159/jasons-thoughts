import React from 'react';
import Image from 'next/image';
import ProfilePic from '../public/profile.jpg';
import FloatingNav from './FloatingNav';
import Footer from './Footer';

interface Props {
  page: string;
  smallFooter?: boolean;
  children: React.ReactNode;
}

const Chrome: React.FC<Props> = ({ page, smallFooter, children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <header className="flex justify-center sm:justify-between items-center py-5 px-5 sm:px-10 top-0 z-40 backdrop-blur bg-white bg-opacity-20">
        <Image
          src={ProfilePic.src}
          alt="photo of Jason Henderson"
          width={70}
          height={70}
          className="w-12 h-12 rounded-full shadow-lg hidden sm:block"
        />
        <FloatingNav page={page} />
        <div className="w-10 hidden md:block"></div>
      </header>
      <section className="flex-grow flex flex-col">{children}</section>
      <Footer page={page} small={smallFooter} />
    </div>
  );
};

export default Chrome;
