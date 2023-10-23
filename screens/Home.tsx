import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

// Card Logo
import logo from "../assets/icon.png";

const Home: FunctionComponent = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: "3876357656",
      balance: 30000.56,
      alias: "Work Debit",
      logo: logo,
    },
    {
      id: 2,
      accountNo: "3872034656",
      balance: 30000.56,
      alias: "Work Debit",
      logo: logo,
    },
    {
      id: 3,
      accountNo: "38763534656",
      balance: 30000.56,
      alias: "Work Debit",
      logo: logo,
    },
  ];
  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData}/>
    </HomeContainer>
  );
};

export default Home;
