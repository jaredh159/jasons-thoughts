import React from 'react';

const HeroBlock: React.FC = () => {
  return (
    <section className="p-6 xs:p-12 md:p-16 lg:p-20 relative overflow-hidden">
      <div className="w-96 h-96 bg-sky-300 rounded-2xl absolute right-56 -bottom-52 rotate-45 bg-opacity-20 sm:bg-opacity-50"></div>
      <div className="w-96 h-96 bg-sky-500 rounded-2xl absolute right-20 -bottom-72 rotate-45 bg-opacity-20 sm:bg-opacity-50"></div>
      <h1 className="text-3xl xs:text-4xl md:text-6xl font-inter relative">
        The Ancient Path
      </h1>
      <p className="mt-6 text-black text-opacity-50 max-w-4xl xs:text-lg relative">
        Stand by the ways and see and ask for the ancient paths, where the good way is,
        and walk in it; and you will find rest for your souls. But they said, 'We will not
        walk in it.' - <span className="font-medium">Jeremiah 6:16</span>
      </p>
      <div className="mt-12 flex flex-col xs:flex-row space-y-3 xs:space-y-0 xs:space-x-4 relative">
        <a
          className="flex justify-center items-center bg-sky-400 text-white rounded-lg shadow-md py-3 px-5 font-medium text-lg hover:bg-sky-500 transition duration-100 cursor-pointer"
          href="/posts"
        >
          <i className="fa-solid fa-arrow-right mr-3"></i>
          View posts
        </a>
        <a
          className="flex justify-center items-center bg-white text-sky-500 border-[0.5px] rounded-lg shadow-md py-3 px-5 font-medium text-lg hover:bg-sky-50 transition duration-100 cursor-pointer"
          href="/podcast"
        >
          <i className="fa-solid fa-podcast mr-3"></i>
          Listen to podcast
        </a>
      </div>
    </section>
  );
};

export default HeroBlock;
