import React from "react";
import "./navbar.scss";
const NavBar = ({ totalItems }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalItems}
        </span>
      </a>
    </nav>
  );
};
// can be used with a class
// NavBar.propTypes = {
//   totalItems: React.propTypes.number.isRequired,
//   total: React.propTypes.number,
// };
// NavBar.defaultProps = {
//   totalItems: 0,
// };
// NavBar.propTypes = {
//   totalItems(props, propName, component) {
//     if (!(propName in props)) {
//       return new Error(`missing ${propName}`);
//     }
//     if (props[propName] < 0) {
//       return new Error(`Negative ${propName}`);
//     }
//   },
// };
export default NavBar;
