import React from 'react';
function Footer(props){
    console.log("In Footer>>", props)
    return(
        <React.Fragment>
            <hr/>
            <center>
                <h3>&copy; Shruti Patel {props.year}</h3>
            </center>
        </React.Fragment>
    )
}
export default Footer