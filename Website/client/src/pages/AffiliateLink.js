import "./page-styles/AffiliateLink.css";
import React, { useEffect, /*useState*/ } from 'react';
import Cookies from "../components/tools/Cookies";

function AffiliateLink() {

    //let [ backendData, setBackendData ] = useState([{}]);

    useEffect(()=> {
        fetch("/api/affiliates/list", {
            headers: {'Content-Type':'application/json'},
            method: "POST",
            body: JSON.stringify({sessionid: Cookies.getCookie("sessionid")})
        }).then(
            response => response.json()
        ).then(
            data => {
                console.log(data);
                //setBackendData(data);
            }
        )
    }, [])

    /*function createAffiliateLink(name){
        fetch("/api/affiliates/create", {
            headers: {'Content-Type':'application/json'},
            method: "POST",
            body: JSON.stringify({sessionid: Cookies.getCookie("sessionid"), name: name})
        }).then(
            response => response.json()
        ).then(
            data => {
                console.log(data);
                //setBackendData(data);
            }
        )
    }*/

    return (
        <div>
        </div>
    )
}

export default AffiliateLink