import React from 'react';
// 头部导航组件
import Header from './header';
//
import { withRouter } from 'react-router-dom';
import { getHeight } from 'Helper/LayoutHelper';

class Advisory extends React.Component {
  render() {
    return (
      <div
        style={{ backgroundColor: '#fff', margin: '-16px', maxHeight: getHeight() - 60 - 45 - 20, overflowY: 'scroll' }}
      >
        <Header />
      </div>
    );
  }
}
Advisory = withRouter(Advisory);
export default Advisory;
