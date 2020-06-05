import React from "react";
import { Footer } from '@carbon/ibmdotcom-react';
import footerThin from './footer-legal.json';
import "./footer.scss";
import "@carbon/ibmdotcom-styles";

/* 

import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from '@carbon/ibmdotcom-react';
import 'yourapplication.scss';
import '@carbon/ibmdotcom-styles/scss/components/footer/index.scss' */


const IBMFooter = () => {
  const props = () => ({
    type: "short",
    navigation: footerThin,
  });

  return <Footer {...props()}></Footer>;
};

export default IBMFooter;
