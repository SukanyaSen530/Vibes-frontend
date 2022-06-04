import { useEffect } from "react";
import { Modal, UserCard } from "../../../components";

import "./follow-common.scss";

const Followers = ({ open, onClose, followers, userId }) => {
  useEffect(() => {
    if (open === true) {
      onClose();
    }
  }, [userId, open, onClose]);

  return (
    <Modal open={open} onClose={onClose}>
      <p className="text-3xl mb-4 font-semibold">Followers</p>

      <div className="follow-container pr-4 scrollbar">
        {followers?.map((user) => (
          <UserCard user={user} showFollow={false} key={user._id} />
        ))}
      </div>
    </Modal>
  );
};

export default Followers;
