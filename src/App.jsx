import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser, toggleLoading } from "./redux/features/api/auth/authSlice";
import auth from "./firebase/firebase.config";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        dispatch(setUser(user));
      } else {
        dispatch(toggleLoading());
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#095256",
              color: "white",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "17px",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "17px",
            },
          },
        }}
      />
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
