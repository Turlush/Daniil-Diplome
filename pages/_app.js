import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

function MyApp({Component, pageProps}) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}

export default MyApp