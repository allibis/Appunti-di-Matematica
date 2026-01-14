---
tags: [Topologia, Proposizione, Metriche]
icon: lucide-circle-check-big
---

> [!prop] Le topologie indotte sono I-numerabili
> Sia $X\not=\varnothing$  e $d(x,y)$ una [[Metrica|metrica]] su $X$. Sia $\tau_{d}$ la [[Topologia indotta da una metrica|topologia indotta]].
> Allora $\tau_{d}$ è [[Spazio topologico Primo-numerabile|I-numerabile]]

> [!dim]
> Considero $\mathcal{U}(x)=\{ B_{1/n}(x)\mid x\in X,n\in \mathbb{N}^+\}$.
> Dimostro che è [[Sistema fondamentale di intorni|sistema fondamentale di intorni]]. 
> Sia $A\in \tau_{d}$ tale che $x\in A$. Allora $\exists r>0\mid B_{r}(x)\subseteq A$  poiché $\tau_{d}$ ha come base l'insieme di tutte le palle aperte di $d$. Per il principio di archimede, $\exists n\in \mathbb{N}^+$ tale che $\frac{1}{n}<r$. Ho trovato dunque un elemento di $\mathcal{U}(x)$ contenuto in $A$. 
> Dall'arbitrarietà di $x$ e di $A$ perviene la tesi. 