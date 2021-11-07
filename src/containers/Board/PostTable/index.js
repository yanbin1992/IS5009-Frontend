import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Table, Checkbox, Button } from 'antd';
import { selectPostList } from '../board.selectors';
import instance from 'utils/request';
import { isMobile } from 'Helper/DeviceHelper';

function PostTable(props) {
  /* ------------------ */
  /* -     Const     - */
  /* ------------------ */
  const columns = [
    {
      title: 'M',
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: (value, record, index) => (
        <Checkbox
          checked={value}
          id={index}
          record={record}
          style={{ width: isMobile() === true ? '15px' : '20px' }}
          // disabled={this.state.disabled}
          onChange={handleOnChange}
        />
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'description',
      key: 'description',
      render: text => (
        <pre
          style={{
            marginBottom: 0,
            maxHeight: 150,
            maxWidth: isMobile() === true ? '90px' : '1000px',
            wordBreak: 'normal',
          }}
        >
          {text}
        </pre>
      ),
      //  responsive: ['sm'],
    },
    {
      title: 'Attach',
      dataIndex: 'attachment',
      key: 'attachment',
      render: (value, record) => renderAttachmentButton(value, record.id),
    },
  ];

  /* ------------------ */
  /* -     Handler     - */
  /* ------------------ */
  const handleOnChange = e => {
    props.onCheckboxChange(e.target.record.id, e.target.value);
  };

  const renderAttachmentButton = (value, id) => {
    return value ? (
      <Button type="primary" onClick={() => renderViewAttachment(id)}>
        View
      </Button>
    ) : (
      <Button onClick={() => renderModal(id)}>{isMobile() === true ? 'Att' : 'Attach'}</Button>
    );
  };

  const renderModal = id => {
    props.onAttachButtonClick(id);
  };

  const renderViewAttachment = id => {
    window.open(`${instance.defaults.baseURL}/v1/posts/attachment/${id}`);
    // props.onViewAttachment(props.attachmentPath)
  };

  /* ------------------ */
  /* -     Render     - */
  /* ------------------ */
  return <Table dataSource={props.postList} columns={columns} />;
}

PostTable.propTypes = {
  postList: PropTypes.array,
  onCheckboxChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  postList: selectPostList,
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, memo)(PostTable);
