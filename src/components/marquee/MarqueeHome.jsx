import React from 'react'
import Marquee from 'react-fast-marquee'
import { useQuery } from "@tanstack/react-query";
import { getBtc } from "../../components/api/getApi";

const MarqueeHome = () => {
    const postsQuery = useQuery({
        queryKey: ["btc"],
        queryFn: getBtc,
        refetchInterval: 1000,
      });
  return (
    <Marquee>
            <span style={{ padding: "0rem 1rem " }}>
              NOTE: Price can be affected by market volatility and can change. Updates still incoming! <span style={{ color: "red"}}></span> 
            </span>
            <span>
            BTC:{" "}
            {postsQuery.data && (
              <span style={{ color: "green", padding: "0rem 2rem 0rem 0rem" }}>
                {" "}
                ${postsQuery.data.USD.last}
              </span>
            )}
            </span>
            {/* USDT:{" "}
            {postsQuery.data && (
              <span style={{ color: "green", padding: "0rem 2rem 0rem 0rem" }}>
                {" "}
                N1180.89
              </span>
            )} */}
            
          </Marquee>
  )
}

export default MarqueeHome
