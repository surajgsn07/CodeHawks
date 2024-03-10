
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useSelector } from "react-redux";
import defaultavatar from "../../assets/defaultavatar.png"

const ProfileSection = () => {
    const user = useSelector((state) => state.auth);

    const user = useSelector((state)=>state.auth.user);


    const data = ()=>{
        console.log(user.user)
        setUserData([user.user])
        }

    useEffect(() => {
        data()
    }, [])
    // 

    return (
        <div className="w-full">
            {userData.map((user) => (
                <div key={user._id} className="flex-1 min-w-[280px] mx-auto my-5 p-2 shadow-sm shadow-[#181E29] rounded-md">
                    <div className="p-3">
                        <img src={user.avatar || "dp.webp"} alt="Avatar" className="w-32 h-32 border-2 rounded-full" />
                    </div>
                    <h2 className="my-4 px-3 text-xl font-bold">{user.fullName}</h2>


<h2 className="font-bold text-center text-3xl mt-4">Profile</h2>

            {user?.user?.user && (
                <div className="flex-1 min-w-[300px] mx-auto my-5 p-2 shadow-sm shadow-[#181E29] rounded-md">
                    <div className="p-3">
                        <img src={user?.user?.user?.user?.avatar || defaultavatar} alt="Avatar" className="w-32 h-32 border-2 rounded-full select-none" />
                    </div>
                    <h2 className="my-4 px-3 text-xl font-bold">{user.user.user.user.fullName}</h2>

                    <div className="gap-5 p-4 px-2 ">
                        <p> {user?.user?.user?.user?.location ?` ${user.user.user.user?.location}` :""}</p>
                        <p>{user?.user?.user?.user?.skillLevels ? `Skill Level: ${user.user.user.user?.skillLevels}` : ''}</p>
                    </div>
                        <p className="text-blue-500 font-semibold px-3">Sports Interests:</p>
                    <div className="flex h-fit w-full flex-wrap gap-2 p-4 px-2 items-center select-none">
                        {user.user?.user.user?.sportsInterest?.map((interest, index) => (
                            <div key={index} className="px-4 py-2 bg-[#181E29] text-white rounded-3xl min-w-fit">
                                {interest}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileSection;
