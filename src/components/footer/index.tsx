
import { styled } from "@mui/material";

const TextFooter = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;

    margin: 0 300px;
    margin-top: 50px;

    border-top: 1px solid #ccc;
    font-family: Courier New;
    font-style: italic;
`

const Footer = () => {

    return (
        <div>
            <TextFooter>Work hard in silence, let your success be the noise.</TextFooter>
        </div>
    )
}

export default Footer;