import React from 'react'
import './Advertise.css'
import { Icon } from 'semantic-ui-react'
const AdvertiseComponent = () => {
  return (
    <article className='advertise-container'>
      <div className='content'>
        <h3>Quán Thịt Nướng Hàn Quốc</h3>
        <p>GoGi House {"–"} Quán thịt nướng Hàn Quốc Ngon Số 1 sẽ đưa bạn ghé đến những quán thịt nướng tại thành phố Seoul đã tạo nên danh tiếng cho nền ẩm thực xứ kim chi. Nếu đã một lần thưởng thức thịt nướng tại GoGi House, bạn sẽ không thể quên được hương vị “ngất ngây” của những món sườn non bò Mỹ, nạc vai bò Mỹ, dẻ sườn tươi…. khi hòa quyện vào với các loại gia vị đặc trưng xứ Hàn đã trở nên hấp dẫn đến thế nào. Ngoài ra, những món ăn kèm không thể bỏ qua như cơm trộn, mỳ lạnh, canh Kimchi và các loại lẩu cũng sẽ làm bạn ấn tượng thêm về nền ẩm thực Hàn Quốc.</p>
        <a href="#" >Đặt ngay
          <Icon style={{ marginLeft: '10px' }} name='add circle' />
        </a>
      </div>
      <div className='image-container'>
        <img src="./advertise1.jpg" alt="" />
        <img src="./advertise2.jpg" alt="" />
      </div>
    </article>
  )
}

export default AdvertiseComponent