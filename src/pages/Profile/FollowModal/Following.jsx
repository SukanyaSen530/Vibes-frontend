import { Modal, UserCard } from "../../../components";

import "./follow-common.scss";

const Following = ({ open, onClose, followings }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <p className="text-3xl mb-4 font-semibold">Following</p>

      <div className="follow-container pr-4 scrollbar">
        {followings?.map((user) => (
          <UserCard user={user} key={user._id} onClose={onClose} />
        ))}
      </div>
    </Modal>
  );
};

export default Following;
