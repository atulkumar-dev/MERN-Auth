

export default function Profile() {

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  return <>
  <div className="flex flex-col text-4xl items-center justify-center min-h-screen">
  <div>User Email: {email}</div>
  <div>Username: {username}</div>
  <button className=" border-2 rounded-2xl p-4 hover:cursor-pointer mt-4 bg-blue-600 text-white">Signout</button>
</div>
  </>;
}
