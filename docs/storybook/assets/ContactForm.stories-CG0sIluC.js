import{f as se,w as m,u as t,a as oe,e as i}from"./index-D9qU3fh3.js";import{j as p}from"./jsx-runtime-Bx8tYDIs.js";import{r as j}from"./iframe-BJQrZOmR.js";import{s as le}from"./ContactForm.module-CuuFaajD.js";import{F as g}from"./FormField-CXOdXy5F.js";import{F as ie}from"./FormButton-CLY4IEQj.js";import"./preload-helper-Dp1pzeXC.js";const ce=({onSubmit:s})=>{const[e,a]=j.useState({name:"",email:"",subject:"",message:""}),[n,o]=j.useState({}),[c,l]=j.useState(!1),P=()=>{const r={};return e.name.trim()||(r.name="お名前は必須です"),e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(r.email="有効なメールアドレスを入力してください"):r.email="メールアドレスは必須です",e.subject.trim()||(r.subject="件名は必須です"),e.message.trim()?e.message.trim().length<10&&(r.message="メッセージは10文字以上入力してください"):r.message="メッセージは必須です",o(r),Object.keys(r).length===0},re=async r=>{if(r.preventDefault(),!!P()){l(!0);try{await new Promise(u=>setTimeout(u,1e3)),s&&s(e),a({name:"",email:"",subject:"",message:""}),alert("お問い合わせを送信しました！")}catch(u){console.error("送信エラー:",u),alert("送信に失敗しました。もう一度お試しください。")}finally{l(!1)}}},y=r=>{const{name:u,value:me}=r.target;a(f=>({...f,[u]:me})),n[u]&&o(f=>({...f,[u]:void 0}))};return p.jsxs("form",{className:le.form,onSubmit:re,children:[p.jsx(g,{label:"お名前",id:"name",name:"name",value:e.name,onChange:y,type:"text",placeholder:"山田太郎",error:n.name,required:!0}),p.jsx(g,{label:"メールアドレス",id:"email",name:"email",value:e.email,onChange:y,type:"email",placeholder:"example@example.com",error:n.email,required:!0}),p.jsx(g,{label:"件名",id:"subject",name:"subject",value:e.subject,onChange:y,type:"text",placeholder:"お問い合わせの件名",error:n.subject,required:!0}),p.jsx(g,{label:"メッセージ",id:"message",name:"message",value:e.message,onChange:y,type:"textarea",placeholder:"お問い合わせ内容をご記入ください",error:n.message,required:!0,rows:6}),p.jsx(ie,{type:"submit",disabled:c,children:c?"送信中...":"送信する"})]})};ce.__docgenInfo={description:"",methods:[],displayName:"ContactForm",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: ContactFormData) => void",signature:{arguments:[{type:{name:"ContactFormData"},name:"data"}],return:{name:"void"}}},description:""}}};const Be={title:"Components/ContactForm",component:ce,parameters:{layout:"padded",docs:{description:{component:"お問い合わせフォームコンポーネント。名前、メールアドレス、件名、メッセージを入力できます。"}}},argTypes:{onSubmit:{description:"フォーム送信時のコールバック"}}},d={tags:["vrt"],args:{}},v={args:{},play:async({canvasElement:s})=>{const a=m(s).getByRole("button",{name:/送信する/});await t.click(a)}},x={args:{},play:async({canvasElement:s})=>{const e=m(s),a=e.getByPlaceholderText("山田太郎"),n=e.getByPlaceholderText("example@example.com");await t.type(a,"山田太郎"),await t.type(n,"yamada@example.com")}},B={args:{},play:async({canvasElement:s})=>{const e=m(s),a=e.getByPlaceholderText("山田太郎"),n=e.getByPlaceholderText("example@example.com"),o=e.getByPlaceholderText("お問い合わせの件名"),c=e.getByPlaceholderText("お問い合わせ内容をご記入ください");await t.type(a,"山田太郎"),await t.type(n,"yamada@example.com"),await t.type(o,"商品に関するお問い合わせ"),await t.type(c,"こんにちは。商品の在庫状況について教えていただけますでしょうか。よろしくお願いいたします。")}},w={args:{},play:async({canvasElement:s})=>{const e=m(s),a=e.getByPlaceholderText("example@example.com"),n=e.getByPlaceholderText("お問い合わせの件名"),o=e.getByPlaceholderText("お問い合わせ内容をご記入ください"),c=e.getByRole("button",{name:/送信する/});await t.type(a,"yamada@example.com"),await t.type(n,"商品に関するお問い合わせ"),await t.type(o,"こんにちは。商品の在庫状況について教えていただけますでしょうか。"),await t.click(c)}},h={args:{},play:async({canvasElement:s})=>{const e=m(s),a=e.getByPlaceholderText("山田太郎"),n=e.getByPlaceholderText("example@example.com"),o=e.getByPlaceholderText("お問い合わせの件名"),c=e.getByPlaceholderText("お問い合わせ内容をご記入ください"),l=e.getByRole("button",{name:/送信する/});await t.type(a,"山田太郎"),await t.type(n,"invalid-email"),await t.type(o,"商品に関するお問い合わせ"),await t.type(c,"こんにちは。商品の在庫状況について教えていただけますでしょうか。"),await t.click(l)}},b={args:{},play:async({canvasElement:s})=>{const e=m(s),a=e.getByPlaceholderText("山田太郎"),n=e.getByPlaceholderText("example@example.com"),o=e.getByPlaceholderText("お問い合わせの件名"),c=e.getByPlaceholderText("お問い合わせ内容をご記入ください"),l=e.getByRole("button",{name:/送信する/});await t.type(a,"山田太郎"),await t.type(n,"yamada@example.com"),await t.type(o,"商品に関するお問い合わせ"),await t.type(c,"短い"),await t.click(l)}},I={args:{onSubmit:se()},play:async({canvasElement:s,args:e})=>{const a=m(s),n=a.getByPlaceholderText("山田太郎"),o=a.getByPlaceholderText("example@example.com"),c=a.getByPlaceholderText("お問い合わせの件名"),l=a.getByPlaceholderText("お問い合わせ内容をご記入ください"),P=a.getByRole("button",{name:/送信する/});await t.type(n,"山田太郎"),await t.type(o,"yamada@example.com"),await t.type(c,"商品に関するお問い合わせ"),await t.type(l,"こんにちは。商品の在庫状況について教えていただけますでしょうか。よろしくお願いいたします。"),await t.click(P),await oe(()=>{i(e.onSubmit).toHaveBeenCalledWith({name:"山田太郎",email:"yamada@example.com",subject:"商品に関するお問い合わせ",message:"こんにちは。商品の在庫状況について教えていただけますでしょうか。よろしくお願いいたします。"})})}},T={args:{onSubmit:se()},play:async({canvasElement:s,args:e})=>{const a=m(s),n=a.getByRole("button",{name:/送信する/});await t.click(n),await i(e.onSubmit).not.toHaveBeenCalled(),await i(a.getByText("お名前は必須です")).toBeInTheDocument(),await i(a.getByText("メールアドレスは必須です")).toBeInTheDocument(),await i(a.getByText("件名は必須です")).toBeInTheDocument(),await i(a.getByText("メッセージは必須です")).toBeInTheDocument()}},E={args:{},play:async({canvasElement:s})=>{const e=m(s),a=e.getByPlaceholderText("山田太郎"),n=e.getByRole("button",{name:/送信する/});await t.click(n),await i(e.getByText("お名前は必須です")).toBeInTheDocument(),await t.type(a,"山田太郎"),await oe(()=>{i(e.queryByText("お名前は必須です")).not.toBeInTheDocument()})}};var S,F,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['vrt'],
  args: {}
}`,...(D=(F=d.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var C,k,R;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole('button', {
      name: /送信する/
    });

    // フォームを送信してバリデーションエラーを表示
    await userEvent.click(submitButton);
  }
}`,...(R=(k=v.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var q,H,N;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByPlaceholderText('山田太郎');
    const emailInput = canvas.getByPlaceholderText('example@example.com');
    await userEvent.type(nameInput, '山田太郎');
    await userEvent.type(emailInput, 'yamada@example.com');
  }
}`,...(N=(H=x.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var W,_,A;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByPlaceholderText('山田太郎');
    const emailInput = canvas.getByPlaceholderText('example@example.com');
    const subjectInput = canvas.getByPlaceholderText('お問い合わせの件名');
    const messageInput = canvas.getByPlaceholderText('お問い合わせ内容をご記入ください');
    await userEvent.type(nameInput, '山田太郎');
    await userEvent.type(emailInput, 'yamada@example.com');
    await userEvent.type(subjectInput, '商品に関するお問い合わせ');
    await userEvent.type(messageInput, 'こんにちは。商品の在庫状況について教えていただけますでしょうか。よろしくお願いいたします。');
  }
}`,...(A=(_=B.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var M,O,V;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByPlaceholderText('example@example.com');
    const subjectInput = canvas.getByPlaceholderText('お問い合わせの件名');
    const messageInput = canvas.getByPlaceholderText('お問い合わせ内容をご記入ください');
    const submitButton = canvas.getByRole('button', {
      name: /送信する/
    });

    // 名前以外を入力
    await userEvent.type(emailInput, 'yamada@example.com');
    await userEvent.type(subjectInput, '商品に関するお問い合わせ');
    await userEvent.type(messageInput, 'こんにちは。商品の在庫状況について教えていただけますでしょうか。');

    // 送信してエラーを表示
    await userEvent.click(submitButton);
  }
}`,...(V=(O=w.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var $,z,G;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByPlaceholderText('山田太郎');
    const emailInput = canvas.getByPlaceholderText('example@example.com');
    const subjectInput = canvas.getByPlaceholderText('お問い合わせの件名');
    const messageInput = canvas.getByPlaceholderText('お問い合わせ内容をご記入ください');
    const submitButton = canvas.getByRole('button', {
      name: /送信する/
    });

    // 無効なメールアドレスを入力
    await userEvent.type(nameInput, '山田太郎');
    await userEvent.type(emailInput, 'invalid-email');
    await userEvent.type(subjectInput, '商品に関するお問い合わせ');
    await userEvent.type(messageInput, 'こんにちは。商品の在庫状況について教えていただけますでしょうか。');

    // 送信してエラーを表示
    await userEvent.click(submitButton);
  }
}`,...(G=(z=h.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,L;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByPlaceholderText('山田太郎');
    const emailInput = canvas.getByPlaceholderText('example@example.com');
    const subjectInput = canvas.getByPlaceholderText('お問い合わせの件名');
    const messageInput = canvas.getByPlaceholderText('お問い合わせ内容をご記入ください');
    const submitButton = canvas.getByRole('button', {
      name: /送信する/
    });

    // 短いメッセージを入力
    await userEvent.type(nameInput, '山田太郎');
    await userEvent.type(emailInput, 'yamada@example.com');
    await userEvent.type(subjectInput, '商品に関するお問い合わせ');
    await userEvent.type(messageInput, '短い');

    // 送信してエラーを表示
    await userEvent.click(submitButton);
  }
}`,...(L=(K=b.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,U,X;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    onSubmit: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByPlaceholderText('山田太郎');
    const emailInput = canvas.getByPlaceholderText('example@example.com');
    const subjectInput = canvas.getByPlaceholderText('お問い合わせの件名');
    const messageInput = canvas.getByPlaceholderText('お問い合わせ内容をご記入ください');
    const submitButton = canvas.getByRole('button', {
      name: /送信する/
    });

    // すべてのフィールドに有効な値を入力
    await userEvent.type(nameInput, '山田太郎');
    await userEvent.type(emailInput, 'yamada@example.com');
    await userEvent.type(subjectInput, '商品に関するお問い合わせ');
    await userEvent.type(messageInput, 'こんにちは。商品の在庫状況について教えていただけますでしょうか。よろしくお願いいたします。');

    // 送信
    await userEvent.click(submitButton);

    // onSubmitが呼ばれることを確認
    await waitFor(() => {
      expect(args.onSubmit).toHaveBeenCalledWith({
        name: '山田太郎',
        email: 'yamada@example.com',
        subject: '商品に関するお問い合わせ',
        message: 'こんにちは。商品の在庫状況について教えていただけますでしょうか。よろしくお願いいたします。'
      });
    });
  }
}`,...(X=(U=I.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    onSubmit: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole('button', {
      name: /送信する/
    });

    // 何も入力せずに送信
    await userEvent.click(submitButton);

    // onSubmitは呼ばれない
    await expect(args.onSubmit).not.toHaveBeenCalled();

    // エラーメッセージが表示される
    await expect(canvas.getByText('お名前は必須です')).toBeInTheDocument();
    await expect(canvas.getByText('メールアドレスは必須です')).toBeInTheDocument();
    await expect(canvas.getByText('件名は必須です')).toBeInTheDocument();
    await expect(canvas.getByText('メッセージは必須です')).toBeInTheDocument();
  }
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByPlaceholderText('山田太郎');
    const submitButton = canvas.getByRole('button', {
      name: /送信する/
    });

    // 送信してエラーを表示
    await userEvent.click(submitButton);

    // エラーメッセージが表示される
    await expect(canvas.getByText('お名前は必須です')).toBeInTheDocument();

    // 入力すると エラーがクリアされる
    await userEvent.type(nameInput, '山田太郎');
    await waitFor(() => {
      expect(canvas.queryByText('お名前は必須です')).not.toBeInTheDocument();
    });
  }
}`,...(ne=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const we=["Default","WithAllErrors","PartiallyFilled","FullyFilled","NameFieldError","EmailFieldError","MessageFieldError","SuccessfulSubmit","ValidationError","ErrorClearing"];export{d as Default,h as EmailFieldError,E as ErrorClearing,B as FullyFilled,b as MessageFieldError,w as NameFieldError,x as PartiallyFilled,I as SuccessfulSubmit,T as ValidationError,v as WithAllErrors,we as __namedExportsOrder,Be as default};
