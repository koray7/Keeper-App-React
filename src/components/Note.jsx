import Detail from "./Detail"


const Note = (props) => {
    return (
        <div className="note">
            <div>
                <h1>{props.contact}</h1>
                <h2>{props.fname}</h2>
                <img src={props.img} alt="Pinhani"/>
                <div className="bottom">
                <Detail detailInfo={props.tel} />
                <Detail detailInfo={props.email} />
                </div>
            </div>
        </div>
    )
}

export default Note;