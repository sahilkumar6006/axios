import { useState } from "react";
import { loginUser } from "../Services/auth";

const LoginScreen = () => {
  const [credentials, setCredentials] = useState({email: '', password: ''});
  const handleLogin = async() => {
    try {
      const user = await loginUser(credentials);
    } catch (error) {
      console.log(error)
    }
  }
}

