const Footer = () => {

    const liveTime = new Date().getFullYear()
    console.log(liveTime)
    return(
        <div className="footer">
        <p className="footer-text">Copyright {liveTime}</p>
        </div>
    )
}

export default Footer;