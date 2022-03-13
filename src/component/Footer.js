import React,{Fragment} from 'react';

function Footer(props){
    console.log("in footer>>>",props)
    return(
        <Fragment>
            <hr/>
            <center>
                <h3>&copy; Shruti Patel {props.year}</h3>
            </center>
        </Fragment>
    )
}

export default Footer;