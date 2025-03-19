import Image from "next/image";
import LandingPage from "@/components/landing/landing-page";
export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <LandingPage></LandingPage>
    </div>
  );
}
