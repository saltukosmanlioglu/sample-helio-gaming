import React, { useState } from "react";
import { View, Text } from "react-native";

import Menu from "components/menu";

import { TabEnum } from "./enum";
import { AddNumber, Contacts } from "./tabs";

const Home: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.Contacts);

  const menuItems = [
    {
      onPress: () => setActiveTab(0),
      text: "Contacts",
    },
    {
      onPress: () => setActiveTab(1),
      text: "Add Number",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {activeTab === TabEnum.Contacts ? <Contacts /> : <AddNumber />}

      <Menu activeMenu={activeTab} menuItems={menuItems} />
    </View>
  );
};

export default Home;
