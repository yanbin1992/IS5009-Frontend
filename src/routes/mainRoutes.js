import Board from 'containers/Board';
import SignIn from 'containers/SignIn';
import SignUp from 'containers/SignUp';
import NotFound from 'containers/NotFound';
import Attachment from 'containers/Attachment';
import SignOut from 'containers/SignOut';

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
    component: SignOut,
  },
  {
    path: '',
    name: 'Others',
    icon: 'close-circle',
    component: NotFound,
  },
];

export default mainRoutes;
