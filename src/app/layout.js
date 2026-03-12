import StoryblokProvider from "@/components/StoryblokProvider";
import "./globals.css";

export const metadata = {
  title: "DevRel Task",
  description: "Built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
