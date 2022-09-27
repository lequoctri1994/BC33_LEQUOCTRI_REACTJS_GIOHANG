import React, { Component } from 'react'

export default class ModalCart extends Component {
    

    state = {
        totalProd : 1,
    }

    
   

    render() {
        const { prod} = this.props;
        console.log(prod)
        return (
            <div>
                {/* Modal trigger button */}
                {/* <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
                    Launch
                </button> */}
                {/* Modal Body */}
                {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
                <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalTitleId">Giỏ hàng</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <table className='table'>
                                    <thead className=' bg-dark text-white'>
                                        <tr>
                                            <th>Mã sản phẩm</th>
                                            <th>Hình Ảnh</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Số lượng</th>
                                            <th>Đơn Giá</th>
                                            <th>Thành Tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                         <tr>
                                                <th>{prod.maSP}</th>
                                                <th>
                                                    <img src={prod.hinhAnh
                                                    } alt="" height={50} width={50} />
                                                </th>
                                                <th>{prod.tenSP}</th>
                                                <th>
                                                    <button className='btn btn-primary mx-1' onClick={()=>{
                                                        this.setState ({
                                                            totalProd : this.state.totalProd - 1
                                                        })
                                                    }}>-</button>
                                                    {this.state.totalProd}
                                                    <button className='btn btn-primary mx-1' onClick={()=> {
                                                        this.setState ({
                                                            totalProd: this.state.totalProd + 1
                                                        })
                                                    }}>+</button>
                                                </th>
                                                <th>{(prod.giaBan).toLocaleString()}</th>
                                                <th>{(prod.giaBan * this.state.totalProd).toLocaleString()}</th>
                                                <th>
                                                    <button className='btn btn-danger'>Xóa</button>
                                                </th>
                                            </tr>

                                    </tbody>

                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Optional: Place to the bottom of scripts */}
            </div>

        )
    }
}
