import React from 'react'
import "./Home.css"
export const Home = () => {
    function Submit(e){
        e.preventDefault()
        var entered_email = document.getElementById("email_id").value
        if(entered_email!==""){
            alert("Thank you for Regsitering!")
            document.getElementById("email_id").value = ""
        }
        
    }
  return (
    <>
    <div>
    <div className="banner">
    <div className="section-left">
        <p className="header">An inspiring design delivered to your inbox every morning</p>
        <p className="description">Our team scouts the internet for the best designs, illustrations and art and
            delivers a truly inspiring one every day to your inbox</p>
        <p className="tag">Show me how it looks</p>
        <form action='/' onSubmit={Submit}>
        <input id="email_id" type="email" name="email_id" placeholder="Your e-mail address" required/>
        <button type='submit'>Register
            Now</button>
        </form>
        <div className="bottom-line">Free - No Spam - No Data Sharing</div>
    </div>
    <div className="section-right">
        <img alt="Error Loading" src={process.env.PUBLIC_URL +  "/images/user-img.svg"} />
    </div>
</div>
<div className="footer">
				<ul>
					<li>Prompt Generator</li>
					<li>Dweep Daily</li>
					<li>All Contributors</li>
					<li>Your data on Dweep.io</li>
					<li>Contribute to Dweep</li>
				</ul>
                <ul className="footer-list2">
                <li>Dweep.io</li>
					<li>Made with love in India</li>
                    <li className="logo-list">
						<img alt="Error Loading" src={process.env.PUBLIC_URL +  "/images/LinkedinLogo-5e3617ce.svg"} />
						<img alt="Error Loading" src={process.env.PUBLIC_URL +  "/images/InstagramLogo-c295ba7b.svg"} />
					</li>
                    <li>&nbsp;</li>
					<li>hello@dweep.io</li>
				</ul>
			
			</div>
</div>



    </>
  )
}
