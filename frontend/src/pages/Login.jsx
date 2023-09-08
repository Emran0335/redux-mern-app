import { FaSignInAlt } from "react-icons/fa";

function Login() {
  return (
    <>
      <section className="font-bold text-lg mb-[16px] p-0 py-[20px] flex flex-col items-center justify-center">
        <h1 className="flex items-center gap-3">
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>

      <section className="w-[70%] mx-auto">
        <form>
          <div className="mb-[10px]">
            <input
              type="email"
              className="w-full p-[10px] border border-green-200 rounded-md mb-[10px]"
              id="email"
              name="email"
              value="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-[10px]">
            <input
              type="password"
              className="w-full p-[10px] border border-green-200 rounded-md mb-[10px]"
              id="password"
              name="password"
              value="password"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-[10px]">
            <button
              type="submit"
              className="py-[10px] px-[20px] bg-gray-800 text-white font-bold text-lg rounded-md cursor-pointer text-center flex items-center justify-center w-full mb-[20px]"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
