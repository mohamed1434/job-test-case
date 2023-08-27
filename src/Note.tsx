import React, { useState } from "react";
import { DotsThree } from "phosphor-react";

const Note: React.FC<{ text: string; location: string; date: string }> = ({
  text,
  location,
  date,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDotsClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{ display: "flex", padding: "10px", alignItems: "flex-start" }}
      >
        <div style={{ width: "100%" }}>
          <p style={{ fontSize: "13px", lineHeight: "1.5rem" }}>
            <span style={{ color: "#697688" }}>{date}</span>
            {text}
          </p>
        </div>
        <DotsThree
          size={34}
          style={{ cursor: "pointer", position: "relative" }}
          onClick={handleDotsClick}
        />
        {dropdownVisible && (
          <div
            style={{
              position: "absolute",
              marginLeft: "10px", // Adjust the distance from the DotsThree button
              backgroundColor: "white",
              borderRadius: "4px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              padding: "6px",
              right: "290px",
              zIndex: 1, // Make sure the dropdown is on top
              width: "12rem",
            }}
          >
            {/* Dropdown content */}
            <div
              className="dropdown"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "10px",
              }}
            >
              <p
                style={{ fontSize: "12px", cursor: "pointer", padding: "10px" }}
              >
                Изменить
              </p>
              <p
                style={{ fontSize: "12px", cursor: "pointer", padding: "10px" }}
              >
                Удалить
              </p>
            </div>
          </div>
        )}
      </div>
      {location && (
        <iframe
          src={location}
          width="240"
          height="140"
          style={{
            border: "0",
            backgroundColor: "#CDCDCD",
            padding: "6px",
            borderRadius: "6px",
            marginBottom: "10px",
          }}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default Note;
