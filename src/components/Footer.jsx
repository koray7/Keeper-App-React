const Footer = () => {

    const liveTime = new Date().getFullYear()
    console.log(liveTime)
    return(
        <div className="footer">
        <footer className="footer-text">Copyright {liveTime}</footer>
        </div>
    )
}

export default Footer;