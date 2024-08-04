import "./styles.css";
import type { Metadata } from "next";
import { DM_Sans as DMSans } from "next/font/google";
import { Toaster, SonnarToaster } from "@repo/ui";
import { ThemeProvider } from "@/providers/theme-provider";

const font = DMSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ketone",
  description: "All in one Agency Solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
          <Toaster />
          <SonnarToaster position="bottom-left" />
        </ThemeProvider>
      </body>
    </html>
  );
}
