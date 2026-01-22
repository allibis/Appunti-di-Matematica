---
tags:
  - Topologia
  - Definizione
  - Chiusi
aliases:
  - Chiusura
icon: lucide-book-open
---

> [!def] Chiusura di un insieme
> Siano $(X,\tau)$ uno [[Teoria di Topologia Generale/Topologia|spazio topologico]] e $A\in\tau$.
> Si chiama **chiusura** di un'insieme $\overline{A}=\bigcap\{C\mid A\supseteq C \text{ è chiuso}\}$
> Ossia è l'intersezione di tutti i [[Teoria di Topologia Generale/Chiuso|chiusi]] che contengono $A$.
^def-chiusura

> [!proprietà] Proprietà della chiusura
> 1. $\overline{A}$ è chiuso (per la [[Teoria di Topologia Generale/Chiuso#^prop-chiusi|proprietà 2 dei chiusi]])
> 2. $A\subseteq \overline{A}$
> 3. $\overline{A}$ è il più piccolo chiuso che contiene $A$, ossia $\forall C$ chiuso tale che $A\subseteq C: \overline{A}\subseteq C$
> 4. $\overline{A}=A\iff A$ è chiuso
^prop-chiusura

> [!dim]
> 1. Ovvio
> 2. Ovvio perché intersezione di insiemi contenenti $A$
> 3. Se $C$ chiuso e $A\subseteq C$ allora $\overline{A}\subseteq C$
> 4. Se $\overline{A}=A \implies A$ chiuso per la proprietà 1; se $A$ chiuso allora per la 3 $\overline{A}\subseteq A\implies \overline{A}=A$. 
^dim-prop-chiusura

> [!es] Esempi di chiusure in $(\mathbb{R},\mathcal{E})$
> 1. Se $A=(0,+\infty)$ allora:
> $$\displaystyle\overline{A}=
 \bigcap_{\begin{array} \\
 a \leq 0 \\ 
 b>0
 \end{array}} \left[ a,b \right] =[0,+\infty[$$
> 2. Se $A={2,3}$ allora $\overline{A}=A$ perché $A$ è chiuso.
> 3. Se $A=\mathbb{N}$ allora $\overline{A}=\mathbb{N}$ poiché $\displaystyle\mathbb{R}\setminus\mathbb{N}=\left( -\infty,0\right)\bigcup_{n\in \mathbb{N}}(n,n+1)$