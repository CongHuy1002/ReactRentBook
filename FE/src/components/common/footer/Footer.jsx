import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="container-ft container">
                    <div class="row">
                        <div class="col-lg-3">
                            <h4>RentBook Store</h4>
                            <div >
                                828 Sư Vạn Hạnh phường 12 Quận 10 Tp.HCM
                            </div>
                            <img src='./images/logo.png' alt='' />
                        </div>
                        <div class="col-lg-3">
                            <h4>Need help</h4>
                            <div class="lienhe-ft">
                                <b>+(84) 123 456 7890</b>
                            </div>
                            <div className='lich'>
                                Monday – Friday: 9:00-20:00
                                Saturday: 11:00 – 15:00
                            </div>
                            <div>
                                rentbookcontact@st.huflit.edu.vn
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <h4>Create by</h4>
                            <div>
                                Trần Quang Minh - Leader
                            </div>
                            <div>
                                Huỳnh Đoàn Tâm - Dev
                            </div>
                            <div>
                                Võ Minh Hiếu - Dev
                            </div>
                            <div>
                                Trương Công Huy - Design
                            </div>
                            <div>
                                Trịnh Nguyễn Hoàng Thọ - Tester
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <h4>follow us</h4>
                            <div class="contact-ft">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-telegram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
