import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Table, Tag, Space, Button, notification, InputNumber } from 'antd';
import {cNum} from '../../actions/cartlist'

function Cart(props) {
  {/* eslint-disable-next-line react/prop-types */}
  const [carts, setCarts] = useState(props.cart)
  console.log(carts);
  const changeNum = (e) => {
    {/* eslint-disable-next-line react/prop-types */}
    props.add({
      key: e.currentTarget.id,
      num: e.currentTarget.value,
    })
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
      title: '数量',
      key: 'key',
      dataIndex: 'key',
      render: (dataIndex) => (
        <Space size="middle">
          {/* eslint-disable-next-line react/prop-types */}
          <InputNumber id={dataIndex} min={1} max={10} defaultValue={1}
            onBlur={(e) => {changeNum(e)}}
          />
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
    <Table columns={columns}  dataSource={carts} pagination={false} footer={(data) => ('合计')}/>
  )
}
const mapStateToProps = (state) => (
  {
    cart: state.cart,
  }
)

const mapDispatchToProps = (dispatch) => ({add: (adds) => dispatch(cNum(adds))})
const hoc = connect(mapStateToProps, mapDispatchToProps)
export default hoc(Cart)
