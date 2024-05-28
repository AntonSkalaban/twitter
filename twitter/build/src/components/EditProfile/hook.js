import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePassword, updateProfile } from "firebase/auth";
import { UserApi } from "api/UserApi";
import { updateUser } from "store/slices";
import { auth } from "constants/index";
export const useEditUser = (currentUser) => {
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const trigger = async (data, base64String) => {
        const { name, password, birthday: { year, month, day }, } = data;
        let newBirthday;
        if (month && year && day)
            newBirthday = new Date(+year, +month, +day).toISOString();
        if (!auth.currentUser)
            return;
        try {
            setErrorMessage("");
            setIsFetching(true);
            if (currentUser.name !== name ||
                currentUser.image !== base64String ||
                currentUser.birth !== newBirthday) {
                await updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: base64String,
                });
                await UserApi.updateUserDoc(currentUser.id, { name, image: base64String });
                dispatch(updateUser({ name, image: base64String, birth: newBirthday }));
            }
            if (password) {
                updatePassword(auth.currentUser, password);
            }
        }
        catch (e) {
            setErrorMessage("fbError");
        }
        setIsFetching(false);
    };
    return { isFetching, errorMessage, trigger };
};
