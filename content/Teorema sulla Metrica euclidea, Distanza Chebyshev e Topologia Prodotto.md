---
tags: [Topologia, Teorema, Metriche, Topologia-Prodotto]
aliases: []
icon: lucide-scroll-text
---

> [!teorema]
> Le [[Topologia|topologie]] [[Topologia indotta da una metrica|indotte]] dalla [[Metrica#^def-metrica-euclidea|metrica euclidea]] $d$ e dalla [[Metrica#^def-inf-metrica|metrica di chebyshev]] $p$ sono uguali alla [[Topologia Prodotto|topologia prodotto]] su $\mathbb{R}^n$.

> [!dim] Dimostrazione
> Per verificare l'uguaglianza, devo far vedere che ogni aperto di una topologia è contenuto da un aperto dell'altra topologia e viceversa. 
> Dimostro prima di tutto che le metriche $p$ e $d$ sono equivalenti, ossa inducono la stessa topologia. 
> Siano $x=(x_{1},\dots,x_{n}),y=(y_{1},\dots,y_{n})\in \mathbb{R}^n$. Risulta che:
> $$ p(x,y)\leq d(x,y)\leq \sqrt{ n }\cdot p(x,y) $$
> infatti, considerato $a_{i}=|x_{i}-y_{i}|$, si ha che 
> $$ d(x,y)^2=\sum^n_{i=1}a_{i}^2\leq \sum^n_{i=1}\max_{1\leq i\leq n}\{ a_{i} \}^2=\sum^n_{i=1}p(x,y)=n\cdot p(x,y)^2 $$
> Ottengo dunque $d(x,y)\leq \sqrt{ n }p(x,y)$. 
> Inoltre vale:
> $\displaystyle p(x,y)^2=\max_{1\leq i\leq n}\{ a_{i}^2 \}\leq\sum^n_{i=1}a_{i}^2=d(x,y)^2 \implies$
> $\displaystyle \implies p(x,y)\leq d(x,y)\leq \sqrt{ n }\cdot p(x,y)$
> Ho dimostrato dunque che le metriche sono equivalenti: 
> $B_{d}(x,\varepsilon)=\{ y\in \mathbb{R}^n\, \vert \,d(x,y)<\varepsilon \}$ e $B_{p}(x,\varepsilon)=\{ y\in \mathbb{R}^n\, \vert \,p(x,y)<\varepsilon \}$.
> Quindi se $d(x,y)<\varepsilon\implies p(x,y)\leq d(x,y)<\varepsilon$ da cui $B_{d}(x,\varepsilon)\subseteq B_{p}(x,\varepsilon)$ 
> (non il viceversa perché se $p(x,y)<\varepsilon$ non è detto che $d(x,y)<\varepsilon$ quindi non tutti i punti di $B_{p}$ sono anche punti di $B_{d}$ a parità di $\varepsilon$)
> Viceversa se $p(x,y)<\varepsilon\implies d(x,y)< \frac{\varepsilon}{\sqrt{ n }}$ quindi $B_{p}(x,\varepsilon)\subseteq B_{d}\left( x, \frac{\varepsilon}{\sqrt{ n }} \right)$
> ![[Diagrams/Metriche Equivalenti.excalidraw.svg]]
> Dimostro ora che la topologia indotta da $p$ è uguale alla topologia prodotto. 
> Sia $B=(a_{1},b_{1})\times(a_{2},b_{2})\times\dots \times(a_{n},b_{n})$ e sia $x=(x_{1},x_{2},\dots,x_{n})\in B$
> Allora $\forall i=1\dots n,\exists\varepsilon_{i}>0\, \vert \,(x_{i}-\varepsilon_{i},x_{i}+\varepsilon_{i})\subseteq(a_{i},b_{i})$
> Quindi, scelto $\varepsilon=\min\{\varepsilon_{1},\dots,\varepsilon_{n}\}$ risulta che $B_{p}(x,\varepsilon)\subseteq B$.
> (Ossia: $(x_{1}-\varepsilon,x_{1}+\varepsilon)\times\dots \times(x_{n}-\varepsilon,x_{n}+\varepsilon)\subseteq(a_{1},b_{1})\times\dots \times(a_{n},b_{n})$)
> Per l'altra inclusione mi basta prendere $\varepsilon=\max{\varepsilon_{i}}$
