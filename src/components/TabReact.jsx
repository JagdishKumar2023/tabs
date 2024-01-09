import React, { useState } from "react";

const TabReact = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // State to track active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-buttons">
        <button
          onClick={() => handleTabClick("tab1")}
          className={activeTab === "tab1" ? "active" : ""}
        >
          Tab 1
        </button>
        <button
          onClick={() => handleTabClick("tab2")}
          className={activeTab === "tab2" ? "active" : ""}
        >
          Tab 2
        </button>
        <button
          onClick={() => handleTabClick("tab3")}
          className={activeTab === "tab3" ? "active" : ""}
        >
          Tab 3
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "tab1" && <div>Content for Tab 1</div>}
        {activeTab === "tab2" && <div>Content for Tab 2</div>}
        {activeTab === "tab3" && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default TabReact;
