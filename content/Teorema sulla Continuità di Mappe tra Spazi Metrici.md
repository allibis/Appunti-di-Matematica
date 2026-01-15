---
tags: [Topologia, Teorema, Continuità, Spazi-Metrici]
aliases: []
icon: lucide-scroll-text
---

> [!teorema] Continuità delle funzioni tra Spazi Metrici
> Siano $(X,d_{X}),(Y,d_{Y})$ due [[Spazio metrico|spazi metrici]].
> Una funzione $f:X\to Y$ è [[Mappa Continua|continua]] $\iff \forall\varepsilon>0\,\,\exists \delta>0\, \vert \,d_{X}(x,y)<\delta\implies d_{Y}(f(x),f(y))<\varepsilon$ 

> [!dimostrazione]
> Se $f$ è continua allora $f^{-1}(B(f(x),\varepsilon))$ è aperto in $X$.
> Allora $\exists \delta>0\, \vert \,B(x,\delta)\subseteq f^{-1}(B(f(x),\varepsilon))$.
> Dunque $y\in B(x,\delta) \implies f(y)\in f^{-1}(B(f(x),\varepsilon))$
> 
> Suppongo che valga la condizione metrica $\varepsilon-\delta$. Voglio dimostrare che $f$ è continua in senso topologico.
> Sia $V$ un [[Aperto|aperto]] di $Y$. Considero la controimmagine $U=f^{-1}(V)$.
> Devo dimostrare che $U$ è aperto in $X$, ovvero che per ogni suo punto esiste un intorno contenuto in $U$.
> 
> Sia $x\in U$. Per definizione $f(x)\in V$.
> Poiché $V$ è aperto, $\exists \varepsilon>0$ tale che la [[Palla Aperta|palla]] $B_{Y}(f(x),\varepsilon)\subseteq V$.
> 
> Per l'ipotesi iniziale, in corrispondenza di questo $\varepsilon$, $\exists \delta>0$ tale che:
> $\displaystyle d_{X}(x,y)<\delta \implies d_{Y}(f(x),f(y))<\varepsilon$
> In termini insiemistici, questo significa che l'immagine della palla di raggio $\delta$ cade nella palla di raggio $\varepsilon$: $\displaystyle f(B_{X}(x,\delta))\subseteq B_{Y}(f(x),\varepsilon)$
> Unendo le inclusioni ottengo $\displaystyle f(B_{X}(x,\delta))\subseteq B_{Y}(f(x),\varepsilon)\subseteq V$
> Applicando la controimmagine $\displaystyle B_{X}(x,\delta)\subseteq f^{-1}(V)=U$
> Poiché $\forall x \in U$ ho trovato un raggio $\delta$ tale che $B_{X}(x,\delta)\subseteq U$, concludo che $U$ è aperto.