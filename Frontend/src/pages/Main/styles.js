import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 72px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #9a9a9a;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const SMain = styled.main`
  height: calc(100% - 160px);
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Sidebar = styled.div`
  /* height: calc(100% - 160px); */
  width: 20%;
  border-right: 1px solid #9a9a9a;
`;

export const Menu = styled.ul`
  padding: 64px 0;
  list-style: none;
`;

export const SLink = styled.li`
  padding: 12px 0;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 72px;
  padding: 8px 16px;
  border-top: 1px solid #9a9a9a;
`;
