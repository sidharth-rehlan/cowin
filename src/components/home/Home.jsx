import React, { useState } from "react";
import SearchTabs from "components/searchTabs";
import SearchByMap from "components/searchByMap";
import SearchByDistrict from "components/searchByDistrict";
import SearchByPin from "components/searchByPin";
import { searchTypes } from "configs/config";
import "./style.scss";

function Home() {
  const [selectedTab, setSelectedTab] = useState(searchTypes.searchByPin);

  const tabClickHandler = (name) => {
    setSelectedTab(name);
  };
  return (
    <main className="container-fluid">
      <h2 className="main-heading">
        Check your nearest vaccination center and slots availability
      </h2>
      <SearchTabs tabClickHandler={tabClickHandler} />
      {selectedTab === searchTypes.searchByMap && <SearchByMap />}
      {selectedTab === searchTypes.searchByPin && <SearchByPin />}
      {selectedTab === searchTypes.searchByDistrict && <SearchByDistrict />}
    </main>
  );
}

export default Home;
