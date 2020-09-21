import Head from "next/head";
import React, { useState, useEffect, ReactNode } from "react";
import Header from "../header/Header";
import Router from 'next/router';
import Link from 'next/link';

const Layout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {});
  return (
    <div>
      <Header></Header>
      <div>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6  sm:px-0">
              <div className="border-4 border-dashed  border-gray-200 rounded-lg h-96">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
