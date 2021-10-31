import { Alert } from 'antd';
import { List, Avatar, Card, Popover, Button, Statistic, Badge } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { getHeight, getWidth } from 'Helper/LayoutHelper';
import { makeSelectLevel } from '../EntryTest/test.selectors';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'global.selectors';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { bankproductdata } from '../../Helper/DataHelper';
import instance from 'utils/request';
import { selectPostList } from '../Board/board.selectors';
import { getPostsAction } from '../Board/board.actions';

function Me(props) {
  const [height, setHeight] = React.useState(window.innerHeight);
  const [width, setWidth] = React.useState(window.innerWidth);
  const userLevel = React.useMemo(() => {
    if (
      props.level &
      (props.level !==
        {
          risk: 0,
          income: 0,
          experience: 0,
        })
    ) {
      return props.level;
    } else if (props.user.level) {
      return props.user.level;
    } else {
      return {
        risk: 0,
        income: 0,
        experience: 0,
      };
    }
  }, [props.user, props.test]);

  const onResize = () => {
    setHeight(getHeight());
    setWidth(getWidth());
  };
  window.addEventListener('resize', onResize);

  const educationData = {
    titles: 'Investment methods',
    title: 'Investment rules, how to invest, how to throw',
    img: require('../../imgs/investment.webp'),
  };

  const communityData = React.useMemo(
    () =>
      props.postList.length > 0
        ? {
          id: props.postList[props.postList.length - 1].id,
          img: `https://joeschmoe.io/api/v1/${props.user.id}`,
          pic: `${instance.defaults.baseURL}/v1/posts/attachment/${props.postList[props.postList.length - 1].id}`,
          content: props.postList[props.postList.length - 1].description,
          titles: props.postList[props.postList.length - 1].title,
          checkbox: props.postList[props.postList.length - 1].checkbox,
          date: props.postList[props.postList.length - 1].createdAt.slice(0, 10),
          time: props.postList[props.postList.length - 1].createdAt.slice(11, 16),
        }
        : {
          id: 1,
          title: 'user001',
          titles: 'Taper will be completed in the middle of next year. ',
          img: `https://joeschmoe.io/api/v1/random`,
          pic: 'https://pubimg.futunn.com/201907270121186410c350a87d4.jpg',
          time: '21:15',
        },
    [props.postList],
  );

  const data = [
    {
      title: 'Advisory',
      href: '/advisory',
      content: (
        <div>
          <div className="door" style={{ display: 'flex' }}>
            <img src={bankproductdata[0].pic} alt="details" style={{ maxHeight: '30px', maxWidth: '60px' }} />
            <p style={{ background: 'white', margin: '0 1rem', lineHeight: '1.0rem' }}>
              <em style={{ fontSize: '13px', color: 'black' }}>{bankproductdata[0].name}</em>
              <br />
              <span style={{ fontSize: '10px', color: 'gray' }}>base interest rate</span>
              <br />
              <span style={{ fontSize: '10px', color: 'red' }}>{bankproductdata[0].baserate}</span>
              <br />
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Account',
      href: '/account',
      content: (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Statistic
            title="Investment Return Rate"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
          <Statistic
            title="Risk Rate"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </div>
      ),
    },
    {
      title: 'Education',
      href: '/education',
      content: (
        <div>
          <div className="door" style={{ display: 'flex' }}>
            <p>
              <img style={{ maxHeight: '60px', maxWidth: '60px' }} src={educationData.img} />
            </p>
            <p style={{ background: 'white', margin: '0 1rem', lineHeight: '1.2rem' }}>
              <em style={{ fontSize: '16px', color: 'black' }}>{educationData.titles}</em>
              <br />
              <span style={{ fontSize: '12px' }}>{educationData.title}</span>
              <br />
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Community',
      href: '/community',
      content: (
        <div>
          <div className="interest" key={communityData.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p className="essay" style={{ width: '70%' }}>
                <h3>{communityData.titles}</h3>
                <span>
                  {communityData.content}
                  <br />
                </span>
              </p>
              <p
                className="portrait"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '20%',
                }}
              >
                <Badge count={communityData.checkbox ? 0 : 100} overflowCount={99}>
                  <Avatar src={communityData.img} size="large" />
                </Badge>
                <span className="spanr" style={{ fontSize: '8px' }}>
                  {communityData.date}
                </span>
                <span className="span" style={{ fontSize: '9px' }}>
                  <em>{communityData.time}</em>
                </span>
              </p>
            </div>
            <img src={communityData.pic} className="tx" alt="gushi" style={{ maxHeight: '200px', maxWidth: '100%' }} />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div style={{ maxHeight: height - 60 - 45 - 50, width: width, overflowY: 'scroll' }}>
      <div>
        <List>
          <List.Item style={{ width: width - 50 }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <div style={{ width: '30%' }}>
                <List.Item.Meta
                  avatar={<Avatar src={`https://joeschmoe.io/api/v1/${props.user.id}`} />}
                  title={
                    <Popover placement="right" trigger="click" content={<a href={'/signout'}>{'SignOut'} </a>}>
                      {props.user.name}
                    </Popover>
                  }
                  description={props.user.email}
                />
              </div>
              <div
                style={{
                  width: '60%',
                  height: '50px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ width: '100px', display: 'flex', flexDirection: 'column' }}>
                  <p style={{ marginBottom: 0 }}>Income</p>
                  <p style={{ fontSize: '15px', color: 'green' }}>{userLevel.income === 1 ? 'High' : 'Normal'}</p>
                </div>
                <div style={{ width: '100px', display: 'flex', flexDirection: 'column' }}>
                  <p style={{ marginBottom: 0 }}>Experience</p>
                  <p style={{ fontSize: '15px', color: 'green' }}>{userLevel.experience === 1 ? 'High' : 'Normal'}</p>
                </div>
                <div style={{ width: '100px', display: 'flex', flexDirection: 'column' }}>
                  <p style={{ marginBottom: 0 }}>Risk</p>
                  <p style={{ fontSize: '15px', color: 'green' }}>{userLevel.risk === 1 ? 'High' : 'Normal'}</p>
                </div>
              </div>
            </div>

            {'Thanks for visiting FinBot in IS5009, NUS'}
          </List.Item>
        </List>
      </div>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={data}
        renderItem={item => (
          <List.Item style={{ width: width - 50 }}>
            <Card
              title={
                <div style={{ display: 'flex', justifyContent: 'space-between', height: '20px' }}>
                  {item.title}
                  <a href={item.href}>{' more '}</a>
                </div>
              }
            >
              {item.content}
            </Card>
          </List.Item>
        )}
      ></List>
    </div>
  );
}

Me.propTypes = {
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

export default compose(withConnect, memo)(Me);
