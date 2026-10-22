import {
  Footer,
  Header,
  LayoutComponent,
  Logo,
  Main,
  NavContainer,
  StyledNavLink,
  ButtonWrapper,
} from "./styles";
import type { LayoutProps } from "./types";
import LogoImg from "../../assets/avatar.jpg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function Layout({ children }: LayoutProps) {

  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <LayoutComponent>
      <Header>
        <Link to="/">
          <Logo src={LogoImg} />
        </Link>

        <ButtonWrapper>
          <Button name="<---" onClick={onBack} />
        </ButtonWrapper>

        <NavContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-05"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson05
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-06"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson06
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-07"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson07
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-08"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson08
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-09"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson09
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-10"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson10
          </StyledNavLink>
          <StyledNavLink
            to="/homework-10"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Homework10
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-12"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson12
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </LayoutComponent>
  );
}

export default Layout;
