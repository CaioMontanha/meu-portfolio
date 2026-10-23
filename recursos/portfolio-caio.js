import{W as j,s as t,S as z,j as i,a as e,G as I,A as O,r as d,H as f,T as P,F as N,t as x,e as A,B as R,b as $,R as k,c as E,d as H,f as J}from"./vendor.92c357a7.js";const _=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function c(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=c(a);fetch(a.href,l)}};_();var D=j`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html.sr .load-hidden {
        visibility: hidden;
    }

    [data-simplebar]:not(.simplebar-dragging) .simplebar-content-wrapper {
	    scroll-behavior: smooth;
    }

    :root {
        --colorBg: #252525;
        --colorOutline: #ffffff;
        --colorOutlineFade: #4e5559;

        --widthMouse: 45px;
        --heightMouse: 75px;
        --borderMouse: 6px;

        --posMouse: 8px;
        --posText: 2px;

        --sizeTrackball: 5px;
        --posTrackball: 20px;
        --shrinkTrackball: 0.4;

        --animDuration: 5s;

        --bgGradient: var(--colorOutlineFade) linear-gradient(transparent 0%,transparent 50%,var(--colorOutline) 50%,var(--colorOutline) 100%);
    }
    
    html, body, #root {
        height: 100%;
        width : 100%;
        scroll-behavior: smooth;
    }

    h1, h2, h3, h4, h5, span, button, p  {
        font-family: 'Inter', sans-serif;
        color: #949494;
    }

    b, strong {
        color: #ffb464;
    }

    textarea {
        resize: none;
    }

    textarea, select, input, input:focus, textarea:focus, select:focus{
        border: 0;
        outline: none;
    }

    a {
        list-style: none;
        text-decoration: none;
        cursor: pointer;
    }

    *, button, input {
        font-family: 'Inter', sans-serif;
        text-decoration: none;
    }

    ul {
        color: #000;
    }

    @media (min-width: 1600px) {
        html {
            font-size: 92%;
        }
    }

    @media (max-width: 1200px) {
        html {
            font-size: 89%;
        }
    }

    @media (max-width: 1024px) {
        html {
            font-size: 85%;
        }
    }

    @media (max-width: 768px) {
        html {
            font-size: 80%;
        }
    }

    @media (max-width: 480px) {
        html {
            font-size: 78%;
        }
    }

    @media (max-width: 320px) {
        html {
            font-size: 75%;
        }
    }
`;const G=t(z)`
    max-height: 99.9999999vh;
    overflow-x: hidden;
    scroll-behavior: smooth;
`,V=t.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin: 50px 0 0 0;
`,Y=t.img`
  height: 5rem;
  object-fit: cover;
`,q=t.span`
  font-size: 1.1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color:#ffb464;
  }
`;var W="/recursos/profile-ruivo.c3bbeab7.svg";function K(){return i(V,{children:[e(Y,{src:W,loading:"lazy",alt:"Personagem em pé com casaco e gorro"}),e("a",{href:"https://github.com/CaioMontanha",target:"_blank",rel:"noreferrer",children:e(q,{children:"Caio Peixoto"})})]})}const U=t.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: auto;
  right: 50px;
  z-index: 10;  

  @media (max-width: 768px) {
    width: 200px;
  }

  @media screen and (max-height: 768px) and (max-width: 800px) {
    display: none;
  }

  @media screen and (max-height: 1024px) and (max-width: 1200px) {
    display: none
  }
`,Q=t.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;

  a {
    margin: 20px auto;
    color: #fff;
    padding: 10px;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    transition: all 0.2s ease-in-out;

    &:hover {
      color: #f9a251;
      transform: translateY(-3px);
    }

    @media(max-width: 768px) {
      writing-mode: horizontal-tb;
    }
  }

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 93px;
    margin: 0px auto;
    background: #fff;

    @media(max-width: 768px) {
      width: 0px;
    }
  }
