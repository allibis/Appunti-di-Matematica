---
tags: [Topologia, Proposizione, Spazi-Metrici, Chiusi]
aliases: []
icon: lucide-circle-check-big
---

> [!Prop] Lemma della Successione
> Sia $X$ uno [[Teoria di Topologia Generale/Spazio metrico|spazio metrico]] e sia $A\subseteq X$. 
> Supponiamo che esiste una successione $x_{n}$ in $A$ convergente a $x$. Allora $x\in \overline{A}$.
> Il viceversa vale se $X$ è [[Teoria di Topologia Generale/Spazio Metrizzabile|metrizzabile]]

> [!dim]
> Se $x_{n}\to x$ allora ogni intorno di $x$ ha almeno un punto di $A$, quindi $x\in \overline{A}$ in base alla [[Teoria di Topologia Generale/Teorema sui Punti di Aderenza]]. 
> Viceversa supponiamo che $X$ sia metrizzabile. 
> Sia $d$ la distanza che induce tale topologia e sia $x\in \overline{A}$
> Considero $\forall n\in \mathbb{Z}_{+}$ l'intorno $B_{d}\left( x,\frac{1}{n} \right)$. Scelgo $x_{n}\in A\cap B_{d}\left( x,\frac{1}{n} \right)$ (posso perche $x$ è di aderenza). Ho trovato $x_{n}\to x$.
