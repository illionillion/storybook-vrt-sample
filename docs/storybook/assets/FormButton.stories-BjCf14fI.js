import{f as Q,w as m,u as y,e as U}from"./index-D9qU3fh3.js";import{F as V}from"./FormButton-CLY4IEQj.js";import"./jsx-runtime-Bx8tYDIs.js";import"./iframe-BJQrZOmR.js";import"./preload-helper-Dp1pzeXC.js";import"./ContactForm.module-CuuFaajD.js";const ne={title:"Components/ContactForm/FormButton",component:V,parameters:{layout:"padded",docs:{description:{component:"フォーム送信ボタンコンポーネント。送信、リセット、一般的なボタンとして使用できます。"}}},argTypes:{children:{control:"text",description:"ボタンのテキスト"},type:{control:"select",options:["submit","button","reset"],description:"ボタンのタイプ"},disabled:{control:"boolean",description:"ボタンを無効にするかどうか"},onClick:{description:"クリック時のコールバック"}}},a={args:{children:"送信する",type:"submit",disabled:!1}},s={args:{children:"送信する",type:"submit",disabled:!0}},r={args:{children:"送信中...",type:"submit",disabled:!0}},o={args:{children:"キャンセル",type:"button",disabled:!1}},c={args:{children:"リセット",type:"reset",disabled:!1}},i={args:{children:"お問い合わせ内容を送信する",type:"submit",disabled:!1}},l={args:{children:"送信する",type:"button",disabled:!1,onClick:Q()},play:async({canvasElement:e,args:n})=>{const b=m(e).getByRole("button");await y.click(b),await U(n.onClick).toHaveBeenCalledTimes(1)}},d={args:{children:"送信する",type:"button",disabled:!0,onClick:Q()},play:async({canvasElement:e,args:n})=>{const b=m(e).getByRole("button");await y.click(b),await U(n.onClick).not.toHaveBeenCalled()}},p={args:{children:"送信する",type:"submit",disabled:!1},play:async({canvasElement:e})=>{const t=m(e).getByRole("button");await y.hover(t)}},u={args:{children:"送信する",type:"submit",disabled:!1},play:async({canvasElement:e})=>{m(e).getByRole("button").focus()}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: '送信する',
    type: 'submit',
    disabled: false
  }
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,C,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: '送信する',
    type: 'submit',
    disabled: true
  }
}`,...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var w,B,E;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: '送信中...',
    type: 'submit',
    disabled: true
  }
}`,...(E=(B=r.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var S,R,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'キャンセル',
    type: 'button',
    disabled: false
  }
}`,...(T=(R=o.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var x,D,F;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'リセット',
    type: 'reset',
    disabled: false
  }
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var H,I,L;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'お問い合わせ内容を送信する',
    type: 'submit',
    disabled: false
  }
}`,...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var _,O,j;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: '送信する',
    type: 'button',
    disabled: false,
    onClick: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(j=(O=l.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var q,z,A;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: '送信する',
    type: 'button',
    disabled: true,
    onClick: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    // 無効状態なのでonClickは呼ばれない
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: '送信する',
    type: 'submit',
    disabled: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.hover(button);
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,N,P;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: '送信する',
    type: 'submit',
    disabled: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    button.focus();
  }
}`,...(P=(N=u.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const te=["Default","Disabled","Submitting","ButtonType","ResetType","LongText","ClickInteraction","DisabledClickInteraction","Hover","Focus"];export{o as ButtonType,l as ClickInteraction,a as Default,s as Disabled,d as DisabledClickInteraction,u as Focus,p as Hover,i as LongText,c as ResetType,r as Submitting,te as __namedExportsOrder,ne as default};
