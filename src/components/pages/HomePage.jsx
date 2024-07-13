import React from "react";
import Hero from "../Hero";
import HomeCards from "../HomeCards";
import Joblistings from "../JobListings";
import ViewAllJobs from "../ViewAllJobs";

// import HomeCards from "../components/HomeCards";
// import JobListings from "../components/JobListings";
// import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HomeCards />
      <Joblistings isHome={true} />
      <ViewAllJobs />
    </div>
  );
};

export default HomePage;
