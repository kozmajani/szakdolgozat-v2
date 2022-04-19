import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  z-index: 2;
  align-items: center;
  background: #0f0f0f;
  height: 80px;
  width: 100%;
  display: flex;
  box-shadow: 2px 0px 10px 10px rgba(0, 0, 0, 0.9);
  position: fixed;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const NavBars = styled(Link)`
  padding: 1rem;
  font-size: 2.3rem;
  display: grid;
  text-align: left;
  align-items: center;
`;

const NavIcon = styled(Link)`
  padding: 1rem;
  font-size: 2.3rem;
  display: flex;
`;

export const NavMenu = styled.div`
  z-index: 2;

  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px;
  text-decoration: none;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #0f0f0f;
    color: #fff;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 10px;
  background: #1abc9c;
  padding: 10px 20px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #fff;
    color: #000;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem;
  cursor: pointer;
  font-size: 1.4rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SidebarNav = styled.nav`
  background: #0f0f0f;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-300px")};
  transition: 350ms;
  box-shadow: 2px 0px 5px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = ({ token }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavMenu>
            {token ? (
              <>
                <>
                  <NavBars to="#">
                    <FaIcons.FaBars onClick={showSidebar} />
                  </NavBars>
                </>
                <NavIcon to="/profile" className="profile-icon">
                  <AiIcons.AiOutlineUser />
                </NavIcon>
              </>
            ) : (
              <>
                <NavIcon to="/">
                  <AiIcons.AiFillHome />
                </NavIcon>
                <NavIcon to="/login" className="profile-icon">
                  <AiIcons.AiOutlineUser />
                </NavIcon>
              </>
            )}
          </NavMenu>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavBars to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavBars>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
