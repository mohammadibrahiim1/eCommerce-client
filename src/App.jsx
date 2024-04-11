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

  // const price = 500;

  // useEffect(() => {
  //   fetch(`http://localhost:5000/create-payment-intent`, {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({ price }),
  //   });
  // }, []);

  return (
    <div>
      <Toaster />
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
