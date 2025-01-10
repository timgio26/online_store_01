import { useNavigate } from "react-router";
import { useGetUser, useSignout } from "../utils/useOrderApi";
import { useEffect } from "react";

export function Profile() {
  const { isLoading, data = {}, error } = useGetUser();
  const { signout } = useSignout();
  const nav = useNavigate();

  useEffect(() => {
    if (!isLoading && !data.user) {
        // console.log(!data.user)
      nav("/auth");
    }
  }, [data, nav, isLoading]);

  function handleLogout() {
    // console.log('signout');
    signout();
    nav('/auth')
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const user_metadata = data.user?.user_metadata;

  return (
    <div className="bg-slate-400 w-full">
      <span>{user_metadata?.email}</span>
      <button className="bg-red-400" onClick={handleLogout}>
        signout
      </button>
    </div>
  );
}
