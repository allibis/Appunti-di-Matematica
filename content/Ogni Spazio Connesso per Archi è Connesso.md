---
tags:
  - Topologia
  - Proposizione
  - Connessi
  - Archi
aliases: []
icon: lucide-circle-check-big
---

> [!prop] Ogni Spazio Connesso per Archi è Connesso

> [!dim] 
> Supponiamo che $X$ sia uno [[Topologia|spazio topologico]] [[Connessione per Archi|connesso per archi]].
> Supponiamo per assurdo che $X$ non sia connesso. 
> Allora esiste una separazione di $X$, ossia $\exists A,B\subseteq X$ non vuoti tali che $A\cup B=X$ e $A\cap B=\varnothing$.
> Consideriamo $a\in A,b\in B$.  Poiché $X$ è connesso per archi,
>  esiste $\gamma:\underbrace{ [0,1] }_{ \text{connesso} }\to X$ tale che $\gamma(0)=a$ e $\gamma(1)=b$.
> Poiché $\gamma$ è [[Mappa Continua|continua]], vale che:
> - $0\in U=\gamma ^{-1}\left(  \gamma([0,1])\cap A\right)\subseteq[0,1]$ aperto;
> - $1\in V=\gamma ^{-1}\left(  \gamma([0,1])\cap B\right)\subseteq[0,1]$ aperto.
>   
> Abbiamo trovato una separazione di $[0,1]$, poiché $U,V$ aperti non vuoti tali che $U\cup V=[0,1]$ e $U\cap V=\varnothing$.
> Ma questo è assurdo perché $[0,1]$ è connesso. 