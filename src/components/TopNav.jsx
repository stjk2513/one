import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  border-bottom: 1px solid black;
`;

function TopNav() {
  return (
    <Nav>
      <Link to="/">Home</Link> | <Link to="/counter">Counter</Link>
    </Nav>
  );
}

export default TopNav;
