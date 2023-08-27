import React, { useState } from "react";
import { VideoCamera, Users } from "phosphor-react";

const Consultation: React.FC<{
  selectedItem: number;
  title: string;
  date: string;
  time: string;
  verified: boolean;
}> = ({ title, date, time, verified, selectedItem }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        border: selectedItem === 0 ? "1px solid #55A3CC" : "1px solid #E4E4E4",
        marginBottom: "10px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {title !== "Личный приём" ? (
          <VideoCamera
            weight="fill"
            color={selectedItem === 0 ? "white" : "#7D8998"}
            size={20}
            style={{
              backgroundColor: selectedItem === 0 ? "#55A3CC" : "#F5F6F7",
              padding: "10px",
              borderRadius: "50%",
              marginLeft: "10px",
            }}
          />
        ) : (
          <Users
            weight="fill"
            color={selectedItem === 0 ? "white" : "#7D8998"}
            size={20}
            style={{
              backgroundColor: selectedItem === 0 ? "#55A3CC" : "#F5F6F7",
              padding: "10px",
              borderRadius: "50%",
              marginLeft: "10px",
            }}
          />
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            height: "6vh",
          }}
        >
          <p>{title}</p>
          <p style={{ color: "#7D8998", fontSize: "14px" }}>
            {date}, {time}
          </p>
        </div>
      </div>
      <p
        style={{
          color: "red",
          marginRight: "10px",
          marginTop: "25px",
          fontSize: "14px",
        }}
      >
        {!verified ? "Не подтверждена" : ""}
      </p>
    </div>
  );
};

export default Consultation;
