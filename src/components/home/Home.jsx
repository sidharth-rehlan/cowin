import React, { useState } from "react";
import SearchTabs from "components/searchTabs";
import SearchByPin from "components/searchByPin";
import SearchByMap from "components/searchByMap";
import SearchByDistrict from "components/searchByDistrict";
import { searchTypes } from "config";

function Home() {
  const [selectedTab, setSelectedTab] = useState(searchTypes.searchByPin);

  const tabClickHandler = (name) => {
    setSelectedTab(name);
  };
  return (
    <main>
      <h2>Check your nearest vaccination center and slots availability</h2>
      <SearchTabs tabClickHandler={tabClickHandler} />
      {selectedTab === searchTypes.searchByMap && <SearchByMap />}
      {selectedTab === searchTypes.searchByPin && <SearchByPin />}
      {selectedTab === searchTypes.searchByDistrict && <SearchByDistrict />}
    </main>
  );
}

export default Home;
