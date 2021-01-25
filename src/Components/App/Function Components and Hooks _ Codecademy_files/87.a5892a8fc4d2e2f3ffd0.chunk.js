(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[87],{T7Vo:function(e,t,s){"use strict";var i=s("BzM2"),a=s("hhPA"),l=s.n(a),n=s("071C"),o=s("ud20"),h=s("kuGx"),c=s("ydTQ");const r={name:"EvaluatedCodeStore",mixins:[i.a.store],getInitialState:()=>({evaluatingCode:!1}),evaluateCodeCb(e){n.a.stdout(e.stdout),n.a.stderr(e.stderr),o.a.setState(e)},codexCb(){},evaluateCode(){const e=h.a.state.files[h.a.state.active];return c.a.interface.isWorkspaceCodex()?c.a.interface.codexRun(e.content).then(this.codexCb,this.codexCb):"server"===(null==e?void 0:e.evaluatedOn)?c.a.interface.run(e,c.a.state.workspaceType).then(this.evaluateCodeCb,this.evaluateCodeCb):null}};t.a=l.a.createStore(r)},kuGx:function(e,t,s){"use strict";var i=s("3WF5"),a=s.n(i),l=s("uM7l"),n=s.n(l),o=s("BzM2"),h=s("hhPA"),c=s.n(h),r=s("uBVh"),u=s("dUu8"),f=s("bizM"),d=s("yole"),p=s("NZ0w"),F=s("T7Vo"),v=s("u2tZ");const S={name:"CurrentFilesStore",mixins:[o.a.store],init(){this.listenTo(d.a.openFile,this.openFile),this.listenTo(d.a.updateFile,this.updateFile),this.listenTo(d.a.closeFile,this.closeFile),this.listenTo(d.a.setCurrentOpenFile,this.setActive),this.listenTo(v.a,this.setCurrentFiles),this.listenTo(p.a.deleteFile,this.deleteFile),this.listenTo(p.a.rename.completed,this.renameFile),this.listenTo(p.a.reset.completed,this.refreshFiles),this.listenTo(p.a.restore.completed,this.refreshFiles),this.listenTo(p.a.solution.completed,this.refreshFiles),this.listenTo(p.a.refresh,this.refreshFiles),this.listenTo(p.a.saveFilesAndCheckWork,this.saveFilesAndCheckWork),this.listenTo(p.a.autoSaveFiles,this.autoSaveFiles),this.listenTo(p.a.checkWork,this.checkWork)},getInitialState:()=>({files:[],hasReceivedCurrentFiles:!1,active:0}),openFile(e){const t=n()(this.state.files);if(this.isOpen(e.path)){const s=a()(t,"path").indexOf(e.path);this.setState({active:s,files:t})}else{const s=r.a(r.b(e.path));p.a.getFile(e.path,s).then((e=>{if(!e)return;const s=t.push(e)-1;this.setState({active:s,files:t})}))}},closeFile(e){const t=n()(this.state.files);let s=this.state.active;t.splice(e,1),this.state.active>=e&&(s=Math.max(this.state.active-1,0)),this.setState({active:s,files:t})},closeFileByName(e){if(this.isOpen(e)){const t=a()(this.state.files,"fileName").indexOf(e),s=this.active===t;this.closeFile(t,s)}},getFiles(){return this.state.files},setCurrentFiles(e){this.setState({files:e,hasReceivedCurrentFiles:!0,active:0})},setActive(e){this.setState({active:e})},isOpen(e){return this.state.files.some((t=>t.path===e))},updateFile(e,t){const s=n()(this.state.files);for(const i of s)e.path===i.path&&(i.content=t);this.setState({files:s})},renameFile({prevPath:e,newFile:t}){const s=n()(this.state.files);for(const i of s)i.path===e&&(i.path=t.path,i.name=t.name);this.setState({files:s})},deleteFile(e){this.isOpen(e)&&this.closeFileByName(e);const t=n()(this.state.files);for(let s=0;s<t.length;s+=1)t[s].path===e&&t.splice(s,1);this.setState({files:t})},reloadFile(e){const t=this.state.files.findIndex((t=>t.path===e.path));if(t>-1){const s=n()(this.state.files);s[t].content=e.content,this.setState({files:s})}},refreshFiles(){const e=this.state.files.map((e=>e.path));p.a.getFiles(e).then((e=>{this.setState({active:Math.min(this.state.active,e.length-1),files:e})}))},updateEditorWorkspace(){const e=p.a.saveFilesAndCheckWork,t=e.completed,s=e.failed;p.a.updateFiles(this.state.files).then(t,s)},saveFilesAndCheckWork(){const e=p.a.saveFilesAndCheckWork,t=e.completed,s=e.failed;p.a.updateFiles(this.state.files).then(F.a.evaluateCode).then(p.a.persist).then(f.a.refresh).then(u.a.run).then(t,s)},autoSaveFiles(){const e=p.a.autoSaveFiles,t=e.completed,s=e.failed;p.a.updateFiles(this.state.files).then(p.a.persist).then(t,s)},checkWork(){const e=p.a.checkWork,t=e.completed,s=e.failed;u.a.run().then(f.a.refresh).then(t,s)}},k=c.a.createStore(S);t.a=k},nbz0:function(e,t,s){"use strict";var i=s("BzM2"),a=s("hhPA"),l=s.n(a);const n={name:"LessonCursorStore",mixins:[i.a.store],getInitialState:()=>({lessonId:null,exerciseSlug:null}),setCursor(e){this.setState(e)},tokenize(){const e=this.state,t=e.lessonId,s=e.exerciseSlug;return t?"".concat(t,":").concat(s):""}};t.a=l.a.createStore(n)},t2YD:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var i=s("hhPA"),a=s.n(i);const l=a.a.createActions([]);l.publishFilenames=a.a.createAction(),l.loadFiles=a.a.createAction({asyncResult:!0})},u2tZ:function(e,t,s){"use strict";var i=s("hhPA"),a=s.n(i),l=s("t2YD"),n=s("NZ0w"),o=s("lkI2"),h=s("nbz0"),c=s("ydTQ");const r=a.a.createStore({name:"ExerciseFileStore",init(){this.files=[],this.pendingFiles=[],this.workspaceSlug=null,l.a.publishFilenames.listen(this.setDefaultFiles),this.listenTo(l.a.loadFiles,(()=>{this.getDefaultFiles(c.a.state)})),this.listenTo(c.a,this.getDefaultFiles)},setDefaultFiles(e){this.files=e},getDefaultFiles(e){if(e.workspaceUnpersistedChanges)return;const t=e.workspaceObject&&e.workspaceSlug!==this.workspaceSlug,s=!this.fetchedFiles||this.fetchedFiles.join(",")!==this.files.join(","),i=h.a.tokenize()!==this.lastExerciseFetchedFor||t||s;e.workspaceObject&&i&&e.workspaceReady&&(this.workspaceSlug=e.workspaceSlug,this.fetchedFiles=this.files,this.lastExerciseFetchedFor=h.a.tokenize(),n.a.getFiles(this.files).then((t=>{const s=t.map((e=>e&&e.path));for(const t of this.files)-1===s.indexOf(t)&&Object(o.a)("warn","Failed to get file '".concat(t,"' from workspace '").concat(e.workspaceSlug,"'"));this.trigger(t)})))}});t.a=r},ud20:function(e,t,s){"use strict";var i=s("BzM2"),a=s("hhPA");const l=s.n(a).a.createStore({name:"SQLPreviewStore",mixins:[i.a.store],getInitialState:()=>({stdout:"",stderr:"",exitStatus:0})});t.a=l}}]);
//# sourceMappingURL=87.a5892a8fc4d2e2f3ffd0.chunk.js.map