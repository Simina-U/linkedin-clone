import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const dispatch = useDispatch();
  const register = () => {
    if (!name) return alert("Please enter your full name");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoUrl,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: photoUrl,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  const loginFunc = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://dow-media.ro/wp-content/uploads/2014/10/cum-sa-creezi-o-pagina-de-linkedin-pentru-compania-ta.jpg"
        alt="LinkedIn  logo"
      />

      <form>
        <input
          value={name}
          placeholder="Full Name required if registering"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={photoUrl}
          placeholder="Profile Picture URL"
          type="text"
          onChange={(e) => setPhotoUrl(e.target.value)}
        />
        <input
          value={email}
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginFunc}> Sign In </button>
      </form>
      <p>
        Not yet a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}
