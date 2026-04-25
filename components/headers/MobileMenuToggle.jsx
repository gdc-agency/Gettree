"use client";
import toggleMobilemenu from "@/utlis/toggleMobilemenu";
import React from "react";

export default function MobileMenuToggle() {
  return (
    <div className="btn-menu" onClick={toggleMobilemenu}>
      <span />
    </div>
  );
}
