"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
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
    <>
      {menuItems.map((menu, index) => (
        <li
          key={index}
          className={`${menu.subMenu ? "menu-item-has-children" : ""} ${
            checkActiveLink(menu) ? "current-menu-item" : ""
          }`}
        >
          <Link href={menu.href} title="">
            {menu.title}
          </Link>
          {menu.subMenu && (
            <ul className="sub-menu">
              {menu.subMenu.map((sub, subIndex) => (
                <li
                  key={subIndex}
                  className={`${checkActiveLink(sub) ? "current-item" : ""}`}
                >
                  <Link href={sub.href} title="">
                    {sub.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
}
