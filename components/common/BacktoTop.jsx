"use client";

import { useEffect } from "react";

export default function BacktoTop() {
  useEffect(() => {
    const handleScroll = () => {
      const goTopButton = document.querySelector(".go-top");
      if (window.scrollY > 800) {
        goTopButton.classList.add("show");
      } else {
        goTopButton.classList.remove("show");
      }
    };

    const handleGoTopClick = (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Add click event listener to the go-top button
    const goTopButton = document.querySelector(".go-top");
    goTopButton.addEventListener("click", handleGoTopClick);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      goTopButton.removeEventListener("click", handleGoTopClick);
    };
  }, []);
  return (
    <div className="button-go-top">
      <a href="#" title="" className="go-top">
        <i className="fa fa-chevron-up" />
      </a>
    </div>
  );
}
