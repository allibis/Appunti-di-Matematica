---
tags: [Topologia, Proposizione, Mappe, Quoziente]
aliases: []
icon: lucide-circle-check-big
---

> [!proposizione]
> Siano $f:(X,\tau)\to(Y,\tau')$ [[Teoria di Topologia Generale/Mappa Quoziente|mappa quoziente]] e sia $g:(Y,\tau')\to(Z,\tau'')$
> Allora $g$ è continua $\iff g\circ f$ è continua 
> 
> ![[Diagrams/Composizione Mappa Quoziente.excalidraw.svg]]

> [!dim] $\implies$
> Supponiamo $g$ continua, $f$ è mappa quoziente quindi è continua. 
> Dunque $g\circ f$ è continua

> [!dim] $\impliedby$
> Supponiamo $g\circ f$ è continua. $f$ è continua perché mappa quoziente.
> Sia $U\in \tau''$, dimostro che $g^{-1}(U)\in \tau'$.
> Sappiamo che $(g\circ f)^{-1}(U)\in \tau\implies f^{-1}(g^{-1}(U))\in \tau\implies g^{-1}(U)\in \tau'$ poiché $f$ è mappa quoziente. 