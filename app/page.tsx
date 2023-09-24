import { Hero, SearchBar } from "@/components";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-y padding-x max-width" id="discover">
        
        {/* text container */}
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Cars Catalogue</h1>
          <p>Explore the cars you migth like</p>
        </div>

        {/* search section */}
        <div className="home__filters">
          <SearchBar/>
          
          <div className="home__filter-container">
            {/* <CustomFilter title={"fuel"}/> */}
            {/* <CustomFilter title={"year"}/> */}
          </div>
        </div>


      </div>
    </main>
  );
}
