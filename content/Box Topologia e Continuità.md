---
tags: [Topologia, Topologia Box, Funzioni Continue, Proposizione]
aliases: []
icon: lucide-circle-check-big
---

>[!prop] La Box Topologia non garantisce la continuità delle funzioni
> Consideriamo $(\mathbb{R},\mathcal{E})$ ([[Topologia Euclidea|topologia euclidea]]) e $(\mathbb{R}^\mathbb{N},\tau_{\text{box}})$ la [[Box Topologia|box topologia]]. 
> Definisco $\Delta:\mathbb{R}\to \mathbb{R}^\mathbb{N}$ tale che $\forall t\in \mathbb{R}: \Delta(t)=(t,t,t,\dots)$
> Considero l'aperto di $\tau_{\text{box}}$, $U=(-1,1)\times \left( -\frac{1}{2},\frac{1}{2} \right)\times\left( -\frac{1}{3},\frac{1}{3} \right)\times\left( -\frac{1}{n},\frac{1}{n} \right)\times\dots$
> Com'è fatto $\Delta^{-1}(U)$?
> $\Delta^{-1}(U)=\{ t\in \mathbb{R} \,\vert\, \Delta(t)\in U\}=\left\{  t\in \mathbb{R} \,\vert\, |t|<\frac{1}{n}, \forall n\in \mathbb{N}  \right\}=\{ 0 \}$
> Osservo dunque che la controimmagine di $U$  è un chiuso di $(\mathbb{R},\mathcal{E})$, quindi $\Delta$ non è una funzione [[Mappa Continua|continua]]