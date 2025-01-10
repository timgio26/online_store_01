import { useNavigate } from "react-router";
import { useSignout } from "../utils/useOrderApi";

export function Profile() {
  const { signout } = useSignout();
  const nav = useNavigate();
  const data = localStorage.getItem("sb-dzanjlfmchzdirukrrlt-auth-token")
  const user = JSON.parse(data).user.user_metadata


  function handleLogout() {
    signout();
    nav('/auth')
  }



  return (
    <div className="bg-slate-400 w-full flex flex-col">
      <h1 className="text-xl font-bold">Hi, {user.name.toUpperCase()}</h1>
      <span>{user.email}</span>
      {/* <span>{user_metadata?.email}</span> */}
      <button className="bg-red-400" onClick={handleLogout}>
        signout
      </button>
    </div>
  );
}
