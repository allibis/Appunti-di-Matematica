---
Tags: [Topologia, Teorema, Basi]
icon: lucide-scroll-text
---

> [!teorema] Caratterizzazione delle Basi di una Topologia
> $\beta$ è una [[Base di una Topologia|base]] per $\tau$ se verifica le seguenti proprietà:
> 1. $\forall x \in X: \exists B\in \beta \mid x\in B$
> 2. $\forall B_{1},B_{2}\in \beta$ tali che $B_{1}\cap B_{2} \not=\varnothing, \forall x\in B_{1}\cap B_{2}:\exists B\in \beta\mid x\in B\subseteq B_{1}\cap B_{2}$
> Viceversa se un'insieme $\beta \subseteq \mathcal{P}(X)$ verifica le proprietà 1. e 2. allora $\exists!\tau$ [[Topologia|topologia]] su $X$ di cui $\beta$ è base.
^caratt-base-top-en

>[!dim] Dim
> $\implies$:
> Se $\beta$ è base per $\tau$ allora
> 1. sia $x\in X\in \tau$. Allora per definizione di base $\exists B\in \beta\mid B\subseteq X\implies x\in B$
> 2. Siano $B_{1},B_{2}\mid B_{1}\cap B_{2}\not=\varnothing.$ Poiché $B_{1},B_{2}\in \tau\implies B_{1}\cap B_{2}\in \tau$ dunque per definizione di base $\exists B\in \beta,B\subseteq B_{1}\cap B_{2}\mid x\in B$
> 
> $\impliedby$:
> Definisco $\displaystyle \tau=\left\{ U\in \mathcal{P} \mid \exists\beta'\subseteq \beta \text{ t.c. } U=\bigcup_{B_{i}\in \beta'} B_{i}  \right\}$
> Dimostro che $\tau$ è topologia su $X$.
> - $\varnothing=U=\bigcup_{i\in I} B_{i}$ unione disgiunta, $X\in \tau$ poiché vale la proprietà 1. 
> - Sia $\{U_{i}\}_{i\in I}$ una famiglia di elementi di $\tau$. Allora $\displaystyle \forall U_{i}, \exists \beta_{i}\subseteq \beta \text{ t.c. } U_{i}=\bigcup_{B_{j}\in \beta'} B_{j}$ Pertanto $\bigcup_{i\in I}U_{i}=\bigcup_{i\in I}\left( \bigcup_{B_{j}\in\beta_{i}}B_{j} \right)$
> - Siano $B_{1},B_{2}\in \tau$ Se $B_{1}\cap B_{2}\not=\varnothing$, per la proprietà 3. si ha che $\forall x\in B_{1}\cap B_{2}:\exists B_{i}\in \beta\mid x\in B\subseteq B_{1}\cap B_{2}$. Pertanto $B_{1}\cap B_{2}=\bigcup_{i\in I}B_{i}\in \tau$
^caratt-base-top-dim