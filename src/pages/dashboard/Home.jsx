import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Dashboard Home Page</title>
      </Helmet>
      <div className="bg-blue-600 h-full w-full">Home Page of dasboard</div>
    </>
  );
}

export default Home;
