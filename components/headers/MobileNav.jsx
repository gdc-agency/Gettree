"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MobileNav() {
  const handleFaqOpen = (activeMenu) => {
    const mobileMenu = document.querySelector("#mainnav-mobi .menu");
    const menuItemGroups = document.querySelectorAll(
      "#mainnav-mobi .menu-item-has-children"
    );

    if (menuItemGroups) {
      menuItemGroups.forEach((elm) => {
        elm.querySelector(".sub-menu").style.height = "0px";
      });
      const currentFaq = menuItemGroups[activeMenu];
      const faqContent = currentFaq.querySelector(".sub-menu");
      const computedStyle = window.getComputedStyle(faqContent);

      if (currentFaq && computedStyle.height === "0px") {
        faqContent.style.height = faqContent.scrollHeight + "px";
      } else if (currentFaq && !computedStyle.height === "0px") {
        faqContent.style.height = 0 + "px";
      }
    }

    mobileMenu.style.height = "fit-content";
  };
  const pathname = usePathname();
  const checkActiveLink = (item) => {
    let isactive = false;
    if (item.subMenu?.length) {
      if (
        item.subMenu.some(
          (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
        )
      ) {
        isactive = true;
      }
    } else {
      if (item.href.split("/")[1] == pathname.split("/")[1]) {
        isactive = true;
      }
    }
    return isactive;
  };

  return (
    <nav id="mainnav-mobi" className="mainnav">
      <ul className="menu" id="menu-primary-menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${
              item.subMenu ? "menu-item-has-children" : ""
            }  ${checkActiveLink(item) ? "current-menu-item" : ""} `}
          >
            {item.subMenu ? (
              <a
                href="#"
                onClick={() => handleFaqOpen(index)}
                className={`${item.subMenu ? "down" : ""}`}
              >
                {item.title}
              </a>
            ) : (
              <Link
                href={item.href}
                className={` ${checkActiveLink(item) ? "active" : ""} `}
              >
                {item.title}
              </Link>
            )}
            {item.subMenu ? (
              <span
                onClick={() => handleFaqOpen(index)}
                className="btn-submenu"
              ></span>
            ) : (
              ""
            )}
            {item.subMenu && (
              <ul className="sub-menu">
                {item.subMenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className={`menu-item ${
                      checkActiveLink(subItem) ? "current-item" : ""
                    }`}
                  >
                    <Link href={subItem.href}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* /.menu */}
    </nav>
  );
}
