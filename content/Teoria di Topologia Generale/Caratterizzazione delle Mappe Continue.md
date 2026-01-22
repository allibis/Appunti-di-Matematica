---
tags: [Topologia, Continuità, Teorema]
aliases: []
icon: lucide-scroll-text
---

> [!teorema] 
> Siano $(X,\tau),(Y,\tau')$ [[Teoria di Topologia Generale/Topologia|spazi topologici]] e $f:X\to Y$. 
> Allora vale la seguente equivalenza:
> a. $f$ è [[Teoria di Topologia Generale/Mappa Continua|continua]] globalmente
> b. $\forall x_{0} \in X, f$ è continua in $x_{0}$ 
> c. $\forall C$ [[Teoria di Topologia Generale/Chiuso|chiuso]] di $Y:f^{-1}(C)$ è chiuso in $X$
> d. $\forall A\subseteq X:f(\overline{A})\subseteq \overline{f(A)}$

> [!dim]
> a. $\implies$ b.
> Sia $x_{0}\in X$. allora $\forall V$ intorno di $f(x_{0})$ si ha che $f^{-1}(V)$ è aperto. 
> Inoltre $x_{0}\in f^{-1}(V)$ poiché $f(x_{0})\in V$. Quindi ho trovato un $U=f^{-1}(V)$ intorno di $x_{0}$, da cui la tesi.
> 
> b. $\implies$ a.
> Per ipotesi $\forall x_{0}\in X,\forall V$ intorno aperto di $f(x_{0})$ esiste $U$ intorno di $x_{0}$  tale che $U\subseteq f^{-1}(V)$.
> Sia $W\in \tau'$: dimostro che $f^{-1}(W)$ è intorno di ogni suo punto.
> Sia $p\in f^{-1}(W)$. allora $\exists U$ intorno aperto di $p$ tale che $U\subseteq f^{-1}(V)$. Ciò significa che $f^{-1}(V)$ è [[Teoria di Topologia Generale/Intorni|intorno]] di $p$ per definizione. Per l'arbitrarietà di $p$, si ha che $f^{-1}(W)$ è aperto, in virtù della [[Teoria di Topologia Generale/Caratterizzazione degli aperti]].
> 
> ---
> 
> a. $\iff$ c. 
> Si dimostra che $f^{-1}(\complement_{Y}A)=\complement_{X}(f^{-1}(A))$
> 
> ---
> 
> a. $\implies$ d.
> Suppongo che $f$ sia continua. Sia $A\subseteq X$ e sia $p\in f(\overline{A})$, cioè $p=f(x),x\in \overline{A}$. Per provare che $p\in \overline{f(A)}$ applico il [[Teoria di Topologia Generale/Teorema sui Punti di Aderenza]] e dimostro che $\forall U$ intorno di $p=f(x)$, $U\cap f(A)\not=\varnothing$. 
> Poiché $f$ è continua, allora $f^{-1}(U)$ è aperto e contiene $x$, quindi è intorno di $x\in \overline{A}$. Poiché $x$ è un punto di aderenza per $A$, tutti i suoi intorni hanno intersezioni non vuote con $A$.
> Quindi $f^{-1}(U)\cap A\not=\varnothing\implies$ $f(f^{-1}(U)\cap A)=U\cap f(A)\not=\varnothing$.
> 
> ---
> 
> d. $\implies$ a.
> Supponiamo viceversa che $\forall A\subseteq X:f(\overline{A})\subseteq\overline{f(A)}$
> Devo dimostrare che $\forall C\subseteq Y$ chiuso, $D=f^{-1}(C)\subseteq X$ è chiuso. 
> Dunque $f(\overline{D})\subseteq \overline{f(D)}\subseteq \overline{C}=C$. L'ultima uguaglianza risulta dal fatto che la chiusura di un insieme chiuso è l'insieme stesso. 
> Pertanto $\overline{D}\subseteq f^{-1}(C)=D\implies \overline{D}=D$ per le proprietà dei chiusi.
> Quindi $D=f^{-1}(C)$ è chiuso da cui la tesi.