import React from 'react';
import './Condition.scss';
import { pin } from "../../../Helper/DataHelper"
import { Carousel, WingBlank } from 'antd-mobile';
class Condition extends React.Component {
    render() {
        return (
            <div className="fen">
                {
                    pin.map(item => {
                        return (
                            <div className="interest" key={item.id}>
                                <p className="portrait">
                                    <img src={item.img} className="tx" alt="头像" />
                                    <span className="span"><em>{item.title}</em></span>
                                    <span className="spanr">05-25 {item.time}
                                        <em className="iconfont icon-fire-fill" style={{ fontSize: '16px', color: '#fe4c0e', margin: '0' }} />
                                        <em className="iconfont icon-crown-fill" style={{ fontSize: '16px', color: '#febe40' }} />
                                    </span>
                                </p>
                                <p className="essay">
                                    <h3>{item.titles}</h3>
                                    <span>{item.content}<br /><br /></span>
                                    <img src={item.pic} className="tx" alt="gushi" style={{ height: '100%', width: '100%' }} />
                                </p>
                            </div>
                        )
                    })

                }
            </div>
        )
    }
}

export default Condition;