// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import auth from "../utils/auth";
import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const getUserData = async () => {
        supabase.auth.onAuthStateChange((event) => {
            if (event === "SIGNED_IN") {
                navigate("/");
            }
        });
        await supabase.auth.getUser().then((data) => {
            if (data.data?.user) {
                auth.storeAuthCredential(data.data.user.id);
                setUser(data.data.user);
                console.log(user);
                navigate("/");
            }
        });
    };
    useEffect(() => {
        getUserData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <main className="flex flex-col-reverse min-[1017px]:flex-row min-h-screen">
                <section className="w-full min-[1017px]:max-w-[50%] bg-[url('https://preview.redd.it/1ckh2h90ac371.png?width=640&crop=smart&auto=webp&s=704bfdc595df4aeacde8231572523a208a387197')] flex items-center justify-center -z-[99999999]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        className="w-[70px] h-[70px] min-[1017px]:w-[400px] min-[1017px]:h-[400px] z-[9999999]"
                        viewBox="0 0 256 256"
                        xmlSpace="preserve"
                    >
                        <defs></defs>
                        <g
                            style={{
                                stroke: "none",
                                strokeWidth: 0,
                                strokeDasharray: "none",
                                strokeLinecap: "butt",
                                strokeLinejoin: "miter",
                                strokeMiterlimit: 10,
                                fill: "none",
                                fillRule: "nonzero",
                                opacity: 1,
                            }}
                            transform="translate(13.6466926070039 13.646692607003871) scale(2.53 2.53)"
                        >
                            <path
                                d="M 28.303 81.565 c 33.962 0 52.538 -28.138 52.538 -52.538 c 0 -0.799 0 -1.595 -0.054 -2.387 c 3.614 -2.614 6.733 -5.85 9.212 -9.558 c -3.37 1.493 -6.945 2.473 -10.606 2.905 c 3.855 -2.308 6.74 -5.937 8.118 -10.213 c -3.625 2.151 -7.59 3.667 -11.725 4.482 c -6.993 -7.436 -18.69 -7.795 -26.126 -0.802 c -4.796 4.51 -6.83 11.23 -5.342 17.643 C 29.473 30.352 15.64 23.34 6.264 11.804 c -4.901 8.437 -2.398 19.231 5.717 24.649 c -2.939 -0.087 -5.813 -0.88 -8.381 -2.311 c 0 0.076 0 0.155 0 0.234 c 0.002 8.79 6.198 16.36 14.814 18.101 c -2.718 0.741 -5.571 0.85 -8.338 0.317 c 2.419 7.522 9.351 12.675 17.251 12.823 c -6.539 5.139 -14.616 7.928 -22.932 7.92 C 2.926 73.534 1.459 73.445 0 73.27 c 8.444 5.419 18.27 8.293 28.303 8.28"
                                style={{
                                    stroke: "none",
                                    strokeWidth: 1,
                                    strokeDasharray: "none",
                                    strokeLinecap: "butt",
                                    strokeLinejoin: "miter",
                                    strokeMiterlimit: 10,
                                    fill: "none",
                                    fillRule: "nonzero",
                                    opacity: 1,
                                }}
                                transform=" matrix(1 0 0 1 0 0) "
                                strokeLinecap="round"
                            />
                        </g>
                    </svg>
                </section>

                <section className="flex flew-col min-[1017px]:px-4 items-center justify-center text-black">
                    <div className="p-6 w-[590px]">
                        <div className="relative mb-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="50px"
                                height="50px"
                            >
                                <linearGradient
                                    id="_osn9zIN2f6RhTsY8WhY4a"
                                    x1="10.341"
                                    x2="40.798"
                                    y1="8.312"
                                    y2="38.769"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0" stopColor="#2aa4f4" />
                                    <stop offset="1" stopColor="#007ad9" />
                                </linearGradient>
                                <path
                                    fill="url(#_osn9zIN2f6RhTsY8WhY4a)"
                                    d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"
                                />
                            </svg>
                        </div>

                        <div className="max-w-[450px] min-[1017px]:max-w-[600px]">
                            <h1 className="text-[68px] min-[1017px]:text-[64px] font-[650]">
                                Happening now
                            </h1>
                        </div>

                        <h2 className="text-[32px] font-[550] mt-[30px]">
                            Join today.
                        </h2>

                        <div className="font-[400] mt-[10px]">
                            <Auth
                                supabaseClient={supabase}
                                appearance={{
                                    theme: ThemeSupa,
                                    style: {
                                        input: {
                                            borderRadius: "0.8rem",
                                        },
                                        button: {
                                            borderRadius: "0.8rem",
                                        },
                                    },
                                    variables: {
                                        default: {
                                            colors: {
                                                brand: "#00acee",
                                                brandAccent: "#00acee",
                                                brandButtonText: "grey",
                                            },
                                        },
                                    },
                                }}
                                theme="light"
                                providers={["google", "github"]}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default LoginPage;
