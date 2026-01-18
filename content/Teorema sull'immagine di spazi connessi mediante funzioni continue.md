---
tags: [Topologia, Teorema, Continuità, Spazi-Connessi]
aliases: []
icon: lucide-scroll-text
---

> [!teorema]
> L'immagine di [[Spazio Connesso|spazi connessi]] mediante funzioni [[Mappa Continua|continue]] è connesso.

> [!dim]
> Siano $X$ uno [[Topologia|spazio topologico]] [[Spazio Connesso|connesso]] e $f:X\to Y$ continua. 
> Supponiamo che $f$ sia suriettiva (in alternativa si può considerare $f:X\to f(X)$)
> Se per assurdo $Y$ non fosse connesso, allora si avrebbe una [[Spazio Connesso|separazione]], ossia $\exists A,B\subseteq Y$ tali che $A\cup B=Y$ e $A\cap Y=\varnothing$. 
> Risulta allora che:
> 1. $f^{-1}(A)\cap f^{-1}(B)=\varnothing$;
> 2. $f^{-1}(A),f^{-1}(B)$ sono aperti, in quanto $f$ è continua;
> 3. $f^{-1}(A)\cup f^{-1}(B)=X$ poiché $f$ è suriettiva;
> 4. $f^{-1}(A),f^{-1}(B)\not=\varnothing$ poiché $A,B\not=\varnothing$ e $f$ suriettiva. 
>    
> Ho trovato dunque una separazione di $X$, il che è assurdo in quanto $X$ è connesso. 