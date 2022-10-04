import * as React from "react";
import Index from "../components/pages/ApplicationSecurity/index";
import "../styles/main.scss";

const IndexPage = () => {
  return (
    <main>
      <Index />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
