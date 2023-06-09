import { async } from "@firebase/util";
import { useState } from "react";
import { register } from "../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
  };

  return (
    <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="E-posta adresi"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Parola"
        value={password}
        onChange={(e) => setPasword(e.target.value)}
      />
      <br />
      <button disabled={!email || !password} type="submit">
        Kayıt ol
      </button>
    </form>
  );
}
