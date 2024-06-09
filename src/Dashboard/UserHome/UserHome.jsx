import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";

const UserHome = () => {
    const { user } = useAuth()
    const [userInfo, setUserInfo] = useState()
    console.log(userInfo);
    useEffect(() => {

        fetch(`https://power-tools-server-nine.vercel.app/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => setUserInfo(data));

    }, [user])


    if (!userInfo) {
        return <Loading />
    }

    return (
        <div
            className="relative flex  max-w-[30rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mt-8 mx-auto">
            <h3 className="text-[32px] font-semibold">Hi, <span className="text-teal-600">
                {userInfo.name ? userInfo.name : ""}
            </span> welcome back!
            </h3>
            <div
                className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                <img
                    src={userInfo.photo}
                    alt={userInfo.name}


                    className="relative inline-block h-[58px] w-[68px] rounded  object-cover object-center" />
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center">
                        <div>
                            <h5
                                className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-center text-blue-gray-900">
                                {userInfo.name}
                            </h5>
                            <h4>Age:{userInfo.age}</h4>
                            <h4>Phone:{userInfo.phone}</h4>
                        </div>

                        <Link to={`/dashboard/edit-user/${userInfo._id}`}><button className="ml-5 btn btn-outline btn-secondary">Edit User</button></Link>


                    </div>

                </div>
            </div>

        </div>
    );
};

export default UserHome;