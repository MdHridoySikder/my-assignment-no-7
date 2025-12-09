import States from "./States";
import Ordercard from "./Ordercard";
import { use, useState } from "react";
import TaskStatus from "./TaskStatus";
import Resolved from "./Resolved";

const DataContainer = ({ promise }) => {
  const Order = use(promise);

  //   console.log(promise);
  const [CustomerTickets, setCustomerTickets] = useState([]);
  const [ResolvedTask, setResolvedTask] = useState([]);
  const handleOrder = (Order) => {
    // console.log(Order);
    const isExist = CustomerTickets.find((item) => item.id == Order.id);
    // console.log(isExist);
    if (isExist) {
      alert("In-Progress");
      return;
    }

    const newCustomerTickets = [...CustomerTickets, Order];
    setCustomerTickets(newCustomerTickets);
  };

  const handleTask = (Order) => {
    // console.log(Order);
    const newResolvedTask = [...ResolvedTask, Order];
    setResolvedTask(newResolvedTask);

    const remaining = CustomerTickets.filter((item) => item.id !== Order.id);
    // console.log(remaining);
    setCustomerTickets(remaining);
  };
  return (
    <div>
      <States
        inProgress={CustomerTickets.length}
        ResolvedTaskTotal={ResolvedTask.length}
      ></States>

      <section className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* left side card section  */}
        <div className="lg:col-span-7 ">
          <h2 className="font-bold text-3xl">Customer Tickets</h2>
          <div className=" grid lg:grid-cols-2 gap-4 ">
            {Order.map((item) => (
              <Ordercard
                handleOrder={handleOrder}
                key={item.id}
                Order={item}
              ></Ordercard>
            ))}
          </div>
        </div>
        {/* right side cart section */}
        <div className="lg:col-span-5 ml-5">
          <div>
            <h2 className="font-bold text-3xl shadow my-4">Task Status</h2>
            <div className="space-y-6 shadow p-5">
              {CustomerTickets.map((item) => (
                <TaskStatus
                  handleTask={handleTask}
                  key={item.id}
                  Order={item}
                ></TaskStatus>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-bold mt-5 text-3xl shadow">Resolved Task</h2>
            <div className="space-y-6 shadow p-5">
              {ResolvedTask.map((Order) => (
                <Resolved key={Order.id} Order={Order}></Resolved>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataContainer;
