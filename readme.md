https://trello.com/b/wakg1ft4/codechella-semana-1

https://www.figma.com/file/sQD8oUIP2gke3j5r0I502e/CodeChella-%7C-Challenge-I---Front-end-2023-(Copy)?node-id=48%3A205&t=FH4DVWm1sDO48Mur-0

https://trello.com/b/uZ4izZXN/challenge-alura


- [X] Structure whole HTML
- [X] Create reset css
- [X] Create color structure
- [X] Create font structure
- [X] Create utility class for container
- [X] Header inner positioning
- [X] Header animation
- [X] Header padding
- [X] Create burger menu with label
- [X] Style menu options
- [X] Header on desktop
- [X]  Make font better on 1440px
- [X] Adjust lineup distribution
- [ ] Set scrollbar
- [X] Make burger animation
- [ ] Make active link marking
- [X] Make animation when hovering links
- [X] General information section - Start
- [X] General info mobile
- [X] General info tablet
- [X] General info desktop
- [X] Line-up Padding
 -[ ] Usar grid no lineup
   3
   4
   3
   5
- [X] Line-up font
- [X] Set Selection
- [X] Banner footer
- [X] Footer padding
- [X] Footer font
- [X] Footer padding
- [X] Create animation for lineup
- [X] Detect lineup position to fire animation
- [X] Throttle scroll event
- [X] Make throttle get last action
- [X] Unmount function after all has appeared
- [ ] Set role to li in footer socials media?

page experiencia
- [X] Banner on mobile
- [X] Filter on banner
- [X] Tablet
- [X] Desktop
- [ ] General info section

page setores
- [X] Banner
- [X] Banner responsivity
- [X] Create cards
- [ ] Enhance color-scheme at mapa - Change color in legenda and change svg accordingly

- [ ] Normalizar margens (dentrod e um elemento tem que ser todas iguais)
- [ ] Fazer navegação de tab nas redes sociais footer
- [ ] Fazer select no footer
- [X] Padding top seção mapa de setores (Legenda desce)
- [X] Acertar borderradius das fotos cards mapa setores (tablet talvez e desktop com certeza)
- [ ] Acertar o svg e fazer seleção ligada à legenda

Accordion
- [ ] Accordion hover action (invert button color);
- [ ] Include arrow
- [ ] make arrow rotate
- [ ] Section banner
- [ ] Accessibility 

Form

- [ ] Fazer readme





- 23 (quinta)
Fazer a parte de setores

- 24 (sexta)
Informações gerais (acordeon)

- 25 (sabado)
Garanta seu ingresso
(Fazer label flutuante)

- 26 (domingo)
Uhul seu ingresso está aqui
Fechar

- 27
Revisão


Project checklist
- Whole html
- Define Colors
- Define Font
- Define Section paddings (Padding block and width)
- Style each section

Section checklist
- Padding
- Font
- Images

Fontes em 1440
64
48
40
32
20




Ver os nth child
/* 
   .lineup li:nth-child(n + 2):nth-child(-n + 9){
      min-width: calc(50% - (var(--gap) / 2));
   }

   .lineup li:nth-child(n + 2):nth-child(-n + 9):nth-child(2n - 1){
      text-align: left;
   }

   .lineup li:nth-child(n + 2):nth-child(-n + 9):nth-child(2n){
      text-align: right;
   }

   .lineup li:nth-child(n + 2):nth-child(-n + 9):nth-child(4n + 2),
   .lineup li:nth-child(n + 2):nth-child(-n + 9):nth-child(4n + 3){
      transform: translateX(-.25em);
   }

   .lineup li:nth-child(n + 2):nth-child(-n + 9):nth-child(4n),
   .lineup li:nth-child(n + 2):nth-child(-n + 9):nth-child(4n + 1){
      transform: translateX(.25em);
   } */
/* 
   .lineup li:nth-child(n + 2):nth-child(-n + 5):nth-child(2n){
      min-width: calc(50% - (var(--gap) / 2));
   }

   .lineup li:nth-child(n + 2):nth-child(-n + 5):nth-child(2n - 1){
      min-width: calc(50% - (var(--gap) / 2));
   }

   .lineup li:nth-child(n + 6):nth-child(-n + 9):nth-child(2n){
      min-width: calc(50% - (var(--gap) / 2));
   }

   .lineup li:nth-child(n + 6):nth-child(-n + 9):nth-child(2n - 1){
      min-width: calc(50% - (var(--gap) / 2));
   } */

   Accordio transition? using max-height (cant use percentage)


   Highlight:
   - A experiência - Banner:
   Criei o efeito degradê colocando o bg como pseudoelemento e aplicando opacidade nele. 
   Precisei ajustar z-index e a interação dele com o header.
   Apliquei z-index no header, e isolation na section, bem como z-index no h1