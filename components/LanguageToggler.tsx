import React from 'react';
import cx from 'classnames';
import { Lang } from '../lib/types';

interface Props {
  language: Lang;
  onClick(): void;
}

const LanguageToggler: React.FC<Props> = ({ language, onClick }) => {
  return (
    <button
      className="flex justify-center items-center space-x-1 bg-gray-100 shadow-inner rounded-xl"
      onClick={onClick}
    >
      <span
        className={cx(
          'py-2 px-4 text-gray-500',
          language === 'en' &&
            'bg-white rounded-xl border text-sky-500 font-medium transition duration-150',
        )}
      >
        English
      </span>
      <span
        className={cx(
          'py-2 px-4 text-gray-500',
          language === 'es' &&
            'bg-white rounded-xl border text-sky-500 font-medium transition duration-150',
        )}
      >
        Español
      </span>
    </button>
  );
};

export default LanguageToggler;
