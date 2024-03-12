import type { AppProps } from "next/app";
import { styled, Box } from "@mui/material";
import rootRouter from "@/routes/index";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  const router = useRouter();
  const Header = styled("div")`
    // stickey
    position: fixed;
    width: 100%;
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    background-color: #282c34;
    height: 60px;
  `;

  const TabCont = styled("div")`
    display: flex;
    justify-content: space-around;
  `;

  return (
    <Header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "100%",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          {/* <img width={80} height={50} src="/image/blogs-logo2.png" /> */}
        </div>
        <TabCont>
          {rootRouter.map((el, index) => {
            return (
              <Link key={index} href={el.path} className={styles["tab-header"]}>
                {el.title}
              </Link>
            );
          })}
        </TabCont>
      </div>
    </Header>
  );
}
