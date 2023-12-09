import PropTypes from "prop-types";
import { useState } from "react";

function ModalEditProfile({ closeModal }) {
    const [bioText, setBioText] = useState("");

    const handleTextareaChange = (event) => {
        const newText = event.target.value;
        setBioText(newText);
    };

    const data = JSON.parse(
        localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token") ||
            JSON.parse(
                localStorage.getItem("sb-lfodunqhxvhczpjvpxnh-auth-token")
            )
    );
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 backdrop-blur-[1.5px] backdrop-brightness-50"></div>
            <div className="bg-white w-[600px] rounded-xl shadow-lg z-10 relative top-[-5%]">
                <div className="">
                    <div>
                        <button
                            className="absolute top-4 left-4 text-black font-bold cursor-pointer ml-2"
                            onClick={closeModal}
                        >
                            &#x2715;
                        </button>
                        <button className="absolute top-4 right-4 bg-sky-500 hover:bg-sky-600 rounded-full w-20 h-8 font-bold text-white ">
                            simpan
                        </button>
                    </div>

                    <img
                        className="max-h-[15rem] mt-14 bg-cover cursor-pointer filter hover:blur-[2px] -z-[999999] min-w-full"
                        src={data?.user?.user_metadata?.avatar_url || "-"}
                        alt="bg"
                    />
                    <div className="flex flex-row justify-between">
                        <img
                            className="relative bottom-20 mx-5 min-w-[5rem] min-h-[8rem] bg-cover rounded-full border-4 border-white cursor-pointer hover:blur-[2px] filter max-h-[5rem]"
                            src={data?.user?.user_metadata?.avatar_url || "-"}
                            alt="profile"
                        />
                    </div>
                    <div className="flex justify-center mb-[40px]">
                        <div className="w-[570px] h-[100px] bg-white border border-black rounded-xl flex flex-col p-2 ">
                            <div className="flex flex-row justify-between mx-2">
                                <p>Bio</p>
                                <p className="text-slate-500 text-[0.75rem]">
                                    {bioText.length} / 160
                                </p>
                            </div>
                            <textarea
                                style={{ overflow: "hidden" }}
                                onChange={handleTextareaChange}
                                maxLength="160"
                                placeholder="Masukan Bio"
                                rows="4"
                                className=" w-[560px] h-[100px] rounded-b-xl border-none resize-none focus:ring-none focus:ring-0"
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ModalEditProfile.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default ModalEditProfile;
