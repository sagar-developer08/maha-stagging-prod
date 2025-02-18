import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import { usePathname } from "next/navigation";
import faqsPageData from "../../../Db/faqsPage";
import "./styles.scss";
function Index() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  let faqsData = [
    {
      id: 0,
      qes: "Why should I fly in a hot air balloon in Dubai?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae.",
    },
    {
      id: 1,
      qes: "Do you sell gift vouchers for a hot air balloon flight?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae.",
    },
    {
      id: 2,
      qes: "How do I get to the take-off site?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae.",
    },
    {
      id: 3,
      qes: "What happens if the weather is bad?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae.",
    },
    {
      id: 0,
      qes: "Why should I fly in a hot air balloon in Dubai?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae.",
    },
    {
      id: 1,
      qes: "Do you sell gift vouchers for a hot air balloon flight?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae.",
    },
    {
      id: 2,
      qes: "How do I get to the take-off site?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae.",
    },
    {
      id: 3,
      qes: "What happens if the weather is bad?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae.",
    },
    {
      id: 0,
      qes: "Why should I fly in a hot air balloon in Dubai?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae.",
    },
    {
      id: 1,
      qes: "Do you sell gift vouchers for a hot air balloon flight?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae.",
    },
    {
      id: 2,
      qes: "How do I get to the take-off site?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae.",
    },
    {
      id: 3,
      qes: "What happens if the weather is bad?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae.",
    },
  ];
  return (
    <div className={lang == "ar" ? "FaqsI39Kk py-60 arB" : "FaqsI39Kk py-60"}>
      {" "}
      <Container>
        <div className="main-title mb-3">Faqs List</div>
        <div className="mt-5">
          <Accordion defaultActiveKey="0" flush>
            {faqsPageData?.map((item, i) => (
              <Accordion.Item eventKey={i} key={i}>
                <Accordion.Header>{item?.ques?.en}</Accordion.Header>
                <Accordion.Body>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item?.answer?.en,
                    }}
                  ></div>{" "}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
}

export default Index;
