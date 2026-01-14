---
tags: [Topologia, Topologia Prodotto, Definizione]
aliases: []
icon: lucide-book-open
---

> [!def] Famiglia Parametrizzata
> Sia $I$ un insieme non vuoto e sia $X=\{ X_\alpha \vert \alpha\in I \}=\{ X_{\alpha} \}_{\alpha\in I}$ una famiglia parametrizzata da $I$. 
> Definisco il **prodotto cartesiano** di tale famiglia come:
> $$\prod_{\alpha\in I}X_{\alpha}=\left\{  f:I\to \bigcup_{\alpha \in I}X_{\alpha} \middle\vert f(\alpha)\in X_\alpha, \forall \alpha \in I\right\}$$

> [!es] Esempio $\mathbb{R}^2$
> Considero $\mathbb{R}^2=\{ (a,b)\vert a,b\in \mathbb{R} \}$
> La coppia $(a,b)$ può essere vista come una funzione tale che $f(0)=a\in \mathbb{R},f(1)=b$. Quindi tutti gli elementi di $\mathbb{R}^2$ fanno parte dell'insieme $\mathbb{R}^{\{ 0,1 \}}$. Viceversa una funzione $f:\{ 0,1 \}\to \mathbb{R}\cup \mathbb{R}=\mathbb{R}$ tale che $f(0)\in \mathbb{R},f(1)\in \mathbb{R}$ si può scrivere come coppia $(a,b)$. 
> In altre parole $\mathbb{R}^2$ è isomorfo a $\mathbb{R}^{\{0,1\}}$

> [!es] $\mathbb{R}^\mathbb{N}:=\mathbb{R}^\omega$
> $\mathbb{R}^\omega$ contiene tutte e sole le funzioni $f:\mathbb{N}\to \mathbb{R}$, ossia le successioni di numeri reali. 
> (che possono essere viste come $n$-uple infinite di numeri reali).