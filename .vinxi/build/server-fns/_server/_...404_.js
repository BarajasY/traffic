import{isServer as r,getRequestEvent as n,ssr as a,ssrHydrationKey as i,escape as o,createComponent as s}from"solid-js/web";import{T as p}from"./server-fns.js";import{onCleanup as u}from"solid-js";import"solid-js/web/storage";import"h3";import"node:async_hooks";function d(e){if(r){const t=n();t.response.status=e.code,t.response.statusText=e.text,u(()=>!t.nativeEvent.handled&&(t.response.status=200))}return null}var m=["<main","><!--$-->","<!--/--><!--$-->",'<!--/--><h1>Page Not Found</h1><p>Visit <a href="https://start.solidjs.com" target="_blank">start.solidjs.com</a> to learn how to build SolidStart apps.</p></main>'];function g(){return a(m,i(),o(s(p,{children:"Not Found"})),o(s(d,{code:404})))}export{g as default};