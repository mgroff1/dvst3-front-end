import React, { Component } from "react";
import Loader from "./Loader";

export default function Home() {
    return (
    <section className="welcome-page">
      <header>
        <h1>Calculating the Cost of Moving</h1>
<h3>can be the first step to putting yourself in a better situation</h3>
        <div className="loader"><Loader /></div>
      </header>
    </section>
  );
}
