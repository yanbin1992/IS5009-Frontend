import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'global.selectors';
import Header from 'components/Header';
import Sider from 'components/Sider';
import PrivateRoute from 'components/PrivateRoute';
import mainRoutes from 'routes/mainRoutes';
import Footer from 'components/Footer';
import { isMobile } from 'Helper/DeviceHelper';
import { compose } from 'redux';


function App(props) {

  const [mobileMode, setMobileMode] = React.useState(true)

  const user = React.useMemo(() => {
    console.log("USER", props.user)
    return props.user
  }, [props.user])

  const onResize = () => {
    setMobileMode(isMobile())
  }
  window.addEventListener('resize', onResize);

  React.useEffect(() => onResize, [])
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Helmet titleTemplate="%s - IS5009 Final Project - FinBot" defaultTitle="IS5009 Final Project - FinBot">
        <meta name="description" content="IS5009 Final Project - FinBot" />
      </Helmet>
      <Header />
      <Layout>
        {mobileMode === false ? <Sider /> : <React.Fragment />}
        <Layout>
          <Layout.Content style={{ margin: '16px' }}>
            <Switch>
              {mainRoutes.map(route => (route.auth ? <PrivateRoute {...route} /> : <Route {...route} />))}
            </Switch>
          </Layout.Content>
          {mobileMode === false ? <Layout.Footer style={{ textAlign: 'center' }}>FinBot</Layout.Footer> : <React.Fragment />}
        </Layout>
      </Layout>
      {mobileMode === true && user !== undefined ? <Footer /> : <React.Fragment />}
    </Layout>
  );
}

App.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const withConnect = connect(mapStateToProps)

export default compose(withConnect, memo)(App);