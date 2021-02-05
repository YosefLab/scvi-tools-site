(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{91:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return d}));var n=o(3),i=o(7),a=(o(0),o(106)),r=(o(107),{slug:"zero-inflation",title:"Should we zero-inflate scVI?",date:new Date("2019-06-25T00:00:00.000Z"),author:"Oscar Clivio, Pierre Boyeau, Romain Lopez, Jeffrey Regier, Nir Yosef",tags:["autozi","zero-inflation"]}),s={permalink:"/blog/zero-inflation",editUrl:"https://github.com/YosefLab/scvi-tools-site/blog/blog/2019-6-27-ZeroInflation.md",source:"@site/blog/2019-6-27-ZeroInflation.md",description:'Droplet- based single-cell RNA sequencing (scRNA-seq) datasets typically contain at least 90% zero entries. How can we best model these zeros? Recent work focused on modeling zeros with a mixture of count distributions. The first component is meant to reflect whether such an entry can be explained solely by the limited amount of sampling (on average ~5% or less of the molecules in the cell). The second component is generally used to reflect "surprising" zeros caused by measurement bias, transient transcriptional noise (e.g., "bursty" gene with a short mRNA half life), or true longer-term heterogeneity that can not be captured by a similified (low dimensional) representation of the data. Among others, zero-inflated distributions (i.e., zero-inflated negative binomial) have been widely adopted to model gene expression levels (1, 2).',date:"2019-06-25T00:00:00.000Z",tags:[{label:"autozi",permalink:"/blog/tags/autozi"},{label:"zero-inflation",permalink:"/blog/tags/zero-inflation"}],title:"Should we zero-inflate scVI?",readingTime:21.945,truncated:!0,prevItem:{title:"Hyperparameter search for scVI",permalink:"/blog/autotune"}},l=[],c={toc:l};function d(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'Droplet- based single-cell RNA sequencing (scRNA-seq) datasets typically contain at least 90% zero entries. How can we best model these zeros? Recent work focused on modeling zeros with a mixture of count distributions. The first component is meant to reflect whether such an entry can be explained solely by the limited amount of sampling (on average ~5% or less of the molecules in the cell). The second component is generally used to reflect "surprising" zeros caused by measurement bias, transient transcriptional noise (e.g., "bursty" gene with a short mRNA half life), or true longer-term heterogeneity that can not be captured by a similified (low dimensional) representation of the data. Among others, zero-inflated distributions (i.e., zero-inflated negative binomial) have been widely adopted to model gene expression levels (1, 2).'))}d.isMDXComponent=!0}}]);