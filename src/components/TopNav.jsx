import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px;
`;

function TopNav() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
    </Nav>
  );
}

export default TopNav;
