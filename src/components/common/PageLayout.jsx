import React from "react";
import Footer from "/src/components/common/Footer";

function PageLayout({ children, navbar }) {
  return (
    <div className="flex flex-col min-h-screen">
      {navbar}
      <main className="flex-grow container mx-auto px-6 py-8 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
