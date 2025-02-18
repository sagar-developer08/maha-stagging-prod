import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import { usePathname } from "next/navigation";
import "./styles.scss";
function Index(props) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const [viewMore, setViewMore] = useState(false);

  let faqsData = [
    {
      id: 0,
      qes: "Why should I fly in a hot air balloon in Dubai?",
      ans: "Undoubtedly, one of the best ways to view the beautiful scenery of the rejuvenating desert versus the magic of Dubai skyline is by a Hot Air Balloon Ride. You can enjoy what a wonderful comfort is to be lightly lifted off the ground in a hot air balloon ride.",
    },
    {
      id: 1,
      qes: "Do you sell gifts or souvenirs for a hot air balloon flight?",
      ans: "Yes indeed! Sure, you can take an enormous variety of gifts, mementos and souvenirs as a proof of having taken the hot air balloon uae. Carry back trendy merchandise by your side with you as a souvenir of your great ride.",
    },
    {
      id: 2,
      qes: "How do I get to the take-off site?",
      ans: "We always know in our hearts to help you with your travel plans with all the questions for directions. The transport team will give detailed on how conveyance will be scheduled.",
    },
    {
      id: 3,
      qes: "What happens if the weather is bad?",
      ans: "For us, security is the foremost. If the weather is not flight-compatible, we can reschedule your flight for a time when things are deemed best. Our weather experts forecast 24/7 to ensure smooth and safe experience for our beloved passengers.",
    },
  ];

  return (
    <div
      className={
        lang == "ar" ? "FaqsCommon32KI3 py-60 arB" : "FaqsCommon32KI3 py-60"
      }
    >
      <Container>
        <h5 className="main-title mb-3">
          {props?.title ? props?.title : "Frequently Asked Questions"}
        </h5>
        <div className="mt-2">
          {props?.content ? (
            <>
              <>
                {viewMore ? (
                  <>
                    <Accordion defaultActiveKey="0" flush>
                      {props?.content?.map((item, i) => (
                        <Accordion.Item eventKey={item?.id} key={i}>
                          <Accordion.Header>{item?.qes?.en}</Accordion.Header>
                          <Accordion.Body>
                            <div
                              className="details"
                              dangerouslySetInnerHTML={{
                                __html: item?.ans?.en,
                              }}
                            ></div>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </>
                ) : (
                  <>
                    <Accordion defaultActiveKey="0" flush>
                      {props?.content?.slice(0, 10)?.map((item, i) => (
                        <Accordion.Item eventKey={item?.id} key={i}>
                          <Accordion.Header>{item?.qes?.en}</Accordion.Header>
                          <Accordion.Body>
                            <div
                              className="details"
                              dangerouslySetInnerHTML={{
                                __html: item?.ans?.en,
                              }}
                            ></div>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </>
                )}
                {props?.content?.length <= 10 ? null : (
                  <button
                    className="btnNl btnNl-primary mt-2"
                    onClick={() => setViewMore(!viewMore)}
                  >
                    {viewMore ? "View Less" : "View More"}
                  </button>
                )}
              </>
            </>
          ) : (
            <Accordion defaultActiveKey="0" flush>
              {faqsData?.map((item, i) => (
                <Accordion.Item eventKey={item?.id} key={i}>
                  <Accordion.Header>{item?.qes}</Accordion.Header>
                  <Accordion.Body>{item?.ans}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Index;
