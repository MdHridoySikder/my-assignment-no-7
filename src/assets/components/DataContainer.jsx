import States from "./States";
import Ordercard from "./Ordercard";
import { use } from "react";

const DataContainer = ({ promise }) => {
  //   console.log(Orders);
  const Orders = use(promise);
  console.log(promise);

  return (
    <div>
      <States></States>

      <section className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* left side card section  */}
        <div className="lg:col-span-7 ">
          <h2 className="font-bold text-3xl">Customer Tickets</h2>
          <div className=" grid grid-cols-2 gap-4 ">
            {Orders.map((item) => (
              <Ordercard key={item.id} Order={item}></Ordercard>
            ))}
          </div>
        </div>
        {/* right side cart section */}
        <div className="lg:col-span-5 ml-5">
          <div>
            <h2 className="font-bold text-3xl shadow my-4">Task Status</h2>
            <div className="space-y-6"></div>
          </div>
          <div>
            <h2 className="font-bold text-3xl shadow">Resolved Task</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataContainer;
