---
tags: [Topologia, Teorema, Chiusi, Hausdorff, Compatti]
aliases: []
icon: lucide-scroll-text
---

> [!teorema]
> Ogni [[Teoria di Topologia Generale/Topologia di Sottospazio|sottospazio]] [[Teoria di Topologia Generale/Compatto|compatto]] di uno spazio di [[Teoria di Topologia Generale/Hausdorff|Hausdorff]] è [[Teoria di Topologia Generale/Chiuso|chiuso]].

> [!dim] Dimostrazione
> Provo che $X\setminus Y$ è aperto.
> Sia $x_{0}\in X\setminus Y$. $\forall y\in Y$ $\exists U_{y,x_{0}}\ni x_{0},\exists V_{y}\ni y$ intorni aperti e disgiunti, poiché $X$ è $T_{2}$. Risulta che $\{ V_{y} \}$ è un ricoprimento di $Y$, che è compatto, quindi esiste una sottocollezione $\{U_{y_{1}},\dots,U_{y_{k}}\}$ finita di aperti che ricoprono $Y$. 
> Poniamo $U=U_{x_{0},y_{1}}\cap\dots \cap U_{x_{0},y_{n}}$ e $V=V_{y_{1}}\cup \dots \cup V_{y_{k}}$.
> (PS, per $U$ uso le intersezioni perché l'intorno che cerco non deve mai intersecare $Y$, altrimenti non sarebbe un sottoinsieme di $X\setminus Y$)
> Risulta che $V$ è intorno di $y$ e $U$ è intorno di $x_{0}$ e $U\cap V=\varnothing$. 
> Da questa uguaglianza concludo che $U\subseteq X\setminus Y$.
> Posso trovare dunque per ogni $x_{0}\in X\setminus Y$ un intorno di tale punto, da cui $X\setminus Y$ è aperto, perciò $Y$ è chiuso. 