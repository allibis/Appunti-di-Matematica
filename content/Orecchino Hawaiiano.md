---
tags: [Topologia, Esempi, Pushout, Quoziente]
---

> [!es] Orecchino Hawaiiano
> ![[Diagrams/Orecchino Hawaiiano.excalidraw.svg]]
> Considero l'insieme di cerchi con centro $\left( \frac{1}{n}, 0 \right)$, e raggio $\frac{1}{n}$
> Definisco $X:=\bigcup \limits_{n\in \mathbb{N}} \{  (x,y)\in \mathbb{R}\,\vert \, \underbrace{ \left(x-\frac{1}{n}\right)^{2}+y^{2}=\frac{1}{n^{2}} }_{ C_{n} } \}$
> $X$ può essere definito come $\bigsqcup\limits_{i=1}^\infty {}^{(0,1)}\!/_{\sim}$ con $\sim$ la relazione di equivalenza che identifica $0$ con $1$
> $X$ è anche uguale a $\bigvee \limits_{n\in \mathbb{N}}S^1_{n}$
> Posso descrivere un cammino su $C_{n}$ mediante la mappa $l_{n}:[0,1]\to C_{n}$ tale che $t\longmapsto\left( \frac{1}{n}\cos(2\pi t-\pi)+ \frac{1}{n}, \frac{1}{n}\sin(2\pi t-\pi) \right)$ mentre il loop inverso $l_{n}^{-1}(t)=l_{n}(1-t)$
> Se considero la semiretta orizzontale positiva: $A=\{ (x,0)\in \mathbb{R}^{2}\, \vert \,x> 0 \}$ 
> I punti di $A$ intersecano ogni circonferenza esattamente una volta: 
> $A\cap C_{n}:\left( x- \frac{1}{n} \right)^{2}+0^{2}= \left( \frac{1}{n} \right)^{2}\implies x= \frac{2}{n}$.
> Dunque $S:=A\cap X=\left\{  \left(  \frac{2}{n},0 \right) \, \vert \,n\in \mathbb{N}  \right\}$.
> Risulta che $S$ non è [[Chiuso|chiuso]] nella [[Topologia indotta da una metrica|topologia indotta]]  da $X$. Infatti se lo fosse, conterrebbe i suoi punti di accumulazione. Infatti, considerando la successione $\left\{\left(  \frac{2}{n},0 \right)\right\}_{n\in \mathbb{N}}\subseteq S$ tende al punto $(0,0)\not\in S$. 