---
tags: [Topologia]
aliases: []
icon: lucide-scroll-text
---

> [!teorema]
> Sia $A$ uno [[Topologia|spazio topologico]] e $X=\prod X_{\alpha}$ munito di [[Topologia Prodotto|topologia prodotto]]. Allora $f:A\to X$ tale che $a\longmapsto(f_{1}(a),\dots,f_\alpha(a),\dots)_{\alpha\in I}$ è [[Mappa Continua|continua]] se e solo se $f_{\alpha}:A\to X_{\alpha}$ è continua $\forall \alpha\in I$

> [!dim]
> Osservo che $f_{\alpha}=\pi_{\alpha}\circ f$ dove $\pi_{\alpha}$ è la [[Proiezioni Canoniche|proiezione]] rispetto  $X_{\alpha}$, che è continua.
> Se $f$ è continua, allora $f_{\alpha}$ è continua
> Se tutte le $f_{\alpha}$ sono continue, allora $\forall \alpha\in I,\forall U_{\alpha}\in X_{\alpha}$:
> $f_{\alpha}^{-1}(U_{\alpha})=(\pi_{\alpha}\circ f)^{-1}(U_{\alpha})=f^{-1}\circ\pi_{\alpha}^{-1}(U_{\alpha})=f^{-1}(\underbrace{ \pi ^{-1}_{\alpha}(U_{\alpha}) }_{ \text{aperto} })$
> Poiché $\pi_{\alpha}$ e $f$ sono continue, allora  $f_{\alpha}^{-1}(U_{\alpha})$ è aperto quindi $f_{\alpha}$ è continua. 