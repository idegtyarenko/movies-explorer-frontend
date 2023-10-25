const { createContext, useReducer, useContext } = require("react");

const CurrentUserContext = createContext({});
const CurrentUserDispatchContext = createContext(null);

export function CurrentUserProvider({ children }) {
  const [currentUser, dispatch] = useReducer(currentUserReducer, {});

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentUserDispatchContext.Provider value={dispatch}>
        {children}
      </CurrentUserDispatchContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export function useCurrentUser() {
  return useContext(CurrentUserContext);
}

export function useCurrentUserDispatch() {
  return useContext(CurrentUserDispatchContext);
}

function currentUserReducer(currentUser = {}, action) {
  switch (action.type) {
    case "set": {
      return action.user;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
