import React from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { IoSadOutline } from "react-icons/io5";
import "./styles.scss";

const Error = () => {
  const router = useRouter();

  return (
    <div className="Pag404eDiek">
      <Container className="py-60  text-center">
        <div className="notFound-title">
          4<IoSadOutline />4
        </div>
        <p>But don’t be afraid. Just click on Go To Home Button.</p>
        <button
          className="btnNl btnNl-primary"
          onClick={() => router.push("/")}
        >
          Go To Home
        </button>
      </Container>
    </div>
  );
};

export default Error;
