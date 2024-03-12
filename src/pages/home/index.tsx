import { styled, Box } from "@mui/material";
import { useEffect } from "react";

import SVG from 'react-inlinesvg';
import GithubIcon from "../../icons/github.svg";
import LinkedinIcon from "../../icons/linkedin.svg";
import SkypeIcon from "../../icons/skype.svg";
import YoutubeIcon from "../../icons/youtube.svg";

const Container = styled('div')`
    font-size: 15px;
`;

const BgCont = styled('div')`
    display: flex;
    justify-content: center;

    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
`;

const Body = styled('div')`
    margin-top: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const LeftBody = styled('div')`
    width: 60%;
    text-indent: 30px;
    line-height: 1.8;
`

const RightBody = styled('div')`
    width: 30%;
`;

const ImgCont = styled('div')`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`;

const Row = styled('div')`
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    a {
        color:#fff;
    }
`;

const IconCont = styled('div')`
    width: 20px;
    margin-right: 5px;
`

const Home = () => {
    return (
        <Container>
            <BgCont>
                <img width={'900px'} height={'500px'} src="/image/bg-01.jpg" alt="#" />
            </BgCont>
            <Body>
                <LeftBody>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</LeftBody>
                <RightBody>
                    <ImgCont>
                        <img width={"200px"} style={{ borderRadius: "50%" }} src="/image/me.jpg" />
                    </ImgCont>
                    <Box mb={1}>
                        <div>Hi, I'm Nguyen Giang Chuong. I am developer js, blogger and ... not good.</div>
                        <div></div>
                    </Box>
                    <div>
                        <Box mb={1} sx={{ fontWeight: 600 }}>LET'S CONNECT!</Box>
                        <div>
                            <Row>
                                <IconCont ><SVG src={GithubIcon} style={{ fill: "#fff" }} /></IconCont>
                                <div><a href="https://github.com/ngchuong">https://github.com/ngchuong</a></div>
                            </Row>
                            <Row>
                                <IconCont ><SVG src={LinkedinIcon} style={{ fill: "#fff" }} /></IconCont>
                                <div><a href="https://www.linkedin.com/in/nguyen-giang-chuong-6a0324242/">https://linkedin.com/chuongng</a></div>
                            </Row>
                            <Row>
                                <IconCont ><SVG src={SkypeIcon} style={{ fill: "#fff" }} /></IconCont>
                                <div><a href="">https://skype.com/chuongng</a></div>
                            </Row>
                            <Row>
                                <IconCont ><SVG src={YoutubeIcon} style={{ fill: "#fff" }} /></IconCont>
                                <div><a href="">https://youtube.com/ngchuong</a></div>
                            </Row>
                        </div>
                    </div>
                </RightBody>
            </Body>
        </Container>
    )
}

export default Home;