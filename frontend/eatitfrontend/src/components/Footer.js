import React, { Component } from 'react';
import logoTechkids from '../img/techkids.png'
import logoGitHub from '../img/github-logo.png'
class Footer extends Component {
    render() {
        return (
                <div className="footer">
                <p>©2018 Techkids - Web Fullstack Gen 11 Hackathon<br/>
                <strong>About Us</strong></p>
                <div className = "footer_flex">
                <div className = "footer_role">
                Đỗ Văn Thông - FU - Idea, Fullstack<br/>
                Đào Anh Tuấn - HUST - UI/UX Design, Frontend<br/>
                Nguyễn Khắc Minh - PTIT - Frontend</div>
                <a className = "github" href="https://github.com/thongdo2101/Eatit-final">
                <img src={logoGitHub} alt="" width = "20%" />
               </a>

                <div className = "techkids">
                <img src={logoTechkids} alt="" width="50%" /><br/>
                Techkids - Coding School<br/>
                Tầng 6, 22C Thành Công, Quận Ba Đình, Hà Nội
                </div>
                </div>


                </div>


        );
    }
}

export default Footer;