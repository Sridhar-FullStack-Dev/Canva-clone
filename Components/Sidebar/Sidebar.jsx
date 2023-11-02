import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
import "./module.css";
import GetCanvaPro from "./Mini-Components/GetCanvaPro";
import MenuItems from "./Mini-Components/MenuItems";

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;

  width: 15.6rem;
  height: calc(100vh - 70px);
  padding: 16px;
  overflow: hidden;
`;

const Div = styled.div`
  height: 40px;
  width: 40px;
  background-color: gray;
  border-radius: 50%;
`;

const H5 = styled.h5`
  font-family: "Poppins";
  font-size: 14px;
`;
const Span = styled.span`
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background-color: #0d1216b3;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export default function Sidebar() {
  return (
    <Flexbox>
      <div className="sidebar_menu_1">
        {/* Round */}
        <Div></Div>

        <div>
          <H5>Personal</H5>
          <div className="sidebar_menu_1_1">
            Free <Span></Span> <BsPerson /> 1
          </div>
        </div>
      </div>

      <GetCanvaPro />
      <MenuItems />
    </Flexbox>
  );
}
