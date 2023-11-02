"use client";
import Sidebar from "../Sidebar/Sidebar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import "./module.css";

import Hero from "@/Components/Hero/Hero";
import Right from "./Mini-Components/Right";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

// Hero Section
const HeroSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const SideBar = styled.div`
  position: relative;
  top: 70px;
  left: 0;
  transition: transform 0.2s ease-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
`;

const src =
  "https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Nav>
        <Logo>
          <div className="menubar" onClick={ToggleMenu}>
            {isOpen ? <FaBars /> : <FaBars />}
          </div>
          <Image src={src} alt="Logo" height={30} width={80} />

          {/* Menu Items */}
          <div>
            <Ul className="menubar_list">
              <li>
                <Link href={"/"}>
                  Design spotlight <FiChevronDown />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  Business <FiChevronDown />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  Education <FiChevronDown />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  Plan & Pricing <FiChevronDown />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  Learn <FiChevronDown />
                </Link>
              </li>
            </Ul>
          </div>
        </Logo>

        <div>
          <Right />
        </div>
      </Nav>

      <HeroSection>
        <SideBar isOpen={isOpen}>{isOpen && <Sidebar />}</SideBar>
        <Hero />
      </HeroSection>
    </>
  );
}
