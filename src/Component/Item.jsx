import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const {prod, xemChiTiet} = this.props;
    return (
        <div className="card">
        <img
          src={prod.hinhAnh}
          alt="..."
          height={400}
          className="w-100"
          style={{ objectFit: "contain" }}
        />
        <div className="card-body">
          <h1>{prod.tenSP}</h1>
          <h4>{prod.giaBan.toLocaleString()}</h4>
          <button className="btn btn-success" onClick={()=>{
            // this.xemChiTiet(prod)
            xemChiTiet(prod)
          }}>Xem chi tiết</button>
          <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalId">Thêm vào giỏ hàng</button>
        </div>
      </div>
    )
  }
}
