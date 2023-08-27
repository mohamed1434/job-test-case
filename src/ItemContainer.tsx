import React from "react";
import Note from "./Note";
import Consultation from "./Consultation";
import Video from "./Video";
import Events from "./Events";

const ItemContainer: React.FC<{
  selectedItem: number;
}> = ({ selectedItem }) => {
  const data = [
    {
      id: 0,
      date: "20.12.2019",
      text: "Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
      location: "",
    },
    {
      id: 1,
      date: "20.12.2019",
      text: "Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus",
    },
  ];

  const consultaion = [
    {
      id: 0,
      title: "Online Консультация",
      verified: true,
      date: "15.01.2019",
      time: "12:30-13:00",
    },
    {
      id: 1,
      title: "Online Консультация",
      verified: true,
      date: "15.01.2019",
      time: "12:30-13:00",
    },
    {
      id: 2,
      title: "Личный приём",
      verified: false,
      date: "15.01.2019",
      time: "12:30-13:00",
    },
  ];

  const video = [
    {
      id: 0,
      title:
        "Боковые приседания с крабовой ходьбой с двумя лентами и стереосистемой к ним",
      img: "https://marketplace.canva.com/EAEthkBVLfQ/1/0/800w/canva-blush-wave-desktop-wallpaper-S_4-_kpzunc.jpg",
      date: "",
      name: "Астахова Е.В.",
    },
    {
      id: 1,
      title: "Боковые приседания с крабовой ходьбой",
      img: "https://marketplace.canva.com/EAEthkBVLfQ/1/0/800w/canva-blush-wave-desktop-wallpaper-S_4-_kpzunc.jpg",
      date: "15.01.2019, 12:30-13:00",
      name: "Астахова Е.В.",
    },
    {
      id: 2,
      title: "Боковые приседания с крабовой",
      img: "https://marketplace.canva.com/EAEthkBVLfQ/1/0/800w/canva-blush-wave-desktop-wallpaper-S_4-_kpzunc.jpg",
      date: "15.01.2019, 12:30-13:00",
      name: "Астахова Е.В.",
    },
  ];

  const events = [
    {
      id: 0,
      title: "Тяга резинки в шаге со сгибанием локтя под 90 градусов",
      date: "9 марта 2021",
      time: "17:00",
      img: "https://marketplace.canva.com/EAEthkBVLfQ/1/0/800w/canva-blush-wave-desktop-wallpaper-S_4-_kpzunc.jpg",
    },
    {
      id: 1,
      title: "Тяга резинки в шаге со сгибанием локтя под 90 градусов",
      date: "9 марта 2021",
      time: "17:00",
      img: "https://marketplace.canva.com/EAEthkBVLfQ/1/0/800w/canva-blush-wave-desktop-wallpaper-S_4-_kpzunc.jpg",
    },
    {
      id: 2,
      title: "Тяга резинки в шаге со сгибанием локтя под 90 градусов",
      date: "9 марта 2021",
      time: "17:00",
      img: "https://marketplace.canva.com/EAEthkBVLfQ/1/0/800w/canva-blush-wave-desktop-wallpaper-S_4-_kpzunc.jpg",
    },
  ];

  let contentToRender = null;

  switch (selectedItem) {
    case 0:
      contentToRender = data.map((item) => (
        <Note
          key={item.id}
          text={item.text}
          date={item.date}
          location={item.location}
        />
      ));
      break;
    case 1:
      contentToRender = consultaion.map((item) => (
        <Consultation
          key={item.id}
          title={item.title}
          date={item.date}
          time={item.time}
          verified={item.verified}
          selectedItem={item.id}
        />
      ));
      break;
    case 2:
      contentToRender = video.map((item) => (
        <Video
          key={item.id}
          title={item.title}
          date={item.date}
          image={item.img}
          name={item.name}
        />
      ));
      break;
    case 3:
      contentToRender = events.map((item) => (
        <Events
          key={item.id}
          title={item.title}
          date={item.date}
          time={item.time}
          image={item.img}
        />
      ));
      break;

    default:
      contentToRender = <p>No items are selected.</p>;
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "6px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        overflowY: "scroll",
      }}
    >
      <div style={{ display: "felx", flexDirection: "column" }}>
        {contentToRender}
      </div>
    </div>
  );
};

export default ItemContainer;
