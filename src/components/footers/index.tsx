import React from "react";
import Choice from "./choice";
import Footer from "./footer";
import Testimonials from "./testimonials";

export default function Footers() {
  return (
    <div className="relative gradient-footers">
      <Testimonials />
      <Choice />
      <Footer />
    </div>
  );
}
