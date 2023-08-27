import React, { useState } from "react";
import "./styles.css";
import { MagnifyingGlass, List, Plus, X } from "phosphor-react";
import SideBarElement from "./SideBarElement";
import { faker } from "@faker-js/faker";
const SideBar = () => {
  const data = [
    {
      id: 0,
      name: "Кравцова Алекцандра",
      img: `${faker.image.avatar()}`,
      type: "message",
    },
    {
      id: 1,
      name: "Кравцова Алекцандра",
      img: `${faker.image.avatar()}`,
      type: "",
    },
    {
      id: 2,
      name: "Кравцова Алекцандра",
      img: `${faker.image.avatar()}`,
      type: "warning",
    },
    {
      id: 3,
      name: "Кравцова Алекцандра",
      img: `${faker.image.avatar()}`,
      type: "",
    },
    {
      id: 4,
      name: "Кравцова Алекцандра",
      img: `${faker.image.avatar()}`,
      type: "",
    },
    {
      id: 5,
      name: "Кравцова Алекцандра",
      img: `${faker.image.avatar()}`,
      type: "",
    },
    {
      id: 6,
      name: "Кравцова Алекцандра",
      img: `${faker.image.avatar()}`,
      type: "",
    },
    {
      id: 7,
      name: "Кравцова Алекцандра",
      img: `${faker.image.avatar()}`,
      type: "",
    },
    {
      id: 8,
      name: "Кравцова Алекцандра",
      img: `${faker.image.avatar()}`,
      type: "",
    },
    {
      id: 9,
      name: "Кравцова Алекцандра",
      img: `${faker.image.avatar()}`,
      type: "",
    },
  ];

  const [searchClicked, setSearchClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredList, setIsHoveredList] = useState(false);
  const [isHoveredPlus, setIsHoveredPlus] = useState(false);
  const [isHoveredX, setIsHoveredX] = useState(false);
  const [chooseClicked, setChooseClicked] = useState(false);

  const handleSearch = () => {
    setSearchClicked(true);
  };

  const handleClose = () => {
    setSearchClicked(false);
  };

  const handleClickChoose = () => {
    setChooseClicked(true);
  };
  return (
    <div className="box__parent-stack">
      <div className="parent-stack__search-bar">
        <div className={searchClicked ? "search-bar__border active" : ""}>
          <MagnifyingGlass
            onClick={handleSearch}
            size={16}
            color={isHovered ? "white" : "#616F82"}
            style={{
              backgroundColor: searchClicked
                ? ""
                : isHovered
                ? "#70B2D3"
                : "#F1F2F3",
              padding: "8px",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "0.3s ease",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        <div className={"search-bar__icons"}>
          {!searchClicked ? (
            <>
              <List
                size={16}
                color={isHoveredList ? "white" : "#616F82"}
                style={{
                  backgroundColor: isHoveredList ? "#70B2D3" : "#F1F2F3",
                  padding: "8px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "0.3s ease",
                }}
                onMouseEnter={() => setIsHoveredList(true)}
                onMouseLeave={() => setIsHoveredList(false)}
              />
              <Plus
                size={16}
                color={isHoveredPlus ? "white" : "#616F82"}
                style={{
                  backgroundColor: isHoveredPlus ? "#70B2D3" : "#F1F2F3",
                  padding: "8px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "0.3s ease",
                }}
                onMouseEnter={() => setIsHoveredPlus(true)}
                onMouseLeave={() => setIsHoveredPlus(false)}
              />
            </>
          ) : (
            <X
              onClick={handleClose}
              size={16}
              color={isHoveredX ? "white" : "#616F82"}
              style={{
                backgroundColor: isHoveredX ? "#70B2D3" : "#F1F2F3",
                padding: "8px",
                borderRadius: "50%",
                cursor: "pointer",
                transition: "0.3s ease",
              }}
              onMouseEnter={() => setIsHoveredX(true)}
              onMouseLeave={() => setIsHoveredX(false)}
            />
          )}
        </div>
      </div>
      <div className="parent-stack__choose">
        {!chooseClicked ? (
          <>
            <span>213</span>
            <p onClick={handleClickChoose} style={{ cursor: "pointer" }}>
              Выбрать
            </p>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <input type="checkbox" />
              <p style={{ cursor: "default" }}>Все</p>
              <span>213</span>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <p>Действия</p>
              <p onClick={() => setChooseClicked(false)}>Отменить</p>
            </div>
          </div>
        )}
      </div>
      <div className="box__list-items">
        {data.map((item) => (
          <SideBarElement
            key={item.id}
            name={item.name}
            image={item.img}
            type={item.type}
            chooseClicked={chooseClicked}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
