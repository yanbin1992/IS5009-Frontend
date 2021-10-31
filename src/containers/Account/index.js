import React from 'react';
// 头部导航组件
import Data from './data';
import Nulldata from './null';
import { withRouter } from 'react-router-dom'
import { getHeight } from "Helper/LayoutHelper"

class Account extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div style={{
        margin: "-16px", backgroundColor: "#fff", maxHeight: getHeight() - 60 - 45 - 50, overflowY: "scroll"
      }}>
        <Data />
      </div>
    )
  }
}
Account = withRouter(Account)
export default Account;