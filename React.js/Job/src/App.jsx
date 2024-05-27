import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Homecards from "./components/Homecards";
import JobListing from "./components/JobListing";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skill set"
      />

      <Homecards />
      <JobListing />
      <ViewAllJobs />
    </div>
  );
};

export default App;
