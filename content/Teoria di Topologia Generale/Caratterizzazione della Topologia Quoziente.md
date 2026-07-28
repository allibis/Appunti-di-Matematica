---
tags: [Topologia, Proposizione, Quoziente]
aliases: []
icon: lucide-circle-check-big
---

> [!prop] Caratterizzazione della Topologia Quoziente
> Sia $(X,\tau)$ uno [[Teoria di Topologia Generale/Topologia|spazio topologico]] e sia $\mathcal{R}$ una relazione di equivalenza. 
> Sia $\pi:X\to {}^{X}\!/_{\sim}$ una [[Teoria di Topologia Generale/Mappa Quoziente|mappa quoziente]] e $\tau_{\pi}$ la relativa [[Teoria di Topologia Generale/Topologia Quoziente|topologia quoziente]].
> Allora vale la seguente equivalenza
> 1. $A\in \tau_{\pi}$
> 2. $\exists B\in \tau$ con $B$ [[Teoria di Topologia Generale/Insieme Saturo rispetto a una Relazione|saturo]]$\, \vert \,\pi(B)=A$

> [!dim] $1. \implies 2.$
> Supponiamo $A\in \tau_{\pi}\implies \pi ^{-1}(A)\in \tau$ (quindi $\pi ^{-1}(A)$ è aperto)
> $\pi ^{-1}(A)$ è saturo, inoltre $\pi$ è suriettiva, quindi per la [[Teoria di Topologia Generale/Caratterizzazione degli Insiemi Saturi per Mappe Quozienti|caratterizzazione degli insiemi saturi per mappe quozienti]] vale che $A=\pi(\underbrace{ \pi(^{-1}A) }_{ \text{saturo} })$
> Quindi $A$ è immagine di un aperto saturo.

> [!dim] $2.\implies 1.$
> Supponiamo che $\exists B\in \tau$ con $B$ [[Teoria di Topologia Generale/Insieme Saturo rispetto a una Relazione|saturo]]$\, \vert \,\pi(B)=A$
> Dobbiamo dimostrare che $\pi ^{-1}(A)\in \tau$
> Osservo che $\pi$ è suriettiva e $B$ saturo, quindi $B=\pi ^{-1}(\pi(B))\in \tau\implies \pi ^{-1}(A)\in \tau\implies  A\in \tau_{\pi}$