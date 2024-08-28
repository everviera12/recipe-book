import { Montserrat } from "next/font/google";
import HeaderComponent from "../Header/Header";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <main className={`${montserrat.className}`}>
      <HeaderComponent />
      {children}
    </main>
  );
}
