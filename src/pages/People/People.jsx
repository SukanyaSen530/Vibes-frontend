import { useState } from "react";

import { useSearchUsersQuery } from "../../redux/services/userApi";
import useDebounce from "../../hooks/useDebounce";
import { UserCard, Skeletal } from "../../components";

const People = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchTerm = useDebounce(searchQuery, 500);

  const { data, isLoading, error } = useSearchUsersQuery(debouncedSearchTerm, {
    skip: debouncedSearchTerm.length === 0,
  });

  const users = data?.users || [];

  let content = null;

  if (error) {
    content = (
      <p className="text-red-500 text-medium my-8">
        Could not fetch the users!
      </p>
    );
  }

  if (isLoading) {
    content = <Skeletal type="user" num={2} />;
  }

  if (users.length === 0 && searchQuery.length > 0 && !isLoading) {
    content = <p className="mt-10 text-4xl font font-medium">No users found</p>;
  }

  if (users?.length === 0 && searchQuery.length === 0 && !isLoading) {
    content = (
      <p className="mt-10 text-4xl font font-medium">
        Start searching your friends!
      </p>
    );
  }

  if (users?.length > 0 && searchQuery.length > 0) {
    content = (
      <div>
        {users?.map((user) => (
          <UserCard key={user._id} user={user} showFollow={false} />
        ))}
      </div>
    );
  }

  return (
    <section className="conatiner">
      <input
        id="search"
        type="search"
        placeholder="Search Users..."
        autoFocus
        required
        className="w-full border-2 h-20 text-gray-700 text-2xl outline-0 px-7 rounded-2xl"
        value={searchQuery}
        onChange={({ target: { value } }) => setSearchQuery(value)}
      />

      <div>{content}</div>
    </section>
  );
};

export default People;
