import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import './Footer.css';
const Footer = () => {
  return (
    // <footer className='footer' >
    //   <div className='footer-container'>

    //     <section>
    //       <p className='color-title'>Công ty Cổ phần Thương mại Dịch vụ Cổng Vàng</p>
    //       <p className='color-content'>Trụ sở chính: Số 60 Phố Giang Văn Minh, Phường Đội Cấn,</p>
    //       <p className='color-content'>Quận Ba Đình, Thành phố Hà Nội, Việt Nam</p>
    //       <p className='color-content'>GPĐK: 0102721191 cấp ngày 09/04/2008</p>
    //       <p className='color-content'>
    //         ĐT: 043 222 3000 Email: support.hn@ggg.com.vn
    //       </p>
    //     </section>
    //     <section className='color-title'>
    //       © 2011 Golden Gate ., JSC. All rights reserved
    //     </section>
    //   </div>
    // </footer>
    <footer class="footer">
      <div class="container grid grid--footer">
        <div class="logo-col">
          <a href="#" class="footer-logo">
            <img class="logo" alt="Omnifood logo" src="logo192.png" />
          </a>

          <ul class="social-links">
            <li>
              <a class="footer-link" href="#"
              ><ion-icon class="social-icon" name="logo-instagram"></ion-icon
              ></a>
            </li>
            <li>
              <a class="footer-link" href="#"
              ><ion-icon class="social-icon" name="logo-facebook"></ion-icon
              ></a>
            </li>
            <li>
              <a class="footer-link" href="#"
              ><ion-icon class="social-icon" name="logo-twitter"></ion-icon
              ></a>
            </li>
          </ul>

          <p class="copyright">
            Copyright &copy; <span class="year">2027</span> by NQ food, Inc.
            All rights reserved.
          </p>
        </div>

        <div class="address-col">
          <p class="footer-heading">Contact us</p>
          <address class="contacts">
            <p class="address">
              56 hoàng diệu 2
            </p>
            <p>
              <a class="footer-link" href="tel:415-201-6370">0976580945</a
              ><br />
              <a class="footer-link" href="mailto:hello@omnifood.com"
              >hotrankienquan144@gmail.com</a
              >
            </p>
          </address>
        </div>

        <nav class="nav-col">
          <p class="footer-heading">Account</p>
          <ul class="footer-nav">
            <li><a class="footer-link" href="#">Create account</a></li>
            <li><a class="footer-link" href="#">Sign in</a></li>
            <li><a class="footer-link" href="#">iOS app</a></li>
            <li><a class="footer-link" href="#">Android app</a></li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Company</p>
          <ul class="footer-nav">
            <li><a class="footer-link" href="#">About NQ food</a></li>
            <li><a class="footer-link" href="#">For Business</a></li>
            <li><a class="footer-link" href="#">Cooking partners</a></li>
            <li><a class="footer-link" href="#">Careers</a></li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Resources</p>
          <ul class="footer-nav">
            <li><a class="footer-link" href="#">Recipe directory </a></li>
            <li><a class="footer-link" href="#">Help center</a></li>
            <li><a class="footer-link" href="#">Privacy [&] terms</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer