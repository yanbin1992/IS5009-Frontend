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
import Product from 'containers/Me'



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
    component: EntryTest
  },
  {
    path: '/advisory',
    name: 'Advisory',
    hide: false,
    component: Advisory
  },
  {
    path: '/product',
    name: 'Product',
    hide: false,
    component: Product
  },
  {
    path: '/education',
    name: 'Education',
    hide: false,
    component: Education
  }
  ,
  {
    path: '/account',
    name: 'ME',
    hide: false,
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
