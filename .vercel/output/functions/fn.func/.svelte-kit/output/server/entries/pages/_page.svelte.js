import { c as create_ssr_component, e as escape, v as validate_component, b as subscribe, d as add_attribute, f as each, h as get_store_value } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import "devalue";
import { f as filteredThreads, a as filters } from "../../chunks/filters.js";
const Hero_svelte_svelte_type_style_lang = "";
const css$h = {
  code: 'section.svelte-j86h9g{background:url("/images/hero-bg-fdnd.avif");background-size:cover;height:15rem;padding:1.5rem;display:flex;justify-content:center;flex-direction:column;position:relative}section.svelte-j86h9g::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;background-image:linear-gradient(\n			to bottom,\n			rgba(0, 0, 0, 0.5),\n			transparent\n		)}@media(min-width: 60rem){section.svelte-j86h9g{height:20rem;padding:0 2rem}}@media(min-width: 75rem){section.svelte-j86h9g{height:25rem;background-position:0 40%;padding:0 5rem}}',
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$h);
  return `<section class="${"svelte-j86h9g"}"></section>`;
});
const IntroBar_svelte_svelte_type_style_lang = "";
const css$g = {
  code: 'section.svelte-8kwk56{background-color:var(--element-white);padding:0.75rem 1.5rem;display:flex;position:relative}p.svelte-8kwk56{background-color:var(--element-primary);font-size:1.65rem;width:50px;height:50px;border-radius:50%;display:flex;justify-content:center;align-items:center;position:absolute;top:0;transform:translateY(-50%);box-shadow:rgba(149, 157, 165, 0.2) 0px 8px 24px}h2.svelte-8kwk56{font-family:"Inter", sans-serif;font-size:0.85rem;color:var(--text-gray-2);margin-left:3.5rem}@media(min-width: 60rem){section.svelte-8kwk56{padding:0.75rem 2rem}p.svelte-8kwk56{font-size:2.25rem;width:65px;height:65px}h2.svelte-8kwk56{font-size:1.1rem;margin-left:5rem}}@media(min-width: 75rem){section.svelte-8kwk56{padding:0.75rem 5rem}}',
  map: null
};
const IntroBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$g);
  return `<section class="${"svelte-8kwk56"}">
	<p class="${"svelte-8kwk56"}">🏠</p>

	
	<h2 class="${"svelte-8kwk56"}">Overzicht vragen
	</h2>
</section>`;
});
const ButtonPrimary_svelte_svelte_type_style_lang = "";
const css$f = {
  code: "a.svelte-ujpnox{background-color:var(--element-primary);padding:1.25rem 0;width:100%;border-radius:2rem;margin-top:2rem;font-size:1rem;font-weight:bold;cursor:pointer;transition:background-color 150ms, transform 100ms;display:none;color:var(--text-white);text-align:center;text-transform:uppercase}a.svelte-ujpnox:hover{background-color:var(--element-primary-action)}a.svelte-ujpnox:active{background-color:var(--element-primary-action);transform:scale(0.97)}a.svelte-ujpnox:focus{background-color:var(--element-primary-action)}@media(min-width: 60rem){a.svelte-ujpnox{display:block}}",
  map: null
};
const ButtonPrimary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$f);
  return `
<a href="${"https://discord.com/channels/1017099203882782750/1027275543755890799"}" target="${"_blank"}" class="${"svelte-ujpnox"}">${escape(title)}</a>`;
});
const StatCard_svelte_svelte_type_style_lang = "";
const css$e = {
  code: 'div.svelte-5rva7c{border:1px solid var(--element-border-dark);width:100%;padding:15px;border-radius:5px}div.svelte-5rva7c:nth-child(2){margin-left:1rem}p.svelte-5rva7c{font-size:1.1rem;font-family:"Montserrat", sans-serif;color:var(--text-secondary)}span.svelte-5rva7c{margin-top:10px;text-transform:uppercase;font-size:0.65rem;font-family:"Rubik", sans-serif;font-weight:bold;color:var(--text-gray-2)}@media(min-width: 75rem){p.svelte-5rva7c{font-size:1.75rem}}',
  map: null
};
const StatCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { number } = $$props;
  let { label } = $$props;
  if ($$props.number === void 0 && $$bindings.number && number !== void 0)
    $$bindings.number(number);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css$e);
  return `<div class="${"svelte-5rva7c"}"><p class="${"svelte-5rva7c"}">${escape(number)}</p>
	<span class="${"svelte-5rva7c"}">${escape(label)}</span>
</div>`;
});
const Guidelines_svelte_svelte_type_style_lang = "";
const css$d = {
  code: 'div.svelte-yua0k5{margin-top:2rem;display:none}p.svelte-yua0k5{font-family:"Rubik", sans-serif;font-size:1rem;font-weight:bold;text-transform:uppercase;color:var(--text-gray-2)}p.svelte-yua0k5::after{margin-top:0.5rem;content:"";display:block;width:100%;height:2px;background-color:var(--element-border)}ol.svelte-yua0k5{margin-top:1rem;padding:0 1rem;font-family:"Inter", sans-serif}li.svelte-yua0k5{color:var(--text-gray-3);margin-bottom:1rem;font-size:0.95rem}li.svelte-yua0k5::marker{color:var(--element-primary);font-weight:600}@media(min-width: 75rem){div.svelte-yua0k5{display:block}}',
  map: null
};
const Guidelines = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$d);
  return `<div class="${"svelte-yua0k5"}"><p class="${"svelte-yua0k5"}">Richtlijnen</p>

	
	<ol class="${"svelte-yua0k5"}"><li class="${"svelte-yua0k5"}">Omschrijf je vraag zo duidelijk mogelijk</li>
		<li class="${"svelte-yua0k5"}">Gebruik schermafbeeldingen om code of errors te laten zien</li>
		<li class="${"svelte-yua0k5"}">Stel niet dezelfde vragen als iemand anders al een vergelijkbare vraag
			heeft gesteld
		</li>
		<li class="${"svelte-yua0k5"}">Iedereen is hier om elkaar te helpen. Denk aan elkaars gevoelens</li></ol>
</div>`;
});
const GeneralInformation_svelte_svelte_type_style_lang = "";
const css$c = {
  code: ".general-info-wrapper.svelte-1mkh14q{padding:1rem 1.5rem}p.svelte-1mkh14q{font-weight:500;color:var(--text-introduction);font-size:0.8rem}.stat-cards-wrapper.svelte-1mkh14q{margin-top:1rem;display:flex;justify-content:space-between}@media(min-width: 60rem){aside.svelte-1mkh14q{display:none}}@media(min-width: 75rem){aside.svelte-1mkh14q{display:block;padding:4.65rem 0}.general-info-wrapper.svelte-1mkh14q{padding:0}p.svelte-1mkh14q{font-size:1rem}.stat-cards-wrapper.svelte-1mkh14q{margin-top:2rem}}",
  map: null
};
const GeneralInformation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { introText } = $$props;
  let { threads } = $$props;
  let { members } = $$props;
  let countThread = threads.length;
  let countMembers = members.length;
  if ($$props.introText === void 0 && $$bindings.introText && introText !== void 0)
    $$bindings.introText(introText);
  if ($$props.threads === void 0 && $$bindings.threads && threads !== void 0)
    $$bindings.threads(threads);
  if ($$props.members === void 0 && $$bindings.members && members !== void 0)
    $$bindings.members(members);
  $$result.css.add(css$c);
  return `<aside class="${"svelte-1mkh14q"}">
	<div class="${"general-info-wrapper svelte-1mkh14q"}">
		<p class="${"svelte-1mkh14q"}">${escape(introText)}</p>

		
		${validate_component(ButtonPrimary, "ButtonPrimary").$$render($$result, { title: "Vraag toevoegen" }, {}, {})}

		
		<div class="${"stat-cards-wrapper svelte-1mkh14q"}">${validate_component(StatCard, "StatCard").$$render(
    $$result,
    {
      number: countThread,
      label: "open vragen"
    },
    {},
    {}
  )}
			${validate_component(StatCard, "StatCard").$$render(
    $$result,
    {
      number: countMembers,
      label: "aantal leden"
    },
    {},
    {}
  )}</div>

		
		${validate_component(Guidelines, "Guidelines").$$render($$result, {}, {}, {})}</div>
</aside>`;
});
const filterState = writable("false");
const FilterBtn_svelte_svelte_type_style_lang = "";
const css$b = {
  code: "button.svelte-1dtnhlz{background-color:var(--element-primary);border-radius:0.6rem;padding:0.4rem 1rem;font-size:0.9rem;font-weight:500}@media(min-width: 60rem){button.svelte-1dtnhlz{display:none}}",
  map: null
};
const FilterBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_filterState;
  $$unsubscribe_filterState = subscribe(filterState, (value) => value);
  $$result.css.add(css$b);
  $$unsubscribe_filterState();
  return `<button class="${"svelte-1dtnhlz"}">filters</button>`;
});
const CreateQuestionBtn_svelte_svelte_type_style_lang = "";
const css$a = {
  code: "button.svelte-17ye2kz{background-color:var(--element-primary);text-transform:none;padding:0.6rem 1.6rem;border-radius:2rem;box-shadow:rgb(149 157 165 / 20%) 0px 8px 24px;font-size:0.95rem;font-weight:500}@media(min-width: 75rem){button.svelte-17ye2kz{display:none}}",
  map: null
};
const CreateQuestionBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$a);
  return `
<button class="${"svelte-17ye2kz"}">${escape(title)}</button>`;
});
const SortBtn_svelte_svelte_type_style_lang = "";
const LayoutSwitch_svelte_svelte_type_style_lang = "";
const QuestionCard_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: 'a.svelte-19p1uiy.svelte-19p1uiy{color:var(--text-primary)}article.svelte-19p1uiy.svelte-19p1uiy{margin-top:1rem;background-color:var(--element-white);padding:1rem 1.5rem;border-radius:0.6rem;box-shadow:rgb(149 157 165 / 20%) 0px 8px 24px;transition:transform 150ms}article.svelte-19p1uiy.svelte-19p1uiy:hover{transform:translateY(-2px)}.publish-information.svelte-19p1uiy.svelte-19p1uiy{color:var(--text-gray);font-size:0.8rem;font-weight:600;display:flex}.publish-information.svelte-19p1uiy span.svelte-19p1uiy{color:var(--element-primary);display:flex;align-items:center}.publish-information.svelte-19p1uiy span.svelte-19p1uiy::after{content:"";display:inline-block;width:0.3rem;height:0.3rem;background-color:var(--text-gray);border-radius:50%;margin:0 5px}h4.svelte-19p1uiy.svelte-19p1uiy{margin-top:1rem;font-size:1.35rem}div.svelte-19p1uiy.svelte-19p1uiy{scroll-snap-type:x mandatory;overflow:scroll}.tags-wrapper.svelte-19p1uiy.svelte-19p1uiy{display:flex;margin-top:1rem;flex-wrap:wrap}.tags-wrapper.svelte-19p1uiy li.svelte-19p1uiy{text-transform:uppercase;font-size:0.75rem;color:var(--text-secondary);font-family:"Rubik", sans-serif;font-weight:600;border:1px solid var(--element-border);padding:0.3rem 0.9rem;border-radius:3rem;margin-right:0.3rem}hr.svelte-19p1uiy.svelte-19p1uiy{border:1px solid var(--element-border);margin:1rem 0}.reactions.svelte-19p1uiy.svelte-19p1uiy{font-size:0.9rem;display:flex;align-items:center}.reactions.svelte-19p1uiy img.svelte-19p1uiy{width:0.85rem;height:auto}.reactions.svelte-19p1uiy span.svelte-19p1uiy{color:var(--element-primary);font-weight:600;margin-left:0.3rem}.reactions.svelte-19p1uiy p.svelte-19p1uiy{color:var(--text-gray-4);display:inline}@media(min-width: 75rem){h4.svelte-19p1uiy.svelte-19p1uiy{font-size:1.5rem}li.svelte-19p1uiy.svelte-19p1uiy{font-size:0.8rem}}',
  map: null
};
const baseThreadsUrl = "https://discord.com/channels/1017099203882782750/1027275543755890799/threads";
const QuestionCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { authorName } = $$props;
  let { date } = $$props;
  let { title } = $$props;
  let { reactions } = $$props;
  let { tags } = $$props;
  let { id } = $$props;
  const formattedDate = new Date(date).toLocaleDateString();
  if ($$props.authorName === void 0 && $$bindings.authorName && authorName !== void 0)
    $$bindings.authorName(authorName);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.reactions === void 0 && $$bindings.reactions && reactions !== void 0)
    $$bindings.reactions(reactions);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$9);
  return `<li class="${"svelte-19p1uiy"}"><a${add_attribute("href", `${baseThreadsUrl}/${id}`, 0)} target="${"_blank"}" class="${"svelte-19p1uiy"}"><article class="${"svelte-19p1uiy"}">
            <p class="${"publish-information svelte-19p1uiy"}"><span class="${"svelte-19p1uiy"}">${escape(authorName)}</span>${escape(formattedDate)}</p>

            
            <h4 class="${"svelte-19p1uiy"}">${escape(title)}</h4>

            
            <div class="${"svelte-19p1uiy"}"><ul class="${"tags-wrapper svelte-19p1uiy"}">${each(tags, (tag) => {
    return `<li class="${"svelte-19p1uiy"}">${escape(`${tag.emoji} ${tag.name}`)}
                        </li>`;
  })}</ul></div>

            
            <hr class="${"svelte-19p1uiy"}">

            
            <p class="${"reactions svelte-19p1uiy"}"><img src="${"/images/react-icon.jpg"}" alt="${""}" class="${"svelte-19p1uiy"}">
                <span class="${"svelte-19p1uiy"}">${escape(reactions)}
            <p class="${"svelte-19p1uiy"}">reacties</p></span></p></article></a>
</li>`;
});
const SearchBar_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "form.svelte-1yletbx{margin-top:1.5rem;display:flex;position:relative;align-items:center}img.svelte-1yletbx{position:absolute;left:1rem}input.svelte-1yletbx{width:100%;padding:0.65rem 2.5rem;border-radius:10px;border:none;box-shadow:rgb(149 157 165 / 20%) 0px 8px 24px;background-color:var(--element-white)}input.svelte-1yletbx::-webkit-search-cancel-button{position:relative;right:4.5rem}button.svelte-1yletbx{position:absolute;right:0;border-top-right-radius:10px;border-bottom-right-radius:10px;height:100%;font-size:1rem;font-weight:bold;padding:0.6rem 1.5rem;font-size:0.85rem;background-color:var(--element-white);color:var(--text-primary);border-left:1px solid var(--element-border);transition:background-color 150ms;cursor:pointer}button.svelte-1yletbx:hover{background-color:var(--element-primary-action);color:var(--text-white)}button.svelte-1yletbx:active{background-color:var(--element-primary-action);color:var(--text-white)}button.svelte-1yletbx:focus{background-color:var(--element-primary-action);color:var(--text-white)}@media(min-width: 60rem){button.svelte-1yletbx{background-color:var(--element-primary);color:var(--text-white)}}",
  map: null
};
const SearchBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placeholder } = $$props;
  let { threads } = $$props;
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.threads === void 0 && $$bindings.threads && threads !== void 0)
    $$bindings.threads(threads);
  $$result.css.add(css$8);
  return `<form method="${"POST"}" action="${"?/search"}" class="${"svelte-1yletbx"}">
    <img src="${"/images/search-icon.png"}" alt="${""}" class="${"svelte-1yletbx"}">
    <input type="${"search"}"${add_attribute("placeholder", placeholder, 0)} name="${"search"}" class="${"svelte-1yletbx"}">

    
    <button type="${"submit"}" class="${"svelte-1yletbx"}">Zoek</button>
</form>`;
});
const QuestionsEmpty_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "div.svelte-dn1ttc{display:flex;justify-content:center;margin-top:2.5rem}p.svelte-dn1ttc{font-size:0.95rem}@media(min-width: 60rem){p.svelte-dn1ttc{font-size:1rem}}",
  map: null
};
const QuestionsEmpty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<div class="${"svelte-dn1ttc"}"><p class="${"svelte-dn1ttc"}">Geen resultaten gevonden...</p>
</div>`;
});
const Questions_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "section.svelte-2qncwx{padding:1rem 1.5rem}.title-btn-wrapper.svelte-2qncwx{display:flex;justify-content:space-between;align-items:center}h3.svelte-2qncwx{font-size:1.25rem}.actions-wrapper.svelte-2qncwx{display:flex;justify-content:space-between;margin-top:1.5rem}@media(min-width: 60rem){section.svelte-2qncwx{padding:1rem 0}h3.svelte-2qncwx{font-size:1.8rem}}",
  map: null
};
const Questions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let threadsF;
  let $filteredThreads, $$unsubscribe_filteredThreads;
  let $filters, $$unsubscribe_filters;
  $$unsubscribe_filteredThreads = subscribe(filteredThreads, (value) => $filteredThreads = value);
  $$unsubscribe_filters = subscribe(filters, (value) => $filters = value);
  let { threads } = $$props;
  let { members } = $$props;
  let { title } = $$props;
  let { tags } = $$props;
  let memberNames = {};
  threads.map((thread) => {
    let emoji = thread.applied_tags.map((tagId) => {
      let found = tags.find((tag) => tagId == tag.id);
      return {
        emoji: found.emoji_name,
        name: found.name
      };
    });
    thread.emoji = emoji;
    return emoji;
  });
  const memberList = threads.map((thread) => members.find((member) => member.user.id == thread.owner_id));
  memberList.forEach((member) => {
    memberNames[`${member.user.id}`] = member.user.username;
  });
  if ($$props.threads === void 0 && $$bindings.threads && threads !== void 0)
    $$bindings.threads(threads);
  if ($$props.members === void 0 && $$bindings.members && members !== void 0)
    $$bindings.members(members);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css$6);
  threadsF = $filters.checkboxes.length ? $filteredThreads.filter((thread) => {
    const hasTag = thread.applied_tags.filter((tag) => $filters.checkboxes.includes(tag));
    if (hasTag.length) {
      return thread;
    }
  }) : $filteredThreads;
  $$unsubscribe_filteredThreads();
  $$unsubscribe_filters();
  return `<section id="${"content"}" class="${"svelte-2qncwx"}">
    <div class="${"title-btn-wrapper svelte-2qncwx"}">
        <h3 class="${"svelte-2qncwx"}">${escape(title)}</h3>

        
        ${validate_component(CreateQuestionBtn, "CreateQuestionBtn").$$render($$result, { title: "Stel je vraag" }, {}, {})}</div>

    
    ${validate_component(SearchBar, "SearchBar").$$render($$result, { threads, placeholder: "Vragen zoeken..." }, {}, {})}

    
    <div class="${"actions-wrapper svelte-2qncwx"}">
        ${validate_component(FilterBtn, "FilterBtn").$$render($$result, {}, {}, {})}
