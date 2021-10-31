import React from 'react';
// 头部导航组件
import Data from './data';
import Nulldata from './null';
import { withRouter } from 'react-router-dom'



class Account extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div style={{ marginLeft: "0", backgroundColor: "#fff" }}>
        <Nulldata />
      </div>
    )
  }
}
Account = withRouter(Account)
export default Account;