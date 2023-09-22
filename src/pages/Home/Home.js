import { useState } from "react";
import styles from "./Home.module.css";
import HeaderCard from "../../assets/images/header_1.svg";
import ArrowIcon from "../../assets/images/ic_arrow.svg";
import LinkListItem from "../../components/LinkListItem/LinkListItem"
import EventLogo1 from "../../assets/images/event_logo_1.png";
import EventLogo2 from "../../assets/images/event_logo_2.png";
import EventLogo3 from "../../assets/images/event_logo_3.png";
import ArrowIconFill from "../../assets/images/ic_arrow_fill.png";
import AccordianListItem from "../../components/AccordianListItem/AccordianListItem";
import TopNav from "../../components/TopNav/TopNav";
import { useNavigate } from "react-router-dom";

const eventInformations = [
  { num: 1, title: "기간", text: "2023.07.01(토) ~ 2023.12.31(일)" },
  { num: 3, title: "대상", text: "신한투자증권 생애 첫 계좌 개설 신규 고객" },
];

const Home = () => {
  const navigate = useNavigate();
  const [openAccordion1, setOpenAccordion1] = useState(false);
  const [openAccordion2, setOpenAccordion2] = useState(false);

  const onClickAccordion1 = () => {
    setOpenAccordion1(!openAccordion1);
  };

  const onClickAccordion2 = () => {
    setOpenAccordion2(!openAccordion2);
  };

  return (
    <>
     <TopNav />
      <div className={styles.tabMenuContainer}>
        <button onClick={() => navigate("/")}>국내 주식</button>
        <button onClick={() => navigate("/global")}>해외 주식</button>
      </div>
    <div className={styles.container}>
      <section className={styles.header}>
        <div className={styles.headerSubTitle}>지금 계좌 개설하면</div>
        <div className={styles.headerTitle}>
          <span className={styles.primaryColor}>수수료 평생혜택</span> 제공
        </div>
        {/* 카드 섹션 */}
        <div className={styles.cardContainer}>
          <div className={styles.cardImageContainer}>
            <img
              className={styles.cardImage}
              src={HeaderCard}
              alt="온라인 수수료 평생 무료 혜택"
            />
          </div>
          <div className={styles.cardTitle}>
            온라인 국내주식 수수료
            <br />
            <span className={styles.primaryColor}>평생 혜택 </span>제공
          </div>
          {/* 설명 */}
          <ul className={styles.cardDesc}>
            <li>* 유관기관 제비용만 고객 부담(07.01 기준)</li>
            <li>- 코스피, 코스닥, 코넥스 : 0.00363960%</li>
            <li>- K-OTC : 0.09091870%</li>
            <li>- ETF, ETN, ELW : 0.00420870%</li>
            <li>* 온라인 채널 거래에 한함(증권플러스 제외)</li>
          </ul>
        </div>

        {/* 기간/대상 */}
        <div className={styles.infoContainer}>
          <div className={styles.eventInfo}>
            <div className={styles.infoTitle}>기간</div>
            <div className={styles.infoText}>
              2023.07.01(토) ~ 2023.12.31(일)
            </div>
          </div>
          <div className={styles.eventInfo}>
            <div className={styles.infoTitle}>대상</div>
            <div className={styles.infoText}>
              신한투자증권 생애 첫 계좌 개설 신규 고객
            </div>
          </div>
        </div>
        {/* 혜택받으러가기 버튼 */}
        <a href="https://open.shinhansec.com/m/event2/230701_feeEvent/event.jsp">
          <div className={styles.applyButton}>수수료 평생혜택 받기</div>
        </a>
      </section>
      {/* 아코디언 메뉴  */}
      <section className={styles.linkSection}>
        {/* 메뉴 1 */}
        <div>
          <AccordianListItem
              title={"투자에 필요한 더~ 많은 혜택"}
              onClick={onClickAccordion1}
              isOpen={openAccordion1}
          />

          <div
            className={`${styles.linkContentContainer} ${
              openAccordion1 ? styles.itemOpen : ""
            }`}
          >
            <LinkListItem
              subText={"수수료+환전우대 혜택까지"}
              text={"해외주식"}
              imageUrl={EventLogo1}
              linkUrl={"https://digitalshinhansec.com/global"}
            />
          </div>
        </div>

        {/* 메뉴 2 */}
        <div>
          <div className={styles.accordionContainer} onClick={onClickAccordion2}>
            <div className={styles.accordionTitle}>쉽고 빠른 투자 정보</div>
            <img
              src={ArrowIcon}
              className={`${styles.arrowIcon} ${
                openAccordion2 ? styles.arrowOpen : ""
              }`}
            />
          </div>

          <div
              className={`${styles.linkContentContainer} ${
                openAccordion2 ? styles.itemOpen : ""
              }`}
            >
            <LinkListItem
              subText={"쉽게 이해되는 투자 콘텐츠 가득!"}
              text={"<알파TV> 구독하기"}
              imageUrl={EventLogo2}
              linkUrl={"https://www.youtube.com/@shinhansecurities"}
            />
          </div>
          <div
              className={`${styles.linkContentContainer} ${
                openAccordion2 ? styles.itemOpen : ""
              }`}
            >
              <LinkListItem
                subText={"한발 빠르게 만나보는 투자 콘텐츠!"}
                text={"<카카오톡 채널 추가하기"}
                imageUrl={EventLogo3}
                linkUrl={"https://pf.kakao.com/_xdnLFd"}
              />
          </div>
            
        </div>
        
        
      </section>

      {/* 이벤트 유의사항 */}
      <section className={styles.noticeSction}>
        <h4 className={styles.noticeTitle}>※ 이벤트 유의사항</h4>
        <ul className={styles.noticeText}>
          <li>
            기간 내 대상 고객이 이벤트를 신청해야 혜택이 적용되며, 신청 시점
            이후 체결된 거래에 한해 수수료 혜택이 적용됩니다.
          </li>
          <li>
            본 이벤트 생애 첫 계좌 개설 신규 고객 조건은 2023.07.01(토) 이전에
            당사에서 개설한 계좌가 없는 고객(IRP, DB, DC 계좌 제외) 입니다.
          </li>
          <li>
            이벤트 대상 계좌는 ① 비대면 증권종합계좌(신한알파, 모바일 홈페이지,
            신한플러스에서 개설한 계좌 한정), ②은행제휴 S-Lite 한정입니다.
            파운트 등 핀테크 제휴계좌는 제외됩니다.
          </li>
          <li>
            기간 내 대상 고객이 이벤트를 신청해야 혜택이 적용되며,
            신청 시점 이후 체결된 거래에 한해 수수료 혜택이 적용됩니다.
          </li>
          <li>
            이벤트 신청 시 선택한 계좌 1개에 한하여 수수료 혜택이 적용되며,
            계좌 선택 후 변경은 불가합니다.
          </li>
          <li>
            거래로 인해 발생된 세금은 고객 부담입니다.
          </li>
          <li>
            유관기관 제비용이 변경될 경우 수수료 혜택 또한 변경될 수 있습니다.
          </li>
          <li>
            혜택 받고 있는 계좌를 중개형 ISA 계좌로 변환할 경우, 혜택은 중단될
            수 있습니다.
          </li>
        </ul>
      </section>
      <br/>

      {/* 투자 유의사항 */}
      <section className={styles.noticeSction}>
        <h4 className={styles.noticeTitle}>※ 투자 유의사항</h4>
        <ul className={styles.noticeText}>
          <li>
            투자자는 금융투자상품에 대하여 신한투자증권으로부터 충분한 설명을 받을 권리가 있으며,
            투자 전 상품설명서 및 약관을 반드시 읽어 보시기 바랍니다.
          </li>
          <li className={styles.strongnoticeText}>
            금융투자상품은 예금자보호법에 따라 예금보험공사가 보호하지 않습니다.
          </li>
          <li className={styles.strongnoticeText}>
            금융투자상품은 자산 가격 변동, 환율 변동, 신용등급 하락 등에 따라 투자원금의 손실(0~100%)이 발생할 수 있으며, 그 손실은 투자자에게 귀속됩니다.
          </li>
          <li>
            국내주식 거래 시 모바일 기준 표준 수수료는 0.1891639%(거래금액, 매체, 이벤트별 차등)이며, 기타 자세한 사항은 홈페이지 등을
            참고하시기 바랍니다.
          </li>
        </ul>
        <div className={styles.StyleText}>
          ※ 신한투자증권 준법감시인 심사필 제23-1395호
          <br/>(2023년 08월 31일 ~ 2023년 12월 31일)
        </div>
        <footer className={styles.footer}>
          서울특별시 영등포구 여의대로 70 (신한투자증권 타워) <br />
          대표이사 김상태 |사업자등록번호 116-81-36684 <br />
          ©2023 SHINHAN SECURITIES CO.,LTD.
        </footer>
      </section>
    </div>
    </>
  );
};

export default Home;