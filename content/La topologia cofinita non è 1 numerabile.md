---
tags:
  - Topologia
  - Proposizione
  - Topologia-Cofinita
icon: lucide-circle-check-big
---

> [!prop] Proposizione
> La [[Topologia Cofinita|topologia cofinita]] non è [[Spazio topologico Primo-numerabile|primo-numerabile]]

> [!dim]
> Devo dimostrare che $\forall x\in X$ NON esiste un [[Sistema fondamentale di intorni|sistema fondamentale di intorni]] numerabile. 
> Suppongo per assurdo che sia I-numerabile. In particolare lo è per il punto $0\in \mathbb{R}$ ha un SFI  $\mathcal{U}=\{ U_{n} \}_{n\in \mathbb{N}}$ numerabile.
> Nella topologia cofinita, questi insiemi sono del tipo $\mathbb{R}\setminus\{p_{1}\dots p_{k}  \}$
> Considero $\displaystyle G:=\bigcup_{n\in \mathbb{N}}\complement_{\mathbb{R}}U_{n}$, ossia l'insieme dei punti esclusi dagli intorni di $\mathcal{U}$
> 
> ![[topologia cofinita non 1 numerabile.excalidraw.svg]]
> Osservo che:
> 1. $G$ è al più numerabile 
> 2. $0\not\in G$
> 3. $\exists a\in \mathbb{R}\mid a\not\in(G\setminus \{ 0 \})$ (perché $|\mathbb{R}|=\aleph_{1}$) 
> Quindi considero l'insieme $\mathbb{R}\setminus\{a\}, a\not=0$. Tale insieme è intorno $0$, quindi $\exists U_{n}\in \mathcal{U}\mid 0\in U_{n}\subseteq\mathbb{R}\setminus\{a\}$.
> Si avrebbe dunque che $\complement_{\mathbb{R}}\mathbb{R}\setminus \{ a \}=\{ a \}\subseteq \complement_{\mathbb{R}} U_{n}\implies a\in \complement_{\mathbb{R}} U_{n}\subseteq G$, ma ciò è assurdo in quanto $a\not\in G$