`;function X(){return e(U,{children:e(Q,{children:e("a",{href:"mailto:caiopeixoto890@gmail.com",target:"_blank",rel:"noreferrer",children:"caiopeixoto890@gmail.com"})})})}var Z="./recursos/logo_montanha_2_VERSAO_2.png";const ee=t.nav`
  display: flex;
  align-items: ${n=>n.isOpen?"none":"center"};
  justify-content: space-between;
  width: 100%;

  transition: all 0.5s ease-in-out;

  background: #121111;

  position: fixed;
  z-index: 5555;

  font-size: ${n=>n.navScroll&&!n.isOpen?".8rem":"1rem"};

  padding: 0.3rem 2rem;

  img {
    display: ${n=>n.isOpen?"none":"flex"};
    height: 4rem;
    width: 4rem;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
    &:hover {
      transform: rotate(50deg);
    }
  }

  ul {
    display: flex;
    align-items: center;
    position: relative;
    gap: 3rem;

    a {
      display: flex;
      gap: 0.5rem;
      color: #f2f2f2;
      font-size: ${n=>n.isOpen?"1.5rem":".9rem"};

      transition: all 0.2s ease-in-out;

      span {
        color: #f9a251;
      }

      &:hover {
        color: #f9a251;
      }
    }
  }

  @media (max-width: 1280px) {
    padding: 0;

    ul {
      display: ${n=>n.isOpen?"flex":"none"};
      height: 100%;
      margin: 0 auto;
      justify-content: space-evenly;
      flex-direction: column;
      height: ${n=>n.isOpen?"100vh":"0"};
      width: ${n=>n.isOpen?"100vw":"0"};

      padding: 2rem 0;

      transition: all 0.3s ease-in;
    }
  }
`,te=t.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  transition: all .3s ease-in-out !important;

  @media (max-width: 1280px) {
    width: 100%;
    z-index: 1000;
  }
`,ie=t(I)`
  display: none;
  fill: #ffb464;
  height: 3rem;
  cursor: pointer;

  @media (max-width: 1280px) {
    display: block;
    align-items: right;
    margin-right: 2rem;
    size: 20px;
  }
`,ne=t(O)`
  display: none;
  fill: #ffb464;
  height: 1.5rem;

  @media (max-width: 1280px) {
    display: block;
    height: 1.5rem;
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    cursor: pointer;

    svg {
      height: 2rem;
    }
  }
`;t.div`
  display: inline-flex;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: 1280px) {
    display: none;
  }
`;t.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.7rem !important;
  margin-right: 1rem;

  font-weight: bold;
  color: #fff;

  padding: 15px 20px;

  position: relative;

  z-index: 1;

  border: 2px solid #f55f19;

  &:hover {
    color: #fff !important;
    &:before {
      background: #f55f19;
      width: 100%;
    }
  }

  &:before {
    width: 0;
    height: 100%;

    content: "";
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    z-index: -1;
    transition: 0.7s ease;
  }
`;const re=()=>{const[n,o]=d.exports.useState(!1),[c,s]=d.exports.useState(!1);function a(){window.scrollY>10?o(!0):o(!1)}d.exports.useEffect(()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}),[]);function l(){window.scrollTo(0,1),s(!1)}return i(ee,{isOpen:c,navScroll:n,children:[e(f,{to:"/",onClick:l,children:e("img",{src:Z,alt:"Logo"})}),i(te,{children:[c?e(ne,{size:30,onClick:()=>s(!c)}):e(ie,{size:20,onClick:()=>s(!c)}),i("ul",{children:[i(f,{to:"#home",onClick:l,children:[e("span",{children:"01."}),"Início"]}),i(f,{to:"#about",onClick:()=>s(!1),children:[e("span",{children:"02."}),"Sobre"]}),i(f,{to:"#projects",onClick:()=>s(!1),children:[e("span",{children:"03."}),"Projetos"]}),i(f,{to:"#technologies",onClick:()=>s(!1),children:[e("span",{children:"04."}),"Tecnologias"]}),i(f,{to:"#contact",onClick:()=>s(!1),children:[e("span",{children:"05."}),"Contato"]})]})]})]})},ae=t.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 50px;
  right: auto;
  z-index: 10;

  @media (max-width: 1024px) {
    display: none;
  }
`,oe=t.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  li a {
    padding: 15px;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.5s ease-in-out;

    svg {
      fill: #fff;
      height: 1.5rem;

      transition: all 0.2s ease-in-out;

      &:hover {
        fill: #f9a251;
        transform: translateY(-3px);
      }
    }
  }

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 93px;
    margin: 0px auto;
    background-color: #fff;
  }

