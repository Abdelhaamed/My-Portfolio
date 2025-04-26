import React from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { FaImage } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [active, setActive] = useState("/");
  return (
    <div className="nav ">
      <Link
        to="/"
        className={active === "/" ? "active" : ""}
        onClick={() => setActive("/")}
      >
        <span>
          <FaHome />
        </span>
        <span className="label">HOME</span>
      </Link>

      {/*  <Link
        to="/About"
        className={active === "/About" ? "active" : ""}
        onClick={() => setActive("/About")}
      >
        <span>
          <IoPerson />
        </span>
        <span className="label">ABOUT</span>
      </Link> */}

      <Link
        to="/Skills"
        className={active === "/Skills" ? "active" : ""}
        onClick={() => setActive("/Skills")}
      >
        <span>
          <MdHomeRepairService />
        </span>
        <span className="label">SKILLS</span>
      </Link>

      <Link
        to="/Portfolio"
        className={active === "/Portfolio" ? "active" : ""}
        onClick={() => setActive("/Portfolio")}
      >
        <span>
          <FaImage />
        </span>
        <span className="label">PORTFOLIO</span>
      </Link>

      <Link
        to="/Contact"
        className={active === "/Contact" ? "active" : ""}
        onClick={() => setActive("/Contact")}
      >
        <span>
          <MdContactPhone />
        </span>
        <span className="label">CONTACT</span>
      </Link>
    </div>
  );
}

export default Nav;
