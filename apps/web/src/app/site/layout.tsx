import { Navigation } from "@/components/site/navigation";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <main className="h-full">
      <Navigation />
      {children}
    </main>
  );
}
