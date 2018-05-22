import React, { Component } from 'react';
import logoTechkids from '../img/techkids.png'
import logoGitHub from '../img/github-logo.png'
class Footer extends Component {
    render() {
        return (
            <div className="footer">
<br/>
                <div className="footer_flex">


                    <div className="techkids">
                        <img src={logoTechkids} alt="" width="50%" /><br />
                        Techkids - Coding School<br />
                        Tầng 6, 22C Thành Công, Quận Ba Đình, Hà Nội
                </div>
                    <div className="footer_role">
                        <strong>About Us</strong><br />
                        Đỗ Văn Thông - FU - Idea, Fullstack<br />
                        Đào Anh Tuấn - HUST - UI/UX Design, Frontend<br />
                        Nguyễn Khắc Minh - PTIT - Frontend<br />
                        Đinh Hồng Quân - Backend</div>
                </div>
                <div className="logo_link">
                        <a href="https://github.com/thongdo2101/Eatit-final">
                            <img id="github" src={logoGitHub} alt="" width="2%" />
                        </a>
                        <a href="https://https://www.facebook.com/lf.kael">
                            <img id="facebook" src="https://png.icons8.com/metro/500/000000/facebook.png" alt="" width="2%" />
                        </a> </div>

                <p>©2018 Techkids - Web Fullstack Gen 11 Hackathon</p>
            </div>


        );
    }
}

export default Footer;