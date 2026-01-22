---
tags: [Topologia, Teorema, Connessi]
aliases: []
icon: lucide-scroll-text
---

> [!teo] Teorema dei Valori Intermedi
> Sia $f:X\to(\mathbb{R},\mathcal{E})$ una [[Teoria di Topologia Generale/Mappa Continua|funzione continua]] dove $X$ è [[Teoria di Topologia Generale/Spazio Connesso|connesso]]. Siano $a,b\in X$ e sia $r\in \mathbb{R}$ compreso tra $f(a)$ e $f(b)$. Allora $\exists c\in X\, \vert \,f(c)=r$

> [!dim]
> Osservo che per il [[Teoria di Topologia Generale/Teorema sull'immagine di spazi connessi mediante funzioni continue]], $f(X)$ è connesso.
> Considero gli insiemi $A=(-\infty,r)\cap f(X)$ e $(r,+\infty)\cap f(X)$. 
> Risulta che $A\cap B=\varnothing$ e $A,B$ non vuoti per costruzione.
> Inoltre sono aperti (nella [[Teoria di Topologia Generale/Topologia indotta da una metrica|Topologia indotta]]) perché intersezione tra $f(X)$ e aperti di $\mathbb{R}$.
> Se non esistesse una $c\in X\, \vert \,f(c)=r$ allora risulterebbe che $A\cup B=f(X)$, ossia troverei una separazione del sottospazio $f(X)$, ma ciò è assurdo.