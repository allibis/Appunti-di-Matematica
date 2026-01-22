---
icon: lucide-book-open
tags:
  - Topologia
  - Topologia-Prodotto
  - Definizione
aliases:
  - topologia prodotto
---

> [!def] Topologia Prodotto
> Siano $(X,\tau), (Y,\sigma)$ due [[Teoria di Topologia Generale/Topologia|spazi topologici]]. La **topologia prodotto** del prodotto cartesiano $X\times Y$ è generata dalla [[Teoria di Topologia Generale/Base di una Topologia|base]] $\beta=\{ U \times W\mid U\in \tau, W\in \sigma \}$.
> Più in generale, dati $(X_{1},\tau_{1}),\dots,(X_{n},\tau_{n})$, la topologia prodotto dell'insieme $\displaystyle\prod_{i=1}^nX_{i}=X_{1}\times\dots \times X_{n}$ è generata dalla base $\displaystyle\left\{\prod_{i=1}^nU_{i} \middle\vert U_{i}\in \tau_{i}, \forall i=1\dots n \right\}$ 
^def-top-prod

> [!def] Suriezione canonica della Topologia Prodotto
> Considero la funzione $\pi_{i}:\displaystyle\prod_{i=1}^nX_{i}\to X_{i}$ tale che $(x_{1},\dots,x_{n})\longmapsto x_{i}$
> Risulta che  posto $S_{i}:=\left\{ \pi ^{-1}_{i}(U_{i}) \middle \vert U_{i}\in \tau_{i}  \right\}$, $\displaystyle S=\bigcup_{i=1}^n S_{i}$ genera (<u>ma non è base di</u>) $\left(X_{1}\times\dots \times X_{n},\tau_{1}\times\dots \times \tau_{n}\right)$.
^def-suriezione-top-prod

> [!es] Esempio
> Considero $(\mathbb{R},\mathcal{E})$ [[Teoria di Topologia Generale/Topologia Euclidea|topologia euclidea]] e $(\mathbb{R},\mathcal{P}(\mathbb{R}))$ [[Teoria di Topologia Generale/Topologia Discreta|topologia discreta]], generate dalle basi $\beta_{\mathcal{E}}=\{ \left(a,b\right) \vert a,b\in \mathbb{R}\}$ e $\beta_{p}=\{ \{ x \}\vert x\in \mathbb{R} \}$.
> Considero $\left( 0,1 \right)\in \mathcal{E}$, allora $\pi ^{-1}_{1}(\left( 0,1 \right))=\left( 0,1 \right)\times \mathbb{R}$.
> Se prendo l'aperto $\{0\}\in \mathcal{P}(\mathbb{R})$, allora $\pi ^{-1}_{2}(\{0\})=\mathbb{R}\times\{0\}$
> La topologia prodotto $\mathcal{E}\times \mathcal{P}(\mathbb{R})$ contiene rette e segmenti aperti orizzontali (ma non verticali). 
^es-suriezione-top-prod

> [!def] Topologia Prodotto su $\mathbb{R}^\mathbb{N}$
> Su $\mathbb{R}^\mathbb{N}$ la topologia prodotto è generata dalla base 
> $$\beta=\{U_{1}\times\dots \times U_{n}\times \mathbb{R}\times \mathbb{R}\times\dots \vert \, n\in \mathbb{N}\}$$
^def-top-prod-RN