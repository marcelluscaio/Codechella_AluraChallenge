# Caio-Chella

Your favorite coding festival (Readme under construction)

## Access

<a href="https://caio-chella.vercel.app/">Access the website</a>.

## Built with:

![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)   ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)


## Features

### General
Built with without the use of libraries or frameworks; <br>
Animation on header on hover (desktop) 
Animation on burger menu (mobile); <br>
Animation on banner's header; <br>
:on:Image optimization usin webp; <br>
Banner images framed properly from 320px to 2500px; <br>
:iphone: Responsive design from 320px to 2500px; <br>
:fountain_pen: Fluid typography; <br>
Social network icons with background animation on hover and focus
Custom scrollbar; <br>
Custom selection (try selecting text with your mouse); <br>
Keyboard-navigation friendly

### Home
Parallax banner
Lineup animation based on scroll; <br>

### Mapa Setores
Parallax banner
Interactive map (on hover and focus);

### Informações
Animation on accordion movement and arrow; <br>
Accordion can be navigated with keyboard; <br>
Accordion links are only accessible when the content is open 

### Ingresso
Label animation; <br>
Form validation with custom error display; <br>
Button Arrow Animation on hover and focus

### Seu Ingresso
QR Code takes to my github page;


## Some techniques used

### CSS-only navbar toggle
The menu is toggled using CSS only, through a checkbox linked to a label.

### Animated underline on menu
The line addapts to each navigation item size and position as they are hovered. I wanted it to happen only when hovering, but wanted it to disappear when hover stoped. But not so fast. To achieve that I combined mouseover, mouseout and timeout on JavaScript.

### Burger Animation
I used divs as lines for the burger icon. That way, I was able to transition them. I used differente transition properties for opening and closing the menu, and cubic-bezier to get a bouncy effect. 

### Throttle on Scroll event listener
I wanted the lineup animation to be linked to scroll. However, scroll events are triggered too many times, making the script too heavy. To solve that I used a throttle function, that limits the amount of times the event is triggered to two times per second. I also kill the event listener after the two lineups are rendered.

### Lineup animation
To make each band appear one after the other I linked the transition delay to a CSS variable that is set by JavaScript. To make each animation start from a different position i used nth-child even and odd, and to style the groups of bands I used a combination of nth-child, for example:
```css
.lineup li:nth-child(n + 2):nth-child(-n + 5)
```
This helped me with code legibility and maintenance.

### Footer icons animation
To achieve the effect on the footer icons I used them as masks over the li. When hovered or focused, the background is moved. And of course, theres is transitions to make it smooth.

### Cards carefully not aligned
On Mapa de Setores the cards on the desktop layout are not aligned. To achieve that, and get the same proportion on every screen I used margin-bottom on the cards, and only on the second one I set the margin-bottom to zero, and used align-self to put it in the bottom.

### Dynamic border-radius
Sometimes we set border radius as a fixed value, and if object grows or shrinks, its appearance changes. I was careful to keep elements' shape the same whenever it was possible. An example on that: the images on Mapa de Setores. Their border-radius is normally 4.5vw:

```css
.setores-detalhes article > div{
   padding-top: 76.7%;   
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   border-radius: 4.5vw;
   margin-bottom: calc(var(--fs-3) * .75); /*Equal to h3 margin-bottom*/
}
```
But on desktop they are not 100% of the container anymore. So I changed it:

```css
.setores-detalhes article > div{
   width: 100%;
   padding-top: 65%;
   border-radius: 1.44vw;
   /*For the border-radius I calculated the image's width: 100% - gap (~ 3.4%) / 3. I then applied the rule of three with 4.5vw -> 100% and 32% -> 1.44vw  */
}
```


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
- [X] Set scrollbar
- [X] Make burger animation
- [X] Make active link marking
- [X] Make animation when hovering links
- [X] General information section - Start
- [X] General info mobile
- [X] General info tablet
- [X] General info desktop
- [X] Line-up Padding
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

page experiencia
- [X] Banner on mobile
- [X] Filter on banner
- [X] Tablet
- [X] Desktop
- [X] General info section

page setores
- [X] Banner
- [X] Banner responsivity
- [X] Create cards
- [X] Enhance color-scheme at mapa - Change color in legenda and change svg accordingly
- [X] Map can be navigated by tab

- [X] Normalizar margens (dentro de um elemento tem que ser todas iguais)
- [X] Fazer navegação de tab nas redes sociais footer
- [X] Fazer select no footer
- [X] Padding top seção mapa de setores (Legenda desce)
- [X] Acertar borderradius das fotos cards mapa setores (tablet talvez e desktop com certeza)
- [X] Acertar o svg e fazer seleção ligada à legenda

Accordion
- [X] Accordion hover action (invert button color);
- [X] Include arrow
- [X] make arrow rotate
- [X] Section banner
- [X] Accessibility 

Form
- [ ] Make action
- [ ] Test keyboard navigation
- [ ] Focus, hover, 

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

   Use of focus within to style li on footer