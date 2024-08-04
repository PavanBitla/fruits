import React from "react";
import "./BoxView.css";
import { Spin } from "antd";
export const BoxView = ({ fruits, loading }) => {
    console.log(loading)
  return (
    <div className="container">
        {loading && <Spin size="large "></Spin>}
      {fruits?.map((fruit, index) => {
        return (
          <div className="boxview-card" key={index}>
            <img src={fruit.image_url} alt={fruit.name} />
            <span className="content">
              <span className="title">{fruit.name}</span>
              <span>
               {fruit.short_description}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};
