"use client";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import styled from "styled-components";
import "./module.css";
import Link from "next/link";
import MenuItems from "@/Components/Sidebar/Mini-Components/MenuItems";

const Icons = styled.div`
  display: flex;
  gap: 10px;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cad = styled.div`
  height: 40px;
  width: 134px;

  background-color: #8b3dff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ProfilePic = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #7c7b7b;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const iconsList = [
  { icon: HiOutlineDesktopComputer, href: "/Editer" },
  { icon: FiSettings, href: "https://google.com" },
  { icon: BiBell, href: "https://google.com" },
];

export default function Right() {
  return (
    <div className="right">
      {iconsList.map((icons, index) => (
        <Icons>
          <Link key={index} href={icons.href}>
            <icons.icon />
          </Link>
        </Icons>
      ))}

      <Link href={"/"}><Cad className="right_span">Create a design</Cad></Link>

      <ProfilePic></ProfilePic>
    </div>
  );
}
