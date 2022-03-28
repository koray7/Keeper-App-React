


const Note = (props) => {
    return (
        <div className="note">
            <div>
                <h1>{props.contact}</h1>
                <h2>{props.fname}</h2>
                <img src={props.img} alt="Pinhani"/>
                <h3>{props.phone}</h3>
                <h3>{props.email}</h3>
            </div>
        </div>
    )
}

export default Note;