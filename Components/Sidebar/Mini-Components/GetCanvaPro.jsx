import styled from "styled-components";
import { FaCrown } from "react-icons/fa";
import "../module.css";

const GCP = styled.div`
  background-color: #40576d12;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  padding: 5px;
  width: 100%;

  text-align: center;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export default function GetCanvaPro() {
  return (
    <GCP>
      <FaCrown className="sidebar_icon_crown" />
      &nbsp; &nbsp;
      {"Get Canva Pro"}
    </GCP>
  );
}
