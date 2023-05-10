import React from 'react';
import { BsColumns } from 'react-icons/bs';
import { AiOutlinePicLeft } from 'react-icons/ai';

interface HeaderProps {
  toggleView: (view: boolean) => void;
  view: boolean;
}

const Header: React.FC<HeaderProps> = ({ view, toggleView }) => {
  return (
    <header className='header-container'>
      <button onClick={() => toggleView(!view)}>
        {view ? <AiOutlinePicLeft /> : <BsColumns />}
      </button>
    </header>
  );
};

export default Header;
