import { useContext, useState } from "react";

import UserContext, { UserState } from "../store";

function ConsumerComponent() {
  const user = useContext(UserContext);

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
}

function UseContextComponent() {
  const [user, userSet] = useState<UserState>({
    first: "guss",
    last: "dias",
  });

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() =>
          userSet({
            first: "gio",
            last: "santoss",
          })
        }
      >
        Change context bruh
      </button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
