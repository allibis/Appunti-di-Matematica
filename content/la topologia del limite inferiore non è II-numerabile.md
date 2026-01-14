---
tags:
  - Topologia
  - Proposizione
  - Topologia-del-Limite-Inferiore
  - Secondo-Numerabile
icon: lucide-lightbulb
---

> [!prop] Proposizione
> La topologia $\mathbb{R}_{\mathscr{l}}$ è [[Spazio topologico Primo-numerabile|I-numerabile]], ma non è [[Spazio topologico Secondo-numerabile|II-numerabile]]. 

> [!dim] I-numerabilità
> Dimostro che $\mathbb{R}_{\mathscr{l}}$ è I-numerabile, ossia $\forall x\in \mathbb{R}: \exists \mathcal{U}(x)$ [[Sistema fondamentale di intorni|SFI]]. 
> Sia $x\in \mathbb{R}$ e considero $\mathcal{U}(x)=\left\{ \left[x,x+q\right[ \mid q\in \mathbb{Q}\right\}$ (numerabile). Ogni elemento di tale insieme è un intorno di $x$ e $\forall U\in \tau_{\mathscr{l}}$ risulta che $\exists q\in \mathbb{Q}\mid x\in\left[x,x+q\right[\subseteq U$ in virtù della densità di $\mathbb{Q}$ in $\mathbb{R}$. Quindi $\mathcal{U}(x)$ è sistema fondamentale di intorni numerabile da cui la tesi. 

> [!dim] II-numerabilità
> Supponiamo per assurdo che $\exists \beta$ base per $\mathbb{R}_{\mathscr{l}}$ che sia numerabile. 
> Osservo che $\forall x\in \mathbb{R}, \left[ x,+\infty \right[\in \tau_{\mathscr{l}}$.
> Pertanto $\exists B_{x}\in \beta \mid x\in B_{x}\subseteq[x,+\infty[$. Allora $\min B_{x}=x$, e dunque $\forall x,y\in \mathbb{R},x\not=y:B_{x}\not=B_{y}$. Poiché ho trovato un $B_{x}$ per ogni elemento di $\mathbb{R}$, allora $\beta$ contiene $|\mathbb{R}|=\aleph_{1}$ elementi, il che è assurdo. 