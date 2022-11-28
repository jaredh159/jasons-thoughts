import React from 'react';
import FloatingNav from './FloatingNav';
import NavLink from './NavLink';

interface Props {
  page: string;
  small?: boolean;
}

const Footer: React.FC<Props> = ({ page, small }) => {
  if (small) {
    return (
      <footer className="flex justify-center items-center space-x-6 sm:space-x-10 p-6 flex-wrap">
        <NavLink to="/" selected={page === '/'}>
          Home
        </NavLink>
        <NavLink to="/posts" selected={page === '/posts'}>
          Posts
        </NavLink>
        <NavLink to="/about" selected={page === '/about'}>
          About me
        </NavLink>
        <NavLink to="/contact" selected={page === '/contact'}>
          Contact
        </NavLink>
      </footer>
    );
  }
  return (
    <section className="relative overflow-hidden">
      <section className="bg-white h-80 flex justify-center items-center relative p-8">
        <i className="fa-solid fa-quote-left text-7xl text-gray-100 sm:text-gray-200 absolute left-8 top-8" />
        <i className="fa-solid fa-quote-right text-7xl text-gray-100 sm:text-gray-200 absolute bottom-8 right-8" />
        <p className="max-w-2xl text-center text-xl sm:text-2xl font-extralight relative z-10 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium cumque
          quidem voluptas molestiae nobis exercitationem, quos suscipit ipsum quasi velit
          atque.
        </p>
      </section>
      <footer className="px-10 py-6 flex justify-center items-center relative">
        <div className="w-96 h-96 bg-sky-300 rounded-2xl absolute left-56 -bottom-52 rotate-45 bg-opacity-20 sm:bg-opacity-50" />
        <div className="w-96 h-96 bg-sky-500 rounded-2xl absolute left-20 -bottom-72 rotate-45 bg-opacity-20 sm:bg-opacity-50" />
        <FloatingNav page={page} />
      </footer>
    </section>
  );
};

export default Footer;
