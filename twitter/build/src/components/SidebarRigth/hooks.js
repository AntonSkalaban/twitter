import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserApi } from "api/index";
import { getUser } from "store/slices";
export const useGetRandomUsers = () => {
    const [users, setUsers] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState("");
    const { id } = useSelector(getUser);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsFetching(true);
                const users = await UserApi.getUsers();
                if (users)
                    setUsers(users.filter((user) => user.id !== id));
            }
            catch (e) {
                setError("error");
            }
            setIsFetching(false);
        };
        fetchUsers();
    }, []);
    return { users, isFetching, error };
};
