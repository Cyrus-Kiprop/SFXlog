import React from "react";
import styled from "styled-components";
import { Sizing1100px } from "./sizing.jsx";
import { Link, graphql, useStaticQuery } from "gatsby";

export default function Nav() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          authorName
        }
      }
    }
  `);

  const { title, authorName } = data.site.siteMetadata;
  return (
    <Sizing1100px>
      <NavbarWrapper>
        <header className=" header__wrapper d-flex justify-content-between align-items-center ">
          <div className="header__left d-flex  justify-content-start align-items-center h-100">
            <h1>
              <Link to="/" className="header__logo">
                {" "}
                {title}
              </Link>
            </h1>
            <nav>
              <ul className=" d-flex nav__link ">
                <li>
                  <Link
                    activeClassName="nav_active d-flex flex-column"
                    className="nav__link-item"
                    to="/"
                  >
                    Home
                    <svg
                      width="58"
                      height="5"
                      viewBox="0 0 58 5"
                      fill="none"
                      className="nav__underline__svg"
                    >
                      <path
                        d="M1 3.18471C4.34436 3.18471 7.48008 1 10.8705 1C13.2525 1 15.1058 1.72336 17.3165 2.34614C20.3083 3.18891 22.9386 4.09106 26.1351 3.62607C28.8438 3.23203 31.8901 3.01248 34.5396 3.59297C35.6272 3.83127 36.5433 3.92663 37.55 3.29505C38.1957 2.88991 39.4841 3.07684 39.6651 3.87985C39.809 4.51858 43.0217 2.41818 43.6827 2.09236C44.6745 1.60342 45.105 1.98753 46.0216 2.48958C47.7503 3.43649 49.2982 3.62537 51.259 3.19575C51.6076 3.11937 52.011 3.20318 52.3669 3.18471C52.8876 3.1577 53.3662 2.78749 53.8777 2.78749C54.9479 2.78749 55.8858 2.39027 57 2.39027"
                        stroke="hsl(53deg, 100%, 50%)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav__link-item"
                    activeClassName="nav_active d-flex flex-column"
                    to="/blog"
                  >
                    Blog
                    <svg
                      width="58"
                      height="5"
                      viewBox="0 0 58 5"
                      fill="none"
                      className="nav__underline__svg"
                    >
                      <path
                        d="M1 3.18471C4.34436 3.18471 7.48008 1 10.8705 1C13.2525 1 15.1058 1.72336 17.3165 2.34614C20.3083 3.18891 22.9386 4.09106 26.1351 3.62607C28.8438 3.23203 31.8901 3.01248 34.5396 3.59297C35.6272 3.83127 36.5433 3.92663 37.55 3.29505C38.1957 2.88991 39.4841 3.07684 39.6651 3.87985C39.809 4.51858 43.0217 2.41818 43.6827 2.09236C44.6745 1.60342 45.105 1.98753 46.0216 2.48958C47.7503 3.43649 49.2982 3.62537 51.259 3.19575C51.6076 3.11937 52.011 3.20318 52.3669 3.18471C52.8876 3.1577 53.3662 2.78749 53.8777 2.78749C54.9479 2.78749 55.8858 2.39027 57 2.39027"
                        stroke="hsl(53deg, 100%, 50%)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClassName=""
                    className="nav__link-item"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClassName=""
                    className="nav__link-item"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </NavbarWrapper>
    </Sizing1100px>
  );
}

const NavbarWrapper = styled.div`
  .nav__link-item {
    position: relative;
    padding: 10px;
    text-decoration: none;
    color: var(--color-text);
    font-weight: var(--font-weight-medium);
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header__wrapper {
    height: 60px !important;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
  }

  .header__logo {
    display: flex;
    font-size: 24px;
    letter-spacing: -1px;
    padding: 0px;
    text-decoration: none;
    color: var(--color-primary) !important;
    margin-right: 32px;
    font-weight: var(--font-weight-bold);
  }

  .nav__underline__svg {
    position: absolute;
    display: flex;
    justify-content: center;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;
  }

  .nav__link-item > svg {
    display: none;
  }

  .nav__link > li {
    margin: 10px !important;
  }

  .nav_active > svg {
    display: block;
  }

  .img-wrapper {
    border: 1px solid blue;
    background-position: top center;
    height: 200px;
    width: 200px;
    z-index: 5;
  }

  @media (prefers-reduced-motion: no-preference) {
    .nav__underline__svg > path {
      stroke-dasharray: 45;
      stroke-dashoffset: 45;
      animation: 500ms cubic-bezier(0.27, 0.22, 0.44, 1.03) 250ms 1 normal both
        running dash;
    }
  }

  .hero__art-wrapper {
    position: absolute;
    z-index: 6;
    right: 21px;
    top: 90px;
    bottom: 10px;
    border: 1px solid red;
    height: 200px;
  }

  @keyframes dash {
    from {
      stroke-dashoffset: 32;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @media (min-width: 769px) {
    .hero__container {
      height: 400px;
    }
  }
`;
