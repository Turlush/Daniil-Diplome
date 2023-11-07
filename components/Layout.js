import Header from "./Header"
import Footer from "./Footer"
import Head from "next/head"


const Layout = ({children}) => {
   return <>
    <Head>
        <title>BigPc</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="../public/favicon.ico"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        {/* <link href="/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" /> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"/>
        <link rel="stylesheet" href="/styles/styles.css"/>
    </Head>

    <Header/>
    {children}
    <Footer/>
    
        <script src="/js/jquery.min.js"></script>
        <script src="/js/YouTubePopUp.jquery.js"></script>
        <script src="/js/pace.min.js"></script>
        <script src="/js/wow.min.js"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
        <script src="/js/feather.min.js"></script>
        <script src="/js/main.js">
        </script>
    </>
   
}
export default Layout