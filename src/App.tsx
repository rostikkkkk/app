import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product/:asinCode" element={<SingleProduct />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </QueryParamProvider>
    </BrowserRouter>
  );
}
