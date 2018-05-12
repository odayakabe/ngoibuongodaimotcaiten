import React from 'react'
import Youtube from '../Youtube'

import './style.scss'

class SideBar extends React.Component {
    render() {

        return (
            <div className='sidebar'>
                <Youtube {...this.props} />
		<div className='sidebar__sponsor'>Sponsor <br />
		</div>
                <div className='sidebar__title'>Important</div>
		<div className='sidebar__link'>
		<a href='/about/'>Chip Chip & trà sữa Phú Quốc</a>
		<a href='/14102017/'>Ngày khai trương Trà Sữa Phú Quốc</a>
		<a href='/cogaituoi25/'>Giới thiệu về cô chủ Quán Trà Sữa</a>
		<a href='http://haboba.com'>Những địa điểm hẹn hò tại Phú Quốc</a>
		<a href='/payments/'>How to pay? Thanh toán</a>
		<a href='/help'>Hướng dẫn đặt mua trà sữa online</a>
		</div>
            </div>
        );
    }
}


export default SideBar
