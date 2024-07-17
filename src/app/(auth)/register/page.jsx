import Link from "next/link";
import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <p>Selamat Datang!</p>
          <h1>Daftar ke SiLahan</h1>
        </div>
        <hr />
        <RegisterForm />
        <p className={styles.toLogin}>
          Sudah memiliki akun?{" "}
          <Link href="/login">
            <span>Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
