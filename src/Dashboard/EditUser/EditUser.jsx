import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditUser = () => {
    const user = useLoaderData();
    const handleEditUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.username.value
        const age = form.age.value
        const phone = form.phone.value

        const userInfo = {
            name, email: user?.email, age, phone
        }
        axios.put(`http://localhost:5000/users/${user.email}`, userInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success(`${name}'s profile successfully updated`)
                }
                form.reset('')
            })
    }


    return (
        <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-bold">User Information Form</h2>
            <form onSubmit={handleEditUser} className="space-y-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        defaultValue={user.name}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        defaultValue={user.email}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                        Age
                    </label>
                    <input
                        type="number"
                        name="age"
                        id="age"

                        className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"

                        className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div>
                    <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
export default EditUser;