import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase/firebase.config";
import { useDispatch } from "react-redux";
import { setUser, toggleLoading } from "./redux/features/api/auth/authSlice";
const auth = getAuth(app);
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
      <Toaster />
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
