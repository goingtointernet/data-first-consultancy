"use client";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      mirror: false,
      offset: 50,
    });
  }, []);

  return children;
}
