import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const DAYS = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];

const COLLABS = [
  {
    init: "MG",
    name: "Maria Gonzalez",
    score: 4.9,
    reviews: 127,
    rate: 900,
    badge: true,
    color: "#E1F5EE",
    textColor: "#085041",
    review: '"Puntual, ordenada y muy profesional."',
  },
  {
    init: "LM",
    name: "Laura Mendez",
    score: 4.8,
    reviews: 83,
    rate: 850,
    badge: true,
    color: "#E6F1FB",
    textColor: "#042C53",
    review: '"Excelente limpieza, muy recomendable."',
  },
  {
    init: "SP",
    name: "Sofia Perez",
    score: 4.5,
    reviews: 41,
    rate: 800,
    badge: false,
    color: "#FAEEDA",
    textColor: "#412402",
    review: '"Buen trabajo, muy amable."',
  },
  {
    init: "CR",
    name: "Carolina Rios",
    score: 4.3,
    reviews: 22,
    rate: 780,
    badge: false,
    color: "#FBEAF0",
    textColor: "#4B1528",
    review: '"Cumplio con todo lo acordado."',
  },
];

const styles = `
  :root {
    --bg-primary: #ffffff;
    --bg-secondary: #f7f7f5;
    --border-secondary: #bebdb7;
    --border-tertiary: #deddd8;
    --text-primary: #262521;
    --text-secondary: #6f6d67;
    --text-tertiary: #9b9991;
    --green: #1d9e75;
    --green-dark: #085041;
    --green-soft: #e1f5ee;
    --green-line: #5dcaa5;
  }

  * { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background:
      radial-gradient(circle at top, #f8fbf9 0%, #edf2ee 42%, #e7ece8 100%);
    color: var(--text-primary);
  }

  .page {
    min-height: 100vh;
    padding: 28px 16px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .phone {
    background: var(--bg-secondary);
    padding: 20px 16px;
    border-radius: 36px;
    box-shadow: 0 30px 80px rgba(28, 52, 44, 0.12);
  }

  .screen {
    width: 340px;
    min-height: 700px;
    background: var(--bg-primary);
    border: 0.5px solid var(--border-tertiary);
    border-radius: 32px;
    overflow: hidden;
    display: flex;
