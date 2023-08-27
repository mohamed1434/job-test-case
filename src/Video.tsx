import React, { useState } from "react";
import { VideoCamera, Users } from "phosphor-react";

const truncateText = (text: string, limit: number) => {
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

const Video: React.FC<{
  title: string;
  date: string;
  name: string;
  image: string;
}> = ({ title, date, image, name }) => {
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
          <p style={{ color: "#7D8998", fontSize: "14px" }}>{name}</p>
        </div>
      </div>
      <p
        style={{
          color: "#8D97A5",
          marginRight: "10px",
          marginTop: "25px",
          fontSize: "14px",
        }}
      >
        {date && date}
      </p>
    </div>
  );
};

export default Video;
