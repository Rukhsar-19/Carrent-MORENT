// import React from "react";
// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Styles/Commonstyles.css";
// import "remixicon/fonts/remixicon.css";
// import Header from "./Components/Header";
// import Dashboard from "./Components/Dashboard";
// import Categorycar from "./Components/Categorycar";
// import Cardetail from "./Components/Cardetail";
// import Payment from "./Components/Payment";

// function App() {
//   return (
//     <>
//     <Header/>
//       <BrowserRouter>
//          <Routes>
//           <Route path="/" element={<Dashboard />} />
//            <Route path="/carrent" element={<Categorycar/>} />
//             <Route path="/car/:carName" element={<Cardetail />} /> 
//             <Route path="/payment" element={<Payment />} /> 
//         </Routes> 
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;



// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Categorycar from "./Components/Categorycar";
import Cardetail from "./Components/Cardetail";
import Payment from "./Components/Payment";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Commonstyles.css";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="carrent" element={<Categorycar />} />
          <Route path="car/:carName" element={<Cardetail />} />
          <Route path="payment" element={<Payment />} />
          {/* Optional: 404 page */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;