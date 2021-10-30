import Board from 'containers/Board';
import SignIn from 'containers/SignIn';
import SignUp from 'containers/SignUp';
import NotFound from 'containers/NotFound';
import Attachment from 'containers/Attachment';
import SignOut from 'containers/SignOut';
import EntryTest from 'containers/EntryTest';
import Advisory from 'containers/Advisory'
import Education from 'containers/Education'
import Me from 'containers/Me'
import Account from 'containers/Account'



const mainRoutes = [
  {
    exact: true,
    path: '/',
    name: 'Home',
    icon: 'home',
    component: Board,
    auth: true,
    permission: 'admin',
  },
  {
    path: '/signin',
    name: 'Sign In',
    icon: 'login',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'Sign Up',
    hide: true,
    component: SignUp,
  },
  {
    path: '/signout',
    name: 'Sign Out',
    hide: true,
    component: SignOut,
  },
  {
    path: '/entrytest',
    name: 'Entrytest',
    hide: true,
    auth: true,
    permission: 'admin',
    component: EntryTest
  },
  {
    path: '/advisory',
    name: 'Advisory',
    hide: false,
    auth: true,
    permission: 'admin',
    component: Advisory
  },
  {
    path: '/account',
    name: 'Account',
    hide: false,
    auth: true,
    permission: 'admin',
    component: Account
  },
  {
    path: '/education',
    name: 'Education',
    hide: false,
    auth: true,
    permission: 'admin',
    component: Education
  }
  ,
  {
    path: '/me',
    name: 'ME',
    hide: false,
    auth: true,
    permission: 'admin',
    component: Me
  }
  ,
  {
    path: '',
    name: 'Others',
    icon: 'close-circle',
    hide: true,
    component: Board,
  }

];

export default mainRoutes;