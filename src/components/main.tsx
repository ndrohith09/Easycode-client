import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./appbar/navbar";
import Dashboard from "./dashboard/dashboard";
import Database from "./database/database";
import PangeaSecurity from "./security/security";
import API from "./api/api";
import Storage from "./storage/storage";
import Settings from "./settings/settings";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../query";
// import LumosEngine from "flowengine";

export const MainPages = () => {
  return ( 
      <div>
        <QueryClientProvider client={queryClient}>
        <section className="home-section">
          <Navbar /> 

          <div className="home-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/database/" element={<Database />} />
              <Route path="/storage/" element={<Storage />} />
              <Route path="/settings/" element={<Settings />} />
              <Route path="/security/" element={<PangeaSecurity />} />
              <Route path="/api/" element={<API />} />
              {/* <Route path="/api/:apiId" element={<LumosEngine />} /> */}
            </Routes>
          </div>
        </section>  
        </QueryClientProvider>
      </div> 
  );
};
