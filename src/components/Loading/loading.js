import React from 'react'
import "./loading.css"

const Loading = () => {
    return (
        <div className='bg-black h-screen position-fixed w-full text-center loading '>
            <div className="text-white top-0 left-0 z-50">
                <svg width="210" height="250" viewBox="0 0 40 50">
                    <polygon stroke="#fff" strokeWidth="1" fill="none"
                        points="20,1 40,40 1,40" />
                    <text fill="#fff" x="2" y="47">Loading...</text>
                </svg>
            </div>

        </div>
    )

}

export default Loading