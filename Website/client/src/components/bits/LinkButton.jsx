import './LinkButton.css'

function LinkButton(props) {
    //let icon = props.icon;
    let text = props.text;
    let link = props.link;

    return (
        <a className="hover-ul" href={link}>
            <div className="LinkButton">
                <div className="text">
                    <span>{text}</span>
                </div>
            </div>
        </a>
    )
}

export default LinkButton