import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
	return (
		<>
			<Head>
				<title>Yikes inc.</title>
				<link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
			</Head>
			<header className='hero'>
				<div className='container'>
					<h1 className='hero-title'>Amazing shoes at an amazing price</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
						ipsam natus excepturi soluta dolore blanditiis ab voluptatibus,
						ipsa, distinctio quis quasi maiores. Nisi at corrupti, suscipit
						ipsum delectus maiores quos.
					</p>
					<Link href='/'>
						<a className='btn'>View products</a>
					</Link>
				</div>
			</header>
			<main>
				<section className='featured'>
					<div className='container'>
						<h2 className='section-title'>Featured products</h2>
						<div className='row'>
							<a href='/' className='featured__item'>
								<img
									src='/images/shoe-4.png'
									alt='A beautiful shoe'
									className='featured__img'
								/>
								<p className='featured__details'></p>
							</a>
							<a href='/' className='featured__item'>
								<img
									src='/images/shoe-5.png'
									alt='A beautiful shoe'
									className='featured__img'
								/>
								<p className='featured__details'></p>
							</a>
							<a href='/' className='featured__item'>
								<img
									src='/images/shoe-6.png'
									alt='A beautiful shoe'
									className='featured__img'
								/>
								<p className='featured__details'></p>
							</a>
						</div>
					</div>
				</section>
				<section className='products' id='#products'>
					<div className='conatiner'>
						<h2 className='section-title'>Our products</h2>
						<article className='product'>
							<img
								src='/images/shoe-1.png'
								alt='A beautiful shoe'
								className='product__img'
							/>
							<h3 className='product__title'>A really nice shoe</h3>
							<p className='product_description'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Provident accusamus labore placeat.
							</p>
							<a href='/' className='btn'>
								View details
							</a>
						</article>
						<article className='product'>
							<img
								src='/images/shoe-2.png'
								alt='A beautiful shoe'
								className='product__img'
							/>
							<h3 className='product__title'>The perfect shoe</h3>
							<p className='product_description'>
								Totam consectetur a atque natus dolorem distinctio eveniet ad
								eos voluptates consequuntur nesciunt enim excepturi obcaecati
								repudiandae.
							</p>
							<a href='/' className='btn'>
								View details
							</a>
						</article>
						<article className='product'>
							<img
								src='/images/shoe-3.png'
								alt='A beautiful shoe'
								className='product__img'
							/>
							<h3 className='product__title'>A shoe to fall in love with</h3>
							<p className='product_description'>
								Consectetur laborum ratione accusamus ipsam accusantium dolorum
								officiis, illum exercitationem, nisi labore eveniet!
							</p>
							<a href='/' className='btn'>
								View details
							</a>
						</article>
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
