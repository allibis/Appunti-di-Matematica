---
tags: [Topologia, Teorema, Quoziente]
aliases: []
icon: lucide-scroll-text
---

> [!Teorema] Unicità della Topologia Quoziente
> Sia $(X,\tau)$ uno [[Teoria di Topologia Generale/Topologia|spazio topologico]] e siano 
> $f_{1}:(X,\tau)\to(Y_{1},\tau_{1})$
> $f_{2}:(X,\tau)\to(Y_{2},\tau_{2})$
> Se $\forall x,x'\in \tau:f_{1}(x)=f_{1}(x')\iff f_{2}(x)=f_{2}(x')$, ossia vale [$(1)$](<Teoria di Topologia Generale/Costruzione delle Funzioni Composte.md>) in entrambe le direzioni
> Allora $\exists!\phi:Y_{1}\to Y_{2}$ e $\phi$ [[Teoria di Topologia Generale/Omeomorfismo|omeomorfismo]].
> ![[Diagrams/Unicità della Topologia Quoziente.excalidraw.svg]]

> [!dim] Dimostrazione 
> Per la proposizione [[Teoria di Topologia Generale/Costruzione delle Funzioni Composte|di passaggio al quoziente]] risulta che $\exists!\,\phi:(Y_{1},\tau_{1})\to(Y_{2},\tau_{2})$ ed $\exists!\,\psi:(Y_{1},\tau_{1})\to(Y_{2},\tau_{2})$ tali che:
> 1. $\phi\circ f_{1}=f_{2}$
> 2. $\psi\circ f_{2}=f_{1}$
> 
> Pertanto $\psi \circ \underbrace{ \phi\circ f_{1} }_{= f_{2} }=f_{1}$ e anche  $\phi \circ \underbrace{ \psi\circ f_{2} }_{= f_{1} }=f_{2}$
> Dunque $\phi \circ\psi=id_{Y_{1}}$ e $\psi \circ\phi=id_{Y_2}$