</div>

    <ul>
        ${each(threadsF, (thread) => {
    return `${validate_component(QuestionCard, "QuestionCard").$$render(
      $$result,
      {
        id: thread.id,
        authorName: memberNames[thread.owner_id],
        date: thread.thread_metadata.create_timestamp,
        title: thread.name,
        tags: thread.emoji,
        reactions: thread.message_count
      },
      {},
      {}
    )}`;
  })}</ul>

    
    ${threadsF.length == 0 ? `${validate_component(QuestionsEmpty, "QuestionsEmpty").$$render($$result, {}, {}, {})}` : ``}
</section>`;
});
const RangeSlider_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "input.svelte-15u3rb5{color:var(--element-border);outline:none}",
  map: null
};
const RangeSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { min } = $$props;
  let { max } = $$props;
  let { value } = $$props;
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$5);
  return `
<input type="${"range"}"${add_attribute("min", min, 0)}${add_attribute("max", max, 0)}${add_attribute("value", value, 0)} class="${"svelte-15u3rb5"}">`;
});
const Checkbox_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: 'label.svelte-7mcrf8.svelte-7mcrf8{display:flex;cursor:pointer;position:relative;align-items:center;font-family:"Inter", sans-serif;font-size:0.9rem;text-transform:capitalize}label.svelte-7mcrf8.svelte-7mcrf8:focus{border:3px solid red}span.svelte-7mcrf8.svelte-7mcrf8{padding:0.35rem 0.35rem}input.svelte-7mcrf8.svelte-7mcrf8{width:1rem;height:1rem;-webkit-appearance:none;-moz-appearance:none;-o-appearance:none;appearance:none;border:1px solid var(--element-border);outline:none;cursor:pointer;border-radius:0.15rem;position:relative}input.svelte-7mcrf8.svelte-7mcrf8:checked{background-color:var(--element-primary)}input.svelte-7mcrf8:checked+span.svelte-7mcrf8::before{content:"\\2713";display:block;text-align:center;color:var(--text-white);position:absolute;top:0.45rem;left:0.25rem;font-size:0.75rem}',
  map: null
};
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { value } = $$props;
  let { label } = $$props;
  let { emoji } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.emoji === void 0 && $$bindings.emoji && emoji !== void 0)
    $$bindings.emoji(emoji);
  $$result.css.add(css$4);
  return `<label class="${"svelte-7mcrf8"}"><input type="${"checkbox"}"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} class="${"svelte-7mcrf8"}">
    <span class="${"svelte-7mcrf8"}">${escape(emoji)} ${escape(label)}</span>
