import React, { Component } from "react";
import axios from "axios";
const AboutPage = (props) => {
  return (
    <section>
      <h2>About Us</h2>
      <p>
        Welcome to OffersCode, your number one source for all things offers,
        deals and coupons. We’re dedicated to providing you the best of deals,
        with a focus on dependability. customer service.
      </p>
      <p>
        We’re working to turn our passion for offering deals into a booming
        online space. We hope you enjoy our deals and offers as much as we enjoy
        offering them to you.
      </p>
      <p>Sincerely, <br/>OffersCode.in</p>
    </section>
  );
};

// export const getStaticProps = async () => {
//   const res = await axios.get(`https://api.chucknorris.io/jokes/random`);
//   return {
//     props: {
//       value: res.data.value,
//     },
//   };
// };

export default AboutPage;
