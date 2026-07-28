---
tags: [Topologia, Teorema, Hausdorff, Punti-Isolati]
aliases: []
icon: lucide-scroll-text
---

> [!teorema]
> Sia $X$ uno [[Teoria di Topologia Generale/Topologia|spazio topologico]] di [[Teoria di Topologia Generale/Hausdorff|Hausdorff]] [[Teoria di Topologia Generale/Compatto|compatto]]. Se $X$ non ha  [[Teoria di Topologia Generale/Punti Isolati|punti isolati]], allora non é numerabile.

> [!dim] Dimostrazione
>  Dato $U \subseteq X$ aperto non vuoto e qualunque $x \in X$, $\exists V \subseteq U$ t.c. $x \notin \overline{V}$
> 1. Se $x \in U$, dato che $x$ non è isolato, esiste un p.to $y \in U$ t.c. $y \neq x$
> 2. Se $x \notin U$, poichè $U$ non è vuoto, posso scegliere un qualsiasi $y \in U$.
> 
> Inoltre $X$ è Hausdorff $\implies \exists W_1, W_2$ aperti disgiunti t.c. $x \in W_1, y \in W_2 \wedge W_1 \cap W_2 = \emptyset$
> Allora definiamo $V = W_2 \cap U \ni y$ (è un aperto $\neq \emptyset$)
> $V \subseteq U$ poichè $W_2 \cap U \subseteq U$ e t.c. $x \notin \overline{V}$
> 
> Supponiamo per assurdo che $\exists f: \mathbb{N} \longrightarrow X$ suriettiva ($X$ è numerabile)
> Sia $x_n = f(n)$. L'idea è di costruire per ricorsione una successione di aperti
> decrescenti rispetto a "$\subseteq$" (cioè $V_1 \supseteq V_2 \dots$) t.c. $x_n \notin \overline{V}_n$ e $\overline{V}_n \subseteq V_{n-1}$
> 
> Pongo $U := X \quad x_1 \in X =: U$, otteniamo $V_1 \subseteq X \wedge x_1 \notin \overline{V}_1$. Poi, dato $V_{n-1}$ applichiamo
> lo stesso argomento per $x_n$ per ottenere $V_n \subseteq V_{n-1} \wedge x_n \notin \overline{V}_n$
> 
> Abbiamo così ottenuto una successione di chiusi $\overline{V}_1 \supseteq \overline{V}_2 \dots$
> Dato che $X$ è compatto: $\displaystyle\bigcap_{i=1}^\infty \overline{V}_i \neq \emptyset \quad$ (proprietà di int. finita)
> Sia $x \in \displaystyle\bigcap_{n=1}^\infty \overline{V}_n \implies x \neq x_n \; \forall n \in \mathbb{N} \quad$ (poichè $x_n \notin \overline{V}_n \; \forall n$)
> 
> Per costruzione $x_n \notin \overline{V}_n$ mentre $x \in \overline{V}_n$
> $\implies f: \mathbb{N} \longrightarrow X$ non è suriettiva poichè $\not\exists m \in \mathbb{N}$ t.c. $f(m)=x$, da cui l'assurdo.