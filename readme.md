# Caio-Chella

Your favorite coding festival (Readme under construction)

## Access

<a href="https://caio-chella.vercel.app/">Access the website</a>.

## Built with:

![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)   ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)


## Features

:gear: Animation on navigation, banner, lineup, burger menu, accordion, and form; <br>
:on:Image optiization; <br>
:five: Pentagon-shaped section; <br>
:label: Forms built with animated label as placeholder; <br>
:iphone: Responsive design; <br>
:fountain_pen: Fluid typography

## Some techniques used

### CSS-only navbar toggle
The menu is toggled using CSS only, through a checkbox linked to a label.

### Animated underline on menu
The only JavaScript used in the page was to create the Underline movement. The line addapts to each navigation item size and position as they are hovered.

### Pentagon shaped section
There are some different ways to build sections in shapes other than boxes. In this project, the challenge was doing so with a gradient background (making it harder to use the Skewed pseudo element technique) and allowing content to overflow the pentagon (which would be clipped by clip-path).

The solution was isolating the background as separate div, which is placed behind the section content.

### Cards alignment
The layout for the section "Nosso diferencial" had links that were not aligned. I chose to align these items to enhance UX. The technique to do that involved using CSS Variables.

I set the padding bottom of the card as the variable 'padding bottom'. As the card is the link's "Saber mais" parent, it can access that variable, so all position are the same.

```css
.advantages__card{
   position: relative;
   
   flex-grow: 1;
   width: 20%;
   --padding-bottom: 1em;
   padding-bottom: var(--padding-bottom);
   background-color: #FFFFFF;   
}
.advantages__card > a{   
   display: inline-block;
   position: absolute;
   bottom: var(--padding-bottom);
   color: var(--fontcolor-orange);
   font-size: var(--fontsize-2);   
   text-decoration: none;
}
```

### Label as placeholder
Placeholders can be a problem when it comes to accessibility. I chose not to use placeholders and use labels instead. And I wanted them to be inside o inputs, just like a placeholder would be. Absolute positioning achieves that:

Attention to the use of line height, the top value (same as input's top padding) and left value (same as input's left padding).
```css
.lead-capture__form__field > label{
   position: absolute;
   top: .25em;
   left: 1em;
   color: var(--fontcolor-orange);
   font-family: var(--font-opensans);
   font-size: var(--fontsize-2);
   line-height: 1.5;
   transition: top 1s ease-in-out, left 1s ease-in-out;
}
```
Now I wanted the label to move out of the input when user clicks on input (focus), and I didn't want it to go back when the input has text inside of it.

Here I am selecting the input's div that has an input that is focused, or that doesn't have the placeholder shown (I had to put a blank placeholder for it to work), and selecting the label from that div.

```css
.lead-capture__form__field:has(:is(input:focus, input:not(:placeholder-shown))) > label{
   top: calc(100% + .25em);
   left: 0;
}
```

### Gradient border
In the project I used two different techniques to set a linear-gradient on borders.

The first one uses border-image. This technique does not allow us to set a border-radius.

The other technique uses the background property, which can set background-clip. This way, we set a background for the padding, and another background that goes up to the border. In order for that background to be visibile we need a transparent border.

```css
.lead-capture__form > :is(button:focus,  button:hover){
   border-width: 1px;
   border-style: solid;
   border-image: var(--gradient-orange) 1;
}
.contact__form__field > :is(input, textarea){
   background: var(--gradient-lightblue) padding-box, var(--gradient-blue) border-box;
   border: 1px solid transparent;
}
```





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
- [X] Make active link marking
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
- [X] General info section

page setores
- [X] Banner
- [X] Banner responsivity
- [X] Create cards
- [ ] Enhance color-scheme at mapa - Change color in legenda and change svg accordingly

- [ ] Normalizar margens (dentro de um elemento tem que ser todas iguais)
- [ ] Fazer navegação de tab nas redes sociais footer
- [ ] Fazer select no footer
- [X] Padding top seção mapa de setores (Legenda desce)
- [X] Acertar borderradius das fotos cards mapa setores (tablet talvez e desktop com certeza)
- [ ] Acertar o svg e fazer seleção ligada à legenda

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