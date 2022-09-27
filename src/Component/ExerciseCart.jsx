import React, { Component } from 'react'
import ModalCart from './ModalCart'
import ProductList from './ProductList'

export default class ExerciseCart extends Component {
  render() {
    return (
      <div>
        {/* <ModalCart/> */}
        <ProductList/>
      </div>
    )
  }
}
