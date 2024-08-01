import { lazy } from "react";

import { useState } from "react";

const MainProfile = lazy(() => import("./MainProfile"));
const EditProfile = lazy(() => import("./EditProfile"));
const UpdatePassword = lazy(() => import("./UpdatePassword"));

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
