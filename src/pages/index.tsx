import type { NextPage } from 'next'
import Head from 'next/head'
import { Content } from '../components/Content'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Animator FX</title>
				<link
					rel="shortcut icon"
					href="/assets/images/icon-animator-fx.png"
					type="image/x-icon"
				/>
			</Head>
			<Navbar />
			<Content />
		</div>
	)
}

export default Home
