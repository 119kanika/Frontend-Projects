import Hero from "../components/Hero";
import HomeCards from "../components/Homecards";
import JobListing from "../components/JobListing";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePagee = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListing isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePagee;
