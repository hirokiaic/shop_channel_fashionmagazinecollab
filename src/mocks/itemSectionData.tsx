import type { ItemSectionData } from "../app/PageSections/itemSection";

export const item01SectionData: ItemSectionData = {
    id: "collaboration-01",
    badge: {
        src: "/images/item01-1.svg",
        width: 247,
        height: 78,
        className:
            "pointer-events-none absolute -top-4 sm:top-[-7px] right-[3px] h-[78px] w-[199px] sm:w-[247px] max-w-none",
    },
    heading: (
        <>
            極上の肌当たり
            <br />
            無染色カシミヤ100％という贅沢
        </>
    ),
    mainImages: [
        {
            src: "/images/item01/img-1.webp",
            alt: "無染色カシミヤ Vネックニットプルオーバー着用イメージ",
        },
        {
            src: "/images/item01/img-2.webp",
            alt: "無染色カシミヤ Vネックニットプルオーバー商品イメージ",
        },
    ],
    product: {
        id: "spcl06_buy_item01_top",
        name: (
            <>
                éclatコラボレーション
                <br />
                無染色カシミヤ Vネックニットプルオーバー
            </>
        ),
        price: "¥36,000",
        buyHref: "#",
    },
    detailProduct: {
        id: "spcl06_buy_item01_bottom",
        name: (
            <>
                éclatコラボレーション
                <br />
                無染色カシミヤ Vネックニットプルオーバー
            </>
        ),
        price: "¥36,000",
        buyHref: "#",
    },
    comment: {
        heading: (
            <>
                見出しが入ります見出しが入ります
                <br />
                見出しが入ります
            </>
        ),
        body: "編集長コメントが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    },
    details: [
        {
            image: "/images/item01/detail-1.webp",
            text: "ホールガーメント®で縫い代のない立体編成。前後差のある身丈で万能な一枚に。ヒップはカバーしつつ、背面の縦ラインで後ろ姿も美しく。",
        },
        {
            image: "/images/item01/detail-2.webp",
            text: "袖口はフィット感のあるリブ編み。たくし上げても落ちにくく、こなれ感が素敵。前身脇のパール編みＶ字ラインが体をすっきり見せます。",
        },
        {
            image: "/images/item01/detail-3.webp",
            text: "1頭から約200gしか取れない希少な無染色カシミヤ100％を、たっぷり贅沢に使ったミドルゲージ。職人がゆっくり丁寧に編み立てています。",
        },
    ],
    note: "先行販売の数量には限りがございます。予定数に達した場合は、11月8日(日)放映日にあらためてご確認ください。",
};

export const item02SectionData: ItemSectionData = {
    id: "collaboration-02",
    badge: {
        src: "/images/item02-1.svg",
        width: 138,
        height: 57,
        className:
            "pointer-events-none absolute -top-4 sm:top-[-7px] right-[3px] h-[78px] w-[208px] sm:w-[247px] max-w-none",
    },
    heading: (
        <>
            羽織るだけで品良く
            <br />
            イタリア生地ウール×カシミヤ<br className="sm:hidden" />コート
        </>
    ),
    mainImages: [
        {
            src: "/images/item02/img-1.webp",
            alt: "ウールカシミヤダブルブレストロングコート着用イメージ",
        },
        {
            src: "/images/item02/img-2.webp",
            alt: "ウールカシミヤダブルブレストロングコート商品イメージ",
        },
    ],
    product: {
        id: "spcl06_buy_item02_top",
        name: (
            <>
                éclatコラボレーション
                <br />
                ウールカシミヤダブルブレストロングコート
            </>
        ),
        price: "¥129,000",
        buyHref: "#",
    },
    detailProduct: {
        id: "spcl06_buy_item02_bottom",
        name: (
            <>
                éclatコラボレーション
                <br />
                ウールカシミヤダブルブレストロングコート
            </>
        ),
        price: "¥129,000",
        buyHref: "#",
    },
    comment: {
        heading: (
            <>
                見出しが入ります見出しが入ります
                <br />
                見出しが入ります
            </>
        ),
        body: "日本の職人による上質なテーラリング。肩から袖へのラインの美しさ、絶妙なゆとりと縦長感が、身体を優雅にすっきりと見せ、洗練された大人の印象を引き出します。膝下まで届くロング丈が大人らしい佇まいを演出。余計な装飾を省き、素材の上質さとシルエットの美しさが際立つミニマルで洗練されたデザイン。",
    },
    details: [
        {
            image: "/images/item02/detail-1.webp",
            text: "程良いドロップショルダーで今っぽさを。上品でありながらもかしこまり過ぎないダブルブレスト。顔まわりをすっきり見せる襟のボリューム感がこだわり。",
        },
        {
            image: "/images/item02/detail-2.webp",
            text: "ミニマルで実用的な箱ポケット。生地の上質感と美しいフォルムを引き立たせます。同系色のボタンでさりげない高級感を。",
        },
        {
            image: "/images/item02/detail-3.webp",
            text: "イタリアM.T.R.社のウール×カシミヤ。軽やかさと暖かさ、自然な光沢感。ビーバー仕上げによるふんわりとした柔らかさと奥行き感のある表情が魅力。",
        },
    ],
    note: "先行販売の数量には限りがございます。予定数に達した場合は、11月8日(日)放映日にあらためてご確認ください。",
};
