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
            images: featuredImages,
            description:
                "有名メゾンが認める老舗ファクトリー「エイガールズ」の日本製リブトップス。コットン90%×カシミヤ10%の優雅な肌触り、ラインを拾いすぎない編地設計。",
            name: "コットンカシミヤ プルオーバー",
            price: "¥9,900",
            buyHref: "#",
            note: "先行販売の数量には限りがございます。予定数に達した場合は、11月8日(日)放映日にあらためてご確認ください。",
        },
        {
            id: "spcl06_buy_magazine_item02",
            images: featuredImages,
            description:
                "「DOCTOR DENIM HONZAWA」本澤氏による渾身の一本。カイハラ社製のコットンデニムに、腰周りすっきり、深めの股上。立体パターンが叶える快適な穿き心地。細部までこだわり抜いた、本格デニム。",
            name: "セミワイド ストレートジーンズ",
            price: "¥27,800",
            buyHref: "#",
        },
        {
            id: "spcl06_buy_magazine_item03",
            images: featuredImages,
            description:
                "極細メリノウール100％が叶える、上質な肌触りと美しい光沢。滑らかな編み上がりで、軽やかな着心地。きちんと感のあるシャツカラー仕立て。貝ボタンと配色使いで表情豊かに。",
            name: (
                <>
                    スーパーエキストラファイン
                    <br />
                    メリノウール カーディガン
                </>
            ),
            price: "¥25,900",
            buyHref: "#",
        },
        {
            id: "spcl06_buy_magazine_item04",
            images: featuredImages,
            description:
                "スコットランドの名門ロキャロン社のエクストラファインメリノウール100%。世界で愛される逸品。ハリとコシのある軽やかさ。職人技が生み出す美しい光沢感。羽織るだけでラグジュアリーに。",
            name: "タータンチェック ストール（約200×70cm）",
            price: "¥26,800",
            buyHref: "#",
            note: "先行販売の数量には限りがございます。予定数に達した場合は、11月8日(日)放映日にあらためてご確認ください。",
        },
    ],
    stylingItems: [
        {
            id: "spcl06_buy_onair_item01",
            image: stylingImage,
            description: "商品説明が入ります商品説明が入ります商品説明が入ります",
            name: "商品名が入ります",
            price: "¥40,000",
            buyHref: "#",
        },
        {
            id: "spcl06_buy_onair_item02",
            image: stylingImage,
            description: "商品説明が入ります商品説明が入ります商品説明が入ります",
            name: "商品名が入ります",
            price: "¥40,000",
            buyHref: "#",
        },
        {
            id: "spcl06_buy_onair_item03",
            image: stylingImage,
            description: "商品説明が入ります商品説明が入ります商品説明が入ります",
            name: "商品名が入ります",
            price: "¥40,000",
            buyHref: "#",
        },
        {
            id: "spcl06_buy_onair_item04",
            image: stylingImage,
            description: "商品説明が入ります商品説明が入ります商品説明が入ります",
            name: "商品名が入ります",
            price: "¥40,000",
            buyHref: "#",
        },
        {
            id: "spcl06_buy_onair_item05",
            image: stylingImage,
            description: "商品説明が入ります商品説明が入ります商品説明が入ります",
            name: "商品名が入ります",
            price: "¥40,000",
            buyHref: "#",
        },
        {
            id: "spcl06_buy_onair_item06",
            image: stylingImage,
            description: "商品説明が入ります商品説明が入ります商品説明が入ります",
            name: "商品名が入ります",
            price: "¥40,000",
            buyHref: "#",
        },
        {
            id: "spcl06_buy_onair_item07",
            image: stylingImage,
            description: "商品説明が入ります商品説明が入ります商品説明が入ります",
            name: "商品名が入ります",
            price: "¥40,000",
            buyHref: "#",
        },
        {
            id: "spcl06_buy_onair_item08",
            image: stylingImage,
            description: "商品説明が入ります商品説明が入ります商品説明が入ります",
            name: "商品名が入ります",
            price: "¥40,000",
            buyHref: "#",
        },
    ],
    productButton: {
        href: "https://www.shopch.jp/",
        leftImage: "/images/product-btn-img1.webp",
        rightImage: "/images/product-btn-img2.webp",
        isExtLink: true,
    },
};
