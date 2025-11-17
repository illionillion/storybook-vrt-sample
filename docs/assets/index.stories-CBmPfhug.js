import{j as e}from"./jsx-runtime-Bha7v8PO.js";import{w as G,e as t,u}from"./index-D9qU3fh3.js";import{r as $,e as J}from"./iframe-DI8GWPo7.js";import"./preload-helper-Dp1pzeXC.js";const K="_accordion_j9t06_1",P="_accordionHeader_j9t06_10",U="_disabled_j9t06_28",W="_accordionContent_j9t06_60",X="_open_j9t06_70",Y="_closed_j9t06_78",s={accordion:K,accordionHeader:P,disabled:U,accordionContent:W,open:X,closed:Y},r=({title:o,children:n,isDisabled:i=!1,isOpen:c,onToggle:a,defaultOpen:d=!1})=>{const f=c!==void 0&&a!==void 0,[y,V]=$.useState(d),l=f?c:y,z=()=>{i||(f?a():V(!y))};return e.jsxs("div",{className:s.accordion,children:[e.jsxs("button",{type:"button","aria-expanded":l,"aria-disabled":i,onClick:z,className:`${s.accordionHeader} ${i?s.disabled:""}`,children:[o,e.jsx("span",{"aria-hidden":"true",children:l?"−":"+"})]}),e.jsx("div",{role:"region","aria-hidden":!l,className:`${s.accordionContent} ${l?s.open:s.closed}`,children:l&&n})]})};r.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:""},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ae={title:"Components/Accordion",component:r,parameters:{layout:"padded",docs:{description:{component:"アコーディオンコンポーネント。制御されたコンポーネントと非制御コンポーネントの両方で使用できます。"}}},argTypes:{title:{control:"text",description:"アコーディオンのタイトル"},children:{control:"text",description:"アコーディオンの内容"},isDisabled:{control:"boolean",description:"アコーディオンを無効にするかどうか"},defaultOpen:{control:"boolean",description:"非制御コンポーネントでの初期開閉状態"},isOpen:{control:"boolean",description:"制御されたコンポーネントでの開閉状態"}}},p={tags:["vrt"],args:{title:"アコーディオンのタイトル",children:"ここにアコーディオンの内容が入ります。長いテキストでも適切に表示されます。"}},x={tags:["vrt"],args:{title:"最初から開いているアコーディオン",children:"このアコーディオンは初期状態で開いています。",defaultOpen:!0}},m={tags:["vrt"],args:{title:"無効なアコーディオン",children:"このアコーディオンは無効化されており、クリックできません。",isDisabled:!0}},g={args:{title:"長いコンテンツのアコーディオン",children:e.jsxs("div",{children:[e.jsx("h3",{children:"セクション1"}),e.jsx("p",{children:"これは長いコンテンツの例です。アコーディオンは任意の長さのコンテンツを含むことができます。 複数の段落、リスト、その他のHTML要素を含むことができます。"}),e.jsx("h3",{children:"セクション2"}),e.jsxs("ul",{children:[e.jsx("li",{children:"リストアイテム1"}),e.jsx("li",{children:"リストアイテム2"}),e.jsx("li",{children:"リストアイテム3"})]}),e.jsx("p",{children:"アニメーションは滑らかで、長いコンテンツでも適切に動作します。 レスポンシブデザインにも対応しており、様々なデバイスで美しく表示されます。"})]})}},h={tags:["vrt"],render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{title:"アコーディオン1",defaultOpen:!0,children:"最初のアコーディオンの内容です。"}),e.jsx(r,{title:"アコーディオン2",children:"二番目のアコーディオンの内容です。"}),e.jsx(r,{title:"アコーディオン3",children:"三番目のアコーディオンの内容です。"}),e.jsx(r,{title:"無効なアコーディオン",isDisabled:!0,children:"このアコーディオンは無効化されています。"})]})},v={tags:["test"],render:()=>{const[o,n]=$.useState(null),i=a=>{n(o===a?null:a)},c=[{id:"account",title:"アカウントについて",content:"アカウントの作成、ログイン、パスワードの変更方法について説明します。"},{id:"pricing",title:"料金について",content:"料金プラン、支払い方法、請求書の発行について説明します。"},{id:"support",title:"サポートについて",content:"お問い合わせ方法、サポート時間、対応範囲について説明します。"},{id:"security",title:"セキュリティについて",content:"データの暗号化、プライバシー保護、セキュリティ対策について説明します。"}];return e.jsxs("div",{className:"faq-page",children:[e.jsxs("header",{children:[e.jsx("h1",{children:"よくある質問（FAQ）"}),e.jsx("p",{children:"お困りのことがございましたら、まずはこちらをご確認ください。"})]}),e.jsx("main",{className:"faq-content",children:c.map(a=>e.jsx(r,{title:a.title,isOpen:o===a.id,onToggle:()=>i(a.id),children:e.jsx("p",{children:a.content})},a.id))}),e.jsx("footer",{children:e.jsxs("p",{children:["解決しない場合は",e.jsx("a",{href:"/contact",children:"お問い合わせ"}),"ください。"]})})]})},play:async({canvasElement:o})=>{const n=G(o);await t(n.getByRole("heading",{name:"よくある質問（FAQ）"})).toBeInTheDocument();const i=n.getByRole("button",{name:"アカウントについて"}),c=n.getByRole("button",{name:"料金について"}),a=n.getByRole("button",{name:"サポートについて"}),d=n.getByRole("button",{name:"セキュリティについて"});await t(i).toBeInTheDocument(),await t(c).toBeInTheDocument(),await t(a).toBeInTheDocument(),await t(d).toBeInTheDocument(),await t(i).toHaveAttribute("aria-expanded","false"),await t(c).toHaveAttribute("aria-expanded","false"),await u.click(i),await t(i).toHaveAttribute("aria-expanded","true"),await t(n.getByText("アカウントの作成、ログイン、パスワードの変更方法について説明します。")).toBeInTheDocument(),await u.click(c),await t(c).toHaveAttribute("aria-expanded","true"),await t(i).toHaveAttribute("aria-expanded","false"),await t(n.getByText("料金プラン、支払い方法、請求書の発行について説明します。")).toBeInTheDocument(),await t(n.queryByText("アカウントの作成、ログイン、パスワードの変更方法について説明します。")).not.toBeInTheDocument(),await u.click(a),await t(a).toHaveAttribute("aria-expanded","true"),await t(c).toHaveAttribute("aria-expanded","false"),await t(n.getByText("お問い合わせ方法、サポート時間、対応範囲について説明します。")).toBeInTheDocument(),await u.click(a),await t(a).toHaveAttribute("aria-expanded","false"),await t(n.queryByText("お問い合わせ方法、サポート時間、対応範囲について説明します。")).not.toBeInTheDocument(),await u.click(d),await t(d).toHaveAttribute("aria-expanded","true"),await t(n.getByText("データの暗号化、プライバシー保護、セキュリティ対策について説明します。")).toBeInTheDocument()}},B={render:()=>{const[o,n]=J.useState(!1);return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"16px"},children:e.jsxs("button",{onClick:()=>n(!o),style:{padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:["外部ボタンで",o?"閉じる":"開く"]})}),e.jsx(r,{title:"制御されたアコーディオン",isOpen:o,onToggle:()=>n(!o),children:"このアコーディオンは外部のボタンからも制御できます。"})]})}};var w,b,A;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['vrt'],
  args: {
    title: 'アコーディオンのタイトル',
    children: 'ここにアコーディオンの内容が入ります。長いテキストでも適切に表示されます。'
  }
}`,...(A=(b=p.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var T,j,D;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['vrt'],
  args: {
    title: '最初から開いているアコーディオン',
    children: 'このアコーディオンは初期状態で開いています。',
    defaultOpen: true
  }
}`,...(D=(j=x.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var I,O,H;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['vrt'],
  args: {
    title: '無効なアコーディオン',
    children: 'このアコーディオンは無効化されており、クリックできません。',
    isDisabled: true
  }
}`,...(H=(O=m.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var _,q,R;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: '長いコンテンツのアコーディオン',
    children: <div>
        <h3>セクション1</h3>
        <p>
          これは長いコンテンツの例です。アコーディオンは任意の長さのコンテンツを含むことができます。
          複数の段落、リスト、その他のHTML要素を含むことができます。
        </p>
        <h3>セクション2</h3>
        <ul>
          <li>リストアイテム1</li>
          <li>リストアイテム2</li>
          <li>リストアイテム3</li>
        </ul>
        <p>
          アニメーションは滑らかで、長いコンテンツでも適切に動作します。
          レスポンシブデザインにも対応しており、様々なデバイスで美しく表示されます。
        </p>
      </div>
  }
}`,...(R=(q=g.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var k,C,E;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['vrt'],
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Accordion title="アコーディオン1" defaultOpen>
        最初のアコーディオンの内容です。
      </Accordion>
      <Accordion title="アコーディオン2">
        二番目のアコーディオンの内容です。
      </Accordion>
      <Accordion title="アコーディオン3">
        三番目のアコーディオンの内容です。
      </Accordion>
      <Accordion title="無効なアコーディオン" isDisabled>
        このアコーディオンは無効化されています。
      </Accordion>
    </div>
}`,...(E=(C=h.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var S,N,F;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['test'],
  render: () => {
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
    const handleAccordionToggle = (id: string) => {
      // 同じアコーディオンをクリックした場合は閉じる、違う場合は切り替える
      setActiveAccordion(activeAccordion === id ? null : id);
    };
    const faqData = [{
      id: "account",
      title: "アカウントについて",
      content: "アカウントの作成、ログイン、パスワードの変更方法について説明します。"
    }, {
      id: "pricing",
      title: "料金について",
      content: "料金プラン、支払い方法、請求書の発行について説明します。"
    }, {
      id: "support",
      title: "サポートについて",
      content: "お問い合わせ方法、サポート時間、対応範囲について説明します。"
    }, {
      id: "security",
      title: "セキュリティについて",
      content: "データの暗号化、プライバシー保護、セキュリティ対策について説明します。"
    }];
    return <div className="faq-page">
        <header>
          <h1>よくある質問（FAQ）</h1>
          <p>お困りのことがございましたら、まずはこちらをご確認ください。</p>
        </header>

        <main className="faq-content">
          {faqData.map(faq => <Accordion key={faq.id} title={faq.title} isOpen={activeAccordion === faq.id} onToggle={() => handleAccordionToggle(faq.id)}>
              <p>{faq.content}</p>
            </Accordion>)}
        </main>

        <footer>
          <p>
            解決しない場合は<a href="/contact">お問い合わせ</a>ください。
          </p>
        </footer>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // ページタイトルが表示されることを確認
    await expect(canvas.getByRole('heading', {
      name: 'よくある質問（FAQ）'
    })).toBeInTheDocument();

    // 4つのアコーディオンが表示されることを確認
    const accountButton = canvas.getByRole('button', {
      name: 'アカウントについて'
    });
    const pricingButton = canvas.getByRole('button', {
      name: '料金について'
    });
    const supportButton = canvas.getByRole('button', {
      name: 'サポートについて'
    });
    const securityButton = canvas.getByRole('button', {
      name: 'セキュリティについて'
    });
    await expect(accountButton).toBeInTheDocument();
    await expect(pricingButton).toBeInTheDocument();
    await expect(supportButton).toBeInTheDocument();
    await expect(securityButton).toBeInTheDocument();

    // 最初は全て閉じている状態
    await expect(accountButton).toHaveAttribute('aria-expanded', 'false');
    await expect(pricingButton).toHaveAttribute('aria-expanded', 'false');

    // アカウントのアコーディオンを開く
    await userEvent.click(accountButton);
    await expect(accountButton).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText('アカウントの作成、ログイン、パスワードの変更方法について説明します。')).toBeInTheDocument();

    // 料金のアコーディオンを開く（アカウントは自動で閉じる）
    await userEvent.click(pricingButton);
    await expect(pricingButton).toHaveAttribute('aria-expanded', 'true');
    await expect(accountButton).toHaveAttribute('aria-expanded', 'false'); // 排他制御の確認
    await expect(canvas.getByText('料金プラン、支払い方法、請求書の発行について説明します。')).toBeInTheDocument();
    await expect(canvas.queryByText('アカウントの作成、ログイン、パスワードの変更方法について説明します。')).not.toBeInTheDocument();

    // サポートのアコーディオンを開く
    await userEvent.click(supportButton);
    await expect(supportButton).toHaveAttribute('aria-expanded', 'true');
    await expect(pricingButton).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.getByText('お問い合わせ方法、サポート時間、対応範囲について説明します。')).toBeInTheDocument();

    // 同じボタンをクリックして閉じる
    await userEvent.click(supportButton);
    await expect(supportButton).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.queryByText('お問い合わせ方法、サポート時間、対応範囲について説明します。')).not.toBeInTheDocument();

    // セキュリティのアコーディオンを開く
    await userEvent.click(securityButton);
    await expect(securityButton).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText('データの暗号化、プライバシー保護、セキュリティ対策について説明します。')).toBeInTheDocument();
  }
}`,...(F=(N=v.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var L,M,Q;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <div>
        <div style={{
        marginBottom: '16px'
      }}>
          <button onClick={() => setIsOpen(!isOpen)} style={{
          padding: '8px 16px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
            外部ボタンで{isOpen ? '閉じる' : '開く'}
          </button>
        </div>
        <Accordion title="制御されたアコーディオン" isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)}>
          このアコーディオンは外部のボタンからも制御できます。
        </Accordion>
      </div>;
  }
}`,...(Q=(M=B.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const oe=["Default","DefaultOpen","Disabled","LongContent","MultipleAccordions","ExclusiveAccordions","ControlledAccordion"];export{B as ControlledAccordion,p as Default,x as DefaultOpen,m as Disabled,v as ExclusiveAccordions,g as LongContent,h as MultipleAccordions,oe as __namedExportsOrder,ae as default};
