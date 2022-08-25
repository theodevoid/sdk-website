import Header from "layout/Header"
import Footer from "layout/Footer"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sesuatu Di Kopi</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout

