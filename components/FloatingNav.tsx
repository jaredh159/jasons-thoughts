import React from 'react';
import cx from 'classnames';
import NavLink from './NavLink';

interface Props {
  page: string;
  className?: string;
}

const FloatingNav: React.FC<Props> = ({ page, className }) => {
  return (
    <div className="hidden sm:block">
      <nav
        className={cx(
          `border-[0.5px] shadow-lg rounded-full py-1 px-8 bg-white relative z-20 flex flex-wrap justify-center`,
          className,
        )}
      >
        <NavLink to="/" selected={page === '/'}>
          Home
        </NavLink>
        <NavLink to="/posts" selected={page === '/posts'}>
          Posts
        </NavLink>
        <NavLink to="/podcast" selected={page === '/podcast'}>
          Podcast
        </NavLink>
        <NavLink to="/about" selected={page === '/about'}>
          About me
        </NavLink>
        <NavLink to="/contact" selected={page === '/contact'}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default FloatingNav;
