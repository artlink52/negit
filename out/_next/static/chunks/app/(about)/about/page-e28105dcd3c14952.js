(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[363],{3844:(e,t,n)=>{Promise.resolve().then(n.bind(n,8317))},8317:(e,t,n)=>{"use strict";n.d(t,{default:()=>$});var o=n(5155),s=n(2115);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}let a=(e,t)=>{let n={};for(let o in e)-1===t.indexOf(o)&&(n[o]=e[o]);return n},i=s.createContext(null),c=s.createContext(null),l=e=>t=>s.createElement(c.Consumer,null,n=>s.createElement(e,r({parent:n},t))),p=(e=[])=>{let[t,n]=(0,s.useState)(!1),o=(0,s.useRef)(e),r=(()=>{let e=(0,s.useContext)(i);if(null===e)throw Error("Couldn't find Yandex.Maps API in the context. Make sure that hook useYMaps is inside <YMaps /> provider");return e})(),a=r.getApi();return(0,s.useEffect)(()=>{r.load().then(()=>Promise.all(o.current.map(r.loadModule))).then(()=>n(!0))},[]),t&&a?a:null},u=()=>{},d=["onLoad","onError","modules","apiLoader"];function m(e,t=!1,n=[]){return o=>{let{width:i,height:c,modules:l=[],onLoad:m=u}=o,h=p(n.concat(l)),f=!t||!!h,y=a(o,d);return(0,s.useEffect)(()=>h?m(h):void 0,[h]),f?s.createElement(e,r({ymaps:h},y)):s.createElement("div",{style:{width:i,height:c}})}}let h="undefined"!=typeof window,f={lang:"ru_RU",load:"",ns:"",mode:"release"},y=e=>{let{version:t="2.1",enterprise:n=!1,query:o={lang:"ru_RU",load:"",ns:""},preload:r=!1,children:a}=e,c=(0,s.useRef)((e=>{let t;let{query:n=f}=e,o=Date.now().toString(32),s=n.ns||"",r="__yandex-maps-api-onload__$$"+o,a="__yandex-maps-api-onerror__$$"+o,i=h?window:{},c={},l=()=>s?i[s]:t,p=()=>{delete i[r],delete i[a]};return{load:()=>{if(l())return Promise.resolve(t);if(c[s])return c[s];let o={onload:r,onerror:a,...f,...n},u=Object.keys(o).map(e=>`${e}=${o[e]}`).join("&"),d=[`https://${e.enterprise?"enterprise.":""}api-maps.yandex.ru`,e.version,"?"+u].join("/");return c[s]=new Promise((e,n)=>{i[r]=n=>{p(),n.ready(()=>{t=n,e(n)})},i[a]=e=>{p(),n(e)},new Promise((e,t)=>{let n=document.createElement("script");n.type="text/javascript",n.onload=e,n.onerror=t,n.src=d,n.async=!0,document.head.appendChild(n)}).catch(i[a])}),c[s]},getApi:l,loadModule:e=>new Promise((n,o)=>{t.modules.require(e).done(o=>{o.forEach(n=>{((e,t,n,o=!1)=>{let s="string"==typeof t?t.split("."):t.slice(),r,a=e;for(;s.length>1;)a[r=s.shift()]||(a[r]={}),a=a[r];let i=s[0];a[i]=!0===o&&a[i]||n})(t,e,n,!0)}),n(t)},o)})}})({version:t,enterprise:n,query:o,preload:r}));return(0,s.useEffect)(()=>{r&&c.current.load()},[c.current]),s.createElement(i.Provider,{value:c.current},a)},b=/^on(?=[A-Z])/;function v(e){return Object.keys(e).reduce((t,n)=>{if(b.test(n)){let o=n.replace(b,"").toLowerCase();t._events[o]=e[n]}else t[n]=e[n];return t},{_events:{}})}function j(e,t,n){"function"==typeof n&&e.events.add(t,n)}function O(e,t,n){"function"==typeof n&&e.events.remove(t,n)}function E(e,t,n){Object.keys(Object.assign({},t,n)).forEach(o=>{t[o]!==n[o]&&(O(e,o,t[o]),j(e,o,n[o]))})}let g=e=>"default"+e.charAt(0).toUpperCase()+e.slice(1);function _(e,t){return void 0!==e[t]||void 0===e[g(t)]}function C(e,t,n){return(_(e,t)?e[t]:e[g(t)])||n}function R(e,t,n=null){e!==t&&(e&&("current"in e?e.current=null:"function"==typeof e&&e(null)),t&&("current"in t?t.current=n:"function"==typeof t&&t(n)))}function w(e){let{width:t,height:n,style:o,className:s}=e;return void 0!==o||void 0!==s?Object.assign({},o&&{style:o},s&&{className:s}):{style:{width:t,height:n}}}class P extends s.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){let{onError:n=()=>{}}=this.props;n(e),this.setState({error:e,errorInfo:t})}render(){return this.state.error?null:this.props.children}}let x=e=>({onError:t,...n})=>s.createElement(P,{onError:t},s.createElement(e,n));class k extends s.Component{constructor(){super(),this.instance=null,this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this.instance=k.mountObject(this._parentElement,this.props.ymaps.Map,this.props),this.setState({instance:this.instance})}componentDidUpdate(e){null!==this.instance&&k.updateObject(this.instance,e,this.props)}componentWillUnmount(){k.unmountObject(this.instance,this.props)}render(){let e=w(this.props),t=a(v(this.props),["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return s.createElement(c.Provider,{value:this.state.instance},s.createElement("div",r({ref:this._getRef},e,t),this.props.children))}static mountObject(e,t,n){let{instanceRef:o,_events:s}=v(n),r=new t(e,C(n,"state"),C(n,"options"));return Object.keys(s).forEach(e=>j(r,e,s[e])),R(null,o,r),r}static updateObject(e,t,n){let{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(t);if(_(n,"state")){let o=C(t,"state",{}),s=C(n,"state",{});o.type!==s.type&&e.setType(s.type),o.behaviors!==s.behaviors&&(o.behaviors&&e.behaviors.disable(o.behaviors),s.behaviors&&e.behaviors.enable(s.behaviors)),s.zoom&&o.zoom!==s.zoom&&e.setZoom(s.zoom),s.center&&o.center!==s.center&&e.setCenter(s.center),s.bounds&&o.bounds!==s.bounds&&e.setBounds(s.bounds)}if(_(n,"options")){let o=C(t,"options"),s=C(n,"options",{});o!==s&&e.options.set(s)}C(t,"width")===C(n,"width")&&C(t,"height")===C(n,"height")||e.container.fitToViewport(),E(e,r,o),R(a,s,e)}static unmountObject(e,t){let{instanceRef:n,_events:o}=v(t);null!==e&&(Object.keys(o).forEach(t=>O(e,t,o[t])),e.destroy(),R(n))}}let M=x(m(k,!0,["Map"]));M.defaultProps={width:320,height:240};class S extends s.Component{constructor(){super(),this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this._mounted=!0,this.props.ymaps.panorama.isSupported()&&S.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(e=>this._mounted&&this.setState({instance:e}))}componentDidUpdate(e){null!==this.state.instance&&S.updateObject(this.state.instance,e,this.props)}componentWillUnmount(){this._mounted=!1,S.unmountObject(this.state.instance,this.props)}render(){let e=w(this.props);return s.createElement("div",r({ref:this._getRef},e))}static mountObject(e,t,n){let{instanceRef:o,_events:s}=v(n),r=C(n,"point"),a=C(n,"locateOptions"),i=C(n,"options");return new Promise((n,c)=>{t.locate(r,a).done(r=>{if(r.length>0){let a=new t.Player(e,r[0],i);R(null,o,a),Object.keys(s).forEach(e=>j(a,e,s[e])),n(a)}},c)})}static updateObject(e,t,n){let{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(t);if(_(n,"options")){let o=C(t,"options"),s=C(n,"options");o!==s&&e.options.set(s)}if(_(n,"point")){let o=C(n,"point"),s=C(t,"point"),r=C(n,"locateOptions");o!==s&&e.moveTo(o,r)}E(e,r,o),R(a,s,e)}static unmountObject(e,t){let{instanceRef:n,_events:o}=v(t);null!==e&&(Object.keys(o).forEach(t=>O(e,t,o[t])),R(n))}}x(m(S,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"])).defaultProps={width:320,height:240};class U extends s.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){let e=U.mountControl(this.props.ymaps.control[this.props.name],this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){null!==this.instance&&U.updateControl(this.instance,e,this.props)}componentWillUnmount(){U.unmountControl(this.instance,this.props)}render(){return s.createElement(c.Provider,{value:this.state.instance},this.props.children)}static mountControl(e,t){let{instanceRef:n,parent:o,lazy:s,_events:r}=v(t),a=new e({data:C(t,"data"),options:C(t,"options"),state:C(t,"state"),mapTypes:C(t,"mapTypes"),lazy:s});if(Object.keys(r).forEach(e=>j(a,e,r[e])),o&&o.controls&&"function"==typeof o.controls.add)o.controls.add(a);else{if(!o||!o.add||"function"!=typeof o.add)throw Error(`No parent found to mount ${t.name}`);o.add(a)}return R(null,n,a),a}static updateControl(e,t,n){let{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(t);if(_(n,"options")){let o=C(t,"options"),s=C(n,"options");o!==s&&e.options.set(s)}if(_(n,"data")){let o=C(t,"data"),s=C(n,"data");o!==s&&e.data.set(s)}if(_(n,"state")){let o=C(t,"state"),s=C(n,"state");o!==s&&e.state.set(s)}if(_(n,"mapTypes")){let o=C(t,"mapTypes"),s=C(n,"mapTypes");o!==s&&(e.removeAllMapTypes(),s.forEach(t=>e.addMapType(t)))}E(e,r,o),R(a,s,e)}static unmountControl(e,t){let{instanceRef:n,parent:o,_events:s}=v(t);null!==e&&(Object.keys(s).forEach(t=>O(e,t,s[t])),o.controls&&"function"==typeof o.controls.remove?o.controls.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),R(n))}}x(l(m(e=>s.createElement(U,r({},e,{name:"Button"})),!0,["control.Button"]))),x(l(m(e=>s.createElement(U,r({},e,{name:"FullscreenControl"})),!0,["control.FullscreenControl"]))),x(l(m(e=>s.createElement(U,r({},e,{name:"GeolocationControl"})),!0,["control.GeolocationControl"]))),x(l(m(e=>s.createElement(U,r({},e,{name:"ListBox"})),!0,["control.ListBox"]))),x(l(m(e=>s.createElement(U,r({},e,{name:"ListBoxItem"})),!0,["control.ListBoxItem"]))),x(l(m(e=>s.createElement(U,r({},e,{name:"RouteButton"})),!0,["control.RouteButton"]))),x(l(m(e=>s.createElement(U,r({},e,{name:"RouteEditor"})),!0,["control.RouteEditor"]))),x(l(m(e=>s.createElement(U,r({},e,{name:"RoutePanel"})),!0,["control.RoutePanel"]))),x(l(m(e=>s.createElement(U,r({},e,{name:"RulerControl"})),!0,["control.RulerControl"]))),x(l(m(e=>s.createElement(U,r({},e,{name:"SearchControl"})),!0,["control.SearchControl"]))),x(l(m(e=>s.createElement(U,r({},e,{name:"TrafficControl"})),!0,["control.TrafficControl"]))),x(l(m(e=>s.createElement(U,r({},e,{name:"TypeSelector"})),!0,["control.TypeSelector"]))),x(l(m(e=>s.createElement(U,r({},e,{name:"ZoomControl"})),!0,["control.ZoomControl"])));class D extends s.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){let e=D.mountObject(this.props.ymaps.Clusterer,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){null!==this.state.instance&&D.updateObject(this.instance,e,this.props)}componentWillUnmount(){D.unmountObject(this.instance,this.props)}render(){return s.createElement(c.Provider,{value:this.state.instance},this.props.children)}static mountObject(e,t){let{instanceRef:n,parent:o,_events:s}=v(t),r=new e(C(t,"options"));if(Object.keys(s).forEach(e=>j(r,e,s[e])),o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(r);else{if(!o.add||"function"!=typeof o.add)throw Error("No parent found to mount Clusterer");o.add(r)}return R(null,n,r),r}static updateObject(e,t,n){let{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(t);if(_(n,"options")){let o=C(t,"options"),s=C(n,"options");o!==s&&e.options.set(s)}E(e,r,o),R(a,s,e)}static unmountObject(e,t){let{instanceRef:n,parent:o,_events:s}=v(t);null!==e&&(Object.keys(s).forEach(t=>O(e,t,s[t])),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),R(n))}}x(l(m(D,!0,["Clusterer"])));class T extends s.Component{constructor(){super(),this.state={instance:null}}componentDidMount(){let e=T.mountObject(this.props.ymaps.ObjectManager,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){null!==this.instance&&T.updateObject(this.instance,e,this.props)}componentWillUnmount(){T.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){let{instanceRef:n,parent:o,_events:s}=v(t),r=C(t,"options",{}),a=C(t,"features",{}),i=C(t,"filter",null),c=C(t,"objects",{}),l=C(t,"clusters",{}),p=new e(r);if(p.add(a||[]),p.setFilter(i),p.objects.options.set(c),p.clusters.options.set(l),Object.keys(s).forEach(e=>j(p,e,s[e])),o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(p);else{if(!o.add||"function"!=typeof o.add)throw Error("No parent found to mount ObjectManager");o.add(p)}return R(null,n,p),p}static updateObject(e,t,n){let{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(t);if(_(n,"options")){let o=C(t,"options"),s=C(n,"options");o!==s&&e.options.set(s)}if(_(n,"objects")){let o=C(t,"objects"),s=C(n,"objects");o!==s&&e.objects.options.set(s)}if(_(n,"clusters")){let o=C(t,"clusters"),s=C(n,"clusters");o!==s&&e.clusters.options.set(s)}if(_(n,"filter")){let o=C(t,"filter"),s=C(n,"filter");o!==s&&e.setFilter(s)}if(_(n,"features")){let o=C(t,"features"),s=C(n,"features");o!==s&&(e.remove(o),e.add(s))}E(e,r,o),R(a,s,e)}static unmountObject(e,t){let{instanceRef:n,parent:o,_events:s}=v(t);null!==e&&(Object.keys(s).forEach(t=>O(e,t,s[t])),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),R(n))}}x(l(m(T,!0,["ObjectManager"])));class A extends s.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){let{name:e,ymaps:t,dangerZone:n}=this.props,o=A.mountObject(n&&"function"==typeof n.modifyConstructor?n.modifyConstructor(t[e]):t[e],this.props);this.instance=o,this.setState({instance:o})}componentDidUpdate(e){null!==this.instance&&A.updateObject(this.instance,e,this.props)}componentWillUnmount(){A.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){let{instanceRef:n,parent:o,_events:s}=v(t),r=new e(C(t,"geometry"),C(t,"properties"),C(t,"options"));if(Object.keys(s).forEach(e=>j(r,e,s[e])),o&&o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(r);else{if(!o||!o.add||"function"!=typeof o.add)throw Error(`No parent found to mount ${t.name}`);o.add(r)}return R(null,n,r),r}static updateObject(e,t,n){let{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(t);if(_(n,"geometry")){let o=C(t,"geometry",{}),s=C(n,"geometry",{});Array.isArray(s)&&s!==o?Array.isArray(s[0])&&"number"==typeof s[1]?(e.geometry.setCoordinates(s[0]),e.geometry.setRadius(s[1])):e.geometry.setCoordinates(s):"object"==typeof s&&(s.coordinates!==o.coordinates&&e.geometry.setCoordinates(s.coordinates),s.radius!==o.radius&&e.geometry.setRadius(s.radius))}if(_(n,"properties")){let o=C(t,"properties"),s=C(n,"properties");o!==s&&e.properties.set(s)}if(_(n,"options")){let o=C(t,"options"),s=C(n,"options");o!==s&&e.options.set(s)}E(e,r,o),R(a,s,e)}static unmountObject(e,t){let{instanceRef:n,parent:o,_events:s}=v(t);null!==e&&(Object.keys(s).forEach(t=>O(e,t,s[t])),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),R(n))}}let N={modifyConstructor(e){function t(t,n,o){e.call(this,{geometry:t,properties:n},o)}return t.prototype=e.prototype,t}};x(l(m(e=>s.createElement(A,r({},e,{name:"GeoObject",dangerZone:N})),!0,["GeoObject"]))),x(l(m(e=>s.createElement(A,r({},e,{name:"Circle"})),!0,["Circle"])));var B=x(l(m(e=>s.createElement(A,r({},e,{name:"Placemark"})),!0,["Placemark"])));x(l(m(e=>s.createElement(A,r({},e,{name:"Polygon"})),!0,["Polygon"]))),x(l(m(e=>s.createElement(A,r({},e,{name:"Polyline"})),!0,["Polyline"]))),x(l(m(e=>s.createElement(A,r({},e,{name:"Rectangle"})),!0,["Rectangle"])));let $=()=>(0,o.jsx)(y,{children:(0,o.jsx)(M,{defaultState:{center:[59.9603,30.383457],zoom:16},width:"100%",height:"400px",children:(0,o.jsx)(B,{geometry:[59.9603,30.383457]})})})}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(3844)),_N_E=e.O()}]);