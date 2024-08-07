// import React, { useState } from "react";
// import "./kitchen.css";
// import Header from "../Header/Header";
// import { useCart } from "react-use-cart";
// import { useLocation, useNavigate } from "react-router-dom";
// import { RiDeleteBin6Line } from "react-icons/ri";; 

// const Kitchen = () => {
//   const navigate = useNavigate();
//   const { items, totalItems ,removeItem} = useCart();
//   const [isCompleted, setIsCompleted] = useState(false);

//   const handleGoToCashier = () => {
//     navigate("/Cashier", { state: { tableNumber } });
//   };
//   const location = useLocation();
//   const tableNumber = location.state.tableNumber;

//   const handleComplete = () => {
//     // Perform any completion logic here
//     setIsCompleted(!isCompleted);
//   };
//   const handleDeleteItem = (item) => {
//     // Call the removeItem function from useCart to delete the item
//     removeItem(item.id);
//   };
//   const {
//     updateItemQuantity
//   }= useCart();

//   return (
//     <>
//       <Header />
//       <div className="kitchen">
//         <section className='menu' id='menu'>
//         <h1 className="heading">
//           Our <span>Orders</span>
//         </h1>
//         <div className="tab1">
//         <div className="tablehead">Table No: {tableNumber}</div><hr></hr>
//         <table className="tables">
//           <thead>
//             <tr>
//               <th>S.N</th>
//               <th>Name</th>
//               <th>Quantity</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{item.name}</td>
//                 <td>{item.quantity}</td>
//                 <td>
//                                             <button className='btn'
//                                                 onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
//                                             >-</button>
//                                             <button className="btn"
//                                                 onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
//                                             >+</button>
//                                             </td>
//                 <td>
//                   {/* Delete button/icon */}
//                   <button className="primaryBtn" onClick={() => handleDeleteItem(item)}>
//                     <RiDeleteBin6Line />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="btn-kitchen">
//           {isCompleted === true ? (
//             <button className="btn btn-primary m-2" onClick={handleGoToCashier}>
//               Send To Cashier
//             </button>
//           ) : (
//             <button className="btn btn-danger m-2" onClick={handleComplete}>
//               Completed
//             </button>
//           )}
//         </div>
//         </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Kitchen;


import React, { useState ,useEffect} from "react";
import "./kitchen.css";
import Header from "../Header/Header";
import { useCart } from "react-use-cart";
import { useLocation, useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";

const Kitchen = () => {
  const navigate = useNavigate();
  const { items, totalItems, removeItem, updateItemQuantity } = useCart();
  const [isCompleted, setIsCompleted] = useState(false);
  const [orderNotes, setOrderNotes] = useState('');
  const [orderStatus, setOrderStatus] = useState('Pending');

  const handleGoToCashier = () => {
    navigate("/Cashier", { state: { tableNumber } });
  };

  const location = useLocation();
  const tableNumber = location.state.tableNumber;
  useEffect(() => {
    const savedNotes = localStorage.getItem('orderNotes');
    if (savedNotes) {
      setOrderNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('orderNotes', orderNotes);
  }, [orderNotes]);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDeleteItem = (item) => {
    removeItem(item.id);
  };

  const handleNotesChange = (e) => {
    setOrderNotes(e.target.value);
  };

  const orderTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="kitchen">
        <section className="menu" id="menu">
          <h1 className="heading">
            Our <span>Orders</span>
          </h1>
          <div className="tab1">
            <div className="tablehead">Table No: {tableNumber}</div>
            <hr />
            <div className="customer-details">
              <p><strong>Name:</strong> Junu Darnal</p>
              <p><strong>Contact:</strong> 9810333436</p>
            </div>
            <table className="tables">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button className="btn" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                      <button className="btn" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                    </td>
                    <td>
                      <button className="primaryBtn" onClick={() => handleDeleteItem(item)}>
                        <RiDeleteBin6Line />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div className="order-status">
              <p><strong>Status:</strong> {orderStatus}</p>
              {/* <button onClick={() => setOrderStatus('In Progress')}>In Progress</button>
              <button onClick={() => setOrderStatus('Completed')}>Completed</button>
               </div>*/}
           
            <textarea value={orderNotes} onChange={handleNotesChange} placeholder="Special instructions or notes"></textarea>
            {/* <p><strong>Total Price:</strong> Rs{orderTotal.toFixed(2)}</p> */}
            <div className="btn-kitchen">
              {isCompleted ? (
                <button className="btn btn-primary m-2" onClick={handleGoToCashier}>
                  Send To Cashier
                </button>
              ) : (
                <button className="btn btn-danger m-2" onClick={handleComplete}>
                  Completed
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Kitchen;
