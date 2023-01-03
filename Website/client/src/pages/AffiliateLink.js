import "./page-styles/AffiliateLink.css"
import React, { useEffect, useState } from 'react';

function AffiliateLink() {

  let [ backendData, setBackendData ] = useState([{}]);
    useEffect(()=> {
        fetch("/api/affiliates/create").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data);
            }
        )
    }, [])

  return (
    <div>
      {backendData.action}
    </div>
  )
}

export default AffiliateLink