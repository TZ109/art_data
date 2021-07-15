import React, { useState } from 'react';
import './box.css'
function DateBox(){

    return(
        <div>
            <p className="exhibition_date_title">전시 일정</p>
            <div className="exhibition_date">
                <div className="exhibition_date_box">
                    <div className="date_box"><p>example1</p></div>
                    <div className="date_box"><p>example12</p></div>
                    <div className="date_box"><p>example123</p></div>
                    <div className="date_box"><p>example1234</p></div>
                    <div className="date_box"><p>example12345</p></div>
                    <div className="date_box"><p>example123456</p></div>
                    <div className="date_box"><p>example1234567</p></div>
                    <div className="date_box"><p>example12345678</p></div>
                    <div className="date_box"><p>example123456789</p></div>
                </div>
            </div>
        </div>
    )}
export default DateBox;