(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{9192:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,9324,23)),Promise.resolve().then(s.bind(s,8681)),Promise.resolve().then(s.bind(s,3599)),Promise.resolve().then(s.t.bind(s,6469,23))},7982:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(5155),l=s(2115),a=s(4112),n=s(9606),i=s(767);function o(e){let{onClose:t}=e,{register:s,handleSubmit:o,formState:{errors:c}}=(0,n.mN)(),[d,x]=(0,l.useState)(""),m=async e=>{if(!d){alert("Пожалуйста, подтвердите, что вы не робот.");return}try{(await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,captchaToken:d})})).ok?(alert("Сообщение отправлено!"),t()):alert("Ошибка при отправке сообщения.")}catch(e){console.error("Ошибка:",e),alert("Произошла ошибка. Попробуйте позже.")}};return(0,r.jsxs)("form",{onSubmit:o(m),className:"relative bg-white max-w-lg mx-auto p-6 rounded-lg shadow-lg space-y-4",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold",children:"Обратная связь"}),(0,r.jsx)("button",{type:"button",onClick:t,className:"text-gray-600 hover:text-orange-600",children:(0,r.jsx)(i.A,{size:24})})]}),(0,r.jsx)("p",{className:"text-gray-500 mb-4",children:"Оставьте сообщение, и мы обязательно свяжемся с Вами"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium",children:"Имя"}),(0,r.jsx)("input",{...s("name",{required:"Имя обязательно"}),type:"text",className:"w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"}),c.name&&(0,r.jsx)("p",{className:"text-red-500 text-sm mt-1",children:c.name.message})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium",children:"E-mail"}),(0,r.jsx)("input",{...s("email",{required:"Email обязателен",pattern:{value:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,message:"Некорректный email"}}),type:"email",className:"w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"}),c.email&&(0,r.jsx)("p",{className:"text-red-500 text-sm mt-1",children:c.email.message})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium",children:"Ваше сообщение"}),(0,r.jsx)("textarea",{...s("message",{required:"Сообщение обязательно"}),className:"w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"}),c.message&&(0,r.jsx)("p",{className:"text-red-500 text-sm mt-1",children:c.message.message})]}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(a.A,{sitekey:"6LffCI4qAAAAAP3jRcO45WNQAfiI_hznVcukDQBZ",onChange:e=>{x(e||"")}})}),(0,r.jsx)("button",{type:"submit",className:"bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg w-full transition-colors mt-4",children:"Отправить"})]})}function c(e){let{isOpen:t,onClose:s,children:a}=e;return((0,l.useEffect)(()=>{let e=e=>{"Escape"===e.key&&s()};return t&&(document.addEventListener("keydown",e),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",e),document.body.style.overflow=""}},[t,s]),t)?(0,r.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black/60 z-50",children:(0,r.jsx)("div",{className:"bg-white rounded-lg m-6 shadow-lg relative max-w-lg w-full mx-4",children:a})}):null}function d(e){let{isOpen:t,onClose:s}=e;return(0,r.jsxs)(c,{isOpen:t,onClose:s,children:[(0,r.jsx)(o,{onClose:s})," "]})}},8681:(e,t,s)=>{"use strict";s.d(t,{Header:()=>p});var r=s(5155),l=s(2115),a=s(5565);let n=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"max-w-[1280px] mx-auto px-[15px] h-[100px] flex items-center justify-between",children:t})};var i=s(8199),o=s(6046),c=s(1719),d=s(9053),x=s(7396);let m=()=>{let e=(0,o.usePathname)(),[t,s]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=e=>{e.target.closest(".dropdown")||s(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]),(0,r.jsxs)("nav",{className:"hidden lg:flex space-x-6 gap-nav relative z-19",children:[(0,r.jsx)(x.default,{href:"/",className:"text-lg font-medium text-[#0F172A] ".concat("/"===e?"border-b-2 border-[#F97316]":"text-[#0F172A]"," hover:text-gray-900"),children:"Главная"}),(0,r.jsx)(x.default,{href:"/about",className:"text-lg font-medium text-[#0F172A] ".concat("/about"===e?"border-b-2 border-[#F97316]":"text-[#0F172A]"," hover:text-gray-900"),children:"О нас"}),(0,r.jsxs)("div",{className:"text-lg font-medium ".concat("/services"===e?"text-[#F97316] underline":"text-gray-700"," hover:text-gray-900 flex items-center cursor-pointer relative dropdown"),onClick:()=>{s(!t)},children:["Услуги",(0,r.jsx)(c.A,{className:"ml-2 transform transition-transform ".concat(t?"rotate-180":"rotate-0")}),t&&(0,r.jsxs)("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg p-4 rounded-md w-64 z-10",children:[" ",(0,r.jsxs)("ul",{className:"flex flex-col divide-y divide-gray-200",children:[" ",(0,r.jsxs)("li",{className:"flex items-center justify-between py-2 group",children:[" ",(0,r.jsx)(x.default,{href:"/software-development",className:"text-gray-700 group-hover:text-gray-800 transition-colors flex-1 ".concat("/software-development"===e?"border-l-4 border-[#F97316] pl-2":""),children:"Разработка ПО"}),(0,r.jsx)(d.A,{className:"text-gray-700 group-hover:text-[#F97316] transition-colors w-5 h-5 flex-shrink-0"})]}),(0,r.jsxs)("li",{className:"flex items-center justify-between py-2 group",children:[(0,r.jsx)(x.default,{href:"/production-digitalization",className:"text-gray-700 group-hover:text-gray-800 transition-colors flex-1 ".concat("/production-digitalization"===e?"border-l-4 border-[#F97316] pl-2":""),children:"Цифровизация производства"}),(0,r.jsx)(d.A,{className:"text-gray-700 group-hover:text-[#F97316] transition-colors w-5 h-5 flex-shrink-0"})]}),(0,r.jsxs)("li",{className:"flex items-center justify-between py-2 group",children:[(0,r.jsx)(x.default,{href:"/it-systems-support",className:"text-gray-700 group-hover:text-gray-800 transition-colors flex-1 ".concat("/it-systems-support"===e?"border-l-4 border-[#F97316] pl-2":""),children:"Поддержка ИТ-систем"}),(0,r.jsx)(d.A,{className:"text-gray-700 group-hover:text-[#F97316] transition-colors w-5 h-5 flex-shrink-0"})]}),(0,r.jsxs)("li",{className:"flex items-center justify-between py-2 group",children:[(0,r.jsx)(x.default,{href:"/process-automation",className:"text-gray-700 group-hover:text-gray-800 transition-colors flex-1 ".concat("/process-automation"===e?"border-l-4 border-[#F97316] pl-2":""),children:"Автоматизация процессов"}),(0,r.jsx)(d.A,{className:"text-gray-700 group-hover:text-[#F97316] transition-colors w-5 h-5 flex-shrink-0"})]})]})]})]}),(0,r.jsx)("a",{onClick:()=>{let e=document.getElementById("contacts");null==e||e.scrollIntoView({behavior:"smooth"})},className:"text-lg font-medium  hover:text-gray-900 cursor-pointer",children:"Контакты"})]})};var u=s(7982),h=s(6710),f=s(767),g=s(1536);let j=e=>{let{openModal:t}=e,[s,a]=(0,l.useState)(!1),[n,i]=(0,l.useState)(!1),o=()=>a(!1);return(0,l.useEffect)(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[s]),(0,r.jsxs)("div",{children:[(0,r.jsx)(h.A,{className:"w-9 h-9 cursor-pointer text-[#F97316]",onClick:()=>a(!s)}),(0,r.jsx)("div",{className:"fixed top-0 left-0 h-screen w-full bg-white z-50 transform ".concat(s?"translate-x-0":"-translate-x-full"," transition-transform duration-300"),children:(0,r.jsxs)("div",{className:"h-full overflow-y-auto",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center p-4",children:[(0,r.jsx)("span",{className:"text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#065BAA] to-[#F97316]",children:"НордЭнергоГрупп Информационные Технологии"}),(0,r.jsx)(f.A,{className:"w-9 h-9 cursor-pointer text-gray-800",onClick:o})]}),(0,r.jsxs)("ul",{className:"flex flex-col items-start space-y-6 px-6",children:[(0,r.jsx)("li",{children:(0,r.jsx)(x.default,{href:"/",className:"text-gray-800 text-lg hover:text-[#F97316]",onClick:o,children:"Главная"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x.default,{href:"/about",className:"text-gray-800 text-lg hover:text-[#F97316]",onClick:o,children:"О нас"})}),(0,r.jsx)("li",{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 text-gray-800 text-lg cursor-pointer ",onClick:()=>i(!n),children:[(0,r.jsx)("span",{children:"Услуги"}),(0,r.jsx)(c.A,{className:"transform transition-transform duration-300 ".concat(n?"rotate-180":"rotate-0")})]}),n&&(0,r.jsxs)("ul",{className:"mt-2 space-y-2 ml-4 text-gray-700",children:[(0,r.jsx)("li",{children:(0,r.jsx)(x.default,{href:"/software-development",className:"hover:text-[#F97316]",onClick:o,children:"Разработка ПО"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x.default,{href:"/production-digitalization",className:"hover:text-[#F97316]",onClick:o,children:"Цифровизация производства"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x.default,{href:"/it-systems-support",className:"hover:text-[#F97316]",onClick:o,children:"Поддержка ИТ-систем"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x.default,{href:"/process-automation",className:"hover:text-[#F97316]",onClick:o,children:"Автоматизация процессов"})})]})]})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{onClick:()=>{o();let e=document.getElementById("contacts");null==e||e.scrollIntoView({behavior:"smooth"})},className:"text-lg font-medium hover:text-gray-900 cursor-pointer",children:"Контакты"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{className:"w-full bg-[#F97316] text-white py-2 px-4 rounded-lg hover:bg-[#ea620f] transition",onClick:()=>{o(),t()},children:"Связаться с нами"})}),(0,r.jsx)("hr",{className:"w-full border-t border-gray-300 my-6"}),(0,r.jsxs)("ul",{className:"space-y-4",children:[(0,r.jsxs)("li",{className:"flex items-start",children:[(0,r.jsx)(g.vq8,{className:"mr-3 h-5 w-5 text-[#F97316]"}),(0,r.jsx)("a",{className:"text-gray-800",href:"https://yandex.ru/maps/2/saint-petersburg/house/ulitsa_vatutina_3/Z0kYdQ9jTUAAQFtjfXV3cX9jZA==/?ll=30.383458%2C59.960301&z=17.11",children:"195009, Россия, Санкт-Петербург, улица Ватутина, дом 3, литер А"})]}),(0,r.jsxs)("li",{className:"flex items-center",children:[(0,r.jsx)(g.maD,{className:"mr-3 h-5 w-5 text-[#F97316]"}),(0,r.jsx)("a",{href:"mailto:Mail@neg-it.ru",className:"hover:underline text-gray-800",children:"Mail@neg-it.ru"})]}),(0,r.jsxs)("li",{className:"flex items-center",children:[(0,r.jsx)(g.dRU,{className:"mr-3 h-5 w-5 text-[#F97316]"}),(0,r.jsx)("a",{href:"tel:+78123267350",className:"hover:underline text-gray-800",children:"+7 (812) 326-73-50"})]})]})]})]})})]})},p=()=>{let[e,t]=(0,l.useState)(!1),s=()=>t(!0);return(0,r.jsx)("header",{className:"bg-[#faf9f6] z-50",children:(0,r.jsx)(n,{children:(0,r.jsxs)("div",{className:"flex justify-between items-center w-full h-full",children:[(0,r.jsx)("div",{className:"flex-shrink-0",children:(0,r.jsx)(x.default,{href:"/",children:(0,r.jsx)(a.default,{src:"assets/image.svg",alt:"Лого",width:450,height:67,className:"h-auto w-auto max-w-[450px] max-h-[67px] object-contain",id:"logo"})})}),(0,r.jsx)(m,{}),(0,r.jsxs)("div",{className:"flex-shrink-0 flex items-center z-10",children:[(0,r.jsx)("div",{className:"lg:hidden",children:(0,r.jsx)(j,{openModal:s})}),(0,r.jsx)("div",{className:"hidden lg:flex",children:(0,r.jsx)(i.$,{variant:"default",className:"mx-auto",onClick:s,children:"Связаться с нами"})}),(0,r.jsx)(u.default,{isOpen:e,onClose:()=>t(!1)})]})]})})})}},3599:(e,t,s)=>{"use strict";s.d(t,{default:()=>a});var r=s(5155),l=s(2115);function a(e){let{children:t}=e,[s,a]=(0,l.useState)(!0);return((0,l.useEffect)(()=>(setTimeout(()=>a(!1),1e3),()=>{a(!0)}),[]),s)?(0,r.jsx)("div",{className:"flex items-center justify-center h-screen bg-white",children:(0,r.jsx)("div",{className:"animate-spin rounded-full h-32 w-32 border-t-4 border-orange-500"})}):(0,r.jsx)("div",{className:"fade-in-up",children:t})}},8199:(e,t,s)=>{"use strict";s.d(t,{$:()=>d});var r=s(5155),l=s(2115),a=s(1290),n=s(652),i=s(3463),o=s(9795);let c=(0,n.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=l.forwardRef((e,t)=>{let{className:s,variant:l,size:n,asChild:d=!1,...x}=e,m=d?a.DX:"button";return(0,r.jsx)(m,{className:function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,o.QP)((0,i.$)(t))}(c({variant:l,size:n,className:s})),ref:t,...x})});d.displayName="Button"},9324:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[164,711,397,461,816,441,517,358],()=>t(9192)),_N_E=e.O()}]);