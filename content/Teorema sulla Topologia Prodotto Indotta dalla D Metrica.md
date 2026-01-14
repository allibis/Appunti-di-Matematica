---
tags: [Topologia, Teorema, Topologia-Prodotto, Metriche]
aliases: []
icon: lucide-scroll-text
---

> [!Teorema] Topologia Prodotto Indotta dalla $D$ Metrica
> Sia $\overline{d}(x,y)=\min\{ d(x,y),1 \}$ la [[Metrica Uniforme|metrica uniforme]] su $\mathbb{R}$. Se $x=(x_{i}),y=(y_{i})\in \mathbb{R}^\omega$, definisco $D(x,y)=\sup\left\{  \frac{\overline{d}(x_{i},y_{i})}{i}  \right\}$. 
> Risulta che $D$ è una [[Metrica|metrica]] e induce la [[Topologia Prodotto|topologia prodotto]] $\tau_{\text{prod}}$.

> [!dimostrazione]
> Ѐ necessario dimostrare che $D$ è metrica. I primi 3 assiomi sono ovvi, dimostro che vale la dis. triangolare. 
> Siano $x,y,z\in \mathbb{R}^\omega$:
> $D(x,z)=\sup\left\{  \frac{\overline{d}(x_{i},z_{i})}{i}  \right\}\leq \sup\left\{  \frac{\overline{d}(x_{i},y_{i})+\overline{d}(y_{i},z_{i})}{i}  \right\}\leq$
> $\sup\left\{  \frac{\overline{d}(x_{i},y_{i})}{i}  \right\}+\sup\left\{  \frac{\overline{d}(y_{i},z_{i})}{i}  \right\}=D(x,y)+D(y,z)$
> Dunque $D(x,y)$ è una metrica. 
> Per dimostrare che $D$ induce $\tau_{\text{prod}}$, applico il [[Lemma sulle Metriche e Confronto tra Topologie]] in entrambe le direzioni.
> Provo innanzitutto che la topologia prodotto è più [[Confronto Tra Topologie|fine]] della topologia indotta da $D$.
> Sia $U$ un aperto di $\tau_{D}$ e $x\in U$. Devo trovare $V\in \tau_{\text{prod}}\, \vert \, x\in V\subseteq U$
> Sia $B_{D}(x,\varepsilon)\subseteq U$ per qualche $\varepsilon>0$.
> Sia $N\in \mathbb{N}\, \vert \, \frac{1}{N}<\varepsilon$.
> Considero $V=(x_{1}-\varepsilon,x_{1}+\varepsilon)\times\dots \times(x_{N}-\varepsilon,x_{N}+\varepsilon)\times \mathbb{R}\times \mathbb{R}\times\dots$.
> Ovviamente $x\in V$, quindi resta da dimostrare che $V\subseteq U$.
> In generale vale che se $y\in \mathbb{R}^\omega\implies \frac{\overline{d}(x_{i},y_{i})}{i}\leq \frac{1}{N}, \forall i\geq N$ (perché il numeratore al massimo può essere 1, mentre il numeratore è maggiore di $N$). 
> Dunque $D(x,y)=\sup\left\{  \frac{\overline{d}(x_{i},y_{i})}{i}  \right\}\leq \max\left\{ \frac{\overline{d}(x_{1},y_{i})}{1},\frac{\overline{d}(x_{2},y_{2})}{2},\dots, \frac{1}{N} \right\}$
> Se $y\in V\implies\forall i=1\dots N:\frac{\overline{d}(x_{i},y_{i})}{i}<\varepsilon$ e $\frac{1}{N}<\varepsilon$, allora $D(x,y)<\varepsilon$ quindi $y\in B_{D}(x,\varepsilon)$.
> (in pratica ponendo $\frac{1}{N}<\varepsilon$, mi sono assicurato che i punti di $V$ abbiano distanza $D(x,y)<\varepsilon$) 
> Proviamo adesso che ogni aperto della topologia prodotto contiene un aperto della topologia indotta da $D$. 
> Sia $U=\prod \limits_{i\in \mathbb{Z}_{+}}U_{i}$ di $\tau_{\text{prod}}$, dove $U_{\alpha_{i}}$ è un aperto di $\mathbb{R}$ per $\alpha_{i}\in \{ \alpha_{1},\dots,\alpha_{n} \}\subsetneq\mathbb{Z}_{+}$ e $U_{\alpha_{i}}=\mathbb{R}$ $\forall \alpha_{i}\in \mathbb{Z}\setminus \{ \alpha_{1},\dots \alpha_{n}\}$. 
> In altre parole sto facendo in modo che $U_{\alpha_{i}}=\mathbb{R}$ definitivamente (per come sono fatti gli aperti di $\tau_{\text{prod}}$).
> $\forall i=\alpha_{1}\dots \alpha_{n}$ fisso un $\varepsilon_{i}<1$ tale che $(x_{i}-\varepsilon_{i},x_{i}-\varepsilon_{i})\subseteq U_{\alpha_{i}}$
> Definisco $\varepsilon=\min\left\{  \frac{e_{i}}{i}  \right\}$. 
> Osservo che $\forall y\in B_{D}(x,\varepsilon):\frac{\overline{d}(x_{i},y_{i})}{i}\leq D(x,y)<\varepsilon<\frac{\varepsilon_{i}}{i}<1$
> Quindi $\forall i=\alpha_{1},\dots,\alpha_{n}:y_{i}\in U_{i}=(x_{i}-\varepsilon_{i},x_{i}-\varepsilon_{i})$.
> Per gli altri indici ovviamente $y_{i}\in U_{\alpha}=\mathbb{R}$. 
> Concludo che $B_{D}(x,\varepsilon)\subseteq U$. 
> Ho provato quindi che la topologia indotta dal $D$ e la topologia prodotto sono uguali. 