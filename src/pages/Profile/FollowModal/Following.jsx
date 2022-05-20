import { useEffect } from "react";
import { Modal, UserCard } from "../../../components";

import "./follow-common.scss";

const Following = ({ open, onClose, followings, userId }) => {
  useEffect(() => {
    if (open === true) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, followings]);

  return (
    <Modal open={open} onClose={onClose}>
      <p className="text-3xl mb-4 font-semibold">Following</p>

      <div className="follow-container">
        {followings?.map((user) => (
          <UserCard user={user} key={user._id} />
        ))}
      </div>
    </Modal>
  );
};

export default Following;
