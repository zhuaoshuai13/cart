import React from 'react'
import { connect } from 'react-redux'
import { Table, Tag, Space, Button, notification, InputNumber } from 'antd';
const mapStateToProps = (state) => (
  {
    cart: state.cart,
  }
)
const mapDispatchToProps = null;
const hoc = connect(mapStateToProps, mapDispatchToProps)
function Cart(props) {
  {/* eslint-disable-next-line react/prop-types */}
  console.log(props.cart);
  const changeNum = (e) => {console.log(e);}
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
      title: '数量',
      key: 'key',
      dataIndex: 'key',
      render: (dataIndex) => (
        <Space size="middle">
          {/* eslint-disable-next-line react/prop-types */}
          <InputNumber id={dataIndex} min={1} max={10} defaultValue={1} onStep={(e) => {changeNum(e)}}
            onBlur={(Event) => {console.log(Event.currentTarget)}}
          />
          {/* <Button
              type="primary"
              onClick={() => {
                console.log('aaa');
              }}

            >
            </Button> */}
        </Space>
      ),
    },
    {
      title: '小计',
      dataIndex: 'price',
      key: 'key',
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
    <Table columns={columns}  dataSource={props.cart} pagination={false} footer={(data) => ('合计')}/>
  )
}

export default hoc(Cart)
