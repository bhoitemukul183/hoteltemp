import React from "react";
import "./Slider.css";
import pizza from "../../Assets/pizza.png";
import closeimg from "../../Assets/close.png";
import mushroom from "../../Assets/mushroom.png";
import onion from "../../Assets/onion.png";
import tomato from "../../Assets/tomato.png";
import asparagus from "../../Assets/asparagus.png";
import artichokes from "../../Assets/artichoke.png";
import m1 from "../../Assets/Mushroom/m1.png";
import m2 from "../../Assets/Mushroom/m2.png";
import m3 from "../../Assets/Mushroom/m3.png";
import m4 from "../../Assets/Mushroom/m4.png";
import m5 from "../../Assets/Mushroom/m5.png";
import m6 from "../../Assets/Mushroom/m6.png";
import m7 from "../../Assets/Mushroom/m7.png";
import t1 from "../../Assets/tomato/t1.png";
import t2 from "../../Assets/tomato/t2.png";
import t3 from "../../Assets/tomato/t3.png";
import t4 from "../../Assets/tomato/t4.png";
import t5 from "../../Assets/tomato/t5.png";

export const slider = () => {
  function opentray() {
    document.getElementById("tray").style.height = "100vh";
    document.getElementById("tray").style.padding = "2.5%";
    document.getElementById("tray").style.top = "10px";
    document.getElementById("tray").style.left = "2px";
  }

  function closeray() {
    document.getElementById("tray").style.height = "0";
    document.getElementById("tray").style.padding = "0%";
  }

  function firsttopping() {
    var topping = document.getElementById("m1");

    if (topping.style.display == "none") {
      topping.style.display = "block";
    } else {
      topping.style.display = "none";
    }
  }

  function secondtopping() {
    var topping = document.getElementById("t1");

    if (topping.style.display == "none") {
      topping.style.display = "block";
    } else {
      topping.style.display = "none";
    }
  }
  return (
    <div>
      <div className="main-tag">Special Pizzas</div>
      <div className="slider-container">
        <div className="slide1">
          <div className="slide-content">
            <div className="tag">Special Pizza</div>
            <div className="slide-description">
              A Very Special Pizza For You With Extra Toppings If You Want.
            </div>
            <div className="slide-btn" onClick={opentray}>
              Add
            </div>
            <div className="slide-item-price">200 ₹</div>
          </div>
          <div className="slide-image">
            <img src={pizza} alt="" />
          </div>
        </div>
        <div className="slide1">
          <div className="slide-content">
            <div className="tag">Special Pizza</div>
          </div>
          <div className="slide-image">
            <img src={pizza} alt="" />
          </div>
        </div>
        <div className="slide1">
          <div className="slide-content">
            <div className="tag">Special Pizza</div>
          </div>
          <div className="slide-image">
            <img src={pizza} alt="" />
          </div>
        </div>
      </div>
      <div id="tray">
        <div className="closs-tag" onClick={closeray}>
          <img src={closeimg} alt="" />
        </div>
        <div className="tray-image-subcontainer1" id="m1">
          <div id="1" className="addon-images"></div>
          <div id="2" className="addon-images"></div>
          <div id="3" className="addon-images"></div>
          <div id="4" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m1} alt="" />
          </div>
          <div id="m1" className="addon-images">
            <img src={m2} alt="" />
          </div>
          <div id="7" className="addon-images"></div>
          <div id="8" className="addon-images"></div>
          <div id="9" className="addon-images"></div>
          <div id="10" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m3} alt="" />
          </div>
          <div id="12" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m7} alt="" />
          </div>
          <div id="14" className="addon-images"></div>
          <div id="15" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m5} alt="" />
          </div>
          <div id="17" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m2} alt="" />
          </div>
          <div id="19" className="addon-images"></div>
          <div id="20" className="addon-images"></div>
          <div id="21" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m3} alt="" />
          </div>
          <div id="23" className="addon-images"></div>
          <div id="24" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m1} alt="" />
          </div>
          <div id="26" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m4} alt="" />
          </div>
          <div id="m1" className="addon-images">
            <img src={m7} alt="" />
          </div>
          <div id="29" className="addon-images"></div>
          <div id="30" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m6} alt="" />
          </div>
          <div id="32" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m5} alt="" />
          </div>
          <div id="34" className="addon-images"></div>
          <div id="35" className="addon-images"></div>
          <div id="36" className="addon-images"></div>
          <div id="37" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m4} alt="" />
          </div>
          <div id="m1" className="addon-images">
            <img src={m3} alt="" />
          </div>
          <div id="40" className="addon-images"></div>
          <div id="41" className="addon-images"></div>
          <div id="42" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m2} alt="" />
          </div>
          <div id="44" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m1} alt="" />
          </div>
          <div id="m1" className="addon-images">
            <img src={m5} alt="" />
          </div>
          <div id="47" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m1} alt="" />
          </div>
          <div id="49" className="addon-images"></div>
          <div id="50" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m6} alt="" />
          </div>
          <div id="52" className="addon-images"></div>
          <div id="53" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m3} alt="" />
          </div>
          <div id="55" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m7} alt="" />
          </div>
          <div id="57" className="addon-images"></div>
          <div id="58" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m1} alt="" />
          </div>
          <div id="60" className="addon-images"></div>
          <div id="61" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m4} alt="" />
          </div>
          <div id="63" className="addon-images"></div>
          <div id="64" className="addon-images"></div>
          <div id="65" className="addon-images"></div>
          <div id="66" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m5} alt="" />
          </div>
          <div id="68" className="addon-images"></div>
          <div id="69" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m2} alt="" />
          </div>
          <div id="m1" className="addon-images">
            <img src={m6} alt="" />
          </div>
          <div id="72" className="addon-images"></div>
          <div id="73" className="addon-images"></div>
          <div id="74" className="addon-images"></div>
          <div id="75" className="addon-images"></div>
          <div id="76" className="addon-images"></div>
          <div id="77" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m3} alt="" />
          </div>
          <div id="79" className="addon-images"></div>
          <div id="80" className="addon-images"></div>
          <div id="81" className="addon-images"></div>
          <div id="82" className="addon-images"></div>
          <div id="83" className="addon-images"></div>
          <div id="84" className="addon-images"></div>
          <div id="85" className="addon-images"></div>
          <div id="86" className="addon-images"></div>
          <div id="87" className="addon-images"></div>
          <div id="88" className="addon-images"></div>
        </div>

        <div className="tray-image-subcontainer2" id="t1">
          <div id="1" className="addon-images">
            <img src={t3} alt="" />
          </div>
          <div id="2" className="addon-images"></div>
          <div id="3" className="addon-images"></div>
          <div id="4" className="addon-images">
            <img src={t1} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="7" className="addon-images">
            <img src={t1} alt="" />
          </div>
          <div id="8" className="addon-images"></div>
          <div id="9" className="addon-images"></div>
          <div id="10" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="12" className="addon-images">
            <img src={t2} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="14" className="addon-images">
            <img src={t3} alt="" />
          </div>
          <div id="15" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="17" className="addon-images">
            <img src={t4} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="19" className="addon-images"></div>
          <div id="20" className="addon-images"></div>
          <div id="21" className="addon-images">
            <img src={t5} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="23" className="addon-images">
            <img src={t3} alt="" />
          </div>
          <div id="24" className="addon-images">
            <img src={t4} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="26" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="29" className="addon-images">
            <img src={t2} alt="" />
          </div>
          <div id="30" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="32" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="34" className="addon-images"></div>
          <div id="35" className="addon-images">
            <img src={t5} alt="" />
          </div>
          <div id="36" className="addon-images"></div>
          <div id="37" className="addon-images">
            <img src={t4} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="40" className="addon-images"></div>
          <div id="41" className="addon-images"></div>
          <div id="42" className="addon-images">
            <img src={t2} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="44" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="47" className="addon-images">
            <img src={t3} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="49" className="addon-images"></div>
          <div id="50" className="addon-images">
            <img src={t4} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="52" className="addon-images"></div>
          <div id="53" className="addon-images">
            <img src={t2} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="55" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="57" className="addon-images">
            <img src={t5} alt="" />
          </div>
          <div id="58" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="60" className="addon-images">
            <img src={t2} alt="" />
          </div>
          <div id="61" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="63" className="addon-images">
            <img src={t1} alt="" />
          </div>
          <div id="64" className="addon-images"></div>
          <div id="65" className="addon-images"></div>
          <div id="66" className="addon-images">
            <img src={t3} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="68" className="addon-images"></div>
          <div id="69" className="addon-images">
            <img src={t4} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="72" className="addon-images"></div>
          <div id="73" className="addon-images"></div>
          <div id="74" className="addon-images"></div>
          <div id="75" className="addon-images"></div>
          <div id="76" className="addon-images"></div>
          <div id="77" className="addon-images"></div>
          <div id="79" className="addon-images">
            <img src={t1} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="80" className="addon-images"></div>
          <div id="81" className="addon-images"></div>
          <div id="82" className="addon-images"></div>
          <div id="83" className="addon-images"></div>
          <div id="84" className="addon-images"></div>
          <div id="85" className="addon-images"></div>
          <div id="86" className="addon-images"></div>
          <div id="87" className="addon-images"></div>
          <div id="88" className="addon-images"></div>
        </div>
        <div className="tray-image-container">
          <img src={pizza} alt="" />
        </div>
        <div className="addon-container">
          <div className="addon-content" onClick={firsttopping}>
            <img src={mushroom} alt="" />
          </div>
          <div className="addon-content">
            <img src={onion} alt="" />
          </div>
          <div className="addon-content" onClick={secondtopping}>
            <img src={tomato} alt="" />
          </div>
          <div className="addon-content">
            <img src={asparagus} alt="" />
          </div>
          <div className="addon-content">
            <img src={artichokes} alt="" />
          </div>
        </div>
        <div className="content-container">
          <div className="item-tag">Veg Margherita Pizza</div>
          <div className="price-tag">200 ₹</div>
          <div className="item-description">
            A Very Special Pizza For You With Extra Toppings If You Want.
          </div>
        </div>
      </div>
      <div className="under-line"></div>
    </div>
  );
};

export default slider;
