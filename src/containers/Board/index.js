import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Row, Col, Button } from 'antd';
import { getHeight, getWidth } from "Helper/LayoutHelper"

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  getPostsAction,
  handleModalShowAction,
  onChangeCheckboxAction,
  handleAttachmentModalShowAction,
} from './board.actions';
import reducer from './board.reducer';
import saga from './board.saga';

import WritePostModal from './WritePostModal';
import AddAttachmentModal from './AddAttachmentModal';
import PostTable from './PostTable';
import Condition from './Posts/Condition';
// import ShowTable from './ShowTable';
import {
  EditOutlined
} from '@ant-design/icons';
const key = 'board';

function Board(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [height, setHeight] = React.useState(window.innerHeight)
  const [width, setWidth] = React.useState(window.innerWidth)

  const onResize = () => {
    setHeight(getHeight())
    setWidth(getWidth())
  }
  window.addEventListener('resize', onResize);

  useEffect(() => {
    props.getPosts();
  }, []);

  // const handleOnCheckboxChange = (id, value) => {
  //   props.onChangeCheckbox(id, value);
  // };

  return (
    <>
      <Helmet>
        <title>Community</title>
        <meta name="Task" content="Community" />
      </Helmet>
      <div style={{ maxHeight: height - 60 - 45 - 80, overflowY: "scroll" }}>
        <div style={{ marginLeft: 16 }}>
          <p style={{ width: '6rem', height: '4rem', display: "inline" }}>
            <Button type="primary" onClick={props.handleModalShow}>
              <EditOutlined style={{ fontSize: '18px', display: "inline" }} />Write your post</Button></p>
        </div>

        <Row>
          <Col span={24}>
            <PostTable onCheckboxChange={props.onChangeCheckbox} onAttachButtonClick={props.handleAttachmentModalShow} />
          </Col>
        </Row>

        {/* <ShowTable /> */}

        <WritePostModal />
        <AddAttachmentModal />
        <Condition />
        <AddAttachmentModal />
      </div>
    </>
  );
}

Board.propTypes = {
  getPosts: PropTypes.func,
  handleModalShow: PropTypes.func,
  onChangeCheckbox: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostsAction()),
  handleModalShow: () => dispatch(handleModalShowAction()),
  onChangeCheckbox: (id, value) => dispatch(onChangeCheckboxAction(id, value)),
  handleAttachmentModalShow: id => dispatch(handleAttachmentModalShowAction(id)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Board);