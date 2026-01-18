---
tags: [Topologia, Teorema, Mappe, Quoziente, Sottospazi]
aliases: []
icon: lucide-scroll-text
---

> [!obs] Mappa Quoziente e Topologia Indotta
> Sia $A\subseteq X$ un qualsiasi insieme e $p:X\to Y$ una [[Mappa Quoziente|mappa quoziente]].
> Restringo $p$ ad $A$, ottenendo la funzione $(p_{\vert A})_{\#}:A\to p(A)\subseteq Y$
> Non è detto che $(p_{\vert A})_{\#}$ sia mappa quoziente.

> [!teorema] 
> Sia $p:X\to Y$ una [[Mappa Quoziente|mappa quoziente]] e sia $A$ un sottoinsieme [[Insieme Saturo rispetto a una Relazione|saturo]] di $X$. Posto $(p_{\vert A})_{\#}=:q:A\to p(A)$, allora
> 1. Se $A$ è aperto (o chiuso) allora $q$ è mappa quoziente.
> 2. Se $q$ è aperta o chiusa allora $q$ è mappa quoziente.

> [!dim] Dimostrazione
> Per ottenere la tesi, dimostriamo le seguenti uguaglianze:
> 1. $q^{-1}(V)=p^{-1}(V)$ se $V\subseteq p(A)$
> 2. $p(U\cap A)=p(U)\cap p(A)$ se $U\subseteq X$
> 
> Osserviamo che, poiché $V\subseteq p(A)$ e $A$ è saturo, allora $p^{-1}(V)\subseteq A$.
> $\implies$ Sia $p^{-1}(V)$ che $q^{-1}(V)$ coincidono con il sottoinsieme di $A$ che $p$ manda in $V$.
> 
> Per la seconda equazione, per ogni coppia di sottoinsiemi $U$ e $A$ di $X$ vale sempre l'inclusione:
> $p(U\cap A)\subseteq p(U)\cap p(A)$
> Dimostriamo l'inclusione inversa:
> Supponiamo che $y:=p(u)=p(a)$ per qualche $u\in U$ e $a\in A \implies p^{-1}(y)\ni u$.
> Poiché $A$ è saturo, esso contiene interamente la fibra di $a$:
> $p^{-1}(p(a))=p^{-1}(y)=p^{-1}(p(u)) \subseteq A$
> Poiché $u$ appartiene a $p ^{-1}(p(y))$, allora $u\in p^{-1}(p(a)) \implies u\in A$.
> Essendo anche $u\in U$, concludiamo che $u\in U\cap A$.