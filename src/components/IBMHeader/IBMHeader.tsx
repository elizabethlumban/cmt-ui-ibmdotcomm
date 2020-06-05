import React from "react";
import { Masthead } from '@carbon/ibmdotcom-react/lib/components';
import "./header.scss";
import "@carbon/ibmdotcom-styles";

const IBMHeader = () => {
  const platformData = {
    name: "IBM Cloud",
    url: "https://www.ibm.com/cloud",
  };

  const props = {
    hasProfile: false,
  };

  return <Masthead {...props} platform={platformData} navigation="default" />;
};

export default IBMHeader;
