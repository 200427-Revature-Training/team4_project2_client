import React from "react";
import "./home.component.css";

export const HomeComponent: React.FC = () => {
  return (
    <React.Fragment>
      <main className="container">
        <div id="content-container">This is the home page</div>
      </main>
      <footer id="copyright">
        &copy; 2020 TempestSociety Inc- All Right Reserved
      </footer>
    </React.Fragment>
  );
};
