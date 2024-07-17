"use client";

import styles from "./registerForm.module.css";
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.formInput}>
      <label>
        Nama <em>*</em>
        <input required type="text" name="name" placeholder="John doe" />
      </label>
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
        Nomor telepon<em>*</em>
        <input
          required
          type="tel"
          name="nomorhp"
          placeholder="cth: 081234567890"
        />
      </label>
      <label>
        Nomor whatsapp<em>*</em>
        <input
          required
          type="tel"
          name="nomorwa"
          placeholder="cth: 081234567890"
        />
      </label>
      <label>
        Password <em>*</em>
        <input
          required
          type="password"
          name="password"
          placeholder="*******"
          autoComplete="new-password"
        />
      </label>
      <label>
        Password again <em>*</em>
        <input
          required
          type="password"
          name="passwordRepeat"
          placeholder="*******"
          autoComplete="new-password"
        />
      </label>
      <button type="submit">Daftar</button>
      <p className={styles.errorMsg}>{state?.error}</p>
    </form>
  );
};

export default RegisterForm;
