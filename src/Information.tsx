import React, { useState } from "react";
import { DotsThree, PlusCircle } from "phosphor-react";
import ItemContainer from "./ItemContainer";

const Information = () => {
  const items = [
    {
      id: 0,
      name: "Заметки",
    },
    {
      id: 1,
      name: "Консультации",
    },
    {
      id: 2,
      name: "Видео",
    },
    {
      id: 3,
      name: "Мероприятия",
    },
  ];
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50vw",
        height: "80vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          width: "100%",
          height: "14vh",
          borderRadius: "6px",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          justifyContent: "space-between",
          padding: "10px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          <img
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <p>Рожков Денис Петрович</p>
            <p style={{ fontSize: "13px" }}>30 лет, муж</p>
          </div>
        </div>
        <DotsThree size={26} color="black" style={{ marginTop: "10px" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "2rem",
          padding: "10px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              justifyContent: "space-between",
            }}
          >
            <p
              onClick={() => handleItemClick(index)}
              style={{
                fontSize: "14px",
                color: selectedItem === index ? "#4198C5" : "#697688",
                cursor: "pointer",
              }}
            >
              {item.name}
            </p>
            {index !== items.length - 1 && (
              <p style={{ color: "#CED2D8" }}>|</p>
            )}
          </div>
        ))}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <p style={{ fontSize: "14px", color: "#697688" }}>Новая заметка</p>
          <PlusCircle size={30} color="#697688" />
        </div>
      </div>
      <ItemContainer selectedItem={selectedItem} />
    </div>
  );
};

export default Information;