</label>`;
});
const Filter_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.filter-wrapper.svelte-4sc5k9.svelte-4sc5k9{background-color:var(--element-white);padding:1.25rem 1.6rem;border-radius:0.6rem;box-shadow:rgb(149 157 165 / 20%) 0px 8px 24px;position:fixed;right:0;bottom:1rem;transform:translateX(100%);transition:transform 200ms}h5.svelte-4sc5k9.svelte-4sc5k9{font-size:1.25rem}p.svelte-4sc5k9.svelte-4sc5k9{margin-top:1.25rem;font-family:"Montserrat", sans-serif;margin-bottom:0.6rem;font-size:0.85rem}.rangeslider-wrapper.svelte-4sc5k9.svelte-4sc5k9{display:flex;align-items:center}.rangeslider-wrapper.svelte-4sc5k9 p.svelte-4sc5k9{margin:0;font-family:"Rubik", sans-serif;color:var(--element-primary);font-weight:500}.categories-wrapper.svelte-4sc5k9.svelte-4sc5k9{display:flex;flex-direction:column}.visible.svelte-4sc5k9.svelte-4sc5k9{transform:translateX(0);right:0.5rem}button.svelte-4sc5k9.svelte-4sc5k9{background-color:var(--element-primary);padding:0.5rem 0.5rem;border-radius:5px;margin-top:1rem;cursor:pointer;transition:background-color 150ms}button.svelte-4sc5k9.svelte-4sc5k9:hover{background-color:var(--element-primary-action)}@media(min-width: 60rem){.filter-wrapper.svelte-4sc5k9.svelte-4sc5k9{position:relative;transform:none;transition:none;margin-bottom:1.5rem;bottom:0}}',
  map: null
};
const Filter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $filterState, $$unsubscribe_filterState;
  $$unsubscribe_filterState = subscribe(filterState, (value) => $filterState = value);
  let { tags } = $$props;
  let { title } = $$props;
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$3);
  $$unsubscribe_filterState();
  return `
