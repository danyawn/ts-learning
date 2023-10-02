import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

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
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title={"fuel"} />
            <CustomFilter title={"year"} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard key={car} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, No Results</h2>
            <p className=""> {allCars?.message} </p>
          </div>
        )}
      </div>
    </main>
  );
}
