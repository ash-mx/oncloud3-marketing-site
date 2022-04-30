import { ReactNode } from "react";
import Footer from "../commons/navigation/Footer";
import Nav from "../commons/navigation/Nav";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
