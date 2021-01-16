import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <Link className="navbar-brand" to="/">
          Dog API & React
        </Link>
      </nav>
    </div>
  );
};
