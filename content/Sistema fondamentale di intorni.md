---
tags:
  - Topologia
  - Definizione
  - Intorni
aliases:
  - sistema fondamentale di intorni
  - SFI
icon: lucide-book-open
---

> [!def] Sistema fondamentale di intorni
> Sia $(X,\tau)$ uno [[Topologia|spazio topologico]]. Una famiglia di insiemi $\mathcal{U}(x)\subseteq \tau$ si dice **sistema fondamentale di [[Intorni|intorni]]** se $\forall A\in \tau\mid x\in A: \exists V\in \mathcal{U}(x)\mid x\in V\subseteq A$
^def-sist-fond-intorni

> [!ex] Esempi di Sistemi fondamentali
> In $\mathbb{R}$, un sistema fondamentale di intorni è
> - $\mathcal{U}(x)=\left\{ (x-\varepsilon,x+\varepsilon)\mid \varepsilon>0 \right\}$
> - $\mathcal{U}(x)=\left\{\left( x-\frac{1}{n},x+\frac{1}{n}\right)\mid \varepsilon>0 \right\}$
^ex-sist-fond-intorni

> [!Oss] Le basi definiscono sistemi fondamentali di intorni
> Sia $(X,\tau)$ [[Topologia|spazio topologico]] e $\beta$ base per $\tau$. Allora $\forall x\in X:\beta_{x}=\{ B\in \beta \mid x\in B \}$ è un sistema fondamentale d'intorni.
^oss-sist-fond-intorni-e-basi

> [!dim]
> Sia $x\in X$ e $\beta_{x}=\{ B\in \beta \mid x\in B \}$. Sia $A\in \tau$ che contiene $x$. Per definizione di base $\exists B\in \beta \mid x\in B\subseteq A$. Quindi $B\in \beta_{x}$.
^dim-oss-sist-fond-intorni-e-basi