import { Fragment } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";


function ErrorPage() {
    return (
        <Fragment>
            <Header />
            <Card>
                <h1>This page does not exists!</h1>
                <img src="https://img.freepik.com/free-vector/404-error-background-with-balloons-flat-style_23-2147761279.jpg?w=826&t=st=1679063678~exp=1679064278~hmac=6aa7c03bda175f62e40da028b764e00b86d7eccc81d7eb41235ea22c273075d4" alt="oops" />
            </Card>
            <Footer />
        </Fragment>
    )
}

export default ErrorPage;
