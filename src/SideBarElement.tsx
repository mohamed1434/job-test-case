import React from "react";
import { PaperPlaneTilt, Warning } from "phosphor-react";
const SideBarElement: React.FC<{
  name: string;
  image: string;
  type: string;
  chooseClicked: boolean;
}> = ({ name, image, type, chooseClicked }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        width: "100%",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
        borderRadius: "6px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {chooseClicked && (
          <input style={{ width: "16px", height: "16px" }} type="checkbox" />
        )}
        <img
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          src={image}
        />
        <p style={{ fontSize: "14px" }}>{name}</p>
      </div>
      {(type === "message" && <PaperPlaneTilt size={20} color="#9BC9E0" />) ||
        (type === "warning" && <Warning size={20} color="#F3AF78" />)}
    </div>
  );
};

export default SideBarElement;
