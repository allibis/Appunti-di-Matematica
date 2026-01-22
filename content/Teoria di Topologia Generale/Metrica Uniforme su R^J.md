---
tags: [Topologia, Definizione, Metriche, Uniforme]
aliases: [metrica uniforme]
icon: lucide-book-open
---

> [!def] Metrica Uniforme su $\mathbb{R}^J$
> Sia $J$ un'insieme di indici, e siano $x=(x_{a})_{a\in J}, y=(y_{a})_{a\in J}$. 
> Definisco $\overline{p}:=\sup\limits_{a\in J}\left\{ \overline{d}(x_{a},y_{a}) \right\}$ come la **metrica uniforme su $\mathbb{R}^J$**
> Questa è una generalizzazione della [[Teoria di Topologia Generale/Metrica Uniforme|metrica uniforme]].

> [!dim]
> Dimostro che è una [[Teoria di Topologia Generale/Metrica|metrica]]:
> Le proprietà 1, 2 e 3 sono ovvie, dimostro la disugaglianza triangolare:
> Siano $x,y,z\in \mathbb{R}^J$: poiché la dis. triangolare vale per $\overline{d}$, si ha che:
> $\overline{p}(x,z)=\sup\limits_{a\in J}\left\{ \overline{d}(x_{a},z_{a}) \right\}\leq \sup\limits_{a\in J}\left\{ \overline{d}(x_{a},y_{a})+\overline{d}(y_{a},z_{a}) \right\}\leq$
> $\leq \sup\limits_{a\in J}\left\{ \overline{d}(x_{a},y_{a}) \right\}+\sup\limits_{a\in J}\left\{ \overline{d}(y_{a},z_{a}) \right\}=\overline{p}(x,y)+\overline{p}(y,z)$