import { d as copy_payload, f as assign_payload, c as pop, h as ensure_array_like, e as escape_html, i as css_props, j as bind_props, p as push, k as stringify } from './index-QVn_hrF6.js';

const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Hamburger($$payload, $$props) {
  push();
  let {
    open = false,
    type = "spin",
    title = "Hamburger menu",
    ariaControls,
    ariaLabel = title,
    onclick
  } = $$props;
  $$payload.out += `<button${attr("title", title)}${attr("aria-label", ariaLabel)}${attr("aria-controls", ariaControls)}${attr("aria-expanded", open)}${attr("class", `hamburger hamburger--${stringify(type)} svelte-jas1sv ${stringify([open ? "is-active" : ""].filter(Boolean).join(" "))}`)}><span class="hamburger-box svelte-jas1sv"><span class="hamburger-inner svelte-jas1sv"></span></span></button>`;
  bind_props($$props, { open });
  pop();
}
function Menu($$payload, $$props) {
  let links = [
    "/#intro",
    "/#team",
    "/#about",
    "/#services"
  ];
  let open = $$props["open"];
  if (open) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(["HOME", "OUR TEAM", "ABOUT US", "SERVICES"]);
    $$payload.out += `<div class="svelte-pkr80h"><!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let link = each_array[i];
      $$payload.out += `<a${attr("href", links[i])} style="text-decoration:none" class="svelte-pkr80h"><p class="svelte-pkr80h">${escape_html(link)}</p></a>`;
    }
    $$payload.out += `<!--]--></div> <div class="flex items-center svelte-pkr80h"><a href="#contact" class="mx-1 svelte-pkr80h"><button class="btn btn-outline hover:bg-[#949ca6] rounded-full lg:w-60 w-52 h-14 font-bold text-xl text-gray-900 pl-3">Contact Us</button></a></div> <hr>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { open });
}
function _page($$payload, $$props) {
  push();
  const team = [
    {
      name: "Rotem Avisar",
      image: "/rotem.png",
      bio: "Web Developer passionate about crafting unique online experiences. Ex-Medical Techonology Software Engineer. Fulltime business owner and startup founder.",
      linkedInUrl: "https://www.linkedin.com/in/rotemavisar/"
    },
    {
      name: "Dylan Wiler",
      image: "/dylan.png",
      bio: "Sales Executive with a flair for integrating SEO, web design, and branding strategies. Adept in navigating the digital landscape, now a dedicated full-time business owner and founder, driving sales through innovative approaches.",
      linkedInUrl: "https://www.linkedin.com/in/dylan-wiler-87a676237/"
    }
  ];
  const services = [
    {
      service: "Standard Package",
      features: "A simple, elegant website landing page.",
      audience: "Ideal for individuals or small businesses starting out.",
      priceRange: "Budget-friendly",
      url: "#"
    },
    {
      service: "Premium Package",
      features: "Includes a landing page, SEO optimization, and website analytics.",
      audience: "Suited for growing businesses seeking enhanced online visibility.",
      priceRange: "Competitive.",
      url: "#"
    },
    {
      service: "Executive Package",
      features: "Offers a landing page, SEO, analytics, targeted advertising, a total rebrand including a new logo, professional photography, and drone footage.",
      audience: "Perfect for established businesses or corporations looking for a comprehensive online overhaul.",
      priceRange: "Premium.",
      url: "#"
    }
  ];
  const links = [
    { label: "HOME", href: "/#intro" },
    { label: "OUR TEAM", href: "/#team" },
    { label: "ABOUT US", href: "/#about" },
    { label: "SERVICES", href: "/#services" }
  ];
  let open = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(links);
    const each_array_1 = ensure_array_like(team);
    const each_array_2 = ensure_array_like(services);
    $$payload2.out += `<div id="intro" class="h-screen lg:h-[1200px] w-screen flex flex-col items-center bg-[url('/pinnacle.png')] bg-cover bg-top"><nav class="top-0 left-0 flex w-full justify-between items-center bg-opacity-0 bg-cover px-3 lg:px-36 mt-3"><div class="flex items-center justify-center"><img src="/logo.png" class="lg:w-52 lg:mr-5 lg:mb-5 w-24"></div> <div class="items-center hidden lg:block"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { label, href } = each_array[$$index];
      $$payload2.out += `<a class="text-2xl font-bold text-white px-3"${attr("href", href)}>${escape_html(label)}</a>`;
    }
    $$payload2.out += `<!--]--></div> <div class="items-center hidden lg:block"><a href="#contact" class="mx-1"><button class="btn btn-outline hover:bg-[#949ca6] rounded-full lg:w-60 w-52 h-14 lg:text-lg text-md text-white pl-3">Contact Us</button></a></div> <div class="flex justify-center items-center lg:hidden">`;
    css_props($$payload2, true, { "--color": "white" }, () => {
      Hamburger($$payload2, {
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        }
      });
    });
    $$payload2.out += `</div></nav> <div class="lg:hidden mt-[3.5rem]">`;
    Menu($$payload2, {
      get open() {
        return open;
      },
      set open($$value) {
        open = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> `;
    if (open == true) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="flex items-center justify-center lg:mt-[40rem] mt-[2rem]"><div class="flex flex-col items-center justify-center"><img src="/logo.png" class="lg:w-96 w-52"> <h2 class="lg:text-2xl text-xl font-bold text-center text-white">BEACAUSE YOUR BUSINESS IS A REFLECTION OF YOU</h2></div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div class="flex items-center justify-center lg:mt-[40rem] mt-[23rem]"><div class="flex flex-col items-center justify-center"><img src="/logo.png" class="lg:w-96 w-52"> <h2 class="lg:text-2xl text-xl font-bold text-center text-white">BEACAUSE YOUR BUSINESS IS A REFLECTION OF YOU</h2></div></div>`;
    }
    $$payload2.out += `<!--]--></div> <div id="team" class="h-auto w-screen flex items-center justify-center flex-col bg-[#a2cfe2]"><h1 class="lg:text-7xl text-3xl mt-10 font-black text-white">OUR TEAM</h1> <div class="max-w-5xl lg:mx-auto mx-10 py-8 grid grid-cols-1 md:grid-cols-2 gap-3"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let member = each_array_1[$$index_1];
      $$payload2.out += `<div class="card glass"><figure><img${attr("src", member.image)} alt="Team Image" class="w-full"></figure> <div class="card-body text-[#414b59]"><h2 class="card-title">${escape_html(member.name)}</h2> <p>${escape_html(member.bio)}</p> <a${attr("href", member.linkedInUrl)} target="_blank" class="link"><img src="/linkedin.png" class="w-10 h-10"></a></div></div>`;
    }
    $$payload2.out += `<!--]--></div></div> <div id="about" class="h-auto w-screen flex flex-col items-center justify-start bg-[url('/mirrors.png')] bg-cover bg-top"><h1 class="lg:text-7xl text-3xl my-10 font-black text-white">ABOUT US</h1> <div class="py-8 mb-5 lg:mb-5 lg:py-16 px-4 lg:mx-auto mx-5 max-w-screen-md card glass"><p class="mb-8 lg:mb-16 font-light text-center text-gray-900 sm:text-xl">Mirror Web Design is a web design and development company servicing the East and West coasts of the United States. We specialize in creating custom digital expriences for businesses of any size. Our goal is to help you create a website that reflects your business and your brand. We are a team of passionate and creative individuals who are dedicated to helping you achieve your goals. We believe that every business deserves a website that is unique and reflects their brand. We work with you to create a website that is tailored to your budget and needs. Our team is committed to providing you with the best possible service and we will work with you every step of the way to ensure that your website is a success.</p> <p class="font-light text-center text-gray-900 sm:text-xl">We offer a variety of services including web design, web development, website traffic analytics, graphic design, branding content, social media management and SEO. Our team is made up of talented designers and developers who are passionate about what they do. We have worked with many clients over the years and have helped them achieve their goals. If you are looking for a company that will work with you every step of the way, then look no further than Mirror Web Design!</p></div></div> <div id="services" class="lg:h-auto h-auto w-screen flex items-center justify-center flex-col bg-[#a2cfe2]"><h1 class="lg:text-7xl text-3xl mt-10 font-black text-white">SERVICES</h1> <div class="max-w-7xl lg:mx-auto mx-10 py-8 grid grid-cols-1 md:grid-cols-3 gap-3"><!--[-->`;
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let offering = each_array_2[$$index_2];
      $$payload2.out += `<div class="card glass"><div class="card-body text-[#414b59]"><h1 class="card-title text-3xl">${escape_html(offering.service)}</h1> <h2 class="card-title">Features:</h2> <p>${escape_html(offering.features)}</p> <h2 class="card-title">Audience:</h2> <p>${escape_html(offering.audience)}</p> <h2 class="card-title">Price Range:</h2> <p>${escape_html(offering.priceRange)}</p></div></div>`;
    }
    $$payload2.out += `<!--]--></div></div> <div id="contact" class="h-auto w-screen flex items-center justify-center flex-col bg-[url('/contact.png')] bg-cover bg-top"><h1 class="lg:text-7xl text-3xl my-10 font-black text-white">CONTACT US</h1> <div class="py-8 mb-5 lg:mb-5 lg:py-16 px-4 lg:mx-auto mx-5 max-w-screen-md card glass"><p class="mb-8 lg:mb-16 font-light text-center text-[#414b59] sm:text-xl">Have a question for our team? Feel free to read out and we will get back to you as soon as possible!</p> <form action="https://formsubmit.co/info@mirrorwebdesign.com" class="space-y-8"><div><label for="email" class="block mb-2 text-sm font-bold text-[#414b59]">Your email</label> <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@email.com" required></div> <div><label for="subject" class="block mb-2 text-sm font-medium text-[#414b59]">Subject</label> <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required></div> <div class="sm:col-span-2"><label for="message" class="block mb-2 text-sm font-medium text-[#414b59]">Your message</label> <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea></div> <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-white sm:w-fit hover:bg-[#a2cfe2] focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button></form></div></div> <footer class="flex items-center justify-center py-4 text-[#414b59] bg-[#a2cfe2]"><p class="text-micro">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Mirror Web Design</p></footer>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BsHk4Red.js.map
