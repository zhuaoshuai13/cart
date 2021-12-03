import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Table, Tag, Space, Button, notification, InputNumber, Typography } from 'antd';
import {cNum, cTotal, del} from '../../actions/cartlist'

function Cart(props) {
  // componentWillMount(); {
  //   console.log('组件即将渲染');
  // }
  useEffect((e) => {console.log('cart渲染', e);})
  useEffect(() => (e) => {console.log('cart销毁', e);})
  {/* eslint-disable-next-line react/prop-types */}
  const [carts, setCarts] = useState(props.cart)
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setCarts(props.cart)
  // eslint-disable-next-line react/prop-types
  }, props.cart)
  const changeNum = (e) => {
    {/* eslint-disable-next-line react/prop-types */}
    props.add({
      key: e.currentTarget.id,
      num: e.currentTarget.value,
    })
  }
  const del = (e) => {
    // eslint-disable-next-line react/prop-types
    props.del({
      key: e.currentTarget.id,
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
      dataIndex: 'num',
      render: (dataindex, key) => (
        <Space size="middle">
          {/* eslint-disable-next-line react/prop-types */}
          <InputNumber id={key.key} min={1} defaultValue={key.num}
            onBlur={(e) => {changeNum(e)}}
          />
        </Space>
      ),
    },
    {
      title: '小计',
      dataIndex: 'total',
      key: 'key',
    },
    {
      title: '操作',
      key: 'key',
      dataIndex: 'key',
      render: (key, record) => (
        <Space size="middle">
          {/* eslint-disable-next-line react/prop-types */}
          <Button type="primary" id={key} onClick={del}>删除</Button>
        </Space>
      ),
    },
  ];
  // let checked
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const onSelectedChange = (selectedRowKeys, e) => {
    setSelectedRowKeys(selectedRowKeys);
    // eslint-disable-next-line react/prop-types
    props.total({
      payload: e,
    })
  }
  const getCheckboxProps = (e) => {
    console.log(e);
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectedChange, getCheckboxProps,
  }
  const { Text } = Typography;
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      // eslint-disable-next-line react/prop-types
      dataSource={carts}
      pagination={false}
      summary={(lists) => {
        let totalBorrow = 0;
        totalBorrow = lists.reduce((acc, item) => {
          if (item.checked) {
            acc += item.total
          }
          return acc
        }, 0)

        return (
          <>
            <Table.Summary.Row>
              <Table.Summary.Cell>合计</Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text type="danger">{totalBorrow}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        );
      }}/>
  )
}
const mapStateToProps = (state) => (
  {
    cart: state.cart,
  }
)

const mapDispatchToProps = (dispatch) => ({
  add: (adds) => dispatch(cNum(adds)),
  total: (lists) => dispatch(cTotal(lists)),
  del: (key) => dispatch(del(key)),
})
const hoc = connect(mapStateToProps, mapDispatchToProps)
export default hoc(Cart)
