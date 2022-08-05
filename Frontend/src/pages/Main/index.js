import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Content } from "../../router";
import { Footer, Header, Logo, Menu, Sidebar, SLink, SMain } from "./styles";

export const Main = () => {
  return (
    <div>
      <Header>
        <Logo>MyDev`s</Logo>
        <ColorModeSwitcher />
      </Header>
      <SMain>
        <Sidebar>
          <Menu>
            <Link to="/">
              <SLink>Desenvolvedores</SLink>
            </Link>
            <Link to="/niveis">
              <SLink>Niveis Profissionais</SLink>
            </Link>
          </Menu>
        </Sidebar>
        <Content />
      </SMain>
      <Footer />
    </div>
  );
};
