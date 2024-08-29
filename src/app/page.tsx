import Header from "@/components/Header";
import Mockup from "@/components/Mockup";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="bg-white h-[100vh] w-full flex items-center justify-center font-poppins relative overflow-y-hidden">
      <div className="absolute z-0 top-1/2 left-1/2 mt-72 w-[450px] h-[350px] blur-[200px] bg-blue-500 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="relative z-10 max-w-[900px] w-[100%] h-full">
        <Nav />
        <Header />
        <Mockup />
      </div>
    </main>
  );
}
