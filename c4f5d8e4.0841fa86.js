(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{136:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(1),s=t(159),o=t.n(s);function i(e){var a=e.category,t=e.title,n=e.subtitle,r=e.offset;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--"+(12-r)+" col--offset-"+r},l.a.createElement("div",{className:o.a.headline},a&&l.a.createElement("span",{className:o.a.category},a),t&&l.a.createElement("h2",{className:o.a.title},t),n&&l.a.createElement("h3",{className:o.a.subtitle},n))))}i.propTypes={category:r.PropTypes.string,title:r.PropTypes.string,subtitle:r.PropTypes.string,offset:r.PropTypes.number},i.defaultProps={offset:0},a.a=i},156:function(e,a,t){e.exports={heroBanner:"heroBanner_2Wl1",buttons:"buttons_2sHG",features:"features_3SLh",featureImage:"featureImage_28zy",main:"main_1fCo"}},158:function(e,a,t){"use strict";t(0),t(137),t(136),t(160)},159:function(e,a,t){e.exports={headline:"headline_280O",category:"category_3_Ue",title:"title_mstS",subtitle:"subtitle_29cp"}},160:function(e,a,t){e.exports={table:"table_1jSi",label:"label_14YB",result:"result_343J",resultH:"resultH_zs17",resultX:"resultX_3C1t"}},161:function(e,a,t){e.exports={code:"code_ddYG"}},164:function(e,a,t){},165:function(e,a,t){"use strict";var n=t(3),l=t(0),r=t.n(l),s=t(103),o=t(137),i=t(167),c=t(166),m=t.n(c),d=[{icon:r.a.createElement(i.a,{size:24}),title:r.a.createElement(r.a.Fragment,null,"End-to-end analysis"),description:r.a.createElement(r.a.Fragment,null,"Dimensionality reduction, dataset integration, differential expression, automated annotation. scvi-tools contains models that perform a wide variety of tasks across many omics. Learn more about each model in the overview.")},{icon:r.a.createElement(o.b,{size:24}),title:r.a.createElement(r.a.Fragment,null,"Easy-to-use implementations"),description:r.a.createElement(r.a.Fragment,null,"Each model (e.g., scVI, scANVI, Stereoscope, totalVI) follows the same user interface that couples nicely with Scanpy, Seurat, or Bioconductor workflows. No more searching through source code.")},{icon:r.a.createElement(o.d,{size:24}),title:r.a.createElement(r.a.Fragment,null,"Rapidly develop new models "),description:r.a.createElement(r.a.Fragment,null,"Building novel probabilistic models from scvi-tools is made easy with its object-oriented design and base components powered by PyTorch, PyTorch lightning, Pyro, and AnnData. No need to write a dataloader or trainer ever again.")},{icon:r.a.createElement(i.b,{size:24}),title:r.a.createElement(r.a.Fragment,null,"Stochastic, GPU-accelerated inference"),description:r.a.createElement(r.a.Fragment,null,"scvi-tools models are trained efficiently through minibatching and can naturally be used with a GPU. These models are prepared to scale with growing dataset sizes.")}];function u(e){var a=e.icon,t=e.title,n=e.description;return r.a.createElement("div",{className:Object(s.a)("col col--6",m.a.feature)},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:m.a.header},a&&r.a.createElement("div",{className:m.a.icon},a),r.a.createElement("h2",{className:m.a.title},t)),r.a.createElement("p",null,n)))}a.a=function(){return r.a.createElement(r.a.Fragment,null,d&&d.length&&r.a.createElement("section",{id:"features",className:m.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--11 col--offset-1"},r.a.createElement("div",{className:"row"},d.map((function(e,a){return r.a.createElement(u,Object(n.a)({key:a},e))}))))))))}},166:function(e,a,t){e.exports={features:"features_m4Wt",feature:"feature_16H5",header:"header_3I73",icon:"icon_1ZY4",title:"title_3Okf"}},168:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(103),t(130)),s=t.n(r),o=(t(105),t(107)),i=t(111),c=t(23),m=t(169),d=t.n(m);a.a=function(){var e=Object(c.default)().siteConfig,a=void 0===e?{}:e;return l.a.createElement("header",{className:s()("hero",d.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:s()("col col--6 col--offset-1")},l.a.createElement("h1",{className:"hero__title"},a.tagline),l.a.createElement(i.a,{className:"language-sh"},"pip install scvi-tools")),l.a.createElement("div",{className:s()("col col--4")},l.a.createElement("img",{src:Object(o.a)("img/graphical_model.svg"),alt:"Logo",className:d.a.heroImg})))))}},169:function(e,a,t){e.exports={heroImg:"heroImg_1kV2",heroBanner:"heroBanner_3zcx"}},170:function(e,a,t){"use strict";var n=t(3),l=t(0),r=t.n(l),s=t(108),o=t(23),i=t(112),c=t(161),m=t.n(c);var d=function(e){var a=Object(o.default)().siteConfig.themeConfig.prism,t=void 0===a?{}:a,c=Object(l.useState)(!1),d=c[0],u=c[1];Object(l.useEffect)((function(){u(!0)}),[]);var p=Object(i.a)().isDarkTheme,f=t.theme,g=t.darkTheme||f,v=p?g:f,b=e.language,h=void 0===b?"python":b,E=e.code;return r.a.createElement(s.a,Object(n.a)({},s.b,{code:E,language:h,key:d,theme:v}),(function(e){var a=e.className,t=e.style,n=e.tokens,l=e.getLineProps,s=e.getTokenProps;return r.a.createElement("pre",{className:a+" "+m.a.code,style:t},n.map((function(e,a){return r.a.createElement("div",l({line:e,key:a}),e.map((function(e,a){return r.a.createElement("span",s({token:e,key:a}))})))})))}))},u=t(162),p=t(163),f=t(136),g=[{label:"scVI",code:'# scVI is for end-to-end analysis of scRNA-seq data\nimport anndata\nimport scvi\n\n# read data and prepare for scvi-tools\nadata = anndata.read("my_data.h5ad")\nscvi.data.setup_anndata(adata, batch_key="batch")\nmodel = scvi.model.SCVI(adata)\nmodel.train()\n\n# get integrated low-dimensional representation\nadata.obsm["X_scvi"] = model.get_latent_representation()\n\n# normalized expression\nadata.layers["scvi_norm"] = model.get_normalized_expression()\n\n# differential expression\nresults = model.differential_expression(groupby="cell types", group1="CD4", group2="CD8")'},{label:"scANVI",code:'# scANVI augments scVI to transfer cell type labels\nimport anndata\nimport scvi\n\n# read data and prepare for scvi-tools\n# adata contains partially observed cell type labels in adata.obs["labels"]\n# Unknown cells have the label "Unknown"\nadata = anndata.read("my_data.h5ad")\nscvi.data.setup_anndata(adata, batch_key="batch", labels_key="labels")\nmodel = scvi.model.SCANVI(adata, "Unknown")\nmodel.train()\n\n# cell type predictions\nadata.obs["predictions"] = model.predict()\n\n# get integrated low-dimensional representation\nadata.obsm["X_scanvi"] = model.get_latent_representation()\n\n# normalized expression\nadata.layers["scanvi_norm"] = model.get_normalized_expression()\n\n# differential expression\nresults = model.differential_expression(groupby="cell types", group1="CD4", group2="CD8")'},{label:"totalVI",code:'# totalVI is for end-to-end analysis of scRNA-seq data\nimport anndata\nimport scvi\n\n# read data and prepare for scvi-tools\nadata = anndata.read("my_data.h5ad")\nscvi.data.setup_anndata(adata, protein_expression_obsm_key="proteins")\nmodel = scvi.model.TOTALVI(adata)\nmodel.train()\n\n# get integrated low-dimensional representation\nadata.obsm["X_scvi"] = model.get_latent_representation()\n\n# normalized expression\nadata.layers["totalvi_norm"] = model.get_normalized_expression()\n\n# differential expression\nresults = model.differential_expression(groupby="cell types", group1="CD4", group2="CD8")'}],v=t(164),b=t.n(v);a.a=function(){return r.a.createElement(r.a.Fragment,null,g&&g.length&&r.a.createElement("section",{id:"examples",className:b.a.examples},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--10 col--offset-1"},r.a.createElement(f.a,{category:"Examples",title:"Overview of scvi-tools models"}),r.a.createElement("p",null,"Explore the broad functionality of each model."),r.a.createElement(u.a,{defaultValue:g[0].label,values:g.map((function(e,a){return{label:e.label,value:e.label}})),className:b.a.tabs},g.map((function(e,a){return r.a.createElement(p.a,{key:a,value:e.label},r.a.createElement(d,Object(n.a)({key:a},e)))}))))))))}},94:function(e,a,t){"use strict";t.r(a),function(e){var n=t(0),l=t.n(n),r=t(124),s=t(113),o=t(23),i=t(156),c=t.n(i),m=t(22),d=(t(158),t(170)),u=t(165),p=t(168);(void 0!==e?e:window).Prism=m.a,t(157),a.default=function(){var e=Object(o.default)().siteConfig,a=(void 0===e?{}:e).tagline;return l.a.createElement(r.b.Provider,{value:{style:{verticalAlign:"middle"}}},l.a.createElement(s.a,{description:a},l.a.createElement(p.a,null),l.a.createElement("main",{className:c.a.main},l.a.createElement(u.a,null),l.a.createElement(d.a,null))))}}.call(this,t(25))}}]);