import type { StyleSectionData } from "@/app/PageSections/styleSection";

const featuredImages = {
    main: "/images/style/item-1.webp",
    sub1: "/images/style/item-1-1.webp",
    sub2: "/images/style/item-1-2.webp",
};

const stylingImage = "/images/style/styling-1.webp";

export const styleSectionData: StyleSectionData = {
    featuredItems: [
        {
            id: "spcl06_buy_magazine_item01",
            sectionId: "cotton-cashmere-top",
            images: {
                main: "/images/style/item-1.webp",
                sub1: "/images/style/item-1-1.webp",
                sub2: "/images/style/item-1-2.webp",
            },
            description:
                "有名メゾンにも選ばれる老舗ファクトリー「エイガールズ」の日本製リブトップス。コットン90%×カシミヤ10%の優雅な肌触り、ラインを拾いすぎない編地設計。",
            name: <>エイガールズ<br/>コットンカシミヤプルオーバー</>,
            price: "¥9,900",
            buyHref: "https://www.shopch.jp/pc/product/proddetail?reqprno=825350&il=spcl06_02_01&ic=item",
            buyHrefSP: "https://www.shopch.jp/sp/product/proddetail?reqprno=825350&il=spcl06_02_01&ic=item",
            note: "先行販売の数量には限りがございます。予定数に達した場合は、11月8日(日)放映日にあらためてご確認ください。",
        },
        {
            id: "spcl06_buy_magazine_item02",
            sectionId: "semi-wide-jeans",
            images: {
                main: "/images/style/item-2.webp",
                sub1: "/images/style/item-2-1.webp",
                sub2: "/images/style/item-2-2.webp",
            },
            description:
                "「DOCTOR DENIM HONZAWA」本澤氏による渾身の一本。カイハラ社製のコットンデニムに、腰周りすっきり、深めの股上。立体パターンが叶える快適な穿き心地。細部までこだわり抜いた、本格デニム。",
            name: <>シュガーデプト<br/>セミワイドストレートジーンズ</>,
            price: "¥27,800",
            buyHref: "https://www.shopch.jp/pc/product/proddetail?reqprno=827746&il=spcl06_02_02&ic=item",
            buyHrefSP: "https://www.shopch.jp/sp/product/proddetail?reqprno=827746&il=spcl06_02_02&ic=item",
        },
        {
            id: "spcl06_buy_magazine_item03",
            sectionId: "cardigan",
            images: {
                main: "/images/style/item-3.webp",
                sub1: "/images/style/item-3-1.webp",
                sub2: "/images/style/item-3-2.webp",
            },
            description:
                "極細メリノウール100％が叶える、上質な肌触りと美しい光沢。滑らかな編み上がりで、軽やかな着心地。きちんと感のあるシャツカラー仕立て。貝ボタンと配色使いで表情豊かに。",
            name: (
                <>
                    アズイズ ビーマイセルフバイ ネイチャーズ<br />
                    スーパーエクストラファインメリノウール<br />
                    襟付きカーディガン
                </>
            ),
            price: "¥25,900",
            buyHref: "https://www.shopch.jp/pc/product/proddetail?reqprno=827757&il=spcl06_02_03&ic=item",
            buyHrefSP: "https://www.shopch.jp/sp/product/proddetail?reqprno=827757&il=spcl06_02_03&ic=item",
        },
        {
            id: "spcl06_buy_magazine_item04",
            sectionId: "check-stole",
            images: {
                main: "/images/style/item-4.webp",
                sub1: "/images/style/item-4-1.webp",
                sub2: "/images/style/item-4-2.webp",
            },
            description:
                "スコットランドの名門ロキャロン社製のエクストラファインメリノウール100%。世界で愛される逸品。ハリとコシのある軽やかさ。職人技が生み出す美しい光沢感。羽織るだけでラグジュアリーに。(約200×70cm)",
            name: <>アズイズ ビーマイセルフバイ ネイチャーズ<br/>タータンチェックストール</>,
            price: "¥26,800",
            buyHref: "https://www.shopch.jp/pc/product/proddetail?reqprno=827758&il=spcl06_02_04&ic=item",
            buyHrefSP: "https://www.shopch.jp/sp/product/proddetail?reqprno=827758&il=spcl06_02_04&ic=item",
            note: "先行販売の数量には限りがございます。予定数に達した場合は、11月8日(日)放映日にあらためてご確認ください。",
        },
    ],
    stylingItems: [
        {
            id: "spcl06_buy_onair_item01",
            image: "/images/style/styling-1.webp",
            description: "胸元で存在感のある輝きを放ち、大人の着こなしのワンポイントに",
            name: <>ラフィナリスタ<br/>ニュアンスシェイプネックレス</>,
            price: "￥9,600",
            buyHref: "https://www.shopch.jp/pc/product/proddetail?reqprno=830093&il=spcl06_03_01&ic=item",
            buyHrefSP: "https://www.shopch.jp/sp/product/proddetail?reqprno=830093&il=spcl06_03_01&ic=item",
        },
        {
            id: "spcl06_buy_onair_item03",
             image: "/images/style/styling-3.webp",
            description: "10石のダイヤを贅沢に配した、エコ・ドライブ搭載モデル",
            name: <>シチズン<br/>ステンレスベルトソーラーウォッチ</>,
            price: "￥70,400",
            buyHref: "https://www.shopch.jp/pc/product/proddetail?reqprno=831473&il=spcl06_03_02&ic=item",
            buyHrefSP: "https://www.shopch.jp/sp/product/proddetail?reqprno=831473&il=spcl06_03_02&ic=item",
        },
        {
            id: "spcl06_buy_onair_item02",
             image: "/images/style/styling-2.webp",
            description: "サージカルステンレス使用。手首に美しくなじむオーバルフォルムと上品な輝き",
            name: <>ラフィナリスタ<br/>ワンタッチバングル</>,
            price: "￥9,800 ",
            buyHref: "https://www.shopch.jp/pc/product/proddetail?reqprno=822336&il=spcl06_03_03&ic=item",
            buyHrefSP: "https://www.shopch.jp/sp/product/proddetail?reqprno=822336&il=spcl06_03_03&ic=item",
        },
        {
            id: "spcl06_buy_onair_item04",
             image: "/images/style/styling-4.webp",
            description: "シュリンク加工が奏でる上質な表情のラムレザージャケット",
            name: <>元町ゼラール<br/>ソフトラムシュリンク ジャケット</>,
            price: "￥49,000",
            buyHref: "https://www.shopch.jp/pc/product/proddetail?reqprno=825661&il=spcl06_03_04&ic=item",
            buyHrefSP: "https://www.shopch.jp/sp/product/proddetail?reqprno=825661&il=spcl06_03_04&ic=item",
        },
        {
            id: "spcl06_buy_onair_item05",
             image: "/images/style/styling-5.webp",
            description: "上質な光沢感としなやかなドレープが女性らしいブラウス",
            name: <>ヴィアッジャーレ<br/>デニム調シャンブレーブラウス</>,
            price: "￥12,800",
            buyHref: "https://www.shopch.jp/pc/product/proddetail?reqprno=821540&il=spcl06_03_05&ic=item",
            buyHrefSP: "https://www.shopch.jp/sp/product/proddetail?reqprno=821540&il=spcl06_03_05&ic=item",
        },
        {
            id: "spcl06_buy_onair_item06",
            image: "/images/style/styling-6.webp",
            description: "サイドラインが装いにアクセントを添え、きれい見えと快適さを両立 ",
            name: <>上質ごこち<br/>サイドラインパンツ</>,
            price: "￥15,400",
            buyHref: "https://www.shopch.jp/pc/product/proddetail?reqprno=824546&il=spcl06_03_06&ic=item",
            buyHrefSP: "https://www.shopch.jp/sp/product/proddetail?reqprno=824546&il=spcl06_03_06&ic=item",
        },
        {
            id: "spcl06_buy_onair_item07",
            image: "/images/style/styling-7.webp",
            description: "イタリアンカーフにアールデコモティーフが輝く２ウェイ仕様",
            name: <>ADMJ<br/>ミニショルダーバッグ</>,
            price: "￥104,500",
            buyHref: "https://www.shopch.jp/pc/product/proddetail?reqprno=831699&il=spcl06_03_07&ic=item",
            buyHrefSP: "https://www.shopch.jp/sp/product/proddetail?reqprno=831699&il=spcl06_03_07&ic=item",
            notes: "販売開始は11/8(日)23時を予定しております。"
        },
        {
            id: "spcl06_buy_onair_item08",
            image: "/images/style/styling-8.webp",
            description: "スエード調のイタリアンファブリックを使用したクロスボディバッグ",
            name: <>ADMJ<br/>クロスボディバッグ</>,
            price: "￥93,500",
            buyHref: "https://www.shopch.jp/pc/product/proddetail?reqprno=831700&il=spcl06_03_08&ic=item",
            buyHrefSP: "https://www.shopch.jp/sp/product/proddetail?reqprno=831700&il=spcl06_03_08&ic=item",
            notes: "販売開始は11/8(日)23時を予定しております。"
        },
    ],
    productButton: {
        id: "spcl06_all_items",
        href: "https://www.shopch.jp/pc/product/prodlist/condid?webcondId=eclat2026&il=spcl06_04_01&ic=item",
        hrefSP: "https://www.shopch.jp/sp/product/prodlist/condid?webcondId=eclat2026&il=spcl06_04_01&ic=item",
        leftImage: "/images/product-btn-img1.webp",
        rightImage: "/images/product-btn-img2.webp",
        isExtLink: true,
    },
};
