import React, { Component } from "react";
import Loader from "./Loader";

export default function Home() {
    return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the Cost Calculator</h1>
        <div className="loader"><Loader /></div>
      </header>
    </section>
  );
}
