import React, { useState } from "react";
import { Link } from "react-router-dom";

import HeaderLogo from "../assets/img/interior-logo-shorted.jpeg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="relative z-[1000]">
      <div id="header-sticky" className="header-1 relative">
        <div className="container relative">
          <div className="mega-menu-wrapper relative">
            <div className="header-main flex justify-between items-center relative">
              {/* ===== Left Section ===== */}
              <div className="header-left flex items-center">
                {/* Logo */}
                <div className="logo w-24">
                  <Link to="/" className="header-logo-2" onClick={handleLinkClick}>
                    <img src={HeaderLogo} alt="logo-img" width={200} />
                  </Link>
                </div>

                {/* ===== Main Menu ===== */}
                <div
                  className={`mean__menu-wrapper md:block ${
                    isMenuOpen ? "block" : "hidden"
                  }`}
                >
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul
                        className={`${
                          isMenuOpen
                            ? "flex flex-col items-start bg-white p-5 rounded-md shadow-lg absolute top-full left-0 w-full z-[9999]"
                            : ""
                        } md:flex md:flex-row md:items-center md:space-y-0 md:space-x-6 md:static md:shadow-none md:bg-transparent`}
                      >
                        {[
                          { name: "Home", to: "/" },
                          { name: "About", to: "/about" },
                          { name: "Services", to: "/services" },
                          { name: "Projects", to: "/projects" },
                          { name: "Blog", to: "/blog" },
                          { name: "Pricing", to: "/pricing" },
                          { name: "Contact", to: "/contact" },
                        ].map((item) => (
                          <li
                            key={item.name}
                            className={`w-full md:w-auto py-2 md:py-0 border-b border-gray-200 last:border-b-0 md:border-none`}
                          >
                            <Link
                              to={item.to}
                              onClick={handleLinkClick}
                              className="block w-full hover:text-red-500 transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              {/* ===== Right Section ===== */}
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="menu-cart hidden md:block">
                  <div className="cart-box">
                    <ul>
                      <li>
                        <img src="assets/img/shop/cart-2.jpg" alt="image" />
                        <div className="cart-product">
                          <a href="#0">Gothelf learn</a>
                          <span>168$</span>
                        </div>
                      </li>
                    </ul>

                    <ul>
                      <li className="border-none">
                        <img src="assets/img/shop/cart-3.jpg" alt="image" />
                        <div className="cart-product">
                          <a href="#0">Gothelf learn</a>
                          <span>168$</span>
                        </div>
                      </li>
                    </ul>

                    <div className="shopping-items d-flex align-items-center justify-content-between">
                      <span>Shopping : $20.00</span>
                      <span>Total : $168.00</span>
                    </div>

                    <div className="cart-button d-flex justify-content-between mb-4">
                      <a href="shop-cart.html" className="theme-btn">
                        View Cart
                      </a>
                      <a href="checkout.html" className="theme-btn bg-red-2">
                        Checkout
                      </a>
                    </div>
                  </div>

                  <a href="shop-cart.html" className="cart-icon">
                    <i className="far fa-shopping-cart"></i>
                  </a>
                </div>

                <a
                  href="#0"
                  className="search-trigger search-icon hidden md:block"
                >
                  <i className="fal fa-search"></i>
                </a>

                <div className="header-button hidden md:block">
                  <Link to="/contact" className="theme-btn bg-red-2">
                    Get a quote<i className="fas fa-long-arrow-right"></i>
                  </Link>
                </div>

                {/* ===== Hamburger (visible only on mobile) ===== */}
                <div className="header__hamburger d-xl-none my-auto md:hidden">
                  <div
                    className="sidebar__toggle cursor-pointer"
                    onClick={toggleMenu}
                  >
                    <i
                      className={`far ${isMenuOpen ? "fa-times" : "fa-bars"}`}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
