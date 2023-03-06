
let mainTitle = [
    "취향 저격 맞춤 상품",
    "특별한 특가",
    "11월 제철식탁 한눈에 보기",
    "인기 카테고리 모음",
    "오늘 수확 THE신선"
]

const mainitems = [
    {
        id: 0,
        title: "[조은푸드]비건 채식 야채 손만두 담백한 맛 1.2kg",
        discount_rate: "20%",
        price: "9,440원",
        detail_price: "9,440",
        dimmed_price: "11,800원",
        net: "1.2kg",
        image: '/image/custom_item1.png'
    },
    {
        id: 1,
        title: "[맛있다]매운 어묵 우동 2인분",
        discount_rate: "10%",
        price: "5,850원",
        detail_price: "5,850",
        dimmed_price: "6,500원",
        net: "500g",
        image: '/image/custom_item2.png'
    },
    {
        id: 2,
        title: "[제주농원]GAP인증 제주레몬 산지직송 500g",
        discount_rate: "15%",
        price: "6,460원",
        detail_price: "6,460",
        dimmed_price: "7,600원",
        net: "500g",
        image: '/image/custom_item3.png'
    },
    {
        id: 3,
        title: "[365신선]동물복지 1+등급  무항생제 특란 6구",
        discount_rate: "5%",
        price: "4,465원",
        detail_price: "4,465",
        dimmed_price: "4,700원",
        net: "1구: 52g~60g",
        image: '/image/custom_item4.png'
    },
    {
        id: 4,
        title: "아보카도 샐러드 250g",
        discount_rate: "10%",
        price: "5,310원",
        detail_price: "5,310",
        dimmed_price: "5,900원",
        net: "250g",
        image: '/image/custom_item5.png'
    },
    {
        id: 5,
        title: "파프리카 4입",
        discount_rate: "15%",
        price: "7,225원",
        detail_price: "7,225",
        dimmed_price: "8,500원",
        net: "4입",
        image: '/image/custom_item6.png'
    },
    {
        id: 6,
        title: "단백질 쉐이크 700g",
        discount_rate: "25%",
        price: "21,000원",
        detail_price: "21,000",
        dimmed_price: "28,000원",
        net: "700g",
        image: '/image/custom_item7.png'
    },
    {
        id: 7,
        title: "그릭요거트 라이트 450g",
        discount_rate: "10%",
        price: "11,250원",
        detail_price: "11,250",
        dimmed_price: "12,500원",
        net: "450g",
        image: '/image/custom_item8.png'
    },
    {
        id: 8,
        title: "[신선식품]단호박 생크림 스프 10팩",
        discount_rate: "20%",
        price: "9,440원",
        detail_price: "9,440",
        dimmed_price: "11,800원",
        net: "450g",
        image: '/image/sale_item1.png'
    },
    {
        id: 9,
        title: "[프레시]카프레제 샐러드",
        discount_rate: "10%",
        price: "8,010원",
        detail_price: "8,010",
        dimmed_price: "8,900원",
        net: "450g",
        image: '/image/sale_item2.png'
    },
    {
        id: 10,
        title: "[베이커리]쫄깃한 베이글 3종",
        discount_rate: "10%",
        price: "2,520원",
        detail_price: "2,520",
        dimmed_price: "2,800원",
        net: "450g",
        image: '/image/sale_item3.png'
    },
    {
        id: 11,
        title: "완숙 토마토 1kg",
        discount_rate: "25%",
        price: "3,750원",
        detail_price: "3,750",
        dimmed_price: "5,000원",
        net: "450g",
        image: '/image/sale_item4.png'
    },
    {
        id: 12,
        title: "[이음]과일향 탄산수 오렌지향 250mL",
        discount_rate: "10%",
        price: "1,350원",
        detail_price: "1,350",
        dimmed_price: "1,500원",
        net: "450g",
        image: '/image/sale_item5.png'
    },
    {
        id: 13,
        title: "[스테이크하우스]수비드 닭가슴살 스테이크 1팩",
        discount_rate: "15%",
        price: "10,200원",
        detail_price: "10,200",
        dimmed_price: "12,000원",
        net: "450g",
        image: '/image/sale_item6.png'
    },
    {
        id: 14,
        title: "[더프레시]얼큰 김치 어묵 우동 2인분",
        discount_rate: "35%",
        price: "6,370원",
        detail_price: "6,370",
        dimmed_price: "9,800원",
        net: "450g",
        image: '/image/sale_item7.png'
    },
    {
        id: 15,
        title: "[과일나라]유기농 착즙 주스 3종 250mL",
        discount_rate: "10%",
        price: "2,250원",
        detail_price: "2,250",
        dimmed_price: "2,500원",
        net: "450g",
        image: '/image/sale_item8.png'
    },
    {
        id: 16,
        title: "[빈스앤제리스]넛츠픽스맛 500g",
        discount_rate: "5%",
        price: "9,405원",
        detail_price: "9,405",
        dimmed_price: "9,900원",
        net: "500g",
        image: '/image/limited_item1.png'
    },
    {
        id: 17,
        title: "치킨 마크니 커리 170g",
        discount_rate: "10%",
        price: "1,612원",
        detail_price: "1,612",
        dimmed_price: "2,480원",
        net: "170g",
        image: '/image/limited_item2.png'
    },
    {
        id: 18,
        title: "고당도 블랙라벨 오렌지 1.2kg",
        discount_rate: "9%",
        price: "9,900원",
        detail_price: "9,900",
        dimmed_price: "10,900원",
        net: "1.2kg",
        image: '/image/limited_item3.png'
    },
    {
        id: 19,
        title: "프로틴 솔티드 넛츠 280g (28gX10봉)",
        discount_rate: "8%",
        price: "10,500원",
        detail_price: "10,500",
        dimmed_price: "11,500원",
        net: "280g",
        image: '/image/limited_item4.png'
    },
    {
        id: 20,
        title: "우유 생크림빵",
        discount_rate: "5%",
        price: "3,420원",
        detail_price: "3,420",
        dimmed_price: "3,600원",
        net: "87g",
        image: '/image/limited_item5.png'
    },
    {
        id: 21,
        title: "멀티비타민 미네랄 구미젤리(30일분)",
        discount_rate: "23%",
        price: "22,330원",
        detail_price: "22,330",
        dimmed_price: "29,000원",
        net: "3gx60구미",
        image: '/image/limited_item6.png'
    },
    {
        id: 22,
        title: "[국내산] 새콤달콤 천도복숭아 2kg",
        discount_rate: "5%",
        price: "9,810원",
        detail_price: "9,810",
        dimmed_price: "10,900원",
        net: "2kg",
        image: '/image/limited_item7.png'
    },
    {
        id: 23,
        title: "단백질 쿠기 딸기맛 10개입",
        discount_rate: "10%",
        price: "12,510원",
        detail_price: "12,510",
        dimmed_price: "13,900원",
        net: "40gx10개",
        image: '/image/limited_item8.png'
    },
    {
        id: 24,
        title: "아보카도 살사 소스",
        discount_rate: "6%",
        price: "6,486원",
        detail_price: "6,486",
        dimmed_price: "6,900원",
        net: "425g",
        image: '/image/only_item1.png'
    },
    {
        id: 25,
        title: "아카시아 허니콤",
        discount_rate: "5%",
        price: "44,650원",
        detail_price: "44,650",
        dimmed_price: "47,000원",
        net: "500g",
        image: '/image/only_item2.png'
    },
    {
        id: 26,
        title: "감숙왕 허니골드 파인애플 1통",
        discount_rate: "10%",
        price: "4,400원",
        detail_price: "4,400",
        dimmed_price: "4,900원",
        net: "700g",
        image: '/image/only_item3.png'
    },
    {
        id: 27,
        title: "마카롱 10종 2개입",
        discount_rate: "5%",
        price: "6,175원",
        detail_price: "6,175",
        dimmed_price: "6,500원",
        net: "2개입",
        image: '/image/only_item4.png'
    },
    {
        id: 28,
        title: "자연산 대하 250g (냉동)",
        discount_rate: "7%",
        price: "36,270원",
        detail_price: "36,270",
        dimmed_price: "39,000원",
        net: "250g",
        image: '/image/only_item5.png'
    },
    {
        id: 29,
        title: "소고기 대파 라면 710g",
        discount_rate: "10%",
        price: "6,030원",
        detail_price: "6,030",
        dimmed_price: "6,700원",
        net: "710g",
        image: '/image/only_item6.png'
    },
    {
        id: 30,
        title: "유기농 후르츠 스낵 젤리 178g",
        discount_rate: "5%",
        price: "11,210원",
        detail_price: "11,210",
        dimmed_price: "11,800원",
        net: "178g",
        image: '/image/only_item7.png'
    },
    {
        id: 31,
        title: "버터 크로와상 (2입)",
        discount_rate: "10%",
        price: "8,100원",
        detail_price: "8,100",
        dimmed_price: "9,000원",
        net: "120gx2개",
        image: '/image/only_item8.png'
    },
    
]


export {
    mainTitle,
    mainitems,
}