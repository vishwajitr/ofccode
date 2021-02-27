import React, { Component } from "react";
import { useRouter } from 'next/router'

import Link from "next/link";
import Card from "./Cards/Card";

const LeftSide = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router.asPath);
  return (
    <div id="LeftSide" className=" container-codepage">
      <h1>{(props) ? props.headerTag1: "" } </h1>
      <p>{(props) ? props.description: "" } </p>
      <Card  {...props}  />
      
    </div>
  );
};

export default LeftSide;
