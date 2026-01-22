---
tags: [Topologia, Definizione, Pushout, Quoziente]
---

> [!def] Incollamento di spazio
> É possibile "incollare" due [[Teoria di Topologia Generale/Topologia|spazi topologici]] $X$ e $Y$ lungo l'immagine di un "sottoinsieme" comune $A$ mediante due [[Teoria di Topologia Generale/Mappa Continua|mappe continue]] $f:A\to X,g:A\to Y$.
> Definisco la relazione di equivalenza $\sim$ è definita identificando $f(a)\sim g(a) \forall a\in A$, il pushout $X\cup_{A}Y={}^{(X\sqcup Y)}\!/_{\sim}$
> Si possono definire due applicazioni continue:
> $$ \begin{align}  \\ i_{X}:X\to X&\cup_{A}Y \\ &\longmapsto\text{un modo per incollare spazi topologici} \\ i_{Y}:Y\to X&\cup_{A}Y \\ \end{align}$$
> 

> [!es] Esempio di pushout
> ![[Diagrams/Esempio Pushout.excalidraw.svg]]

> [!teorema] Proprietà Fondamentale
> Sia $Z$ uno [[Teoria di Topologia Generale/Topologia|spazio topologico]] e siano $F:X\to Z$ e $G:Y\to Z$ funzioni continue tali che $F(f(a))=G(g(a))$. 
> Allora $\exists!F\cup_{A}G:X\cup_{A}Y\to Z$ tale che il seguente diagramma è commutativo
> ![[Diagrams/Proprietà Universale.svg]]
> Inoltre $(F\cup_{A}G)\circ i_{X}=F$ e $(F\cup_{A}G)\circ i_{Y}=G$, pertanto $F\cup_{A}G$ è compatibile rispetto alla relazione di equivalenza $\sim$

