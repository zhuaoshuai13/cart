import React from 'react'
import { connect } from 'react-redux'
import { Table, Tag, Space, Button, notification } from 'antd';
const mapStateToProps = (state) => (
  {
    cart: state.cart,
  }
)
const mapDispatchToProps = null;
const hoc = connect(mapStateToProps, mapDispatchToProps)
function Cart(props) {
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
          {/* eslint-disable-next-line react/prop-types */}
          <Button type="primary" id={key} >删除</Button>
        </Space>
      ),
    },
  ];
  return (
  // eslint-disable-next-line react/prop-types
    <Table columns={columns}  dataSource={props.cart}/>
  )
}

export default hoc(Cart)
