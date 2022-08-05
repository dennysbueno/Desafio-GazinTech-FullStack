import { Routes, Route } from "react-router-dom";
import { ListaDevs } from "./pages/Devs";
import { VerDev } from "./pages/Devs/components/ViewDev";
import { ListaNiveis } from "./pages/Niveis";

export function Content() {
  return (
    <Routes>
      <Route path="/" element={<ListaDevs />} />
      <Route path="/niveis" element={<ListaNiveis />} />
      <Route path="/viewDev/:id" element={<VerDev />} />
      <Route
        path="*"
        element={
          <>
            <h1>404</h1>
          </>
        }
      />
    </Routes>
  );
}
