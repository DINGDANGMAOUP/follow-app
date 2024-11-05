import Image from "next/image";
import notFound from "@/assets/not-found.svg";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image alt="result" src={notFound} width={300} height={300} />
    </div>
  )
}