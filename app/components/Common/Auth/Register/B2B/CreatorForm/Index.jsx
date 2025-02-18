import React from "react";
import "./styles.scss";
import { Col, Row } from "react-bootstrap";

function Index(props) {
  const { socailLinks, setSoicalLinks } = props;

  let InFIelds = [
    {
      label: "Instagram ID",
      name: "InstagramID",
    },
    {
      label: "TikTok ID",
      name: "TikTokID",
    },
    {
      label: "Youtube Channel",
      name: "YoutubeChannel",
    },
    {
      label: "Snapchat ID",
      name: "SnapchatID",
    },
    {
      label: "LinkedIn ID",
      name: "LinkedInID",
    },
    {
      label: "Weibo ID",
      name: "WeiboID",
    },
    {
      label: "WeChat ID",
      name: "WeChatID",
    },
    {
      label: "Douyin ID",
      name: "DouyinID",
    },
    {
      label: "Zhihu ID",
      name: "ZhihuID",
    },
    {
      label: "Tencent ID",
      name: "TencentID",
    },

    {
      label: "Kuaishou ID",
      name: "Kuaishou ID",
    },
    {
      label: "Youku ID",
      name: "Youku ID",
    },
    {
      label: "Xiaohongshu ID",
      name: "XiaohongshuID",
    },
    {
      label: "Douban ID",
      name: "DoubanID",
    },
    {
      label: "VKontakte ID",
      name: "VKontakteID",
    },
    {
      label: "Telegram ID",
      name: "TelegramID",
    },
    {
      label: "Twitter ID",
      name: "TwitterID",
    },
    {
      label: "RUTUBE ID",
      name: "RUTUBEID",
    },
    {
      label: "Live Journal ID",
      name: "LiveJournalID",
    },
    {
      label: "Odnoklassniki ID",
      name: "OdnoklassnikiID",
    },
    {
      label: "My World@Mail.Ru",
      name: "MyWorldMailRu",
    },
  ];
  return (
    <div className="CreatorForm233l">
      <div className="form-title mb-3">{props?.title}</div>
      <p className="para mb-3">
        Please share all your social media channels so that we can register you
        on our platform easily
      </p>
      <div className="regFormWrapper">
        <Row>
          {InFIelds?.map((item, i) => (
            <Col lg={4} key={i}>
              <div className="form_group mt-4">
                <label htmlFor={item?.name}>{item?.label}</label>
                <input
                  className="inputField"
                  name={item?.name}
                  type="text"
                  placeholder=""
                  value={socailLinks?.[item?.name]}
                  onChange={(e) => {
                    setSoicalLinks((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Index;
