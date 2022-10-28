import { Outlet } from "react-router-dom";
import { Header } from "../../styles/Components/header";
import { LayoutContainer } from "./styles";

// configura as paginas para ter o mesmo layout, com o header em cima e o contéudo em baixo
export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}