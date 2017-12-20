import React from "react"
import Link from "gatsby-link"
import Obfuscate from "react-obfuscate"
import { FaPaperPlaneO, FaWrench } from "react-icons/lib/fa"

const ForHomePageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>Good to see you here!</b>
    </p>
    <p>
      At present, I'm open to <b>full time on-site freelancing work</b> offers
      in Finland (Uusimaa area) and remote sites in other EU area.
    </p>
    <p>
      If you feel that I might be a good fit, drop me a message at{" "}
      <b>
        <Obfuscate email="atte.gartman@gmail.com" />
      </b>.
    </p>
    <p>
      Thank you. Now, feel free to check out what I've collected to my toolbox.
    </p>
  </div>
)

const ForContactPageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>Hi there</b>
      <br /> Before you leave
    </p>
    <p>
      i want you to remember that at present, I'm open to{" "}
      <b>full time on-site freelancing work</b> offers in Finland (Uusimaa area)
      and remote sites in other EU area.
    </p>
    <p>
      If you feel that you want me on your team, drop me a message at{" "}
      <b>
        <Obfuscate email="atte.gartman@gmail.com" />
      </b>.
    </p>
    <p />
    <p>
      Thank you<br />
      <b>Atte</b>
    </p>
  </div>
)

const RemarkScreen = props => {
  const links = [
    { path: "toolbox", icon: FaWrench }
    //{ path: 'playground', icon: FaPaperPlaneO }
  ]

  return (
    <div
      className={`c-remark-screen ${props.isActive &&
        "c-remark-screen--is-active"}`}
    >
      {props.locationPathName === "/"
        ? ForHomePageContent
        : ForContactPageContent}
      {props.locationPathName === "/" && (
        <div className="c-remark-screen__links">
          {links.map(link => (
            <Link
              key={link.path}
              className="c-remark-screen__link"
              to={`/${link.path}/`}
              onClick={props.onClick}
              tabIndex={props.isActive ? "1" : "-1"}
            >
              <link.icon /> {link.path}
            </Link>
          ))}
        </div>
      )}

      <div className="c-remark-screen__bg" />
    </div>
  )
}

export default RemarkScreen
