import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProductListHome from "./App.tsx";
import { NuqsAdapter } from "nuqs/adapters/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryProvider } from "./_providers/queryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <NuqsAdapter>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductListHome />} />
          </Routes>
        </BrowserRouter>
      </NuqsAdapter>
    </QueryProvider>
  </StrictMode>
);
