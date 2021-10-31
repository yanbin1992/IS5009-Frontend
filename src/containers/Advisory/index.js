import React from 'react';
// 头部导航组件
import Header from './header';
// 
import { withRouter } from 'react-router-dom'



class Advisory extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div style={{ marginLeft: "0", backgroundColor: "#fff" }}>
        <Header />
      </div>
    )
  }
}
Advisory = withRouter(Advisory)
export default Advisory;