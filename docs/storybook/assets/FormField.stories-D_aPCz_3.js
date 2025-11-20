import{j as r}from"./jsx-runtime-Bx8tYDIs.js";import{w as U,u as X,e as Y}from"./index-D9qU3fh3.js";import{F as Z}from"./FormField-CXOdXy5F.js";import{r as ee}from"./iframe-BJQrZOmR.js";import"./ContactForm.module-CuuFaajD.js";import"./preload-helper-Dp1pzeXC.js";const le={title:"Components/ContactForm/FormField",component:Z,parameters:{layout:"padded",docs:{description:{component:"フォームフィールドコンポーネント。テキスト入力、メール入力、テキストエリアをサポートしています。"}}},argTypes:{label:{control:"text",description:"フィールドのラベル"},id:{control:"text",description:"フィールドのID"},name:{control:"text",description:"フィールドの名前"},value:{control:"text",description:"フィールドの値"},type:{control:"select",options:["text","email","textarea"],description:"フィールドのタイプ"},placeholder:{control:"text",description:"プレースホルダーテキスト"},error:{control:"text",description:"エラーメッセージ"},required:{control:"boolean",description:"必須フィールドかどうか"},rows:{control:"number",description:"テキストエリアの行数"}}},a=e=>{const[g,n]=ee.useState(e.value||"");return r.jsx(Z,{...e,value:g,onChange:$=>n($.target.value)})},t={render:e=>r.jsx(a,{...e}),args:{label:"お名前",id:"name",name:"name",type:"text",placeholder:"山田太郎",required:!0}},s={render:e=>r.jsx(a,{...e}),args:{label:"お名前",id:"name",name:"name",type:"text",placeholder:"山田太郎",value:"山田太郎",required:!0}},o={render:e=>r.jsx(a,{...e}),args:{label:"お名前",id:"name",name:"name",type:"text",placeholder:"山田太郎",error:"お名前は必須です",required:!0}},l={render:e=>r.jsx(a,{...e}),args:{label:"メールアドレス",id:"email",name:"email",type:"email",placeholder:"example@example.com",required:!0}},d={render:e=>r.jsx(a,{...e}),args:{label:"メールアドレス",id:"email",name:"email",type:"email",placeholder:"example@example.com",error:"有効なメールアドレスを入力してください",required:!0}},c={render:e=>r.jsx(a,{...e}),args:{label:"メッセージ",id:"message",name:"message",type:"textarea",placeholder:"お問い合わせ内容をご記入ください",required:!0,rows:6}},i={render:e=>r.jsx(a,{...e}),args:{label:"メッセージ",id:"message",name:"message",type:"textarea",placeholder:"お問い合わせ内容をご記入ください",value:`これはサンプルのメッセージです。
複数行のテキストを入力できます。`,required:!0,rows:6}},m={render:e=>r.jsx(a,{...e}),args:{label:"メッセージ",id:"message",name:"message",type:"textarea",placeholder:"お問い合わせ内容をご記入ください",error:"メッセージは10文字以上入力してください",required:!0,rows:6}},p={render:e=>r.jsx(a,{...e}),args:{label:"会社名",id:"company",name:"company",type:"text",placeholder:"株式会社サンプル",required:!1}},u={render:e=>r.jsx(a,{...e}),args:{label:"お名前",id:"name",name:"name",type:"text",placeholder:"山田太郎",required:!0},play:async({canvasElement:e})=>{const n=U(e).getByPlaceholderText("山田太郎");await X.type(n,"山田太郎"),await Y(n).toHaveValue("山田太郎")}},x={render:e=>r.jsx(a,{...e}),args:{label:"メッセージ",id:"message",name:"message",type:"textarea",placeholder:"お問い合わせ内容をご記入ください",required:!0,rows:6},play:async({canvasElement:e})=>{const n=U(e).getByPlaceholderText("お問い合わせ内容をご記入ください");await X.type(n,"これはテストメッセージです。"),await Y(n).toHaveValue("これはテストメッセージです。")}};var y,h,F;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <ControlledFormField {...args} />,
  args: {
    label: 'お名前',
    id: 'name',
    name: 'name',
    type: 'text',
    placeholder: '山田太郎',
    required: true
  }
}`,...(F=(h=t.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var v,b,q;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <ControlledFormField {...args} />,
  args: {
    label: 'お名前',
    id: 'name',
    name: 'name',
    type: 'text',
    placeholder: '山田太郎',
    value: '山田太郎',
    required: true
  }
}`,...(q=(b=s.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var w,T,E;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <ControlledFormField {...args} />,
  args: {
    label: 'お名前',
    id: 'name',
    name: 'name',
    type: 'text',
    placeholder: '山田太郎',
    error: 'お名前は必須です',
    required: true
  }
}`,...(E=(T=o.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var C,j,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <ControlledFormField {...args} />,
  args: {
    label: 'メールアドレス',
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'example@example.com',
    required: true
  }
}`,...(f=(j=l.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var S,W,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <ControlledFormField {...args} />,
  args: {
    label: 'メールアドレス',
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'example@example.com',
    error: '有効なメールアドレスを入力してください',
    required: true
  }
}`,...(I=(W=d.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var V,D,B;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <ControlledFormField {...args} />,
  args: {
    label: 'メッセージ',
    id: 'message',
    name: 'message',
    type: 'textarea',
    placeholder: 'お問い合わせ内容をご記入ください',
    required: true,
    rows: 6
  }
}`,...(B=(D=c.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var H,P,R;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <ControlledFormField {...args} />,
  args: {
    label: 'メッセージ',
    id: 'message',
    name: 'message',
    type: 'textarea',
    placeholder: 'お問い合わせ内容をご記入ください',
    value: 'これはサンプルのメッセージです。\\n複数行のテキストを入力できます。',
    required: true,
    rows: 6
  }
}`,...(R=(P=i.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var N,_,O;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <ControlledFormField {...args} />,
  args: {
    label: 'メッセージ',
    id: 'message',
    name: 'message',
    type: 'textarea',
    placeholder: 'お問い合わせ内容をご記入ください',
    error: 'メッセージは10文字以上入力してください',
    required: true,
    rows: 6
  }
}`,...(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var k,z,A;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <ControlledFormField {...args} />,
  args: {
    label: '会社名',
    id: 'company',
    name: 'company',
    type: 'text',
    placeholder: '株式会社サンプル',
    required: false
  }
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <ControlledFormField {...args} />,
  args: {
    label: 'お名前',
    id: 'name',
    name: 'name',
    type: 'text',
    placeholder: '山田太郎',
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('山田太郎');
    await userEvent.type(input, '山田太郎');
    await expect(input).toHaveValue('山田太郎');
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,Q;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <ControlledFormField {...args} />,
  args: {
    label: 'メッセージ',
    id: 'message',
    name: 'message',
    type: 'textarea',
    placeholder: 'お問い合わせ内容をご記入ください',
    required: true,
    rows: 6
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText('お問い合わせ内容をご記入ください');
    await userEvent.type(textarea, 'これはテストメッセージです。');
    await expect(textarea).toHaveValue('これはテストメッセージです。');
  }
}`,...(Q=(M=x.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const de=["TextFieldDefault","TextFieldWithValue","TextFieldWithError","EmailFieldDefault","EmailFieldWithError","TextareaDefault","TextareaWithValue","TextareaWithError","NotRequired","TextInputInteraction","TextareaInputInteraction"];export{l as EmailFieldDefault,d as EmailFieldWithError,p as NotRequired,t as TextFieldDefault,o as TextFieldWithError,s as TextFieldWithValue,u as TextInputInteraction,c as TextareaDefault,x as TextareaInputInteraction,m as TextareaWithError,i as TextareaWithValue,de as __namedExportsOrder,le as default};
