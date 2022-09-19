import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../core/constants/app-routes';
import { Components } from '../../pages/components';
import { Home } from '../../pages/home';

const Router: FC = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<Home />} />
      <Route path={AppRoutes.Components} element={<Components />} />
    </Routes>
  );
};

export { Router };
