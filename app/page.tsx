import Calendar from "@/components/wave/ui/Calendar";
import { Toaster } from "@/components/ui/sonner"

export default function Home() {
  return (
    <div className="w-full bg-center bg-no-repeat bg-cover h-screen flex justify-center items-center absolute top-0 bg-[url('/bg.webp')]">
      <Calendar />
      <div className="absolute flex w-96 justify-center mx-[100px]">
      <Toaster />
      </div>
    </div>
  );
}
