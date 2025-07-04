export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <div className="text-6xl">Welcome Home!</div>
        <div className="text-3xl space-x-10 mt-6">
          <a href="/signin" className="hover:cursor-pointer hover:underline">Sign In </a>{" "}
          <a href="/signup" className="hover:cursor-pointer hover:underline">Signup </a>
        </div>
      </div>
    </>
  );
}
