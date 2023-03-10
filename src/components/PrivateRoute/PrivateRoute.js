
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import * as ROUTES from "../../constants/routes";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
// const PrivateRoute = ({ children, ...rest }) => {
//   let auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth.user ? (
//           children
//         ) : (
//           <Navigate
//             to={{
//               pathname: {...ROUTES.SIGN_UP},
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };


function PrivateRoute({ children }) {
    const auth = useAuth();
    return auth ? children : <Navigate to="{ROUTES.SIGN_UP}" />;
  };

  function PrivateOutlet() {
    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to="{ROUTES.SIGN_UP}" />;
  };

// export default PrivateRoute;
export default PrivateOutlet;