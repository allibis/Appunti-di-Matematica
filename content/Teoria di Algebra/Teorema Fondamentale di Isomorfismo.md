---
tags: [Algebra, Teorema]
aliases: []
icon: lucide-scroll-text
---

> [!obs] Osservazioni Preliminari
> Se considero due [[Teoria di Algebra/Gruppo|gruppi]] $G,G'$ e $\varphi:G\to G'$ omomorfismo qualsiasi, posso valutare la relazione di equivalenza $R_{\varphi}$ tale che $\forall x,y\in G: xR_{\varphi}y\iff\varphi(x)=\varphi(y)$. 
> Scopro che tale relazione è una congruenza, infatti:
> $$xR_{\varphi}y\implies\varphi(x)=\varphi(y)\implies\varphi(x)\cdot \varphi(y)^{-1}=1\implies$$
> $$\implies\varphi(xy^{-1})=1\implies xy^{-1}\in Ker(\varphi)\implies x\equiv y \text{ mod } Ker(\varphi)$$
> In altre parole, se due elementi di $G$ sono mappati allo stesso elemento, fanno parte della stessa classe di equivalenza rispetto alla relazione $R_{\varphi}$ e ciò significa che sono congruenti. 
> Da ciò si deduce che vi è una corrispondenza $1-1$ tra gli elementi dell'immagine di $\varphi$ e $^G/_{Ker(\varphi)}$.
> Questo è il ragionamento intuitivo dietro al teorema fondamentale di isomorfismo, che viene riassunto con questo diagramma:
> 

> [!teorema] Teorema Fondamentale di Isomorfismo
> 
 
> [!dim]
> 