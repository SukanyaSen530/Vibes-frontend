import { MdBookmarkBorder, MdBookmark } from "react-icons/md";

function SaveButton({
  isSaved = false,
  isLoading = false,
  handleSave = () => {},
}) {
  const handleDisable = (e) => {
    if (isLoading) e.preventDefault();
    else handleSave();
  };

  return (
    <>
      {isSaved ? (
        <MdBookmark
          className={`icons ${isLoading ? "text-gray-400" : "text-blue-500"}`}
          onClick={handleDisable}
        />
      ) : (
        <MdBookmarkBorder
          className={`icons ${isLoading ? "text-gray-400" : ""}`}
          onClick={handleDisable}
        />
      )}
    </>
  );
}

export default SaveButton;
