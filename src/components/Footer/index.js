import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { Layout, Icon, Menu } from 'antd';
import { Switch, Route } from 'react-router-dom';
import mainRoutes from 'routes/mainRoutes';
import { makeSelectUser } from 'global.selectors';
import PrivateRoute from 'components/PrivateRoute';


function Footer(props) {

    return (
        <Layout.Footer style={{ height: '52px', lineHeight: '48px', padding: '0px 0px' }}>
            <Menu style={{ display: "flex", justifyContent: "space-between", height: '52px' }} theme="dark" mode="horizontal" defaultSelectedKeys={['/']}>
                {mainRoutes.map((route) => {
                    return ((route.hide || (props.user && route.path === '/signin') || (!props.user && route.path === '/signout')) ?
                        <React.Fragment /> :
                        // Check route for auth
                        (
                            !route.auth ||
                            (!route.permission && props.user) ||
                            (props.user && props.user.permissions.includes(route.permission))
                        ) ? (
                            <Menu.Item style={{ fontSize: "10px" }} key={route.path || '/notfound'}>
                                <Link to={route.path || '/notfound'}>
                                    <span>{route.name}</span>
                                </Link>
                            </Menu.Item>
                        ) :
                            <React.Fragment />
                    )
                })}
            </Menu>
        </Layout.Footer>
    );
}

Footer.propTypes = {
    user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
    user: makeSelectUser(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, memo)(Footer);
