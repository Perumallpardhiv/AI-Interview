import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InterVueSense",
  openGraph: {
    title: "InterVueSense",
    description:
      "InterVueSense is an AI-powered interview platform.",
    images: [
      {
        url: "https://ai-mock-interview.vercel.app//opengraph-image",
      },
    ],
  },
  metadataBase: new URL("https://ai-mock-interview.vercel.app/"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
