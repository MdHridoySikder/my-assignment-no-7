import { Suspense } from "react";
import DataContainer from "./assets/components/DataContainer";
import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";
import { ToastContainer } from "react-toastify";

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
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-semibold">
                  <span className="loading loading-spinner text-primary"></span>
                  <span className="loading loading-spinner text-secondary"></span>
                  <span className="loading loading-spinner text-accent"></span>
                  <span className="loading loading-spinner text-neutral"></span>
                  <span className="loading loading-spinner text-info"></span>
                  <span className="loading loading-spinner text-success"></span>
                  <span className="loading loading-spinner text-warning"></span>
                  <span className="loading loading-spinner text-error"></span>
                </p>
              </div>
            }
          >
            <DataContainer promise={dataPromise}></DataContainer>
          </Suspense>
        </section>
        <footer>
          <Footer></Footer>
        </footer>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          theme="colored"
          progress={undefined}
        ></ToastContainer>
      </div>
    </>
  );
}

export default App;
