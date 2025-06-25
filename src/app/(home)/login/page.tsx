import TextInput from "@/components/TextInput";
import CustomButton from "@/components/CustomButton";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const Login = () => {
  // const { register, handleSubmit } = useForm({ mode: "onBlur" });

  //   const Submit = async (data) => {
  //     try {
  //       const res = await axios.post("http://localhost:3005/login", data);

  //       // Handle 200 status (successful login)
  //       if (res.status === 200) {
  //         toast.success(res.data.message); //
  //         nav("/"); // Navigate to home
  //       }
  //     } catch (error) {
  //       if (error.response) {
  //         // The request was made, and the server responded with a status outside the 2xx range
  //         const { status, data } = error.response;

  //         if (status === 404) {
  //           toast.error(data); // Show 'User not found'
  //         } else if (status === 400) {
  //           toast.error(data); // Show 'Invalid Password'
  //         } else {
  //           toast.error("An unexpected error occurred!");
  //         }
  //       } else {
  //         // No response was received or an error occurred in setting up the request
  //         toast.error("Network error or server is unreachable!");
  //       }
  //     }
  //   };

  return (
    <>
      <PageHeader
        link="/login"
        title="Login"
      />
      <div className=" w-full flex items-center justify-center p-6">
        <div className="w-full md:w-[50%]  py-8 lg:py-0 flex bg-primary rounded-sm overflow-hidden shadow-xl">
          <div className="w-full lg:w-[90%] mx-auto p-10 2xl:px-20 flex flex-col justify-center ">
            <p className="text-ascent-1 text-2xl font-semibold">
              Log in to your account
            </p>
            <span className="text-lg mt-2 text-ascent-2">Welcome back</span>

            <form
              className="py-4 flex flex-col gap-5"
              // onSubmit={handleSubmit(Submit)}
            >
              <TextInput
                name="email"
                placeholder="email@example.com"
                label="Email Address"
                type="email"
                // register={register("email", {
                //   required: "Email Address is required",
                // })}
                styles="w-full rounded-lg"
                labelStyle="ml-2 "
              />

              <TextInput
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                styles="w-full rounded-lg"
                labelStyle="ml-2"
                // register={register("password", {
                //   required: "Password is required!",
                // })}
              />

              <Link
                href="/reset-password"
                className="text-xm text-right text-blue font-semibold m-2"
              >
                Forgot Password ?
              </Link>

              <CustomButton
                type="submit"
                containerStyles={`inline-flex justify-center rounded-md bg-tertiary font-medium text-lg px-6 py-2 text-sm font-medium text-primary outline-none `}
                title="Login"
              />
            </form>

            <p className="text-ascent-2 text-base text-center">
              Don't have an account?
              <Link
                href="/signup"
                className="text-[#065ad8] font-semibold ml-2 cursor-pointer"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
