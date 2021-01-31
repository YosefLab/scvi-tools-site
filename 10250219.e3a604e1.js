(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var o=r(3),i=r(7),a=(r(0),r(103)),n=(r(104),{slug:"autotune",title:"Hyperparameter search for scVI",date:new Date("2019-07-05T00:00:00.000Z"),description:"A study of the effects of hyperparameter optimization on scVI models.",author:"Gabriel Misrachi, Jeffrey Regier, Romain Lopez, Nir Yosef"}),s={permalink:"/scvi-tools-site/blog/autotune",editUrl:"https://github.com/YosefLab/scvi-tools-site/blog/blog/2019-7-5-Hyperoptimization.md",source:"@site/blog/2019-7-5-Hyperoptimization.md",description:"A study of the effects of hyperparameter optimization on scVI models.",date:"2019-07-05T00:00:00.000Z",tags:[],title:"Hyperparameter search for scVI",readingTime:19.865,truncated:!0,nextItem:{title:"Should we zero-inflate scVI?",permalink:"/scvi-tools-site/blog/zero-inflation"}},c=[],p={toc:c};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"While stochastic gradient-based optimization is highly successful for setting weights and other differentiable parameters of a neural network, it is in general useless for setting hyperparameters -- non-differentiable parameters that control the structure of the network (e.g. the number of hidden layers, or the dropout rate) or settings of the optimizer itself (e.g., the learning rate schedule). Yet finding good settings for hyperparameters is essential for good performance for deep methods like ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.nature.com/articles/s41592-018-0229-2"}),"scVI"),". Furthermore, as pointed out by ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.worldscientific.com/doi/pdf/10.1142/9789813279827_0033?download=true&"}),"Hu and Greene (2019)")," selecting hyperparameters is nessary in order to compare different machine learning models, especially if those are substantially sensitive to hyperparameter variations."))}l.isMDXComponent=!0}}]);