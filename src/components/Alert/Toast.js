import React from 'react'

const Toast = ({msg, handleShow, bgColor}) => {
    return (
        <div className={`fixed top-10 right-10 text-white font-bold p-2 z-[50] ${bgColor}`} >
            <div className={`toast-header text-light ${bgColor}`}>
                <strong className="mr-auto text-light">{msg.title}</strong>
                <button className="ml-2 mb-1 close text-light"
                data-dismiss="toast" style={{outline: 'none'}}
                onClick={handleShow}>
                    &times;
                </button>
            </div>
            <div className="toast-body">
                {msg.body}
            </div>
        </div>
    )
}

export default Toast