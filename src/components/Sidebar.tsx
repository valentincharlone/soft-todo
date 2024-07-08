import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
  const { login, logout, register, isAuthenticated, isLoading, user } =
    useKindeAuth();
  console.log(user);
  return (
    <section className="flex flex-col px-[25px] pb-[28px] pt-[18px] col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08]">
      <AddTodoForm />
      <div className="mt-auto space-y-2">
        {isLoading ? null : isAuthenticated ? (
          <>
            <p className="text-sm">
              Logged in as {user?.family_name} {user?.given_name}
            </p>
            <Button onClick={logout} buttonType="secondary">
              Log Out
            </Button>
          </>
        ) : (
          <>
            <Button onClick={login} buttonType="secondary">
              Log In
            </Button>
            <Button onClick={register} buttonType="secondary">
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
