javascript:!function(){function t(t){return document.getElementById(t)}function e(t){return document.getElementsByTagName(t)}function l(t){return document.createElement(t)}function s(t,e){t.appendChild(e)}function a(t,e){var l=document.styleSheets[document.styleSheets.length-1];l.insertRule(t+"{"+e+"}",l.cssRules.length)}function i(t,e,l){t.setAttribute(e,l)}function r(t){var e=l("div");return e.innerHTML=t,e.firstChild}function c(){i(L,"src","https://www.youtube.com/embed/tGsKzZtRwxw?loop=1&autoplay=1")}var o=t("stream-items-id"),n=e("body")[0];n.remove();for(var h=e("link"),m=0;m<h.length;m++)"stylesheet"==h[m].rel&&h[m].parentNode.removeChild(h[m]);var w=e("html")[0],d=l("body");s(w,d);var v=l("article");v.className="starwars";var g=l("div");g.className="animation";var p=l("section");p.className="intro";var f=document.createTextNode("A long time ago, in a galaxy");s(p,f),f=l("br"),s(p,f),f=document.createTextNode("far,far away...."),s(p,f),s(g,p);var y=l("section");y.className="titles";var w=l("div");i(w,"contenteditable","true"),i(w,"spellcheck","false"),s(w,o),s(y,w),s(g,y);var b=l("section");b.className="logo";var u='<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="693.615px" height="419.375px" viewBox="0 0 693.615 419.375" enable-background="new 0 0 693.615 419.375" xml:space="preserve"><g id="Layer_2"><g><path fill="#FFE81F" d="M148.718,221.207l8.67,25.461c4.691,13.768,8.879,24.779,9.425,24.779c0.009,0,0.017-0.004,0.024-0.01c0.6-0.53,17.57-49.811,17.57-49.811h32.89l-39.68,115.619h-22.86c0,0-24.4-70.471-24.3-70.739l-25.47,69.851h-22.63l-39.18-115.15l32.73,0.021c0,0,17.929,50.821,18.168,50.821c0.001,0,0.001-0.001,0.002-0.002l17.89-50.841H148.718 M32.003,213.2l3.601,10.584l39.18,115.149l1.845,5.424h5.729h22.63h5.598l1.918-5.26l17.685-48.5c1.524,4.434,3.171,9.213,4.818,13.988c6.089,17.655,12.191,35.277,12.191,35.277l1.864,5.383h5.696h22.86h5.712l1.854-5.403l39.68-115.618l3.637-10.598h-11.204h-32.89h-5.706l-1.858,5.396c-2.974,8.635-6.921,20.031-10.296,29.676c-0.509-1.463-1.039-3.001-1.587-4.611l-8.669-25.46l-1.846-5.421h-5.727h-36.75h-5.666l-1.881,5.345l-10.453,29.706c-3.453-9.706-7.456-21.017-10.516-29.691l-1.882-5.334l-5.657-0.004l-32.73-0.021L32.003,213.2L32.003,213.2z"/></g><g><path fill="#FFE81F" d="M655.258,220.758l-0.075,30.305c0,0-32.643-0.109-49.239-0.109c-5.521,0-9.266,0.013-9.444,0.045c-2.86,0.521-4.681,6.602-3.87,9.271c0.399,1.35,3.391,5.76,6.63,9.81c3.229,4.051,8.54,10.681,11.78,14.729c8.319,10.381,9.46,12.43,10.229,18.391c1.25,9.681-3.329,20.16-11.829,27.07c-8.518,6.93-8.145,6.979-71.383,6.979c-0.916,0-1.835,0-2.777,0c-38.46-0.01-58.8-0.329-61.761-0.989c-5.26-1.19-13.64-8.03-35.79-29.28c-7.967-7.636-15.309-14.322-15.686-14.324c-0.01,0-0.015,0.006-0.015,0.016l-0.261,44.579l-35.899-0.159l-0.221-114.98h45.271h34.79c24.13,0.871,40.46,24.91,37.21,40.24c-0.74,3.479-2.62,8.521-4.181,11.2c-3.21,5.5-11.38,12.56-18.011,15.591c-2.449,1.108-4.449,2.398-4.449,2.858c0,1.71,8.061,9.649,11.08,10.91c2.579,1.079,10.09,1.319,43.21,1.319c3.882,0,7.408,0.002,10.608,0.002c33.293,0,31.618-0.24,34.19-5.741c1.801-3.83,0.431-6.12-12.239-20.39c-16.051-15.971-14.37-23.621-14.48-29.271c-0.229-6.77,5.102-28.069,32.812-28.069L655.258,220.758 M440.188,273.878c15.37,0,18.49-0.239,21.761-1.66c11.04-4.8,11.63-18.979,1.04-25.271c-2.319-1.381-5.3-1.609-21.96-1.7l-19.279-0.101c0.159,0.15-0.061,27.57-0.061,27.57S426.518,273.878,440.188,273.878 M663.277,212.758h-8.021h-73.8c-16.032,0-25.515,6.328-30.646,11.637c-8.347,8.633-10.313,19.504-10.162,24.629c0.008,0.427,0.003,0.865-0.002,1.322c-0.073,8.329,1.154,17.758,16.659,33.246c3.065,3.452,8.193,9.239,10.131,12.115c-4.238,0.521-14.98,0.521-26.262,0.521h-4.792l-5.816-0.002c-19.904,0-36.688-0.057-40.128-0.736c-0.481-0.314-1.156-0.854-1.898-1.498c6.877-4.235,13.83-10.799,17.104-16.412c1.987-3.413,4.178-9.243,5.098-13.568c2.04-9.625-1.325-21.236-9.001-31.068c-8.956-11.471-21.985-18.334-35.746-18.83l-0.145-0.006h-0.145h-34.79h-45.271h-8.016l0.016,8.017l0.221,114.979l0.016,7.949l7.949,0.035l35.899,0.159l7.988,0.035l0.047-7.988l0.155-26.706c0.733,0.696,1.491,1.419,2.269,2.165c24.227,23.24,32.359,29.679,39.562,31.308c1.979,0.441,5.253,1.172,63.523,1.188h2.779c31.546,0,47.38,0,56.799-0.91c10.789-1.043,14.259-3.49,19.461-7.725l0.173-0.141c10.685-8.687,16.323-21.83,14.715-34.3c-1.048-8.11-3.194-11.479-11.922-22.368l-2.594-3.24c-3.04-3.799-6.713-8.387-9.175-11.475c-1.986-2.484-3.546-4.689-4.487-6.133c1.236-0.003,2.841-0.005,4.918-0.005c16.395,0,48.887,0.108,49.213,0.11l8.008,0.026l0.02-8.008l0.075-30.306L663.277,212.758L663.277,212.758z M429.739,265.586c0.013-2.021,0.025-4.287,0.038-6.557c0.01-2,0.019-4.004,0.022-5.84l11.187,0.058c6.429,0.035,16.103,0.088,17.989,0.623c2.407,1.461,3.75,3.72,3.604,6.06c-0.08,1.264-0.682,3.588-3.821,4.951c-1.75,0.76-4.54,0.997-18.57,0.997C435.738,265.878,432.305,265.749,429.739,265.586L429.739,265.586z"/></g><g><path fill="#FFE81F" d="M312.908,220.287l40.29,115.92l-32.83,0.15l-5.45-17.41l-58.7-0.471l-5.18,17.431l-32.5-0.341l39.78-115.229L312.908,220.287 M286.507,237.283c-0.083,0.333-5.144,14.219-10.222,28.104c-5.12,14-10.257,28-10.328,28.109c0,0.001-0.001,0.001,0,0.001l0,0c0,0,0,0,0-0.001c0.136-0.04,18.316-0.08,29.968-0.08c5.453,0,9.475,0.009,9.55,0.029c0.001,0.004,0.001,0.005,0.001,0.005s0-0.001,0-0.003c0,0,0,0-0.001-0.002C305.271,292.916,286.566,237.959,286.507,237.283c0.001-0.004,0.001-0.006,0.001-0.006l0,0C286.507,237.277,286.507,237.279,286.507,237.283 M318.595,212.282l-5.693,0.005l-54.59,0.051l-5.696,0.005l-1.859,5.386l-39.78,115.229l-3.623,10.494l11.102,0.115l32.5,0.341l6.033,0.063l1.719-5.782l3.466-11.662l46.854,0.375l3.708,11.848l1.765,5.638l5.907-0.026l32.829-0.15l11.195-0.052l-3.676-10.574l-40.29-115.92L318.595,212.282L318.595,212.282z M277.472,285.424c1.515-4.129,3.556-9.71,6.327-17.289c0.869-2.376,1.664-4.551,2.393-6.545c0.663,1.956,1.385,4.084,2.169,6.398c0.646,1.906,3.485,10.27,5.92,17.428C287.041,285.416,281.591,285.417,277.472,285.424L277.472,285.424z"/></g><g><path fill="#FFE81F" d="M326.488,81.928v28.6h-57.28v87.47h-34.15v-87.54l-66.86,0.19c-8.06,0-9.14,6.42-9.14,8.88c0,3.02,1.97,6.04,12.79,19.74c7.02,8.9,13.47,17.78,14.32,19.72c4.64,10.68-1.36,27.32-12.29,34.08c-7.79,4.813-6.459,4.931-64.308,4.931c-2.974,0-6.096,0-9.392,0h-62.27v-32.13h97.9l2.89-2.01c1.95-1.36,3.08-3.23,3.51-5.79c0.6-3.68,0.29-4.16-11.8-17.78c-14.29-16.1-15.8-19.04-15.06-29.32c0.84-11.73,11.3-28.77,29.58-28.77L326.488,81.928M334.488,73.916l-8.013,0.012l-181.56,0.27c-10.458,0-20.171,4.518-27.342,12.722c-5.814,6.652-9.63,15.429-10.206,23.477c-0.973,13.511,2.137,18.393,17.056,35.202c4.33,4.877,8.447,9.516,9.821,11.486c-0.022,0.079-0.042,0.13-0.054,0.159c-0.015,0.012-0.038,0.03-0.07,0.052l-0.822,0.572H37.908h-8v8v32.13v8h8h62.27h4.937h4.455c28.522,0,42.6-0.027,50.894-0.635c9.49-0.695,12.518-2.323,17.054-5.14l0.566-0.351c14.262-8.821,21.612-29.827,15.422-44.074c-1.91-4.358-14.003-19.746-15.376-21.486c-3.796-4.807-10.062-12.74-11.054-15.036c0.024-0.193,0.071-0.393,0.121-0.532c0.165-0.042,0.481-0.098,1.001-0.098l58.86-0.167v79.517v8h8h34.15h8v-8v-79.47h49.28h8v-8v-28.6V73.916L334.488,73.916z"/></g><g><path fill="#FFE81F" d="M419.548,82.857l40.18,116.22l-32.77-0.18l-5.32-17.41l-58.439-0.26l-5.221,16.77h-33.369l39.739-115.14H419.548 M372.737,156.478l39.801-0.05c0.001,0,0.001,0.001,0.001,0.001c0.136,0-19.342-57.201-19.472-57.241l0,0C392.925,99.183,372.288,156.478,372.737,156.478 M425.247,74.857h-5.699h-55.2h-5.701l-1.86,5.39l-39.74,115.141l-3.662,10.61h11.225h33.37h5.889l1.75-5.623l3.461-11.121l46.632,0.207l3.599,11.774l1.721,5.629l5.887,0.033l32.77,0.18l11.297,0.062l-3.691-10.676l-40.18-116.22L425.247,74.857L425.247,74.857z M383.851,148.464c2.468-7.027,5.904-16.657,9.014-25.312c2.948,8.644,6.209,18.245,8.588,25.29L383.851,148.464L383.851,148.464z"/></g><g><path fill="#FFE81F" d="M532.396,82.857c25.921,0,43.91,0.37,47.37,0.97c8,1.39,15.23,5.66,20.65,12.22c5.67,6.86,6.97,10.14,7.71,19.54c1.061,13.27-5.25,24.72-17.7,32.15c-3.63,2.17-7.359,4.28-8.29,4.7c-1.43,0.65-1.239,1.27,1.32,4.27c1.649,1.93,4.51,4.68,6.35,6.11l3.36,2.61l62.08,0.89l0.609,31.68h-38.061c-29.439,0-38.86-0.27-41.62-1.2c-4.13-1.4-14.069-9.82-34.271-29.04l-14.42-13.72l0.152,43.96h-37.043V82.857H532.396M526.938,134.627h19.671c19.141,0,19.739-0.06,22.47-2.11c4.881-3.66,6.609-7.43,6.091-13.22c-0.53-5.97-2.83-9.08-8.601-11.58c-3.25-1.42-6.381-1.65-21.721-1.65h-17.91V134.627 M532.396,74.857h-41.8h-8v8v115.14v8h8h37.043h8.028l-0.028-8.028l-0.088-25.216l0.84,0.799c24.986,23.773,32.356,29.173,37.218,30.821c3.733,1.259,9.982,1.624,44.188,1.624h38.061h8.154l-0.156-8.154l-0.609-31.68l-0.148-7.734l-7.734-0.111l-59.402-0.851l-1.245-0.967c-0.396-0.309-0.876-0.717-1.389-1.179c0.446-0.264,0.854-0.507,1.207-0.717c15.003-8.953,22.866-23.407,21.569-39.653c-0.863-10.959-2.82-15.896-9.52-24c-6.584-7.969-15.621-13.298-25.447-15.005C575.678,74.999,548.257,74.857,532.396,74.857L532.396,74.857z M534.938,114.067h9.91c14.027,0,16.806,0.233,18.518,0.981c3.25,1.408,3.58,2.091,3.835,4.957c0.256,2.848-0.097,3.994-2.922,6.112c-0.093,0.069-0.164,0.123-0.223,0.166c-1.865,0.345-8.786,0.345-17.447,0.345h-11.67L534.938,114.067L534.938,114.067z"/></g></g></svg>',k=r(u);s(b,k),s(g,b),s(v,g),s(d,v);var L=l("iframe");i(L,"width","0"),i(L,"height","0"),i(L,"src","https://www.youtube.com/embed/tGsKzZtRwxw?loop=1&autoplay=0"),i(L,"style","display:none"),s(d,L),setTimeout(c,4e3),a("html,body","width: 100%;"),a("html,body","height: 100%;"),a("html,body",'font: 700 1em "News Cycle", sans-serif;'),a("html,body","letter-spacing: .10em;"),a("html,body,a,a:hover,s,b","color: #ff6 !important;"),a("html,body","background: #000;"),a("html,body","overflow: hidden;"),a("html,body","margin: 0;"),a("ol","list-style:none;"),a(".starwars section","position: absolute;"),a(".starwars section","top: 45%;"),a(".starwars section","left: 50%;"),a(".starwars section"," z-index: 1;"),a(".starwars .intro","width: 16em;"),a(".starwars .intro","margin: 0 0 0 -8em;"),a(".starwars .intro","font-size: 200%;"),a(".starwars .intro","font-weight: 400;"),a(".starwars .intro","color: #4bd5ee;"),a(".starwars .intro","opacity: 0;"),a(".starwars .intro","-webkit-animation: intro 5s ease-out 1s;"),a(".starwars .intro","animation: intro 5s ease-out 1s;"),a(".starwars .logo","opacity: 0;"),a(".starwars .logo","-webkit-animation: logo 9s ease-out 7s;"),a(".starwars .logo","animation: logo 9s ease-out 7s;"),a(".starwars .logo svg","width: inherit;"),a(".starwars .titles","width: 20.65em;"),a(".starwars .titles","margin: 0 0 0 -10.325em;"),a(".starwars .titles","top: auto;"),a(".starwars .titles","bottom: 0;"),a(".starwars .titles","height: 50em;"),a(".starwars .titles","font-size: 350%;"),a(".starwars .titles","text-align: left;"),a(".starwars .titles","overflow: hidden;"),a(".starwars .titles","-webkit-transform-origin: 50% 100%;"),a(".starwars .titles","-ms-transform-origin: 50% 100%;"),a(".starwars .titles","transform-origin: 50% 100%;"),a(".starwars .titles","-ms-transform: perspective(300px) rotateX(25deg);"),a(".starwars .titles","-webkit-transform: perspective(300px) rotateX(25deg);"),a(".starwars .titles","transform: perspective(300px) rotateX(20deg);"),a(".starwars .titles > div","position: absolute;"),a(".starwars .titles > div","top: 100%;"),a(".starwars .titles > div","-webkit-animation: titles 80 linear 10s;"),a(".starwars .titles > div","animation: titles 80s linear 10s;"),a(".starwars .titles > div > p","margin: 1.35em 0 1.85em 0;"),a(".starwars .titles > div > p","line-height: 1.35em;"),a(".starwars .titles > div > p","-webkit-backface-visibility: hidden;"),a(".starwars .titles > div > p","backface-visibility: hidden;"),a("div.stream-item-footer, button, div.card2, div.tweet-translation, div.dismissible-content","display:none;"),a(".starwars .titles div","font-size:80%;"),a(".OldMedia-photoContainer img","width:50%;");var M="";M="0% {opacity: 0;} 20% {opacity: 1;} 90% {opacity: 1;} 100% {opacity: 0;}",a("@-webkit-keyframes intro",M),a("@keyframes intro",M),M="0% {top: 100%;opacity: 1;} 95% {opacity: 1;} 100% {top: 20%;opacity: 0;}",a("@-webkit-keyframes titles",M),a("@keyframes titles",M),M=" 0% {opacity: 1; width: 18em; margin: -9em 0 0 -9em; -ms-transform: scale(2.75); -webkit-transform: scale(2.75); transform: scale(2.75); } ",M+=" 50% {opacity: 1; width: 18em; margin: -9em 0 0 -9em;} ",M+=" 100% {opacity: 0; -ms-transform: scale(0.1); -webkit-transform: scale(0.1); transform: scale(0.1); width: 18em; margin: -9em 0 0 -9em;} ",a("@-webkit-keyframes logo",M),a("@keyframes logo",M)}();