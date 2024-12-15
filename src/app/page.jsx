// src/app/page.jsx
import React from "react";
import Layout from "./layout"; // Correct path to layout.js
import HorizontalScroll from "@/components/HorizontalScroll"; // Correct path to HorizontalScroll
import styles from "./home.module.css";

const Page = () => {
  const items = [
    {
      image: "/Case.jpg",
      title: "Legal Support",
      description: "Get expert advice for your legal concerns.",
      link: "/legal-support",
    },
    {
      image: "/Election.jpg",
      title: "Criminal Cases",
      description: "Find the best lawyers for criminal cases.",
      link: "/criminal-cases",
    },
    {
      image: "/Election.jpg",
      title: "Criminal Cases",
      description: "Find the best lawyers for criminal cases.",
      link: "/criminal-cases",
    },
    {
      image: "/Election.jpg",
      title: "Criminal Cases",
      description: "Find the best lawyers for criminal cases.",
      link: "/criminal-cases",
    },
    {
      image: "/Election.jpg",
      title: "Criminal Cases",
      description: "Find the best lawyers for criminal cases.",
      link: "/criminal-cases",
    },
    // Add more items as needed
  ];

  return (
    <Layout>
      <div className={styles.mainContent}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Fight for your rights.</h1>
        </div>
        <div className={styles.horizontalSection}>
          <h2 className={styles.scrollTitle}>Current Affairs</h2>
          <HorizontalScroll items={items} />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLogo}>Team Yukkthiya</div>
        <div className={styles.footerText}>Yukkthiya © All rights reserved.</div>
      </div>
    </Layout>
  );
};

export default Page;
