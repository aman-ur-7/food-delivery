import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import FoodSeller from "../Auth/FoodSeller";

const MainPage = ({ sendDataToApp }) => {
  return (
    <div className="main-page">
      <div className="inside-tabs">
        <Tabs className="tabs">
          <TabList className="tablist">
            <Tab>Register</Tab>
            <Tab>Login</Tab>
            <Tab>Food seller</Tab>
          </TabList>

          <TabPanels className="tab-panels">
            <TabPanel>
              <Register />
            </TabPanel>
            <TabPanel>
              <Login sendDataToMain={sendDataToApp} />
            </TabPanel>
            <TabPanel>
              <FoodSeller />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default MainPage;