<div class="${["filter-wrapper svelte-4sc5k9", $filterState === true ? "visible" : ""].join(" ").trim()}">
    <h5 class="${"svelte-4sc5k9"}">${escape(title)}</h5>
    <p class="${"svelte-4sc5k9"}">Aantal reacties</p>

    
    <div class="${"rangeslider-wrapper svelte-4sc5k9"}"><p class="${"svelte-4sc5k9"}">0</p>
        ${validate_component(RangeSlider, "RangeSlider").$$render($$result, { min: "0", max: "500", value: "0" }, {}, {})}
        <p class="${"svelte-4sc5k9"}">1000</p></div>

    
    <div class="${"categories-wrapper svelte-4sc5k9"}"><p class="${"svelte-4sc5k9"}">Categorieën</p>

        <form method="${"POST"}" action="${"?/checkboxFilter"}">${each(tags, (tag) => {
    return `${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        name: "checkbox",
        value: tag.id,
        emoji: tag.emoji_name,
        label: tag.name
      },
      {},
      {}
    )}`;
  })}


            ${`
            <button type="${"submit"}" class="${"svelte-4sc5k9"}">Apply filters</button>`}</form></div>
</div>`;
});
const DCWidget_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "iframe.svelte-dqngbn{display:none}@media(min-width: 60rem){iframe.svelte-dqngbn{display:block}}",
  map: null
};
const DCWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<iframe title="${"FDND Discord Widget"}" src="${"https://discord.com/widget?id=1017099203882782750&theme=dark"}" width="${"100%"}" height="${"500"}" allowtransparency="${"true"}" frameborder="${"0"}" sandbox="${"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"}" tabindex="${"-1"}" class="${"svelte-dqngbn"}"></iframe>`;
});
const AdditionalInformation_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-13lsp38{padding:4.5rem 0 0 2rem}@media(min-width: 75rem){div.svelte-13lsp38{padding:4.65rem 0}}",
  map: null
};
const AdditionalInformation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tags } = $$props;
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css$1);
  return `<div class="${"svelte-13lsp38"}">
	${validate_component(Filter, "Filter").$$render($$result, { tags, title: "Filters" }, {}, {})}

	
	${validate_component(DCWidget, "DCWidget").$$render($$result, {}, {}, {})}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@media(min-width: 60rem){section.svelte-19q0sz5{padding:0 2rem;display:grid;grid-template-columns:2.5fr 1fr;grid-template-rows:auto 1fr;grid-template-areas:"GeneralInfo Questions AdditionalInfo"\n				"GeneralInfo Questions AdditionalInfo"}}@media(min-width: 75rem){section.svelte-19q0sz5{padding:0 5rem;grid-template-columns:0.6fr 1fr 0.6fr;grid-gap:2rem}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let threads = get_store_value(filteredThreads).length ? get_store_value(filteredThreads) : data.threads.threads;
  let members = data.members;
  let tags = data.tags.available_tags;
  filteredThreads.set(threads);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
${validate_component(IntroBar, "IntroBar").$$render($$result, {}, {}, {})}

<section class="${"svelte-19q0sz5"}">
    ${validate_component(GeneralInformation, "GeneralInformation").$$render(
    $$result,
    {
      introText: "De plek waar jij al jouw code vragen kan: stellen, terugvinden en anderen\n		kan helpen.",
      threads,
      members
    },
    {},
    {}
  )}

    
    ${validate_component(Questions, "Questions").$$render(
    $$result,
    {
      id: "content",
      threads,
      members,
      tags,
      title: "Alle vragen"
    },
    {},
    {}
  )}

    
    ${validate_component(AdditionalInformation, "AdditionalInformation").$$render($$result, { tags }, {}, {})}
</section>`;
});
export {
  Page as default
};
