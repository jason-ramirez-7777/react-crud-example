import { FC } from "react";
import Header from "../layout/Header";
import HomeComponent1 from "./HomeComponent1";
import HomeComponent2 from "./HomeComponent2";
import HomeComponent3 from "./HomeComponent3";
import HomeComponent4 from "./HomeComponent4";
import HomeComponent5 from "./HomeComponent5";
import HomeComponentFooter from "./HomeComponentFooter";

const LandingPage: FC = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <HomeComponent1 />
      <HomeComponent2 />
      <HomeComponent3 />
      <HomeComponent4 />
      <HomeComponent5 />
      <HomeComponentFooter />
    </div>
  );
};

export default LandingPage;
