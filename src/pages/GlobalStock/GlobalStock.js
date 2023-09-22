import { useEffect, useState } from "react";
import styles from "./GlobalStock.module.css";
import LinkListItem from "../../components/LinkListItem/LinkListItem";
import EventLogo1 from "../../assets/images/event_logo_1.png";
import EventLogo2 from "../../assets/images/event_logo_2.png";
import EventLogo3 from "../../assets/images/event_logo_3.png";
import EventInfo from "../../components/EventInfo/EventInfo";
import AccordianListItem from "../../components/AccordianListItem/AccordianListItem";
import BenefitCard from "../../components/BenefitCard/BenefitCard";
import TopNav from "../../components/TopNav/TopNav";
import { useNavigate } from "react-router-dom";
import { getStockGlobalEvents } from "../../apis/stockApis";

const GlobalStock = () => {
  const navigate = useNavigate();
  const [isOpenAccordian1, setIsOpenAccordian1] = useState(false);
  const [isOpenAccordian2, setIsOpenAccordian2] = useState(false);
  const [events, setEvents] = useState();

  // 렌더링 후 호출되는 로직
  useEffect(() => {
    fetchEvents();
  }, []);

  /** 이벤트 리스트 서버에서 불러와서 events 상태에 set */
  const fetchEvents = async () => {
    const response = await getStockGlobalEvents();
    setEvents(response);
  };

  /**  첫번째 아코디언 아이템 클릭 이벤트*/
  const onClickAccordion1 = () => {
    setIsOpenAccordian1(!isOpenAccordian1);
  };

  /** 두번째 아코디언 아이템 클릭 이벤트  */
  const onClickAccordion2 = () => {
    setIsOpenAccordian2(!isOpenAccordian2);
  };

  return (
    <>
      <TopNav />
      {/*상단 탭 */}
      <div className={styles.tabMenuContainer}>
        <button onClick={() => navigate("/")}>국내 주식</button>
        <button onClick={() => navigate("/global")}>해외 주식</button>
      </div>

      <div className={styles.container}>
        <section className={styles.header}>
          {/* 이벤트가 없으면(불러오기 전이면) 로딩 중 노출*/}
          {!events && <div>로딩 중...</div>}

          {/* 이벤트가 있으면 이벤트 UI 노출 */}
          {events &&
            events.map((event, index) => (
              <div className={styles.event}>
                <div className={styles.roundBadge}>이벤트 {index + 1}</div>
                <div className={styles.headerSubTitle}>{event.subTitle}</div>
                <div className={styles.headerTitle}>
                  <span className={styles.primaryColor}>{event.title}</span>
                </div>
                {/* 카드 섹션 */}
                <BenefitCard benefit={event.benefits[0]} />

                {/* 기간/대상 */}
                <div className={styles.infoContainer}>
                  <EventInfo
                    title={"기간"}
                    text={`${event.startDate}-${event.endDate}`}
                  />
                  <EventInfo title={"대상"} text={event.target} />
                </div>
                {/* 버튼 */}
                <a href={event.buttonLink} target="_blank">
                  <div className={styles.applyButton}>{event.buttonLabel}</div>
                </a>
              </div>
            ))}
        </section>

        {/* 아코디언 메뉴  */}
        <section className={styles.linkSection}>
          {/* 메뉴 1 */}
          <div>
            <AccordianListItem
              title={"투자에 필요한 더~ 많은 혜택"}
              onClick={onClickAccordion1}
              isOpen={isOpenAccordian1}
            />
            <div
              className={`${styles.linkContentContainer} ${
                isOpenAccordian1 ? styles.itemOpen : ""
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
            <AccordianListItem
              title={"쉽고 빠른 투자 정보"}
              onClick={onClickAccordion2}
              isOpen={isOpenAccordian2}
            />
            <div
              className={`${styles.linkContentContainer} ${
                isOpenAccordian2 ? styles.itemOpen : ""
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
                isOpenAccordian2 ? styles.itemOpen : ""
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
              이벤트 대상 계좌는 ① 비대면 증권종합계좌(신한알파, 모바일
              홈페이지, 신한플러스에서 개설한 계좌 한정), ②은행제휴 S-Lite
              한정입니다. 파운트 등 핀테크 제휴계좌는 제외됩니다.
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
            외화자산의 경우 환율 변동에 따라 손실이 발생할 수 있습니다.
          </li>
          <li className={styles.strongnoticeText}>
            모든 종목에 대하여 소수점 거래 서비스가 제공되는 것은 아니며, 소수점 거래가 가능한 종목 확인이 필요합니다.
          </li>
          <li className={styles.strongnoticeText}>
            신한투자증권은 여러 투자자의 소수단위 매매주문을 취합하여
            집행함에 따라 투자자의 매매주문과 체결시점의 차이가 발생할 수 있어 매매가격 혹은 실제 배정받는 주식 수량이 변동될 수 있습니다.
          </li>
          <li className={styles.strongnoticeText}>
            소수단위 주식은 타 증권사로 대체가 불가능합니다.
          </li>
          <li>
            해외주식 매매차익 연 250만원 초과분에 대해 양도소득세(20%) + 양도지방소득세(양도소득세의 10%)가 부과됩니다.
          </li>
          <li>
            투자자는 금융투자상품에 대하여 신한투자증권으로부터 충분한 설명을 받을 권리가 있으며,
            투자 전 상품설명서 및 약관을 반드시 읽어 보시기 바랍니다.
          </li>
          <li>
            과세기준 및 과세방법은 향후 세법 개정 등에 따라 변동될 수 있습니다.
          </li>
          <li>
            해외주식 거래 시 모바일 미국 기준 표준 수수료는 0.25%(거래금액, 국가별 상이)이며,자세한 사항은 홈페이지 등을 참고하시기 바랍니다.
          </li>
          <li>
            국가별 제비용은 미국 기준 최소 수수료 USD 0.01, SEC Fee(매도 시) 0.0008%이며, 수시 변경 가능합니다. 그 외 국가의 최소 수수료 및
            기타 제비용은 홈페이지를 참고하시기 바랍니다.
          </li>
          <li>
            해외주식 양도소득세 신고 대행 서비스는 당사 홈페이지 > 트레이딩 >
            해외주식 > 업무안내 > 세금안내/신고대행 서비스에서 자세한 내용을 확인하실 수 있습니다.
          </li>
        </ul>
        <div className={styles.StyleText}>
          ※ 신한투자증권 준법감시인 심사필 제23-1395호
          <br/>(2023년 09월 04일 ~ 2023년 10월 31일)
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

export default GlobalStock;