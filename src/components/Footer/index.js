import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { Layout, Icon, Menu } from 'antd';

import { makeSelectUser } from 'global.selectors';

function Footer(props) {

    return (
        <Layout.Footer style={{ height: '48px', lineHeight: '48px', padding: '0px 0px' }}>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['3']}>
                {new Array(5).fill(null).map((_, index) => {
                    const key = index + 1;
                    return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
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
