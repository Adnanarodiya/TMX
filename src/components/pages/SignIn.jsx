export default function SignIn() {
    return (
        <>
            {" "}
            <div className="bg-white py-12">
                <div className="w-[600px] mx-auto border rounded-xl p-6">
                    <h4 className="font-semibold text-3xl text-center mt-6">
                        Sign in to your account
                    </h4>

                    <label className="form-control w-full max-w-xs ">
                        <div className="label mt-6">
                            <span className="label-text font-medium pl-1">Email Address</span>
                        </div>
                        <input
                            type="email"
                            placeholder="email@xyz.com"
                            className="input border rounded-md w-full p-2 mt-2"
                        />
                    </label>
                    <label className="form-control w-full max-w-xs ">
                        <div className="label mt-6">
                            <span className="label-text font-medium pl-1">Password</span>
                        </div>
                        <input
                            type="password"
                            placeholder="xyz@pass"
                            className="input border rounded-md w-full p-2 mt-2"
                        />
                    </label>

                    <p className="mt-4 text-end hover:underline cursor-pointer hover:text-blue-500">
                        Forgot your password?
                    </p>

                    <div>
                        <button className=" mt-6 rounded-full  bg-black hover:opacity-80 duration-300 w-full p-3 text-white">
                            Sign In
                        </button>
                    </div>

                    <p className="mt-4 text-center ">
                        Do not have an account ?{" "}
                        <span className="underline cursor-pointer hover:text-blue-500">
                            Create an account.{" "}
                        </span>
                    </p>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-base">
                            <span className="px-2 bg-white text-gray-500">Or register with</span>
                        </div>
                    </div>
                    <div>
                        <button className="flex justify-center gap-4 border mt-6 rounded-full  w-full p-3 hover:bg-gray-200 duration-300">
                            <img src="/google.png" alt="" /> Google
                        </button>
                    </div>
                    <p className="mt-4">By registering an account, you agree to the <span className="underline cursor-pointer"> Terms of Service </span></p>
                </div>
            </div>
        </>
    );
}
