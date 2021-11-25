import React, { useEffect, useState } from 'react'
import { Table, Tag, Space, Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { findeList } from '../../api/list';
import { connect } from 'react-redux'
import {addCart} from '../../actions/cartlist'
const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({add: (adds) => dispatch(addCart(adds))})
const hoc = connect(mapStateToProps, mapDispatchToProps)


function List(props) {

  const addCart = (e) => {
    console.log(e.currentTarget.id);
    const adds = list.find((item) => item.key === parseInt(e.currentTarget.id))
    console.log(adds);
    // eslint-disable-next-line react/prop-types
    props.add(adds)

    const openNotification = () => {
      notification.open({
        message: '添加成功',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        duration: 0.5,
      });
    };
    openNotification()
  }
  const columns = [
    {
      title: '商品名称',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: '图片',
      dataIndex: 'img',
      render: (text) => <img src={text} style={{width: 50, height: 50}}/>,
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'key',
    },
    {
      title: 'Tags',
      key: 'key',
      dataIndex: 'tag',
      render: (tag) => (
        <>
          {tag.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      key: 'key',
      dataIndex: 'key',
      render: (key, record) => (
        <Space size="middle">
          {/*  eslint-disable-next-line react/prop-types */}
          <Button type="primary" id={key} onClick={addCart} >加入购物车</Button>
        </Space>
      ),
    },
  ];
  const [list, setList] = useState([])
  useEffect(() => {
    findeList().then((resdata) => {
      setList(resdata.lists);
    })
  }, [])

  return (
    <div>
      <Table columns={columns} dataSource={list} />;
    </div>
  )
}

export default hoc(List);