`;function le(){return e(ae,{children:i(oe,{children:[e("li",{children:e("a",{href:"https://github.com/CaioMontanha",target:"_blank",rel:"noreferrer",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})}),e("li",{children:e("a",{href:"https://www.linkedin.com/in/caio-peixoto-5172b42b7/",target:"_blank",rel:"noreferrer",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})})})}),e("li",{children:e("a",{href:"mailto:caiopeixoto890@gmail.com",target:"_blank",rel:"noreferrer",children:e("svg",{fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",children:e("path",{d:"M 4 5 C 2.9069372 5 2 5.9069372 2 7 L 2 23 C 2 24.093063 2.9069372  25 4 25 L 26 25 C 27.093063 25 28 24.093063 28 23 L 28 7 C 28 5.9069372 27.093063  5 26 5 L 4 5 z M 6.6992188 7 L 23.300781 7 L 15 13.134766 L 6.6992188 7 z M 5 9.4746094  L 15 16.865234 L 25 9.4746094 L 25 23 L 5 23 L 5 9.4746094 z"})})})})]})})}t(z)`
  max-height: 100vh;
  overflow: hidden;

  .simplebar-scrollbar:before {
    background: #fff;
  }
`;const se=t.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  background-image: linear-gradient(91.18deg, #0d0d0e 32.63%, #141416 62.22%);
`,de=t.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

    
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 100px 0;
  margin: 0px auto;
  max-width: 1300px;

  @media (max-width: 1400px) {
    max-width: 1000px;
  }
`,ce=({children:n})=>e(se,{children:i(G,{autoHide:!1,children:[e(re,{}),e(le,{}),e(X,{}),e(de,{children:n}),e(K,{})]})}),pe=t.section`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.5rem;
`,he=t.section`
  width: 100%;
  height: 100%;
  padding: 120px 0 80px 0;
  max-width: 1200px;
  margin: 0 auto;
`,me=t.div`
  display: flex;
  gap: 3rem;
  background: rgba(30, 30, 30, 0.7);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-left: 0.4rem solid #ffb464;
  border-radius: 1rem;
  overflow: hidden;
  backdrop-filter: blur(10px);
  padding: 0;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    
    >img {
      max-width: 300px;
      border-radius: 1rem;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,fe=t.img`
  width: 450px;
  height: auto;
  object-fit: cover;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`,ge=t.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 2.5rem 2.5rem 0;
  font-size: clamp(14px, 4vw, 16px);
  line-height: 1.8;
  
  h1 {
    font-size: clamp(24px, 5vw, 32px);
    margin-bottom: 0.5rem;
    color: #ffb464;
  }
  
  strong {
    color: #ffb464;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  @media (max-width: 1024px) {
    padding: 1rem 0;
  }
`;t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;t.span`
  background: rgba(255, 180, 100, 0.2);
  color: #ffb464;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    background: rgba(255, 180, 100, 0.3);
  }
`;const ue=t.div`
    display: flex;
    align-items: center;
    position: relative;

    margin: 10px 0 40px;

    h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;

    gap: 10px;
    font-size: 1.7rem;
    color: #f2f2f2;

    &:after {
      content: "";
      display: block;
      position: relative;
      top: 0px;
      left: 15px;
      width: 650px;
      height: 1px;
      background-color: #686868;
    }

    span {
      color: #ffb464;
      font-size: 1.3rem;
    }
  }
`,b=({number:n,title:o})=>e(ue,{children:i("h2",{children:[i("span",{children:[n,"."]}),o]})});var xe="./recursos/foto-caio.jpeg";function be(){return i(he,{id:"about",children:[e(b,{number:"02",title:"Sobre mim"}),i(me,{children:[e("div",{children:e(fe,{src:xe,alt:"Caio Peixoto",loading:"lazy"})}),i(ge,{children:[i("p",{children:["Ol\u00e1! Sou Caio Peixoto, tenho 20 anos e sou desenvolvedor ",e("strong",{children:"Full Stack"})," de ",e("strong",{children:"Recife, Pernambuco"}),". Sou proativo, criativo e tenho facilidade para aprender, al\u00e9m de uma bagagem de experi\u00eancias profissionais e de vida e conex\u00f5es que contribuem para meu trabalho."]}),i("p",{children:["Gosto de encarar desafios e estou focado em desenvolver minhas habilidades t\u00e9cnicas e ampliar minhas soft skills. Busco oportunidades de est\u00e1gio, CLT ou PJ, em modelos remoto, h\u00edbrido ou presencial."]}),i("p",{children:[e("strong",{children:"Tecnologias:"})," HTML, CSS, JavaScript, TypeScript, Python, PHP, Bootstrap, Node.js, Vite.js, React, Laravel, Django, PostgreSQL, MySQL, Git e Docker. Fundamentos: Scrum, Clean Architecture e APIs REST."]})]})]})]})}const we=t.div`
  display: block;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  margin-top: 3rem;
