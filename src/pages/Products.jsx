import React, { useEffect, useRef } from "react"
import "./products.css"
import { Link } from "react-router-dom"
import { motion, stagger, useAnimate, useInView } from "framer-motion"
import { useTypewriter } from "react-simple-typewriter"

export const Products = () => {
	const refRibbon = useRef(null)
	const isInViewRibbon = useInView(refRibbon, { once: true })

	const [typingTextProductsH1] = useTypewriter({
		words: ["PRODUCTS"],
		typeSpeed: 40,
		delaySpeed: 4000,
		loop: 1,
	})

	const refP = useRef(null)
	const isInViewP = useInView(refP, { once: true })

	const refImgHeader = useRef(null)
	const isInViewImgHeader = useInView(refImgHeader, { once: true })

	const refH1ProductList = useRef(null)
	const isInViewH1ProductList = useInView(refH1ProductList, { once: true })

	const refH2ResidentialProducts = useRef(null)
	const isInViewH2ResidentialProducts = useInView(refH2ResidentialProducts, {
		once: true,
	})

	const [scopeImgResidentialProducts, animateImgResidentialProducts] =
		useAnimate()
	const isInViewImgResidentialProducts = useInView(
		scopeImgResidentialProducts,
		{ once: true }
	)
	useEffect(() => {
		if (isInViewImgResidentialProducts) {
			animateImgResidentialProducts(
				scopeImgResidentialProducts.current,
				{ opacity: [0, 1] },
				{ duration: 1, delay: 0.5 }
			)
			animateImgResidentialProducts(
				"img",
				{ scale: [0.1, 1] },
				{ duration: 1.2, delay: 0.2 }
			)
			animateImgResidentialProducts(
				"h3",
				{ rotateY: [360, 0] },
				{ duration: 1.5, delay: 0.4, ease: "easeInOut" }
			)
		}
	}, [isInViewImgResidentialProducts])

	const refH2CommercialProducts = useRef(null)
	const isInViewH2CommercialProducts = useInView(refH2CommercialProducts, {
		once: true,
	})

	const [scopeImgCommercialProducts, animateImgCommercialProducts] =
		useAnimate()
	const isInViewImgCommercialProducts = useInView(scopeImgCommercialProducts, {
		once: true,
	})

	useEffect(() => {
		if (isInViewImgCommercialProducts) {
			animateImgCommercialProducts(
				scopeImgCommercialProducts.current,
				{ opacity: [0, 1] },
				{ duration: 1, delay: 0.5 }
			)
			animateImgCommercialProducts(
				"img",
				{ scale: [0.1, 1] },
				{ duration: 1.2, delay: 0.2 }
			)
			animateImgCommercialProducts(
				"h3",
				{ rotateY: [360, 0] },
				{ duration: 1.5, delay: 0.4, ease: "easeInOut" }
			)
		}
	}, [isInViewImgCommercialProducts])

	const refH2IndustrialProducts = useRef(null)
	const isInViewH2IndustrialProducts = useInView(refH2IndustrialProducts, {
		once: true,
	})

	const [scopeImgIndustrialProducts, animateImgIndustrialProducts] =
		useAnimate()
	const isInViewImgIndustrialProducts = useInView(scopeImgIndustrialProducts, {
		once: true,
	})

	useEffect(() => {
		if (isInViewImgIndustrialProducts) {
			animateImgIndustrialProducts(
				scopeImgIndustrialProducts.current,
				{ opacity: [0, 1] },
				{ duration: 1, delay: 0.5 }
			)
			animateImgIndustrialProducts(
				"img",
				{ scale: [0.1, 1] },
				{ duration: 1.2, delay: 0.2 }
			)
			animateImgIndustrialProducts(
				"h3",
				{ rotateY: [360, 0] },
				{ duration: 1.5, delay: 0.4, ease: "easeInOut" }
			)
		}
	}, [isInViewImgIndustrialProducts])

	const refH1ProductBrands = useRef(null)
	const isInViewH1ProductBrands = useInView(refH1ProductBrands, { once: true })

	const [scopeImg, animateImg] = useAnimate()
	const isInViewImg = useInView(scopeImg, { once: true })

	useEffect(() => {
		if (isInViewImg) {
			animateImg(
				"img",
				{ opacity: [0, 1] },
				{ duration: 3, delay: stagger(0.2, { from: "center" }) }
			)
		}
	}, [isInViewImg])

	return (
		<motion.div
			className="productsContent"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.1, ease: "easeInOut" }}
			exit={{ opacity: 0 }}
		>
			<div className="productsHeader">
				<div>
					<div
						className="ribbon"
						ref={refRibbon}
						style={{
							transform: isInViewRibbon ? "none" : "translateY(-20px)",
							opacity: isInViewRibbon ? 1 : 0,
							transition: "all 2s",
						}}
					></div>
					<div>
						<h1>{typingTextProductsH1}</h1>
						<p
							ref={refImgHeader}
							style={{
								opacity: isInViewImgHeader ? 1 : 0,
								transition: "all 2s .5s",
							}}
						>
							We are an authorized dealer of leading Brands! Our selection of
							products are not only the highest quality, but are also available
							in a variety of options to ensure you find exactly what you’re
							looking for.
						</p>
					</div>
				</div>
				<img
					src="assets/products/airconsproducts.webp"
					alt="Image"
					ref={refP}
					style={{
						opacity: isInViewP ? 1 : 0,
						transition: "all 2s .5s",
					}}
				/>
			</div>
			<div className="productsList">
				<h1
					ref={refH1ProductList}
					style={{
						transform: isInViewH1ProductList ? "none" : "translate(200px, 0px)",
						opacity: isInViewH1ProductList ? 1 : 0,
						transition: "all 2s",
					}}
				>
					OUR PRODUCT LINE UP
				</h1>
				<div className="residentialProducts">
					<h2
						ref={refH2ResidentialProducts}
						style={{
							transform: isInViewH2ResidentialProducts
								? "none"
								: "translate(200px, 0px)",
							opacity: isInViewH2ResidentialProducts ? 1 : 0,
							transition: "all 2s",
						}}
					>
						Residential Products
					</h2>
					<div
						className="residentialProductsContainer"
						ref={scopeImgResidentialProducts}
					>
						<Link to="/contact">
							<img src="assets/products/wallmounted.webp" alt="Image" />
							<h3>WALL MOUNTED TYPE</h3>
						</Link>
						<Link to="/contact">
							<img src="assets/products/window.webp" alt="Image" />
							<h3>WINDOW TYPE</h3>
						</Link>
					</div>
				</div>
				<div className="commercialProducts" ref={scopeImgCommercialProducts}>
					<h2
						ref={refH2CommercialProducts}
						style={{
							transform: isInViewH2CommercialProducts
								? "none"
								: "translate(200px, 0px)",
							opacity: isInViewH2CommercialProducts ? 1 : 0,
							transition: "all 2s",
						}}
					>
						Light Commercial Products
					</h2>
					<div
						className="commercialProductsContainer"
						ref={scopeImgCommercialProducts}
					>
						<Link to="/contact">
							<img src="assets/products/cassette.webp" alt="Image" />
							<h3>CASSETTE TYPE</h3>
						</Link>
						<Link>
							<img src="assets/products/ceilingmounted.webp" alt="Image" />
							<h3>CEILING MOUNTED TYPE</h3>
						</Link>
						<Link to="/contact">
							<img src="assets/products/floormounted.webp" alt="Image" />
							<h3>FLOOR MOUNTED TYPE</h3>
						</Link>
						<Link to="/contact">
							<img src="assets/products/freematch.webp" alt="Image" />
							<h3>FREE MATCH TYPE</h3>
						</Link>
						<Link to="/contact">
							<img src="assets/products/concealed.webp" alt="Image" />
							<h3>CONCEALED TYPE</h3>
						</Link>
					</div>
					<div className="industrialProducts">
						<h2
							ref={refH2IndustrialProducts}
							style={{
								transform: isInViewH2IndustrialProducts
									? "none"
									: "translate(200px, 0px)",
								opacity: isInViewH2IndustrialProducts ? 1 : 0,
								transition: "all 4s",
							}}
						>
							Industrial Products
						</h2>
						<div
							className="industrialProductsContainer"
							ref={scopeImgIndustrialProducts}
						>
							<Link to="/contact">
								<img src="assets/products/chilledwater.webp" alt="Image" />
								<h3>CHILLED WATER TYPE</h3>
							</Link>
							<Link to="/contact">
								<img src="assets/products/bigduct.webp" alt="Image" />
								<h3>BIG DUCT TYPE</h3>
							</Link>
							<Link to="/contact">
								<img src="assets/products/vrfsystem.webp" alt="Image" />
								<h3>VRF SYSTEM</h3>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="productBrands">
				<h1
					ref={refH1ProductBrands}
					style={{
						transform: isInViewH1ProductBrands
							? "none"
							: "translate(200px, 0px)",
						opacity: isInViewH1ProductBrands ? 1 : 0,
						transition: "all 2s",
					}}
				>
					PRODUCT BRANDS
				</h1>
				<div ref={scopeImg}>
					<Link to="https://greephilippines.com.ph/" target="_blank">
						<img src="assets/brands/gree.png" alt="Image" />
					</Link>
					<Link to="https://www.daikin.com.ph/products/" target="_blank">
						<img src="assets/brands/daikin.png" alt="Image" />
					</Link>
					<Link
						to="https://www.panasonic.com/ph/air-solutions/air-conditioning.html"
						target="_blank"
					>
						<img src="assets/brands/panasonic.png" alt="Image" />
					</Link>
					<Link to="https://koppel.ph/products/" target="_blank">
						<img src="assets/brands/koppel.png" alt="Image" />
					</Link>
					<Link
						to="https://www.samsung.com/ph/air-conditioners/all-air-conditioners/"
						target="_blank"
					>
						<img src="assets/brands/samsung.png" alt="Image" />
					</Link>
					<Link
						to="https://carrier.com.ph/residential/products/"
						target="_blank"
					>
						<img src="assets/brands/carrier.png" alt="Image" />
					</Link>
					<Link to="https://www.lg.com/ph/air-conditioners" target="_blank">
						<img src="assets/brands/lg.png" alt="Image" />
					</Link>
					<Link
						to="https://www.haier.com/ph/air-conditioners/?spm=ph.ProductList_pc.header_101377_20190530.4"
						target="_blank"
					>
						<img src="assets/brands/haier.png" alt="Image" />
					</Link>
					<Link to="https://www.midea.com/ph/cooling-comfort" target="_blank">
						<img src="assets/brands/midea.png" alt="Image" />
					</Link>
				</div>
			</div>
		</motion.div>
	)
}
