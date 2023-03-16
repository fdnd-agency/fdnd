import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const global = "";
const theme = "";
const SkipLink_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'a.svelte-17gknbi{position:absolute;top:-5rem;background-color:var(--element-white);z-index:999;left:5rem;padding:1rem;color:var(--text-primary);font-family:"Inter", sans-serif}a.svelte-17gknbi:focus{top:0}',
  map: null
};
const SkipLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<a href="${"#content"}" class="${"svelte-17gknbi"}">Skip to main content</a>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: 'header.svelte-169dtiv{position:fixed;width:100%;padding:1.5rem;z-index:999;color:var(--text-white);display:flex;align-items:center;transition:background-color 200ms}.scrolled.svelte-169dtiv{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);background-color:rgba(0, 0, 0, 0.35)}p.svelte-169dtiv{font-family:"Montserrat", sans-serif;font-size:0.9rem;transition:font-size 150ms}p.large.svelte-169dtiv{font-size:1.1rem}@media(min-width: 60rem){header.svelte-169dtiv{padding:1.5rem 2rem}p.svelte-169dtiv{font-size:1.1rem}p.large.svelte-169dtiv{font-size:1.35rem}}@media(min-width: 75rem){header.svelte-169dtiv{padding:1.5rem 5rem}}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `


<header class="${["svelte-169dtiv", ""].join(" ").trim()}">
    <p class="${["svelte-169dtiv", ""].join(" ").trim()}">FDND Stack</p>
</header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SkipLink, "SkipLink").$$render($$result, {}, {}, {})}
${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
