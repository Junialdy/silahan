// import { handleGithubLogin, login } from "@/lib/action";
// import { auth, signIn } from "@/lib/auth";
// import { BsGithub } from "react-icons/bs";
import styles from "./login.module.css";
import Link from "next/link";
import LoginForm from "@/components/loginForm/loginForm";

const LoginPage = async () => {
  // const session = await auth();
  // console.log(session);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <p>Selamat Datang!</p>
          <h1>Masuk ke SiLahan</h1>
        </div>
        <hr />
        <LoginForm />
        {/* <div className={styles.authProvider}>
          <p>atau</p>
          <form action={handleGithubLogin} className={styles.formInput}>
            <button type="submit">
              <span>Masuk dengan </span>
              <BsGithub className={styles.icons} />
            </button>
          </form>
        </div> */}
        <p className={styles.toLogin}>
          Belum memiliki akun?{" "}
          <Link href="/register">
            <span>Daftar</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
