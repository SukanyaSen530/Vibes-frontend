import { useEffect } from "react";
import { Modal, UserCard } from "../../../components";

import "./follow-common.scss";

const Followers = ({ open, onClose, followers, userId }) => {
  useEffect(() => {
    if (open === true) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <Modal open={open} onClose={onClose}>
      <p className="text-3xl my-2">Followers</p>

      <div className="follow-container">
        {followers?.map((user) => (
          <UserCard user={user} showFollow={false} key={user._id} />
        ))}
      </div>
    </Modal>
  );
};

export default Followers;
