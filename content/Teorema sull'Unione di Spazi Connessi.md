---
tags: [Topologia, Teorema, Connessi, Sottospazi]
aliases: []
icon: lucide-scroll-text
---

> [!teo] Teorema
> L'unione di una collezione di [[Topologia di Sottospazio|sottospazi]] [[Spazio Connesso|connessi]] di uno [[Topologia|spazio topologico]] $X$ aventi un punto in comune è connessa. 

> [!dim] Dimostrazione
> Siano $\{ A_{\alpha} \}$ una collezione di sottospazi connessi e sia $a=\bigcap \limits_{\alpha}A_{\alpha}$ un punto il comune tra di essi.  
> Sia $Y=\bigcup \limits_{\alpha}A_{\alpha}$. Supponiamo per assurdo che $Y$ non sia connesso, ossia che esistano $C,D$ aperti non vuoti di $Y$ tali che $C\cup D=Y$ e $C\cap D=\varnothing$. 
> Allora, si avrebbe che $a\in C$ oppure $a\in D$. Supponiamo senza ledere la generalità che $a\in C$. 
> Poiché gli $A_{\alpha}$ sono connessi, allora per il [[Lemma sugli Spazi Connessi e Sottospazi]] si ha che $A_{\alpha}\subseteq C, \forall \alpha$. Ma allora si avrebbe che $Y=\bigcup \limits_{\alpha}A_{\alpha}\subseteq C$, da cui l'assurdo, in quanto $D\not=\varnothing$ per ipotesi. Dall'assurdo segue la tesi