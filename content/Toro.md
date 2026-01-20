---
tags: [Topologia, Definizione]
aliases: []
icon: lucide-book-open
---

> [!def] Toro
> >[!def] Definizione 1
> >
> > L'insieme $\mathbb{T}^n:=\underbrace{ S^1\times\dots \times S^1 }_{ n \text{ volte} }$ è chiamato **toro**
> 
> > [!def] Definizione 2 (versione astratta)
> > 
> > Sia $I=[0,1]$. Su $I \times I$ definisco la relazione di equivalenza:
> > $p\sim q\iff p,q\in \underbrace{ \{ (s,0),(s,1) \} }_{ \text{bordi orizzontali} }\,\vee\,\underbrace{ \{ (0,t),(1,t) \} }_{ \text{bordi verticali} }\,\vee\,p=q$
> > ![[Diagrams/Costruzione toro.excalidraw.svg]]
> > Il toro è definito come l'insieme $\widetilde{\mathbb{T}}:={}^{I \times I}\!/_{\sim}$ e risulta [[Omeomorfismo|omeomorfo]] a $\mathbb{T}^2=S^1\times S^1$. 
> > Infatti, definisco $F:I \times I\to \mathbb{T}^2$ tale che
> > $(s,t)\in I \times I\longmapsto(e^{ 2\pi is },e^{ 2\pi it })$
> > Si dimostra che $F$ è una [[Mappa Quoziente|mappa quoziente]] e inoltre vale che:
> > $\forall (t,s),(t',s')\in I \times I:F(t,s)=F(t',s')\iff(t,s)\sim (t',s')$
> > Dunque per il teorema sull'[[Unicità della Topologia Quoziente]] si ha che $\mathbb{T}^2$ è omeomorfo a ${}^{I \times I}\!/_{\sim}$
> 
> > [!def] Definizione 3
> > 
> > ${}^{\mathbb{R}^2}\!/_{\mathbb{Z}^{2}}:={}^{\mathbb{R}^2}\!/_{\sim}$ dove $\sim$ è la relazione di equivalenza tale che $(t,s)\sim(t',s')\iff t-t'\in \mathbb{Z}, s-s'\in \mathbb{Z}$
> > Anche questo toro è omeomorfo a $\mathbb{T}^2$
> 
> > [!def] Definizione 4
> > Il toro è una superficie di rivoluzione in $\mathbb{R}^{3}$
> > In $\mathbb{R}^{3}$ prendiamo la circonferenza perpendicolare all'asse $y$ di raggio $r<R$ e centrata in $(R,0,0)$
> > $$\mathcal{C}:\begin{cases} x=R+r\cos\theta \\ y=0 \\ z=r\sin \theta \end{cases}$$
Se le facciamo un moto di rivoluzione attorno all'asse $y$, le coordinate $z$ non variano, mentre $x$ e $y$ variano:
> >$$\begin{cases} x=(R+r\cos\theta)\cos \varphi \\ y=(R+r\cos\theta)\sin \varphi \\ z=r\sin \theta \end{cases}$$
> > Tale parametrizzazione descrive il toro, che può essere definito anche così:
> > $x^{2}+y^{2}=(R+r\cos\theta)^{2}\implies \sqrt{ x^{2}+y^{2} }=R+r\cos\theta\implies$
> > $\implies(\sqrt{ x^{2}+y^{2} } - R)^{2} = r^{2}\cos ^{2}\theta=r^{2}(1-\sin ^{2}\theta)=r^{2}-r^{2}\sin ^{2}\theta=r^{2}-z^{2}\implies$
> > $(\sqrt{ x^{2}+y^{2} } - R)^{2}+z^{2}=r^{2}$
> > Dunque $\mathcal{T}=\left\{ (x,y,z)\in R^{3}\, \middle\vert \,\left(\sqrt{ x^{2}+y^{2} } - R\right)^{2}=r^{2} \right\}$
