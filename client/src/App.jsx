import React from "react";
import SiteHeader from "./components/SiteHeader";
import Chat from "./pages/Chat";

const App = () => {
  return (
    <>
      <SiteHeader />
      <div className="p-4">
        <Chat />
      </div>
    </>
  );
};

export default App;
