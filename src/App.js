import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from 'components/Header';
import Sider from 'components/Sider';
import PrivateRoute from 'components/PrivateRoute';
import mainRoutes from 'routes/mainRoutes';

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Helmet titleTemplate="%s - Web Fullstack Practical Test 2021" defaultTitle="Web Fullstack Practical Test 2021">
        <meta name="description" content="Web Fullstack Practical Test 2021" />
      </Helmet>
      <Header />
      <Layout>
        <Sider />
        <Layout>
          <Layout.Content style={{ margin: '16px' }}>
            <Switch>
              {mainRoutes.map(route => (route.auth ? <PrivateRoute {...route} /> : <Route {...route} />))}
            </Switch>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>Web Fullstack Practical Test 2021</Layout.Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
