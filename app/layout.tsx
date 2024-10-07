'use client'

import localFont from "next/font/local";
import { AnimatePresence } from 'framer-motion';
import "./globals.css";
import { useEffect, useState } from "react";
import Header from '../components/Header';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const computerIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/><path d="M12 15c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"/></svg>`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    createBackgroundElements();
  }, []);

  const createBackgroundElements = () => {
    const container = document.createElement('div');
    container.className = 'blockchain-bg';
    document.body.appendChild(container);

    // Create grid
    const grid = document.createElement('div');
    grid.className = 'blockchain-grid';
    container.appendChild(grid);

    // Create nodes
    const nodeCount = window.innerWidth > 768 ? 15 : 8;
    const nodes: HTMLDivElement[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      node.className = 'blockchain-node';
      node.innerHTML = computerIcon;
      node.style.left = `${Math.random() * 100}vw`;
      node.style.top = `${Math.random() * 100}vh`;
      node.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(node);
      nodes.push(node);
    }

    // Create and update connections
    const updateConnections = () => {
      const connections = container.querySelectorAll('.blockchain-connection');
      connections.forEach(conn => conn.remove());

      nodes.forEach((node, index) => {
        const rect1 = node.getBoundingClientRect();
        for (let j = index + 1; j < nodes.length; j++) {
          const rect2 = nodes[j].getBoundingClientRect();
          const distance = Math.sqrt(
            Math.pow(rect2.left - rect1.left, 2) + Math.pow(rect2.top - rect1.top, 2)
          );
          if (distance < 300) {  // Only connect nearby nodes
            const connection = document.createElement('div');
            connection.className = 'blockchain-connection';
            const angle = Math.atan2(rect2.top - rect1.top, rect2.left - rect1.left);
            connection.style.width = `${distance}px`;
            connection.style.left = `${rect1.left + rect1.width / 2}px`;
            connection.style.top = `${rect1.top + rect1.height / 2}px`;
            connection.style.transform = `rotate(${angle}rad)`;
            container.appendChild(connection);
          }
        }
      });
    };

    // Update connections periodically
    setInterval(updateConnections, 1000);

    // Create data streams
    const streamCount = window.innerWidth > 768 ? 8 : 4;
    for (let i = 0; i < streamCount; i++) {
      const stream = document.createElement('div');
      stream.className = 'data-stream';
      stream.style.left = `${Math.random() * 100}vw`;
      stream.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(stream);
    }
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {isMounted ? (
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        ) : (
          children
        )}
      </body>
    </html>
  );
}