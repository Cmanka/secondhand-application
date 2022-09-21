import React, { FC } from 'react';
import { AppRoutes } from '../../core/constants/app-routes';
import { Wrapper, Link, Logo } from './styles';

const HEADER_ROUTES = [{ label: 'Components', path: AppRoutes.Components }];

const Header: FC = () => {
  return (
    <Wrapper>
      <Logo to={AppRoutes.Home}>2Hand</Logo>
      {HEADER_ROUTES.map(({ label, path }) => (
        <Link key={path} to={path}>
          {label}
        </Link>
      ))}
    </Wrapper>
  );
};

export { Header };
