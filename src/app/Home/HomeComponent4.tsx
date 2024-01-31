import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import HomeComponent4SubCard from "./HomeComponent4SubCard";
import {
  Bolt,
  BookOnline,
  Extension,
  FavoriteBorder,
  NightlightRound,
  Refresh,
} from "@mui/icons-material";

const HomeComponent4: FC = () => {
  return (
    <div className="w-full flex flex-col p-32 bg-gradient-to-b from-white to-gray-100 dark:from-[#222B45] dark:to-[#1A2239] relative">
      <div className="w-full flex justify-between">
        <div className="w-1/2 flex flex-col pr-8">
          <Typography variant="h4" className="font-bold pb-8 dark:text-gray-50">
            The Powerful and flexible them for all kinds of businesses
          </Typography>

          <Typography className="text-gray-500 text-lg dark:text-gray-400">
            Whether you are creating a subscription service, an on-demand
            marketplace, an e-commerce store, or a portfolio showcase, theFront
            helps you create the best possible product for your users.
          </Typography>

          <div className="flex justify-between pt-16">
            <div className="flex flex-col w-1/3 pr-2">
              <Typography variant="h3" className="text-blue-400 pb-4">
                300 +
              </Typography>
              <Typography className="text-gray-500 dark:text-gray-400">
                300 + component compositions, which will help you to build any
                page easily.
              </Typography>
            </div>

            <div className="flex flex-col w-1/3 pr-2 pl-2">
              <Typography variant="h3" className="text-blue-400 pb-4">
                45 +
              </Typography>
              <Typography className="text-gray-500 dark:text-gray-400">
                45 + landing and supeported pages to build a professional
                website.
              </Typography>
            </div>

            <div className="flex flex-col w-1/3 pl-2">
              <Typography variant="h3" className="text-blue-400 pb-4">
                99%
              </Typography>
              <Typography className="text-gray-500 dark:text-gray-400">
                99% of our cusotomers rated 5-star our themes over 5 years.
              </Typography>
            </div>
          </div>
        </div>
        <img
          className="w-1/2 rounded-sm shadow-sm"
          src="./imgs/happy-developer.png"
          alt = ""
        />
      </div>

      <div className="w-full flex pt-8 pb-8">
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <HomeComponent4SubCard
              title="Themeable"
              content="Customize any part of your component to match your design needs."
              icon={<BookOnline fontSize="medium"></BookOnline>}
            />
          </Grid>
          <Grid item xs={4}>
            <HomeComponent4SubCard
              title="Lignt and Dark UI"
              content="Optimized for multiple color modes. Use light or dark, your choice."
              icon={<NightlightRound fontSize="medium"></NightlightRound>}
            />
          </Grid>
          <Grid item xs={4}>
            <HomeComponent4SubCard
              title="Composable"
              content="Designed with composition in mind. Compose new components with ease."
              icon={<Extension fontSize="medium"></Extension>}
            />
          </Grid>
          <Grid item xs={4}>
            <HomeComponent4SubCard
              title="Developer Experience"
              content="Guaranted to boost your productivity when building your app or website."
              icon={<Refresh fontSize="medium"></Refresh>}
            />
          </Grid>
          <Grid item xs={4}>
            <HomeComponent4SubCard
              title="Continouse Updates"
              content="When continually deploy improvments and new updates to theFront."
              icon={<FavoriteBorder fontSize="medium"></FavoriteBorder>}
            />
          </Grid>
          <Grid item xs={4}>
            <HomeComponent4SubCard
              title="Free Support"
              content="6 months of three technical support to help you build your website faster."
              icon={<Bolt fontSize="medium"></Bolt>}
            />
          </Grid>
        </Grid>
      </div>
      
    </div>
  );
};

export default HomeComponent4;