`,ve=t.a`
  text-decoration: none;
  font-size: 1rem;
  margin-right: 1rem;

  overflow: hidden;
  font-weight: bold;
  color: #fff;

  padding: 16px 35px;

  position: relative;

  z-index: 1;

  border: 2px solid #f55f19;

  &:hover {
      color: #fff;
      &:before {
          background: #f55f19;
          width: 100%;
      }
  }

  &:before {
      width: 0;
      height: 100%;

      content: "";
      position: absolute;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);

      z-index: -1;
      transition: 0.7s ease;
    }
`;function C({href:n,target:o,type:c,rel:s,children:a}){return e(we,{children:e(ve,{href:n,target:o,rel:"noreferrer",children:a})})}const ye=t.a`
    display: flex;
    justify-content:space-between;
    flex-direction: column;

    max-width: 500px;
    min-height: 300px;

    border-radius: 2px;

    &:hover{
        transform: translateY(-3px);

        h2 {
            color: #ffb464;
        }
    }

    padding: 2rem 1.75rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background: #18181a;
    box-shadow: 0 10px 30px -15px #0f0f10e8;

`,ke=t.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,ze=t.h2`
    font-size: 1.8rem;
    color: #FFF;
`,Ce=t.span`
    color: #c7c3c3;
    font-size: clamp(14px, 2vw, 10px);
    line-height: 25px;
