import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "FundFlow",
  description: "A crowdfunding platform for ideas, projects, and causes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  );
}