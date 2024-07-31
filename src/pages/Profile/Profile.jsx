import { useState } from "react";

import MainProfile from "./MainProfile";
import EditProfile from "./EditProfile";
import UpdatePassword from "./UpdatePassword";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);

  const renderEdit = () => {
    setIsEdit(!isEdit);
  };

  const renderUpdatePassword = () => {
    setIsUpdatePassword(!isUpdatePassword);
  };

  return (
    <>
      {!isEdit && !isUpdatePassword && (
        <MainProfile
          renderEdit={renderEdit}
          renderUpdatePassword={renderUpdatePassword}
        />
      )}

      {isEdit && <EditProfile renderEdit={renderEdit} />}
      {isUpdatePassword && (
        <UpdatePassword renderUpdatePassword={renderUpdatePassword} />
      )}
    </>
  );
};

export default Profile;