`,Se=t.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    font-size: clamp(13px, 2vw, 10px);
    cursor: pointer;
    list-style: none;
    text-decoration: none;

    a {
        span {
            &:hover {
            color: #e18451;
            }
        }
    }
`;function h({title:n,content:o,url:c,children:s}){return i(ye,{href:c,target:"_blank",rel:"noreferrer",children:[i(ke,{children:[e(ze,{children:n}),e(Ce,{children:o})]}),e(Se,{children:s})]})}const Fe=t.section`
    height: 100%;
    width: 100%;

    margin: 0 auto;
    padding: 100px 0 50px 0;

    max-width: 1000px;

    @media (max-width: 1024px) {
        padding-block: 0;
    }
`,Te=t.div`
    list-style: none;
    padding: 0px;
    margin: 50px 0px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
    position: relative;
`;function Le(){return i(Fe,{id:"technologies",children:[e(b,{number:"04",title:"Tecnologias"}),i(Te,{children:[i(h,{title:"Linguagens",content:"Linguagens que utilizo e estudo no desenvolvimento web.",url:"mailto:caiopeixoto890@gmail.com",children:[e("span",{children:"HTML"}),e("span",{children:"CSS"}),e("span",{children:"JavaScript"}),e("span",{children:"TypeScript"}),e("span",{children:"Python"}),e("span",{children:"PHP"})]}),i(h,{title:"Frameworks e bibliotecas",content:"Ferramentas para criar aplicações web front-end e back-end.",url:"mailto:caiopeixoto890@gmail.com",children:[e("span",{children:"Bootstrap"}),e("span",{children:"Node.js"}),e("span",{children:"Vite.js"}),e("span",{children:"React"}),e("span",{children:"Laravel"}),e("span",{children:"Django"})]}),i(h,{title:"Dados e ferramentas",content:"Bancos de dados, controle de versão e infraestrutura.",url:"mailto:caiopeixoto890@gmail.com",children:[e("span",{children:"PostgreSQL"}),e("span",{children:"MySQL"}),e("span",{children:"Git"}),e("span",{children:"Docker"})]}),i(h,{title:"Métodos e fundamentos",content:"Práticas e conceitos de desenvolvimento de software.",url:"mailto:caiopeixoto890@gmail.com",children:[e("span",{children:"Scrum"}),e("span",{children:"Clean Architecture"}),e("span",{children:"APIs REST"})]})]}),e(C,{href:"mailto:caiopeixoto890@gmail.com",children:"Fale comigo"})]})}const ProjectImage=t.div`
    width:100%;
    height:auto;
    aspect-ratio:16 / 9;
    display:flex;
    align-items:center;
    justify-content:center;
    border:1px dashed #4e5559;
    border-radius:2px;
    background:#202022;
    color:#949494;
    font-size:.9rem;
    overflow:hidden;

    img { width:100%; height:100%; object-fit:cover; }
`,ProjectTile=t.article`
    display:flex;
    flex-direction:column;
    gap:1rem;
    max-width:500px;
    min-height:300px;
    padding:2rem 1.75rem;
    border-radius:2px;
    background:#18181a;
    box-shadow:0 10px 30px -15px #0f0f10e8;
    color:inherit;
    text-decoration:none;
    cursor:pointer;
    transition:all .2s ease-in-out;
    &:focus-visible { outline:2px solid #ffb464; outline-offset:4px; }

    &:hover { transform:translateY(-3px); h2 { color:#ffb464; } }
`,ProjectDescription=t.p`
    margin:0;
    color:#c5c5c5;
    font-size:.95rem;
    line-height:1.5;
`,ProjCard=({title,description,image,url,children})=>i(ProjectTile,{as:"a",href:url,target:"_blank",rel:"noopener noreferrer",children:[e(ze,{children:title}),description&&e(ProjectDescription,{children:description}),image&&e(ProjectImage,{children:e("img",{src:image,alt:"Tela do projeto "+title,loading:"lazy"})}),e(Se,{children})]});function Projects(){return i(Fe,{id:"projects",children:[e(b,{number:"03",title:"Projetos"}),i(Te,{children:[
  i(ProjCard,{title:"STORAR",url:"https://github.com/CaioMontanha/storar",image:"./storar.png",description:"Previs\u00e3o de estoque.",children:[e("span",{children:"React"}),e("span",{children:"TypeScript"}),e("span",{children:"Vite"}),e("span",{children:"Django REST Framework"}),e("span",{children:"SQLite"})]}),
  i(ProjCard,{title:"Reservow",url:"https://github.com/CaioMontanha/reservow",image:"./reservow.png",description:"Aplica\u00e7\u00e3o de gest\u00e3o de reservas e passeios.",children:[e("span",{children:"Laravel 12"}),e("span",{children:"PHP 8.3"}),e("span",{children:"Blade"}),e("span",{children:"Bootstrap 5"}),e("span",{children:"SQLite"})]}),
  i(ProjCard,{title:"Olho de Zeus",url:"https://github.com/CaioMontanha/olho-de-zeus",image:"./olho%20de%20zeus.png",description:"Painel de monitoramento de APIs.",children:[e("span",{children:"React"}),e("span",{children:"TypeScript"}),e("span",{children:"Vite"}),e("span",{children:"Node.js"}),e("span",{children:"Express"}),e("span",{children:"PostgreSQL (PGlite)"})]}),
  i(ProjCard,{title:"PixProtect",url:"https://github.com/CaioMontanha/pixprotect",image:"./pixprotech.jpeg",description:"Painel demonstrativo de an\u00e1lise de risco para transa\u00e7\u00f5es Pix, com score explic\u00e1vel e dashboard.",children:[e("span",{children:"Python"}),e("span",{children:"TypeScript"}),e("span",{children:"React"}),e("span",{children:"Django"}),e("span",{children:"SQLite"}),e("span",{children:"HTML"}),e("span",{children:"CSS"})]}),
  i(ProjCard,{title:"Chamatech",url:"https://github.com/CaioMontanha/site-chamatech",image:"./chamatech.jpeg",children:[e("span",{children:"Next.js 16"}),e("span",{children:"React 19"}),e("span",{children:"TypeScript"}),e("span",{children:"Tailwind CSS"}),e("span",{children:"Supabase"})]}),
  i(ProjCard,{title:"Diciplinando",url:"https://github.com/CaioMontanha/diciplinando",image:"./disciplinando.png",description:"App de h\u00e1bitos e disciplina.",children:[e("span",{children:"Next.js 16"}),e("span",{children:"React 19"}),e("span",{children:"TypeScript"}),e("span",{children:"Tailwind CSS"}),e("span",{children:"shadcn/ui"})]})
]})]})}const Me=t.div`

  @media (max-width: 1024px) {
    display: none;
  }

  span {
    font-size: clamp(1.5rem, 3vw, 2.4rem);
    color: #c5c5c5;
  }

  p {
    margin: 20px 0 0 0;
    max-width: 300px;
    line-height: 25px;
  }
`;function Be(){return i(Me,{children:[e("span",{children:"Entre em contato"}),e("p",{children:"Estou em busca de uma oportunidade para contribuir em projetos reais e continuar crescendo como desenvolvedor. Entre em contato pelo e-mail caiopeixoto890@gmail.com. \u2192 "})]})}const je=t.section`
  padding: 1rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 450px;

    @media (max-width: 1024px) {
      margin: 0 auto;
    }

    @media (max-width: 360px) {}
  }
`,Ie=t.div`
  display: flex;
  justify-content: space-between;
`,Oe=t.div`
  display: flex;
  gap: 16px;

  input {
    width: 50%;
  }
`,u=t.input`
  margin-right: 0px !important;
  color: #fff;
  font-size: 1rem;
  background: rgba(51, 51, 51, 1);
  box-shadow: 0 10px 30px -15px #0f0f10e8;
  padding: 1.5rem;
  border-radius: 1rem;
`,Pe=t.select`
  background: transparent;
  color: #fff;
  font-size: 1rem;
  background: rgba(51, 51, 51, 1);
  box-shadow: 0 10px 30px -15px #0f0f10e8;
  padding: 1rem;
  border-radius: 1rem;

  option {
    &::disabled {
      background: transparent;
    }
    padding: 1rem;
    background-color: transparent;
    margin-top: 1rem;
  }
`,Ne=t.textarea`
  background: transparent;
  color: #fff;
  font-size: 1rem;
  background: rgba(51, 51, 51, 1);
  box-shadow: 0 10px 30px -15px #0f0f10e8;
  padding: 1rem;
  border-radius: 1rem;
`,Ae=t.input`
  background-color: transparent;
  font-size: 1rem;
  padding: 1rem;

  color: #fff;
  border: 2px solid #f55f19;
  cursor: pointer;

  transition: background 0.3s ease-in-out;

  &:focus {
    outline:none;
    border: 2px solid #f55f19;
}
`;function Re(){const[n,o]=d.exports.useState(""),[c,s]=d.exports.useState(""),[a,l]=d.exports.useState(""),[m,w]=d.exports.useState("type"),[S,v]=d.exports.useState(""),[F,T]=d.exports.useState(""),[L,M]=d.exports.useState(""),y=d.exports.useRef(null),g=()=>{const r=Math.floor(Math.random()*10)+1,p=Math.floor(Math.random()*10)+1;T(`${r} + ${p}`),M((r+p).toString())};return d.exports.useEffect(()=>{g()},[]),i(je,{id:"formEmail",children:[e(P,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),i(Ie,{children:[e(Be,{}),i("form",{onSubmit:r=>{r.preventDefault();const f=r.currentTarget,p=f.elements.namedItem("captcha").value;if(L!==p.trim()){x.error("Resposta incorreta. Tente novamente."),g();return}const d=new FormData(f),payload={name:`${d.get("first")} ${d.get("last")}`,email:d.get("email"),_replyto:d.get("email"),_subject:d.get("_subject"),_captcha:"false",message:d.get("message")};fetch("https://formsubmit.co/ajax/caiopeixoto890@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(payload)}).then(q=>q.json().then(z=>{if(!q.ok||z.success===false||z.success==="false")throw new Error(z.message||`Falha no envio (HTTP ${q.status}).`);return z})).then(()=>{o(""),s(""),l(""),w("type"),v(""),g(),x.success("Mensagem enviada com sucesso!")}).catch(err=>{console.error("Falha no envio do formul\u00e1rio:",err);x.error(`N\u00e3o foi poss\u00edvel enviar: ${String(err.message||err).slice(0,120)}`)})},ref:y,children:[i("input",{type:"hidden",name:"_subject",value:"Contato pelo portf\u00f3lio"}),i("input",{type:"hidden",name:"_replyto",value:a}),i("input",{type:"hidden",name:"_captcha",value:"false"}),i(Oe,{children:[e(u,{required:!0,type:"text",name:"first",id:"first",placeholder:"Nome",value:n,onChange:r=>o(r.target.value)}),e(u,{required:!0,type:"text",name:"last",id:"last",placeholder:"Sobrenome",value:c,onChange:r=>s(r.target.value)})]}),e(u,{required:!0,type:"email",name:"email",id:"email",placeholder:"E-mail",value:a,onChange:r=>l(r.target.value)}),e(Pe,{required:!0,name:"type",id:"type",placeholder:"Selecione o assunto",value:m,onChange:r=>w(r.target.value),children:[{disabled:!0,defaultValue:"type",label:"Qual \u00e9 o assunto da mensagem?",value:"type"},{label:"Oportunidade Full Stack",value:"FULL STACK JOB"},{label:"Oportunidade Back-end",value:"BACKEND JOB"},{label:"Oportunidade Front-end",value:"FRONTEND JOB"},{label:"Outro assunto",value:"OTHERS"}].map((r,p)=>e("option",{value:r.value,disabled:r.disabled,defaultValue:r.defaultValue,children:r.label},p))}),e(Ne,{required:!0,name:"message",id:"message",value:S,onChange:r=>v(r.target.value),placeholder:"Mensagem",rows:3,cols:50}),i("div",{style:{margin:"15px 0",padding:"15px",border:"1px solid #ffffff",borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, 0.5)",transition:"all 0.3s ease"},children:[i("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"},children:[e("label",{htmlFor:"captcha",style:{color:"#ffffff",fontSize:"0.95rem"},children:"Resolva esta conta para confirmar que voc\u00ea n\u00e3o \u00e9 um rob\u00f4:"}),i("button",{type:"button",onClick:g,style:{background:"none",border:"none",color:"#ffffff",cursor:"pointer",display:"flex",alignItems:"center",fontSize:"0.9rem",padding:"5px"},"aria-label":"Gerar nova conta",title:"Gerar nova conta",children:[e(N,{style:{marginRight:"5px"}})," Nova conta"]})]}),i("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[i("div",{style:{backgroundColor:"rgba(30, 30, 30, 0.8)",padding:"8px 12px",borderRadius:"4px",color:"#fff",fontWeight:"bold",letterSpacing:"1px",minWidth:"80px",textAlign:"center"},children:[F," ="]}),e(u,{required:!0,type:"text",name:"captcha",id:"captcha",placeholder:"Digite o resultado","aria-label":"Resposta da verifica\u00e7\u00e3o",style:{width:"100%",maxWidth:"250px",backgroundColor:"rgba(60, 60, 60, 0.5)",color:"#ffffff",padding:"10px",border:"1px solid #444",borderRadius:"4px",transition:"border 0.3s ease"},onFocus:r=>r.target.style.border="1px solid #ffffff",onBlur:r=>r.target.style.border="1px solid #444"})]}),e("div",{style:{fontSize:"0.8rem",color:"#999",marginTop:"8px"},children:"Esta verifica\u00e7\u00e3o ajuda a evitar mensagens autom\u00e1ticas."})]}),e(Ae,{type:"submit",value:"Enviar"})]})]})]})}const $e=t.section`
  height: 100%;
  width: 100%;

  margin: 0 0 150px 0; 
`,Ee=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  gap: 2rem;

  span {
    letter-spacing: .6rem;
    font-size: clamp(1.5rem, 5vw, 2.7rem);
  }

  a {
    span {
      display: inline-block;

      &:after {
        content: '';
        color: #fff;
        width: 0px;
        height: 2px;
        display: block;
        background: black;
        transition: 300ms;
      }

      &:hover::after {
        width: 100%;
        background: #fff;
      }
      letter-spacing: normal !important;
      font-size: clamp(2rem, 5vw, 4.5rem) !important; 
      color: #fff;
    }
  }
`;function He(){return e($e,{children:i(Ee,{children:[i("span",{children:["Precisa de um ",e("b",{children:"Dev Jr?"})]}),e("a",{href:"#formEmail",children:e("span",{children:"Vamos trabalhar juntos"})})]})})}const Je=t.section`
  height: 100%;
  width: 100%;

  padding: 150px 0 0 0;

  margin: 0 auto;

  max-width: 850px;

`;function _e(){return i(Je,{id:"contact",children:[e(He,{}),e(b,{number:"05",title:"Contato"}),e(Re,{})]})}const De=t.section`
  height: 100%;
  width: 100%;

  padding: 100px 0 0 0;
`,Ge=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  >object {
    max-height: 15rem;
    width: min(48vw, 34.6rem);
    height: auto;
    aspect-ratio: 980 / 425;
    border: 0;
    background: transparent;
    transform: translateY(0px);
    animation: float 4000ms ease-in-out infinite;

    @keyframes float {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(.9rem);
      }

      100% {
        transform: translateY(0px);
      }
    }
  }

  @media(max-width:1400px) {
    gap: 2rem;

    >object {
      display: block;
      max-height: 12rem;
      width: min(42vw, 31rem);
    }
  }

  @media(max-width:768px) {
    flex-direction: column;
    gap: 1rem;

    >object {
      max-height: 10rem;
      width: min(90vw, 34rem);
    }
  }
`,Ve=t.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: left;

  z-index: 5;

  span {
    display: flex;
    font-size: .8rem;
    color: #fff;
    white-space: nowrap;

    &:first-child {
      color: #ffb464;
      font-weight: 600;
      font-size: 1.4rem;
      width: 100%;
      max-width: 540px;
      text-align: left;

    @media (max-width:1400px) {
        font-size: 1.1rem;
      }

      @media (max-width:690px) {
        display: none;
      }
    }

    &:nth-child(2), &:nth-child(3) {
      font-size: clamp(35px, 8vw, 65px);
      text-transform: capitalize;
      font-weight: bold;
    }

    &:nth-child(3) {
      font-size: clamp(20px, 8vw, 45px);
      color: #b09c88;
    }
  }

  p {
      color: #949494;
      font-size: clamp(13px, 2vw, 16px);
      max-width: 540px;
      line-height: 25px;
      align-items: right;

      b {
        color: #ffb464;
      }
    }
`;t.div`
  display: block;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  margin-top: 3rem;
`;t.a`
  text-decoration: none;
  font-size: 1rem;
  margin-right: 1rem;

  overflow: hidden;
  font-weight: bold;
  color: #fff;

  padding: 16px 35px;

  position: relative;

  z-index: 1;

  border: 2px solid #f55f19;

  &:hover {
      color: #fff;
      &:before {
          background: #f55f19;
          width: 100%;
      }
  }

  &:before {
      width: 0;
      height: 100%;

      content: "";
      position: absolute;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);

      z-index: -1;
      transition: 0.7s ease;
    }
`;t.div`
  width: 100%;
  height: 5rem;
  position: inherit;

  display: inline-flex;
  gap: 1rem;
  justify-content: center;
  text-align: center;
  align-items: center;
`;t.a`
  img {
    width: 3rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;var Ye="/recursos/hello-animated.c6998162.svg";function qe(){return e(De,{id:"home",children:i(Ge,{children:[e("object",{data:Ye,type:"image/svg+xml",title:"Ilustração animada de uma pessoa programando","aria-label":"Ilustração animada de uma pessoa programando"}),i(Ve,{children:[e("span",{children:"Olá, meu nome é"}),e("h1",{children:e("strong",{children:"Caio Peixoto"})}),e("span",{children:e("strong",{children:"Full Stack"})}),i("p",{children:["Sou proativo, criativo e tenho facilidade para aprender. Trago experiências profissionais e de vida e gosto de encarar desafios enquanto evoluo minhas habilidades técnicas e soft skills."]}),e(C,{href:"#technologies",children:"Conheça minhas tecnologias"})]})]})})}function We(){return i(pe,{children:[e(qe,{}),e(be,{}),e(Projects,{}),e(Le,{}),e(_e,{})]})}function Ke(){return e("h1",{children:"Page Not Found 404"})}function Ue(){return e(R,{children:i($,{children:[e(ce,{children:e(k,{path:"/",exact:!0,component:We})}),e(k,{path:"/404",component:Ke}),e(E,{from:"*",to:"/404"})]})})}function Qe(){return i("div",{children:[e(D,{}),e(Ue,{})]})}H.render(e(J.StrictMode,{children:e(Qe,{})}),document.getElementById("root"));
