import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";

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

  const transactionData = [
    {
      id: 1,
      amount: "-$86.00",
      date: "14 Sep 2023",
      title: "Taxi",
      subtitle: "Uber Car",
      art: {
        background: colors.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-$869.00",
      date: "23 Sep 2023",
      title: "Shopping",
      subtitle: "Ali Express",
      art: {
        background: colors.tertiary,
        icon: "cart",
      },
    },
    {
      id: 3,
      amount: "-$126.00",
      date: "14 Aug 2023",
      title: "Travel",
      subtitle: "Emirate",
      art: {
        background: colors.accent,
        icon: "airplane",
      },
    },
  ];
  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData}/>
    </HomeContainer>
  );
};

export default Home;
