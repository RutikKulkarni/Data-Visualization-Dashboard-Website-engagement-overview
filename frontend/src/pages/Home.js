import React, { useEffect, useState } from "react";
import { fetchData } from "../services/api";
import PageMetrics from "../components/PageMetrics/PageMetrics";
import PageViews from "../components/PageViews/PageViews";
import AverageTime from "../components/AverageTime/AverageTime";
import AverageSession from "../components/AverageSession/AverageSession";
import PagesPerSession from "../components/PagesPerSession/PagesPerSession";
import BounceRate from "../components/BounceRate/BounceRate";
import TrafficSources from "../components/TrafficSources/TrafficSources";
import SocialReferrals from "../components/SocialReferrals/SocialReferrals";
import PagePerformance from "../components/PagePerformance/PagePerformance";
import { CircularProgress } from "@mui/material";
import styles from "./Home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await fetchData();
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Website Engagement Overview</h1>
      {loading ? (
        <div className={styles.loadingContainer}>
          <CircularProgress />
          <p>Loading...</p>
        </div>
      ) : (
        <div className={styles.graphContainer}>
          <div className={styles.wideContainer}>
            <TrafficSources data={data} />
          </div>
          <div className={styles.wideContainer}>
            <PagePerformance data={data} />
          </div>
          <div className={styles.graph}>
            <PageMetrics data={data} />
          </div>
          <div className={styles.graph}>
            <PageViews data={data} />
          </div>
          <div className={styles.graph}>
            <AverageTime data={data} />
          </div>
          <div className={styles.graph}>
            <AverageSession data={data} />
          </div>
          <div className={styles.graph}>
            <PagesPerSession data={data} />
          </div>
          <div className={styles.graph}>
            <BounceRate data={data} />
          </div>
          <div className={styles.graph}>
            <SocialReferrals data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
