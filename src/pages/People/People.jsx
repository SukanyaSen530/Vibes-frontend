import { useState } from "react";

import "./people.scss";

import { useSearchUsersQuery } from "../../redux/services/userApi";
import useDebounce from "../../hooks/useDebounce";
import { UserCard } from "../../components";
import { loaderSmall } from "../../assets/images";

const People = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchTerm = useDebounce(searchQuery, 500);

  const { data, isLoading, error } = useSearchUsersQuery(debouncedSearchTerm, {
    skip: debouncedSearchTerm.length === 0,
  });

  console.log("search", searchQuery);

  const users = data?.users || [];

  let content = null;

  if (error) {
    content = <div className="text-hint">Error while fetching users</div>;
  }

  if (isLoading) {
    content = (
      <div className="mt-10">
        <img src={loaderSmall} alt="loader" className="h-10" />
      </div>
    );
  }

  if (users.length === 0 && searchQuery.length > 0) {
    content = <p className="mt-10 text-4xl font font-medium">No users found</p>;
  }

  if (users?.length === 0 && searchQuery.length === 0) {
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
    <section className="people">
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
