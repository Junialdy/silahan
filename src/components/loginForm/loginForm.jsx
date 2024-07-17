"use client";

import styles from "./loginForm.module.css";
import { login } from "@/lib/action";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className={styles.formInput}>
      <label>
        Email <em>*</em>
        <input
          required
          type="email"
          name="email"
          placeholder="johndoe@gmail.com"
          autoComplete="username"
        />
      </label>
      <label>
        Password <em>*</em>
        <input
          required
          type="password"
          name="password"
          placeholder="*******"
          autoComplete="current-password"
        />
      </label>
      <p className={styles.errorMsg}>{state?.error}</p>
      <button type="submit">Masuk</button>
    </form>
  );
};

export default LoginForm;
