(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[421],{CCiN:function(e,t,n){"use strict";n.r(t);var c=n("wx14"),r=n("Ff2n"),a=n("MKeS"),s=n("q1tI"),o=n.n(s),i=n("/MKj"),l=n("svkj"),u=n("V51a"),x=n("kBm1"),m=n("c7LY"),d=n("ELLA"),b=n("Tqhk"),E=n("XUH+"),g=n("Wdql"),v=n("M8cR"),h=n("2oex"),p=n("fxH1");const k=Object(a.a)({resolved:{},chunkName:()=>"platform-scenes-lesson-exercise",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.all([n.e(152),n.e(179),n.e(3),n.e(17),n.e(358),n.e(262),n.e(518),n.e(582),n.e(304),n.e(154),n.e(20),n.e(243),n.e(233),n.e(212),n.e(295),n.e(451),n.e(373)]).then(n.bind(null,"4EYg")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return"4EYg"}}),C=Object(a.a)({resolved:{},chunkName:()=>"platform-scenes-lesson-legacy-exercise",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.all([n.e(152),n.e(179),n.e(130),n.e(3),n.e(17),n.e(262),n.e(606),n.e(225),n.e(304),n.e(96),n.e(153),n.e(87),n.e(112),n.e(233),n.e(212),n.e(295),n.e(350),n.e(136),n.e(110)]).then(n.bind(null,"NuAQ")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return"NuAQ"}}),LessonScene=e=>{let t=e.currentCourse,n=e.disabled,a=e.currentContentItem,f=e.exitPaths,j=e.platformPage,O=(e.hasNextContent,e.navigateToExercise),_=Object(r.a)(e,["currentCourse","disabled","currentContentItem","exitPaths","platformPage","hasNextContent","navigateToExercise"]);const I=Object(i.useSelector)(h.m),y=Object(i.useSelector)(g.i),N=Object(i.useSelector)(h.o),P=Object(i.useDispatch)();return Object(s.useEffect)((()=>{P(Object(v.a)())}),[I,P]),I?o.a.createElement(b.a,null,o.a.createElement(l.a,{flagName:"le_next"},(e=>e?o.a.createElement(E.a,{customHeader:o.a.createElement(x.a,{theme:"dark",title:a.title,titleRoute:f.back,contentType:"lesson",tabsRight:[o.a.createElement(d.a,{key:"next-badge"})]}),customFooter:o.a.createElement(l.a,{flagName:"le_ui_upgrades_2020"},(e=>e?o.a.createElement(m.a,Object(c.a)({},_,{currentContentItem:a,exercises:N,navigate:O,noLock:p.a.state.nolock})):o.a.createElement(u.a,Object(c.a)({},_,{exitPaths:f,currentContentItem:a,currentExercise:I,exercises:N,navigate:O,noLock:p.a.state.nolock}))))},o.a.createElement(k,Object(c.a)({},_,{disabled:n,currentContentItem:a,currentExercise:I,currentCheckpoint:y,exitPaths:f}))):o.a.createElement(C,Object(c.a)({},_,{currentLesson:a,currentCourse:t,currentExercise:I,platformPage:j,navigateToExercise:O,disabled:Boolean(n),exitPaths:f}))))):null};t.default=LessonScene},ELLA:function(e,t,n){"use strict";n.d(t,"a",(function(){return HeaderIndicator}));var c=n("FZcb"),r=n("/VKx"),a=n("GNhk"),s=n("pMFe"),o=n("EwId"),i=n("q1tI"),l=n.n(i),u=n("/MKj"),x=n("y3J+"),m=n("yy36"),d=n("37Dv");const HeaderIndicator=()=>{const e=Object(u.useSelector)(m.s),t=Object(u.useSelector)(m.i);return e?l.a.createElement(x.a,{clickTarget:l.a.createElement(c.a,{theme:"brand-yellow",size:"small",round:!0,fitText:!0,outline:!0},l.a.createElement(r.a,{center:!0},l.a.createElement(o.a,{size:"1em"}),"  NEXT"))},l.a.createElement(a.a,{style:{padding:"1rem"}},l.a.createElement(s.a,null,l.a.createElement(c.a,{block:!0,outline:!0,theme:"brand-blue",href:"https://www.notion.so/codecademy/LE-Next-f7f2542c0d6e41278a64a573397cefc5",style:{marginBottom:"1rem"}},"What is this?"),l.a.createElement(c.a,{theme:"red",block:!0,onClick:()=>Object(d.a)(t.id)},"Disable LE_NEXT Interface")))):null}},"M+gl":function(e,t,n){"use strict";n.d(t,"a",(function(){return ExerciseNavigation}));var c=n("q1tI"),r=n.n(c),a=n("lkI2"),s=n("OM6p"),o=n("swBZ"),i=n("wx14"),l=n("oHca"),u=n("FZcb"),x=n("TSYQ"),m=n.n(x),d="exerciseNavigationButton__4U6hooxHHA3QPMeUpIfPv",b="tooltip__4TgMJkN4JwWYNyoTUMg_P";const ExerciseNavigationButton=({buttonProps:e,buttonText:t,id:n,tipText:c})=>r.a.createElement(l.a,{id:n,target:r.a.createElement(u.a,Object(i.a)({},e,{className:m()(d,e.className)}),t),theme:"dark",tipClassName:b},c),ExerciseBackButton=({currentExerciseIndex:e,onClick:t,tipKey:n})=>r.a.createElement(ExerciseNavigationButton,{buttonProps:{theme:"white",outline:!0,disabled:e<1,onClick:t},buttonText:o.components.exercise_navigation.back,id:"back",tipText:"".concat(n," + <")}),ExerciseNextButton=({atLastExercise:e,mayProceed:t,nextButtonText:n,onClick:c,tipKey:a})=>r.a.createElement(ExerciseNavigationButton,{buttonProps:{id:"discovery-next",go:t,disabled:!t,onClick:c,theme:"brand-yellow"},buttonText:n||(e?o.components.exercise_navigation.up_next:o.components.exercise_navigation.next),id:"next",tipText:"".concat(a," + >")}),ExerciseNavigation=({currentExerciseIndex:e,exerciseCount:t,mayProceed:n,navigate:c,nextButtonText:o,userClick:i})=>{const next=()=>{Object(a.a)("info","Clicked exercise navigation next button (".concat(n?"enabled":"disabled",")")),n?c({exerciseIndex:e+1}):i({data:{target:"disabled_next_exercise_button"}})},previous=()=>{e<1||(Object(a.a)("info","Clicked exercise navigation previous button"),c({exerciseIndex:e-1}))},l=navigator.platform.match("Mac")?"ctrl":"alt";return Object(s.a)("".concat(l,"+."),(()=>(next(),!1)),[e,n]),Object(s.a)("".concat(l,"+,"),(()=>(previous(),!1)),[e]),r.a.createElement("div",{className:"fcn-nav-wrapper"},r.a.createElement("div",{className:"fcn-nav-wrapper__center fcn-progress-container"},r.a.createElement(ExerciseBackButton,{currentExerciseIndex:e,onClick:previous,tipKey:l}),r.a.createElement("div",{className:"fnc-nav__exercise-count"},"".concat(e+1,"/").concat(t)),r.a.createElement(ExerciseNextButton,{atLastExercise:e+1===t,mayProceed:n,nextButtonText:o,onClick:next,tipKey:l})))}},V51a:function(e,t,n){"use strict";var c=n("q1tI"),r=n.n(c),a=n("/MKj"),s=n("M+gl"),o=n("cFwM"),i=n("vBdZ"),l=n("wE9P"),u=n("2oex"),x=n("CWAm"),m=n("bgzC"),d="getHelpContainer__MkuYlNMqKMQnWUeCFquxu";const b={userClick:x.f},legacyBugReportData=e=>({course:e.trackSlug,skill:e.contentItemSlug,exercise:e.exerciseSlug});t.a=Object(a.connect)((e=>({contentItemProgresses:Object(l.b)(e),currentExerciseIndex:Object(u.n)(e),canAccessNextExercise:Object(u.c)(e)})),b)((({disabled:e,currentContentItem:t,currentExercise:n,exercises:a=[],locationParams:l,contentItemProgresses:u,currentExerciseIndex:x,noLock:b,navigate:E,exitPaths:g,canAccessNextExercise:v,userClick:h})=>{const p=Object(c.useCallback)((({exerciseIndex:e})=>{if(e>=a.length)return;const t=a[e];E(t.slug)}),[a,E]);return r.a.createElement(o.a,{currentType:"lesson",disabled:e,currentLesson:t,currentExercise:n,exercises:a,params:l,contentItemProgresses:u,titleRoute:g.back,title:Object(m.a)(x,n.title),unlockAll:b,authors:[],navigate:p},r.a.createElement(o.b,{position:"left"}),r.a.createElement(o.b,{position:"center"},r.a.createElement(s.a,{mayProceed:b||v,currentLesson:t,exerciseCount:a.length,currentExerciseIndex:x,navigate:p,userClick:h})),r.a.createElement(o.b,{position:"right"},r.a.createElement(i.a,{isLesson:!0,className:d,bugReportData:legacyBugReportData(l)})))}))},c7LY:function(e,t,n){"use strict";var c=n("q1tI"),r=n.n(c),a=n("/MKj"),s=n("y6wV"),o=n("ROfi"),i=n("wE9P"),l=n("2oex");const u={userClick:n("CWAm").f};t.a=Object(a.connect)((e=>({contentItemProgresses:Object(i.b)(e),currentExerciseIndex:Object(l.n)(e),canAccessNextExercise:Object(l.c)(e)})),u)((({currentContentItem:e,exercises:t=[],currentExerciseIndex:n,noLock:a,navigate:i,canAccessNextExercise:l,userClick:u})=>{const x=Object(c.useCallback)((({exerciseIndex:e})=>{if(e>=t.length)return;const n=t[e];i(n.slug)}),[t,i]);return r.a.createElement(o.a,{customProgressIndicator:r.a.createElement("div",{className:"fnc-nav__exercise-count"},"".concat(n+1,"/").concat(t.length)),customNavigation:r.a.createElement(s.a,{mayProceed:a||l,currentLesson:e,exerciseCount:t.length,currentExerciseIndex:n,navigate:x,userClick:u})})}))},y6wV:function(e,t,n){"use strict";n.d(t,"a",(function(){return LEExerciseNavigation}));var c=n("q1tI"),r=n.n(c),a=n("/MKj"),s=n("swBZ"),o=n("lkI2"),i=n("2oex"),l=n("/fvN");const LEExerciseNavigation=({currentExerciseIndex:e,exerciseCount:t,mayProceed:n,navigate:c,nextButtonText:u,userClick:x})=>{const m=Object(a.useSelector)((e=>Object(i.I)(e))),d=e+1===t,b=e<1&&!m;return r.a.createElement(l.a,{next:()=>{Object(o.a)("info","Clicked exercise navigation next button (".concat(n?"enabled":"disabled",")")),n?c({exerciseIndex:e+1}):x({data:{target:"disabled_next_exercise_button"}})},nextDisabled:!n,nextButtonText:u||(d?s.components.exercise_navigation.up_next:s.components.exercise_navigation.next),previous:()=>{e<1?Object(l.b)(m):(Object(o.a)("info","Clicked exercise navigation previous button"),c({exerciseIndex:e-1}))},previousDisabled:b})}}}]);
//# sourceMappingURL=platform-scenes-lesson.93d9b7e51f5e10de218d.chunk.js.map