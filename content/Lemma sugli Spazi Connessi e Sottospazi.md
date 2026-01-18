---
tags:
  - Topologia
  - Proposizione
  - Connessi
  - Sottospazi
aliases: []
icon: lucide-circle-check-big
---

>[!prop] Lemma
> Sia $X$ uno [[Topologia|spazio topologico]], se $C,D$ formano una [[Spazio Connesso|separazione]] e $Y\subseteq X$ è un [[Topologia di Sottospazio|sottospazio topologico]] connesso, allora $Y\subseteq C$ oppure $Y\subseteq D$.

> [!dim]
> Per ipotesi $C\cap D=\varnothing$ e $C\cup D=X$.
> Inoltre poiché $Y$ è connesso $(C\cap Y)\cup(D\cap Y)=Y$ e $(C\cap Y)\cap(D\cup Y)=\varnothing$, inoltre $C\cap Y, D\cap Y$ sono aperti. 
> $Y$ è connesso per ipotesi, quindi se $C\cap Y$ e (contemporaneamente) $D\cap Y$ fossero non vuoti, allora si avrebbe una separazione di $Y$, da cui l'assurdo. 