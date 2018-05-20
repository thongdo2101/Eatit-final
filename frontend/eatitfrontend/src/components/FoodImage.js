import React, { Component } from 'react';
import Button from "./Button";
import img from "../img/recipe16041-635824303919364530.jpg";

class FoodImage extends Component {
    render() {
        return (
            <div class="row food_info_lite">
                <div className="col-md-4">
                    <div className="details">
                        <img src = {img} alt="" width="100%" />
                        <h4>Sợi mì trứng</h4>
                        <p>Mì trứng là món ăn khá dễ làm với những nguyên liệu quen thuộc như bột mì, trứng gà, muối... Sợi mì vàng tươi,
            mềm, thơm ngon, dùng để chế biến rất nhiều món ăn hấp dẫn cho cả nhà!</p>
                    </div>
                    <Button />
                </div>
                <div className="col-md-4">
                    <div className="details">
                        <img src= {img} alt="" width="100%" />
                        <h4>Sợi mì trứng</h4>
                        <p>Mì trứng là món ăn khá dễ làm với những nguyên liệu quen thuộc như bột mì, trứng gà, muối... Sợi mì vàng tươi,
            mềm, thơm ngon, dùng để chế biến rất nhiều món ăn hấp dẫn cho cả nhà!</p>
                    </div>
                    <Button />
                </div>
                <div className="col-md-4">
                    <div className="details">
                        <img src= {img} alt="" width="100%" />
                        <h4>Sợi mì trứng</h4>
                        <p>Mì trứng là món ăn khá dễ làm với những nguyên liệu quen thuộc như bột mì, trứng gà, muối... Sợi mì vàng tươi,
            mềm, thơm ngon, dùng để chế biến rất nhiều món ăn hấp dẫn cho cả nhà!</p>
                    </div>
                    <Button />
                </div>
            </div>

        );
    }
}

export default FoodImage;