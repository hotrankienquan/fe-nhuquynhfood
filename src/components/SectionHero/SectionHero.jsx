/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const SectionHero = () => {
  return (
    <>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Như Quỳnh Restaurant
            </h1>
            <p className="hero-description">
              Một bữa ăn lành mạnh cho bạn mỗi ngày
              Nhà hàng chúng tôi cung cấp thức ăn sẽ giúp bạn hồi phục sức khỏe. Từ những nguyên liệu được chọn lọc tươi ngon nhất.
            </p>
            <a href="#" className="btn btn--full margin-right-sm"
            >Bắt đầu thôi</a
            >
            <a href="#" className="btn btn--outline">Khám phá thêm &darr;</a>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src="img/customers/customer-1.jpg" alt="Customer" />
                <img src="img/customers/customer-2.jpg" alt="Customer" />
                <img src="img/customers/customer-3.jpg" alt="Customer" />
                <img src="img/customers/customer-4.jpg" alt="Customer" />
                <img src="img/customers/customer-5.jpg" alt="Customer" />
                <img src="img/customers/ismayyl.jpg" alt="Customer" />
              </div>
              <p className="delivered-text">
                <span>250,000+</span> bữa ăn mỗi năm!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              src="img/hero.png"
              className="hero-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
        </div>
      </section>
    </>
  )
};

export default SectionHero;