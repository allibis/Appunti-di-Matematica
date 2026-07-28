---
tags: [Topologia, Esempi, Mappe, Quoziente]
icon: lucide-notebook-text
---

> [!ex] Esempio 1
> $(X,\tau)=([0,1],\mathcal{E}_{[0,1]})$
> Sia $\sim$ una relazione di equivalenza tale che $\forall t,s\in[0,1]: t\sim s\iff x=s \,\vee\ t,s\in \{ 0,1 \}$ (ossia identifica i bordi del segmento)
> Consideriamo $f_{1}:X\to S^1$ tale che $t\longmapsto e^{ 2\pi ti }$ (dall'esempio della [[Teoria di Topologia Generale/Mappa Quoziente|mappa quoziente]]) 
> $f_{2}:X\to {}^{X}\!/_{\sim}$ tale che $t\in [0,1]\longmapsto[t]$  
> Risulta che $f_{1}(t)=f_{1}(s)\iff e^{ 2\pi is }=e^{ 2\pi it }\iff s-t\in \mathbb{Z}\iff s=t\,\vee\,s,t\in\{0,1\}$. L'ultima doppia implicazione vale perché $s,t\in[0,1]$ 
> Le condizioni del Teorema sull [[Teoria di Topologia Generale/Unicità della Topologia Quoziente|unicità della topologia quoziente]] sono verificate, per cui $\exists\phi: S^1\longmapsto{}^{X}\!/_{\sim}$ omeomorfismo