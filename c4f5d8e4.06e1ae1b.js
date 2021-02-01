(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{134:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(1),c=t(157),s=t.n(c);function i(e){var a=e.category,t=e.title,n=e.subtitle,r=e.offset;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--"+(12-r)+" col--offset-"+r},l.a.createElement("div",{className:s.a.headline},a&&l.a.createElement("span",{className:s.a.category},a),t&&l.a.createElement("h2",{className:s.a.title},t),n&&l.a.createElement("h3",{className:s.a.subtitle},n))))}i.propTypes={category:r.PropTypes.string,title:r.PropTypes.string,subtitle:r.PropTypes.string,offset:r.PropTypes.number},i.defaultProps={offset:0},a.a=i},154:function(e,a,t){e.exports={heroBanner:"heroBanner_2Wl1",buttons:"buttons_2sHG",features:"features_3SLh",featureImage:"featureImage_28zy",main:"main_1fCo"}},156:function(e,a,t){"use strict";t(0),t(135),t(134),t(158)},157:function(e,a,t){e.exports={headline:"headline_280O",category:"category_3_Ue",title:"title_mstS",subtitle:"subtitle_29cp"}},158:function(e,a,t){e.exports={table:"table_1jSi",label:"label_14YB",result:"result_343J",resultH:"resultH_zs17",resultX:"resultX_3C1t"}},159:function(e,a,t){e.exports={code:"code_ddYG"}},162:function(e,a,t){},163:function(e,a,t){"use strict";var n=t(3),l=t(0),r=t.n(l),c=t(101),s=t(135),i=t(165),o=t(164),m=t.n(o),d=[{icon:r.a.createElement(i.a,{size:24}),title:r.a.createElement(r.a.Fragment,null,"End-to-end analysis"),description:r.a.createElement(r.a.Fragment,null,"Dimensionality reduction, dataset integration, differential expression, automated annotation. scvi-tools contains models that perform a wide variety of tasks across many omics. Learn more about each model in the overview.")},{icon:r.a.createElement(s.b,{size:24}),title:r.a.createElement(r.a.Fragment,null,"Easy-to-use implementations"),description:r.a.createElement(r.a.Fragment,null,"Each model (e.g., scVI, scANVI, CellAssign, totalVI) follows the same user interface that couples nicely with Scanpy, Seurat, or Bioconductor. No more searching through source code.")},{icon:r.a.createElement(s.d,{size:24}),title:r.a.createElement(r.a.Fragment,null,"Rapidly develop new models "),description:r.a.createElement(r.a.Fragment,null,"Building novel probabilistic models from scvi-tools is made easy with its object-oriented design and base components powered by PyTorch, PyTorch lightning, Pyro, and AnnData. No need to write a dataloader or trainer ever again.")},{icon:r.a.createElement(i.b,{size:24}),title:r.a.createElement(r.a.Fragment,null,"Stochastic, GPU-accelerated inference"),description:r.a.createElement(r.a.Fragment,null,"scvi-tools models are trained efficiently through minibatching and can naturally be used with a GPU. These models are prepared to scale with growing dataset sizes.")}];function u(e){var a=e.icon,t=e.title,n=e.description;return r.a.createElement("div",{className:Object(c.a)("col col--6",m.a.feature)},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:m.a.header},a&&r.a.createElement("div",{className:m.a.icon},a),r.a.createElement("h2",{className:m.a.title},t)),r.a.createElement("p",null,n)))}a.a=function(){return r.a.createElement(r.a.Fragment,null,d&&d.length&&r.a.createElement("section",{id:"features",className:m.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--11 col--offset-1"},r.a.createElement("div",{className:"row"},d.map((function(e,a){return r.a.createElement(u,Object(n.a)({key:a},e))}))))))))}},164:function(e,a,t){e.exports={features:"features_m4Wt",feature:"feature_16H5",header:"header_3I73",icon:"icon_1ZY4",title:"title_3Okf"}},166:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(101),t(128)),c=t.n(r),s=(t(103),t(105)),i=t(109),o=t(23),m=t(167),d=t.n(m);a.a=function(){var e=Object(o.default)().siteConfig,a=void 0===e?{}:e;return l.a.createElement("header",{className:c()("hero",d.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:c()("col col--6 col--offset-1")},l.a.createElement("h1",{className:"hero__title"},a.tagline),l.a.createElement(i.a,{className:"language-sh"},"pip install scvi-tools")),l.a.createElement("div",{className:c()("col col--4")},l.a.createElement("img",{src:Object(s.a)("img/graphical_model.svg"),alt:"Logo",className:d.a.heroImg})))))}},167:function(e,a,t){e.exports={heroImg:"heroImg_1kV2",heroBanner:"heroBanner_3zcx"}},168:function(e,a,t){"use strict";var n=t(3),l=t(0),r=t.n(l),c=t(106),s=t(23),i=t(110),o=t(159),m=t.n(o);var d=function(e){var a=Object(s.default)().siteConfig.themeConfig.prism,t=void 0===a?{}:a,o=Object(l.useState)(!1),d=o[0],u=o[1];Object(l.useEffect)((function(){u(!0)}),[]);var f=Object(i.a)().isDarkTheme,p=t.theme,g=t.darkTheme||p,v=f?g:p,E=e.language,h=void 0===E?"python":E,b=e.code;return r.a.createElement(c.a,Object(n.a)({},c.b,{code:b,language:h,key:d,theme:v}),(function(e){var a=e.className,t=e.style,n=e.tokens,l=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:a+" "+m.a.code,style:t},n.map((function(e,a){return r.a.createElement("div",l({line:e,key:a}),e.map((function(e,a){return r.a.createElement("span",c({token:e,key:a}))})))})))}))},u=t(160),f=t(161),p=t(134),g=[{label:"Train scVI",code:'import anndata\nimport scvi\n\nadata = anndata.read("my_data.h5ad")\nscvi.data.setup_anndata(adata, batch_key="batch")\nmodel = scvi.model.SCVI(adata)\nmodel.train()\nadata.obsm["X_scvi"] = model.get_latent_representation()'},{label:"Train totalVI",code:'import scvi\nscvi.data.setup_anndata(adata, protein_expression_obsm_key="proteins")\nmodel = scvi.model.TOTALVI(adata)\nmodel.train()\nadata.obsm["X_totalvi"] = model.get_latent_representation()'}],v=t(162),E=t.n(v);a.a=function(){return r.a.createElement(r.a.Fragment,null,g&&g.length&&r.a.createElement("section",{id:"examples",className:E.a.examples},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--10 col--offset-1"},r.a.createElement(p.a,{category:"Examples",title:"Quick snippets to get started with scvi-tools"}),r.a.createElement(u.a,{defaultValue:g[0].label,values:g.map((function(e,a){return{label:e.label,value:e.label}})),className:E.a.tabs},g.map((function(e,a){return r.a.createElement(f.a,{key:a,value:e.label},r.a.createElement(d,Object(n.a)({key:a},e)))}))))))))}},91:function(e,a,t){"use strict";t.r(a),function(e){var n=t(0),l=t.n(n),r=t(122),c=t(111),s=t(23),i=t(154),o=t.n(i),m=t(22),d=(t(156),t(168)),u=t(163),f=t(166);(void 0!==e?e:window).Prism=m.a,t(155),a.default=function(){var e=Object(s.default)().siteConfig,a=(void 0===e?{}:e).tagline;return l.a.createElement(r.b.Provider,{value:{style:{verticalAlign:"middle"}}},l.a.createElement(c.a,{description:a},l.a.createElement(f.a,null),l.a.createElement("main",{className:o.a.main},l.a.createElement(u.a,null),l.a.createElement(d.a,null))))}}.call(this,t(25))}}]);