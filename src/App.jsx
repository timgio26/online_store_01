// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import { AppLayout } from "./ui/AppLayout";
import { Catalog } from "./ui/Catalog";
import { About } from "./pages/About";
import { OrderDetails } from "./pages/OrderDetails";
import { Playground } from "./pages/Playground";
import { FindOrder } from "./pages/FindOrder";
import { MyCart } from "./pages/MyCart";
import { Auth } from "./pages/Auth";
import { ErrorEl } from "./pages/ErrorEl";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout/>}>
              <Route path="/" element={<Catalog/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/order" element={<OrderDetails />} />
              <Route path="/findorder" element={<FindOrder />} />
              <Route path="/playground" element={<Playground />}/>
              <Route path="/mycart" element={<MyCart />} />
              <Route path="/auth" element={<Auth />}/>
            </Route>
          </Routes>
        </BrowserRouter>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
