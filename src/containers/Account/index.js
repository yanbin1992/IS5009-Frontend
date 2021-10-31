import React from 'react';
import Nulldata from './null';
import Data from './data';
import { withRouter } from 'react-router-dom';
import { getHeight } from 'Helper/LayoutHelper';

class Account extends React.Component {
  render() {
    return (
      <div
        style={{
          margin: '-16px',
          backgroundColor: '#fff',
          maxHeight: getHeight() - 60 - 45 - 50,
          overflowY: 'scroll',
        }}
      >
        <Data />
      </div>
    );
  }
}
Account = withRouter(Account);
export default Account;
