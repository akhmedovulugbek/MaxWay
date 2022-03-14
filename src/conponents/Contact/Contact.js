import React from 'react'
import './contact.scss';

const Contact = () => {
    return (
        <div className='user-page'>
            <div className='MuiContainer-root MuiContainer-maxWidthLg'>
                <div className='ContactInfo_data__Dolls'>
                    <h2 className="MuiTypography-root MuiTypography-h2 MuiTypography-colorTextPrimary ">Контакты</h2>
                    <div className="ContactInfo_info__1ZaWw">
                        <div className="ContactInfo_header__nnA5e">
                            <span>Единный call-центр</span>
                            <span>
                                <a href="tel:+998712005400">+998 71 200 54 00</a>
                            </span>
                        </div>
                        <div className="ContactInfo_body__1MUVv">Вы можете написать нам <a href="#">@MaxWaySupport_bot</a> также вы можете звонить по номеру +998712005400.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
