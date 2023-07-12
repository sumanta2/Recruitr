import { FC } from 'react';
import "./Footer.css"

const Footer:FC = () => {
  return (
    <div className="footer">
          &copy;2023 Recuitr

          <div className="footer__right">
              <span>Customer Support</span>
              <div className='separator'></div>
              <span>Privacy Policy</span>
          </div>      
    </div>
  )
}

export default Footer