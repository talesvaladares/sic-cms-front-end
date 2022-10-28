import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Resources  } from '../pages/Resources';
import { DefaultLayout } from "../layouts/DefaultLayout";

// defino que minhas telas vao seguir o layout do componente defaultLayout
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/recursos" element={<Resources />} />
      </Route>
    </Routes>
  );
}