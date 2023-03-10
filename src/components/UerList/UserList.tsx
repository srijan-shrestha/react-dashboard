import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { User } from "../../Models/User";

const UserList = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    // function to call on page load
    getUserList();
  }, []);

  //function to rereive all users in firbase database
  const getUserList = () => {
    const usersCollection = collection(db, "users");
    getDocs(usersCollection)
      .then((querySnapshot) => {
        const userList: Array<User> = [];
        querySnapshot.forEach((doc: any) => {
          userList.push(doc?.data());
        });
        setUsers(userList);
        console.log("user", users);
      })
      .catch((error) => {
        console.log("Error getting users:", error);
      });
  };

  return (
    <section className="flex">
      {/* User List Widget */}
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                    >
                      Name
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user: User) => (
                    <tr key={user.uid}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {user.uid}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {user.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserList;
