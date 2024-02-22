import Post from "@/components/Post";
import Signup from "./signup/page";

export default function Home() {
  return (
    <main
      // className="flex flex-col items-center justify-between p-4 overflow-auto"
      style={{ height: "calc(100vh - 120px)" }}
    >
      <div className="w-full flex flex-col gap-16">
        {/* <Post /> */}
        {/* <Post locked /> */}
        <Signup />
      </div>
    </main>
  );
}
