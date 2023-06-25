import React, { Component } from 'react'
import data from "./../dataGlasses.json"
import ListProduct from './list-product'


export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listGlass: data,
      productDetail: data[0]
    }
  }
  handleDetailProduct = (product) => {
    this.setState({
      productDetail: product
    })
  }
  render() {
    const { productDetail } = this.state
    return (
      <div className='background'>
        <header>
          <h2>Try Glasses App Online</h2>
        </header>
        <div className='container pt-5'>
          <div className='row pb-5 justify-content-around'>
            <div className="col-sm-4  ">
              <div className=' position-relative overflow-hidden'>
                <img className='img-fluid' src="./../glassesImage/model.jpg" alt="model" />
                <div className='product-detail'>
                  <h3 className='ml-2'>{productDetail.name}</h3>
                  <p className='ml-2'>{productDetail.desc}</p>
                </div>
                <div className='product-glass'>
                  <img  src={productDetail.url} alt="" />
                </div>
              </div>
            </div>
            <div className="col-sm-4">

              <img className='img-fluid' src="./../glassesImage/model.jpg" alt="model" />
            </div>
          </div>
          <ListProduct listProduct={this.state.listGlass} getDetail={this.handleDetailProduct} />
        </div>
      </div>
    )
  }
}
