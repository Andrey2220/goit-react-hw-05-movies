import Header from 'components/header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layouts;
