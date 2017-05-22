import React, {PropTypes} from 'react';
import {Table, Button, Popconfirm} from 'antd';

const ProductList = ( {onDelete, products}) =>{

  const columns = [{
    title: 'Name',
    dataIndex:'name'
  },{
    title: 'Actions',
    render: (text, record) => {
      return(
        <Popconfirm title="sure delete ?" onconfirm={ ()=> onDelete(record.id) }>
          <Button>Delete</Button>
        </Popconfirm>
      );
  }
  }];

  return (
    <Table dataSource={products} columns={columns}></Table>
  );
};

ProductList.propTypes ={
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}

export  default ProductList;
