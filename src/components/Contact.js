import React from 'react'
import { PhoneOutlined, MessageOutlined, HomeOutlined } from "@ant-design/icons"
import "../assets/css/Contact.css"

const Contact = () => {
  return (
    <div className="containerContact dis-flex space">
        <div className="contactItem">
            <PhoneOutlined style={{ fontSize: '60px' }}/>
            <div className="dis-flex">
                <span>+221 77 297 79 39</span>
                <span>+221 70 556 57 01</span>
            </div>
        </div>

        <div className="contactItem">
            <MessageOutlined style={{ fontSize: '60px' }}/>
            <div>
                <span>alphacpc@gmail.com</span>
            </div>
        </div>

        <div className="contactItem">
            <HomeOutlined style={{ fontSize: '60px' }}/>
            <div>
                <span>Yeumbeul Nord, Dakar (<strong>SN</strong>)</span>
            </div>
        </div>
    </div>
  )
}

export default Contact;