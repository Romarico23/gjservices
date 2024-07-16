import React from "react"
import "./spinninglogo.css"
import gjlogo from "/src/assets/backgrounds/gj-logo-spin.png"

export const SpinningLogo = () => {
	return (
		<div className="spinningLogo">
			<div>
				<img className="child" src={gjlogo} alt="LOGO" />
			</div>
		</div>
	)
}
