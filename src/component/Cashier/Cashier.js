// import React, { useState } from "react";
// import "./Cashier.css";
// import Header from "../Header/Header";
// import { useCart } from "react-use-cart";
// import { useLocation } from "react-router-dom";
// const Cashier = () => {
//   const { items, cartTotal, totalUniqueItems } = useCart();
//   const location = useLocation();
//   const tableNumber = location.state.tableNumber;

//   console.log(tableNumber, "in Cashier");

//   const [isPaid, setIsPaid] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleSuccess = () => {
//     setIsSuccess(!isSuccess);
//   };
//   // const handlePaidClick =()=>{
//   //     setIsPaid(true);
//   // }
//   const handleSuccessClick = () => {
//     setIsPaid(true);
//   };
//   return (
//     <>
//       <Header />
//       <div className="cashier">
//         <section className='menu' id='menu'>
//         <h1 className="heading">
//           {" "}
//           Our <span> Billings </span>
//         </h1>
//         <div className="tab1">
//         <div className="tablehead"> Table No: {tableNumber} </div><hr></hr>
//         <table className="cashtables">
//           <thead>
//             <tr>
//               <th> S.N </th>
//                <th> Name </th> 
//                <th> Quantity </th>
//               <th> Price(Rs) </th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item, index) => ( 
//               <tr key={index}>
//                 <td> {index + 1} </td>
//                  <td> {item.name} </td>
//                 <td> {item.quantity} </td> 
//                 <td> {item.price}/.</td>
//               </tr>
//             ))} 
//             <tr>
//               <td
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: "25px",
//                 }}
//                 colSpan={2}
//               >
//                 Total Price: {cartTotal}
//               </td>
//             </tr>
//           </tbody>
//           </table>
        
        
//         <div className="btn-cashier">
//           {isPaid ? (
//             // If payment is already made

//             // If payment is successful
//             <button className="btn btn-primary m-2"> Payment Success </button>
//           ) : (
//             // If payment is not yet made
//             <>
//               <button
//                 className="btn btn-primary m-2"
//                 onClick={handleSuccessClick}>
//                 Paid
//               </button>
//               <button className="btn btn-danger m-2"> Pending </button>
//             </>
//           )}
//         </div>
//       </div>
//       </section>
//       </div>
//     </>
//   );
// };

// export default Cashier;
import React, { useState ,useRef,useEffect} from "react";
import "./Cashier.css";
import Header from "../Header/Header";
import { useCart } from "react-use-cart";
import { useLocation } from "react-router-dom";

const Cashier = () => {
  const { items, cartTotal, totalUniqueItems } = useCart();
  const location = useLocation();
  const tableNumber = location.state.tableNumber;

  const [isPaid, setIsPaid] = useState(false);
  const printRef = useRef();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [discount, setDiscount] = useState(0);
  const discountedTotal = cartTotal - (cartTotal * (discount / 100));


  useEffect(() => {
    const savedDiscount = localStorage.getItem('discount');
    const savedPaymentMethod = localStorage.getItem('paymentMethod');
    
    if (savedDiscount) setDiscount(parseFloat(savedDiscount));  // Parse discount as number
    if (savedPaymentMethod) setPaymentMethod(savedPaymentMethod);
  }, []);

  // Save discount to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('discount', discount.toString());
  }, [discount]);

  // Save payment method to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('paymentMethod', paymentMethod);
  }, [paymentMethod]);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleDiscountChange = (e) => {
    setDiscount(parseFloat(e.target.value));
  };

  const handlePrintReceipt = () => {
    const printContent = printRef.current;
    const WindowPrint = window.open('', '', 'width=900,height=650');
    WindowPrint.document.write(printContent.innerHTML);
    WindowPrint.document.close();
    WindowPrint.focus();
    WindowPrint.print();
    WindowPrint.close();
  };

  const handleSuccessClick = () => {
    setIsPaid(true);
  };
  

  return (
    <>
      <Header />
      <div className="cashier">
        <section className="menu" id="menu">
          <h1 className="heading">
            Our <span>Billings</span>
          </h1>
          <div className="tab1" ref={printRef}>
            <div className="tablehead">Table No: {tableNumber}</div>
            <hr />
            <div className="customer-details">
              <p><strong>Name:</strong> Junu Darnal</p>
              <p><strong>Contact:</strong>9810333436</p>
            </div>
            
           
            <table className="cashtables">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price(Rs)</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}/.</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2} style={{ fontSize: "15px" }}>
                  Price: {cartTotal}
                  </td>
                </tr>
                
              </tbody>
            </table>
            <div className="discount-section">
              <label>
                Discount (%):
                <input type="number" value={discount} onChange={handleDiscountChange} />
              </label>
              <p><strong>Total Price: ${discountedTotal.toFixed(2)}</strong> </p>
            </div>
                <div className="payment-methods">
              <label>
                <input type="radio" value="Cash" checked={paymentMethod === 'Cash'} onChange={() => handlePaymentMethodChange('Cash')} />
              Cash
              </label>

              <label>
                <input type="radio" value="Credit Card" checked={paymentMethod === 'Credit Card'} onChange={() => handlePaymentMethodChange('Credit Card')} />
                Credit Card
              </label>

              <label>
                <input type="radio" value="Mobile Payment" checked={paymentMethod === 'Mobile Payment'} onChange={() => handlePaymentMethodChange('Mobile Payment')} />
                Mobile Payment
              </label>
            </div>
            <div className="btn-cashier">
              {isPaid ? (
                <button className="btn btn-primary m-2">Payment Success</button>
              ) : (
                <>
                  <button className="btn btn-primary m-2" onClick={handleSuccessClick}>Paid</button>
                  <button className="btn btn-danger m-2">Pending</button>
                </>
              )}
            </div>
          </div>
        </section>
        <button className="btn btn-secondary m-2" style={{margin:"20%"}} onClick={handlePrintReceipt}>Print Receipt</button>
      </div>
      
    </>
  );
};

export default Cashier;

