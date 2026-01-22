---
tags: [Topologia, Definizione, Sottospazi]
aliases: [sottospazio]
icon: lucide-book-open
---

> [!def] Sottospazio Topologico
> Sia $(X,\tau)$ uno [[Teoria di Topologia Generale/Topologia|spazio topologico]]. Sia $Y\subseteq X$
> L'insieme $\tau_{Y}=\{ A\cap Y \,\vert\, U\in \tau \}$ è una topologia su $Y$ detta **topologia di sottospazio**. 
> $(Y,\tau_{Y})$ è detta **sottospazio topologico** di $X$

> [!dim] 
> Dimostro che è una topologia:
> 1. $\varnothing=Y\cap \varnothing, Y=Y\cap X\implies \varnothing,Y\in \tau_{Y}$
> 2. $\bigcup_{i\in I} (U_{i}\cap Y)=\underbrace{ \left( \bigcup_{i\in I} U_{i}\right) }_{\text{aperto di } \tau }\cap Y$
> 3. $(U_{1}\cap Y)\cap\dots \cap(U_{m}\cap Y)=\underbrace{ (U_{1}\cap\dots \cap U_{m}) }_{ \text{aperto di } \tau}\cap Y\in \tau_{Y}$
> Quindi $\tau_{Y}$ verifica la definizione di topologia