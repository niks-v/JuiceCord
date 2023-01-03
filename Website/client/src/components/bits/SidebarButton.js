import './SidebarButton.css'

function SidebarButton(props) {
    //let icon = props.icon;
    let text = props.text;
    let link = props.link;

    return (
        <a className="" href={link}>
            <div className="SidebarButton">
                <div className="text">
                    <span>{text}</span>
                </div>
            </div>
        </a>
    )
}

//TODO stop page refreshing on new page

//TODO add icons to buttons
//`<link href={'https://css.gg/' + icon + '.css'} rel='stylesheet' />`
//`<span className={'gg-'+ icon + " icon"}></span>`

export default SidebarButton