import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Table, Tag, Space, Button, notification, InputNumber, Typography } from 'antd';
import {cNum, cTotal} from '../../actions/cartlist'

function Cart(props) {
  {/* eslint-disable-next-line react/prop-types */}
  const [carts, setCarts] = useState(props.cart)
  const changeNum = (e) => {
    console.log(e.currentTarget);
    console.log('调用add');
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
          <Button type="primary" id={key} >删除</Button>
        </Space>
      ),
    },
  ];
  // let checked
  let [getChecked, setGetChecked] = useState([])
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const onSelectedChange = (selectedRowKeys, e) => {
    console.log(selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
    // eslint-disable-next-line react/prop-types
    props.total({
      payload: e,
    })
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectedChange,
  }
  const { Text } = Typography;
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={carts}
      pagination={false}
      summary={(lists) => {
        console.log(lists);
        let totalBorrow = 0;
        console.log(getChecked);
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

const mapDispatchToProps = (dispatch) => ({add: (adds) => dispatch(cNum(adds)), total: (lists) => dispatch(cTotal(lists))})
const hoc = connect(mapStateToProps, mapDispatchToProps)
export default hoc(Cart)
