---
tags: [Topologia, Teorema, Chiusi]
aliases: []
icon: lucide-scroll-text
---

> [!teorema] Teorema
> Sia $(X,\tau)$ uno [[Topologia|spazio topologico]] di [[Hausdorff]]. Allora gli insiemi $\{p\}\, \vert \,p\in X$ sono [[Chiuso|chiusi]]. 

> [!dimostrazione]
> Sia $p\in X$ e considero $\{ p \}\implies\complement_{X}\{ p \}=X\setminus \{ p \}$. 
> Poiché $X$ è di Hausdorff, allora $\forall q\in X\setminus \{ p \}:\exists U$ intorno aperto di $q$ tale che $(X\setminus \{ p \})\cap U=\varnothing.$ Pertanto $X\setminus \{ p \}$ è intorno di tutti suoi punti e per la [[Caratterizzazione degli aperti|caratterizzazione degli aperti]] $X\setminus \{ p \}$ è aperto, dunque $\{ p \}$ è chiuso.