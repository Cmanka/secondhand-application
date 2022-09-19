import React, { FC } from 'react';
import { AppRoutes } from '../../core/constants/app-routes';
import { Wrapper, Link } from './styles';

const Header: FC = () => {
  return (
    <Wrapper>
      {Object.entries(AppRoutes).map(([label, path]) => (
        <Link key={path} to={path}>
          {label}
        </Link>
      ))}
    </Wrapper>
  );
};

export { Header };
