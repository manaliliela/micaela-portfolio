import "./globals.css";

export const metadata = {
  title: "Micaela Manalili | Operations Virtual Assistant",
  description: "Operations Virtual Assistant | Admin & Workflow Support. Portfolio of Micaela Manalili.",
  metadataBase: new URL("https://micaelamanalili.vercel.app"),
  openGraph: {
    title: "Micaela Manalili | Operations Virtual Assistant",
    description: "Operations Virtual Assistant | Admin & Workflow Support",
    type: "website",
  },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#FEF6EE" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
