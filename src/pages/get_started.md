# Get Started

`scvi-tools` (single-cell variational inference tools) is a package for probabilistic modeling of single-cell omics data, built on top of [PyTorch](https://pytorch.org/) and [AnnData](https://anndata.readthedocs.io/en/latest/). The package hosts implementations of several models that perform a wide range of single-cell data analysis tasks, as well as the building blocks to rapidly prototype new probabilistic models.

## Basic installation

`scvi-tools` can be installed with `pip` or `conda`:

```
pip install scvi-tools
```

```
conda install scvi-tools -c bioconda -c conda-forge
```

To leverage a GPU for inference, a version of [PyTorch](https://pytorch.org/get-started/locally/) that supports your GPU will need to be installed separately.


## Resources

- Tutorials, API reference, and advanced installation guides are available in the [docs](https://docs.scvi-tools.org/en/stable/).
-  For discussion of usage, checkout out our [forum](https://discourse.scvi-tools.org/).
-  For immediate public chat with the developers, come talk to us on [Gitter](https://gitter.im/scvi-tools/).
-  For a skeleton of implementation of a new model in scvi-tools, refer to our [template repository](https://github.com/YosefLab/scvi-tools-skeleton/)
-  To report bugs, make an issue on [GitHub](https://github.com/YosefLab/scvi-tools/issues).

## Single-cell omics data analysis

`scvi-tools` hosts implementations of many models, with a convenient interface to [scanpy](https://scanpy.readthedocs.io/en/stable/), [Seurat](https://satijalab.org/seurat/) and [Bioconductor](https://www.bioconductor.org/) (refer to our tutorials to learn about our R support):

### scRNA-seq
- [scVI](https://rdcu.be/bdHYQ) for analysis of single-cell RNA-seq data, as well as its improved [differential expression framework](https://www.biorxiv.org/content/biorxiv/early/2019/10/04/794289.full.pdf).
- [LDVAE](https://academic.oup.com/bioinformatics/article/36/11/3418/5807606) for an interpretable linear factor model version of scVI.
- [scANVI](https://www.embopress.org/doi/full/10.15252/msb.20209620) for cell annotation of scRNA-seq data using semi-labeled examples.
- [CellAssign](https://www.nature.com/articles/s41592-019-0529-1) for cell annotation of scRNA-seq data using marker genes.
- [SOLO](https://www.sciencedirect.com/science/article/pii/S2405471220301952) for detection of doublets.
- [scArches](https://www.biorxiv.org/content/10.1101/2020.07.16.205997v1) for transfer learning when learning cell embeddings in an online fashion (implemented for scVI, scANVI & totalVI)
### CITE-seq
- [totalVI](https://www.nature.com/articles/s41592-020-01050-x) for analysis of CITE-seq data.

### Spatial transcriptomics
- [Steroscope](https://www.nature.com/articles/s42003-020-01247-y) for deconvolution of spatial transcriptomics data.
- [gimVI](https://arxiv.org/pdf/1905.02269.pdf) for imputation of missing genes in spatial transcriptomics from scRNA-seq data.
- [DestVI](https://www.biorxiv.org/content/10.1101/2021.05.10.443517v1) for multi-resolution deconvolution of spatial transcriptomics data.

### scATAC-seq
- [peakVI](https://www.biorxiv.org/content/10.1101/2021.04.29.442020v1) for analysis of single-cell ATAC sequencing profiles

## Methods developer toolkit

`scvi-tools` is a high-level probabilistic programming package especially developped for single-cell omics data. We hope it will empower method developers and help them focus on building fruitful models. To achieve this, we host black-box primitives for loading data from [AnnData](https://anndata.readthedocs.io/en/latest/), black-box training procedures using [PyTorch Lightning](https://www.pytorchlightning.ai/), and optionally provides automatic inference recipes based on [Pyro](https://pyro.ai/). We currently support many optimization-based inference procedures including SVI, AEVB, MAP, MLE and EM. To learn more about the developer toolkit, please visit our [tutorials](https://docs.scvi-tools.org/en/latest/user_guide/index.html). We also provide an example [skeleton](https://github.com/YosefLab/scvi-tools-skeleton/) implementation of a basic scVI in PyTorch and Pyro as an independant package based off `scvi-tools`. If you wish to add an implementation of your algorithm in scvi-tools, please post a [GitHub issue](https://github.com/YosefLab/scvi-tools/issues) to reach out to us.

## Reference

If you use scvi-tools in your research, please consider citing

```
@article{Gayoso2021scvitools,
	author = {Gayoso, Adam and Lopez, Romain and Xing, Galen and Boyeau, Pierre and Wu, Katherine and Jayasuriya, Michael and Mehlman, Edouard and Langevin, Maxime and Liu, Yining and Samaran, Jules and Misrachi, Gabriel and Nazaret, Achille and Clivio, Oscar and Xu, Chenling and Ashuach, Tal and Lotfollahi, Mohammad and Svensson, Valentine and da Veiga Beltrame, Eduardo and Talavera-Lopez, Carlos and Pachter, Lior and Theis, Fabian J and Streets, Aaron and Jordan, Michael I and Regier, Jeffrey and Yosef, Nir},
	title = {scvi-tools: a library for deep probabilistic analysis of single-cell omics data},
	year = {2021},
	doi = {10.1101/2021.04.28.441833},
	publisher = {Cold Spring Harbor Laboratory},
	URL = {https://www.biorxiv.org/content/early/2021/04/29/2021.04.28.441833},
	eprint = {https://www.biorxiv.org/content/early/2021/04/29/2021.04.28.441833.full.pdf},
	journal = {bioRxiv}
}
```
