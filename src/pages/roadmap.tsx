import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { RoadMapHeader, RoadMapView } from "views/roadmap";

const RoadMapPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{"Roadmap | Prickly Pete's Platoon"}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <RoadMapHeader />
      <RoadMapView />
    </div>
  );
};

export default RoadMapPage;
