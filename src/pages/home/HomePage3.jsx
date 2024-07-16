import React, { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
	motion,
	stagger,
	useAnimate,
	useAnimation,
	useInView,
} from "framer-motion"
import gree from "/src/assets/brands/gree.png"
import daikin from "/src/assets/brands/daikin.png"
import panasonic from "/src/assets/brands/panasonic.png"
import koppel from "/src/assets/brands/koppel.png"
import samsung from "/src/assets/brands/samsung.png"
import carrier from "/src/assets/brands/carrier.png"
import lg from "/src/assets/brands/lg.png"
import haier from "/src/assets/brands/haier.png"
import midea from "/src/assets/brands/midea.png"

export const HomePage3 = ({ addMinusPage }) => {
	const navigate = useNavigate()

	const handleNavigateContact = () => {
		navigate("/contact")
	}

	const loadPageAnimation = useAnimation()
	useEffect(() => {
		loadPageAnimation.start({
			x: [addMinusPage === "true" ? -1000 : 1000, 0],
			transition: { duration: 0.4 },
		})
	}, [])

	const refH1 = useRef(null)
	const isInViewH1 = useInView(refH1, { once: true })
	const refBtn = useRef(null)
	const isInViewBtn = useInView(refBtn, { once: true })
	const refBackgroundImg = useRef(null)
	const isInViewBackgroundImg = useInView(refBackgroundImg, { once: true })

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
			className="homePage-3"
			animate={loadPageAnimation}
			exit={{ x: 0 }}
		>
			<h1
				ref={refH1}
				style={{
					opacity: isInViewH1 ? 1 : 0,
					transition: "all 2.5s",
				}}
			>
				ACCREDITED BY LEADING BRANDS!
			</h1>
			<div ref={scopeImg}>
				<Link to="https://greephilippines.com.ph/" target="_blank">
					<img src={gree} alt="Image" />
				</Link>
				<Link to="https://www.daikin.com.ph/products/" target="_blank">
					<img src={daikin} alt="Image" />
				</Link>
				<Link
					to="https://www.panasonic.com/ph/air-solutions/air-conditioning.html"
					target="_blank"
				>
					<img src={panasonic} alt="Image" />
				</Link>
				<Link to="https://koppel.ph/products/" target="_blank">
					<img src={koppel} alt="Image" />
				</Link>
				<Link
					to="https://www.samsung.com/ph/air-conditioners/all-air-conditioners/"
					target="_blank"
				>
					<img src={samsung} alt="Image" />
				</Link>
				<Link
					to="https://carrier.com.ph/residential/products/air-conditioners/all-products/"
					target="_blank"
				>
					<img src={carrier} alt="Image" />
				</Link>
				<Link to="https://www.lg.com/ph/air-conditioners" target="_blank">
					<img src={lg} alt="Image" />
				</Link>
				<Link
					to="https://www.haier.com/ph/air-conditioners/?spm=ph.ProductList_pc.header_101377_20190530.4"
					target="_blank"
				>
					<img src={haier} alt="Image" />
				</Link>
				<Link to="https://www.midea.com/ph/shop" target="_blank">
					<img src={midea} alt="Image" />
				</Link>
			</div>
			<div
				ref={refBtn}
				style={{
					transform: isInViewBtn ? "none" : "translate(200px, 0px)",
					opacity: isInViewBtn ? 1 : 0,
					transition: "all 2s",
				}}
			>
				<button onClick={handleNavigateContact}>INQUIRE NOW</button>
			</div>
			<div>
				<img
					ref={refBackgroundImg}
					style={{
						transform: isInViewBackgroundImg ? "none" : "scale(0.8)",
						opacity: isInViewBackgroundImg ? 0.5 : 0,
						transition: "all 3s",
					}}
					src="assets/backgrounds/image-3.png"
					alt="Image"
				/>
			</div>
		</motion.div>
	)
}
