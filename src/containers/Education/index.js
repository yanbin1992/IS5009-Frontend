import React, { memo } from 'react';
import './Classroom.scss';
import { Row, Col, Statistic } from 'antd';
import { getHeight } from "Helper/LayoutHelper"
import { makeSelectUser } from 'global.selectors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLevel } from '../EntryTest/test.selectors';
import { selectPostList } from '../Board/board.selectors';
import { getPostsAction } from '../Board/board.actions';
import { courselevel1 } from "../../Helper/DataHelper"
import { courselevel2 } from "../../Helper/DataHelper"
import { courselevel3 } from "../../Helper/DataHelper"
function Education(props) {
  return (
    <div className="cl" style={{ margin: "-16px", maxHeight: getHeight() - 60 - 45 - 50, overflowY: "scroll" }}>
      <br />
      <Row gutter={16}>
        <br />
        <Col span={12} style={{ textAlign: 'center' }}>
          <Statistic title="Certificate" value={props.user.accountData.certificate} />
        </Col>
        <Col span={12} style={{ textAlign: 'center' }}>
          <Statistic title="Rewards" value={props.user.accountData.rewards} />
        </Col>
      </Row>
      <br />
      <div className="noob">
        <div style={{ marginTop: "16px", marginLeft: "10px" }}><h3>Basic: level 1</h3></div>
        {
          courselevel1.map(item => {
            return (
              <div className="door" key={item.id}>
                <p><img src={item.img} /></p>
                <p style={{ background: 'white', margin: '0 1rem', lineHeight: '1.2rem' }}>
                  <em style={{ fontSize: '16px', color: 'black' }}>{item.titles}</em><br />
                  <span style={{ fontSize: '12px' }}>{item.title}</span><br />
                </p>
              </div>
            )
          })
        }
      </div>
      <div className="noob">
        <div style={{ marginTop: "16px", marginLeft: "10px" }}><h3>Intermediate: level 2</h3></div>
        {
          courselevel2.map(item => {
            return (
              <div className="door" key={item.id}>
                <p><img src={item.img} /></p>
                <p style={{ background: 'white', margin: '0 1rem', lineHeight: '1.2rem' }}>
                  <em style={{ fontSize: '16px', color: 'black' }}>{item.titles}</em><br />
                  <span style={{ fontSize: '12px' }}>{item.title}</span><br />
                </p>
              </div>
            )
          })
        }
      </div>
      <div className="noob">
        <div style={{ marginTop: "16px", marginLeft: "10px" }}><h3>Advanced: level 3</h3></div>
        {
          courselevel3.map(item => {
            return (
              <div className="door" key={item.id}>
                <p><img src={item.img} /></p>
                <p style={{ background: 'white', margin: '0 1rem', lineHeight: '1.2rem' }}>
                  <em style={{ fontSize: '16px', color: 'black' }}>{item.titles}</em><br />
                  <span style={{ fontSize: '12px' }}>{item.title}</span><br />
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
Education.propTypes = {
  level: PropTypes.object,
  user: PropTypes.object,
  postList: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  level: makeSelectLevel(),
  user: makeSelectUser(),
  postList: selectPostList,
});

const mapDispatchToProps = dispatch => ({ getPosts: () => dispatch(getPostsAction()) });
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, memo)(Education);