import React, { useState } from "react";
import { VideoCamera, CalendarBlank, Clock } from "phosphor-react";

const truncateText = (text: string, limit: number) => {
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

const Events: React.FC<{
  title: string;
  date: string;
  time: string;
  image: string;
}> = ({ title, date, image, time }) => {
  const truncatedTitle = truncateText(title, 40);
  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        border: "1px solid #E4E4E4",
        marginBottom: "10px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <img
          src={image}
          style={{
            width: "100px",
            height: "50px",
            borderRadius: "6px",
            marginLeft: "10px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            height: "6vh",
          }}
        >
          <p>{truncatedTitle}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <VideoCamera color="#5FA0CC" />
              <p style={{ fontSize: "12px" }}>Вебинар</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <CalendarBlank color="#5FA0CC" />
              <p style={{ fontSize: "12px" }}>{date}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock color="#5FA0CC" />
              <p style={{ fontSize: "12px" }}>{time}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <p
        style={{
          color: "#8D97A5",
          marginRight: "10px",
          marginTop: "25px",
          fontSize: "14px",
        }}
      >
        {date && date}
      </p> */}
    </div>
  );
};

export default Events;
