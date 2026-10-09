// import React from "react";
// import List from "../../../components/List/List";
// import ProductList from "../../../components/ProductList/ProductList";
// import Banner from "../../../components/Banner/Banner";
// import BannerTwo from "../../../components/Banner2/BannerTwo";
// import ProductListTwo from "../../../components/ProductList2/ProductListTwo";
// import "./Home.css"; // Ensure the correct path is provided
// import ChatQNA from "../../../components/ChatQNA/ChatQNA";

// const Home = () => {
//   return (
//     <>
//       <ChatQNA />
//       <div style={{ padding: "20px" }}>
//         <section style={{ marginBottom: "20px", marginTop: "135px" }}>
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <Banner />
//           </div>
//         </section>

//         {/* Product Listings Section */}
//         <section>
//           <h2
//             style={{
//               textAlign: "center",
//               marginTop: "50px",
//               marginBottom: "70px",
//             }}
//             className="neon-border"
//           >
//             <span className="SpanTag">Featured Products</span>
//           </h2>
//           <List />
//         </section>

//         <section>
//           <h2
//             style={{
//               textAlign: "center",
//               marginTop: "70px",
//               marginBottom: "70px",
//             }}
//             className="neon-border"
//           >
//             <span className="SpanTag">LATEST BIDS</span>
//           </h2>
//           <div className="neon-border">
//             <ProductListTwo />
//           </div>
//         </section>

//         <section>
//           <div
//             style={{
//               textAlign: "center",
//               marginTop: "70px",
//               marginBottom: "70px",
//             }}
//           >
//             <BannerTwo />
//           </div>
//         </section>

//         <section>
//           <h2
//             style={{
//               textAlign: "center",
//               marginTop: "110px",
//               marginBottom: "70px",
//             }}
//             className="neon-border"
//           >
//             <span className="SpanTag">More to explore</span>
//           </h2>
//           <ProductList />
//         </section>
//       </div>
//     </>
//   );
// };

// export default Home;

import React from "react";
import { Helmet } from "react-helmet-async";

import List from "../../../components/List/List";
import ProductList from "../../../components/ProductList/ProductList";
import Banner from "../../../components/Banner/Banner";
import BannerTwo from "../../../components/Banner2/BannerTwo";
import ProductListTwo from "../../../components/ProductList2/ProductListTwo";
import ChatQNA from "../../../components/ChatQNA/ChatQNA";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* 🔥 SEO START */}
      <Helmet>
        <title>Auction X | Live Online Bidding Platform</title>
        <meta
          name="description"
          content="Auction X is a real-time online auction platform offering secure bidding, instant refunds, and live auctions across multiple categories."
        />
        <meta
          name="keywords"
          content="Auction X, online auction, live bidding, real time auction, MERN auction app, buy and sell online"
        />
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_CLIENT_URL}/`}
        />

        {/* Open Graph (for social sharing) */}
        <meta
          property="og:title"
          content="Auction X | Live Online Bidding Platform"
        />
        <meta
          property="og:description"
          content="Bid live on Auction X – a secure, real-time online auction platform."
        />
        <meta
          property="og:url"
          content={`${process.env.REACT_APP_CLIENT_URL}/`}
        />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* 🔥 SEO END */}

      <ChatQNA />

      <div style={{ padding: "20px" }}>
        <section style={{ marginBottom: "20px", marginTop: "135px" }}>
          <Banner />
        </section>

        <section>
          <h2 className="neon-border">
            <span className="SpanTag">Featured Products</span>
          </h2>
          <List />
        </section>

        <section>
          <h2 className="neon-border">
            <span className="SpanTag">LATEST BIDS</span>
          </h2>
          <div className="neon-border">
            <ProductListTwo />
          </div>
        </section>

        <section>
          <BannerTwo />
        </section>

        <section>
          <h2 className="neon-border">
            <span className="SpanTag">More to explore</span>
          </h2>
          <ProductList />
        </section>
      </div>
    </>
  );
};

export default Home;
