import React, { Component } from "react";
import ModalCart from "./ModalCart";

const arrItem = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

let {
  maSP,
  tenSP,
  manHinh,
  heDieuHanh,
  cameraSau,
  cameraTruoc,
  ram,
  rom,
  giaBan,
  hinhAnh,
} = arrItem;




export default class ProductItem extends Component {
  renderProduct = () => {
    return arrItem.map((prod,index)=>{
      return <div className="col-4" key={index}>
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
            this.xemChiTiet(prod)
          }}>Xem chi tiết</button>
          <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
            this.themGioHang(prod)
          }} >Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
    })
  }

  state = {
    prodDetail : {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },

    prodCart : {
      maSP: 0,
      tenSP: "",
      manHinh: "",
      heDieuHanh: "",
      cameraSau: "",
      cameraTruoc: "",
      ram: "",
      rom: "",
      giaBan: 0,
      hinhAnh: "",
    }
    
  }

  xemChiTiet = (prodClick) => {
    this.setState ({
      prodDetail:prodClick
    })
  }

  themGioHang = (phoneClick) => {
   this.setState({
    prodCart : phoneClick
   })
  }


  render() {
    let {maSP, tenSP, manHinh, heDieuHanh, cameraSau, cameraTruoc, ram, rom, giaBan, hinhAnh} = this.state.prodDetail;
    return (
      
      
      <div className="container">
        <ModalCart prod={this.state.prodCart}/>
        <h1 className="text-center">Danh sách sản phẩm</h1>
        <div className="row">
          {this.renderProduct()}
        </div>
        <div className='mt-3'>
        <div className="row">
          <div className="col-4">
            <h1 className="text-center">{tenSP}</h1>
            <img src={hinhAnh} alt="..." className='w-100' style={{objectFit:'contain'}} />
          </div>
          <div className="col-8">
            <h1>Thông tin chi tiết</h1>
            <table className='table'>
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <td>{heDieuHanh}</td>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <td>{cameraSau}</td>
                </tr>
                <tr>
                  <th>RAM</th>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <th>ROM</th>
                  <td>{rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        
      </div>
      </div>
    );
  }
}
