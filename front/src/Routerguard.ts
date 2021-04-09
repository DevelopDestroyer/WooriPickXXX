import { BrowserRouter } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { useRecoilValue } from 'recoil';
import { IsLoginSelector } from './recoil/Session';
//import { About, Home, Loading, Login, NotFound } from 'pages';
//import { getIsLoggedIn } from 'utils';

export const requireLogin = (to: any, from: any, next: any) => {
  console.log(`Router Gouard `);

  /*
    if (to.meta.auth) {
    if (getIsLoggedIn()) {
      next();
    }
    next.redirect('/login');
  } else {
    next();
  }
  
  */
};
