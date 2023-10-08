import React from "react";
import { Rectangle } from "../../components/Rectangle";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="overlap">
        <div className="div" />
        <img className="con-vazado" alt="Con vazado" src="/img/con-vazado-2.svg" />
        <div className="group">
          <img className="img" alt="Group" src="/img/group-288.png" />
          <div className="text-wrapper">developed by</div>
        </div>
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="overlap-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper-2">08:00</div>
            <div className="group-2">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <Rectangle className="rectangle-1" />
                  <div className="rectangle-4" />
                </div>
              </div>
              <div className="group-3">
                <div className="rectangle-5" />
                <div className="rectangle-6" />
                <div className="rectangle-7" />
                <img className="image" alt="Image" src="/img/image-1.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-8" />
        <img className="line" alt="Line" src="/img/line-5.svg" />
        <div className="text-wrapper-3">EN</div>
        <img className="vector" alt="Vector" src="/img/vector.svg" />
        <img className="mask-group" alt="Mask group" src="/img/mask-group.png" />
      </div>
      <img className="vector-2" alt="Vector" src="/img/vector-1.png" />
      <img className="vector-3" alt="Vector" src="/img/vector-1.png" />
    </div>
  );
};
