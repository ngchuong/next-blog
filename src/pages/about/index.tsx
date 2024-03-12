import { styled, Box } from "@mui/material";
import SVG from "react-inlinesvg";
import GithubIcon from "@/icons/github.svg";
import LinkedinIcon from "@/icons/linkedin.svg";
import SkypeIcon from "@/icons/skype.svg";
import YoutubeIcon from "@/icons/youtube.svg";
import Image from "next/image";

const RightBody = styled("div")`
  /* width: 30%; */
`;

const ImgCont = styled("div")`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const Row = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  a {
    color: #fff;
  }
`;

const IconCont = styled("div")`
  width: 20px;
  margin-right: 5px;
`;
const CustomImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Information = () => {
  return (
    <RightBody>
      <ImgCont>
        <img
          width={"200px"}
          style={{ borderRadius: "50%" }}
          src="/image/me.jpg"
        />
      </ImgCont>
      <Box mb={1}>
        <div>
          Hi, I'm Nguyen Giang Chuong. I am developer js, blogger and ... not
          good.
        </div>
        <div></div>
      </Box>
      <div>
        <Box mb={1} sx={{ fontWeight: 600 }}>
          LET'S CONNECT!
        </Box>
        <div>
          <Row>
            <IconCont>
              <CustomImage
                priority
                src={GithubIcon}
                alt="Follow me on Github"
              />
            </IconCont>
            <div>
              <a href="https://github.com/ngchuong">
                https://github.com/ngchuong
              </a>
            </div>
          </Row>
          <Row>
            <IconCont>
              <CustomImage src={LinkedinIcon} style={{ fill: "#fff" }} />
            </IconCont>
            <div>
              <a href="https://www.linkedin.com/in/nguyen-giang-chuong-6a0324242/">
                https://linkedin.com/chuongng
              </a>
            </div>
          </Row>
          <Row>
            <IconCont>
              <CustomImage src={SkypeIcon} style={{ fill: "#fff" }} />
            </IconCont>
            <div>
              <a href="">https://skype.com/chuongng</a>
            </div>
          </Row>
          <Row>
            <IconCont>
              <CustomImage src={YoutubeIcon} style={{ fill: "#fff" }} />
            </IconCont>
            <div>
              <a href="">https://youtube.com/ngchuong</a>
            </div>
          </Row>
        </div>
      </div>
    </RightBody>
  );
};

export default Information;
