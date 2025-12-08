import { Suspense } from "react";
import DataContainer from "./assets/components/DataContainer";
import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";

const loadData = () => fetch("/public/data.json").then((res) => res.json());

function App() {
  const dataPromise = loadData();
  // console.log(dataPromise);

  return (
    <>
      <div>
        <header className="w-11/12 mx-auto py-3 ">
          <Navbar></Navbar>
        </header>
        <section>
          <Suspense fallback={"Loadinggggggg....."}>
            <DataContainer promise={dataPromise}></DataContainer>
          </Suspense>
        </section>
        {/* <footer>
          <Footer></Footer>
        </footer> */}
      </div>
    </>
  );
}

export default App;
