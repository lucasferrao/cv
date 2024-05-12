 //Scroll function
 window.addEventListener('wheel', handleScroll, { passive: false });

 let isScrolling = false; // Flag para controlar o estado do scroll
 
 function handleScroll(e) {
     e.preventDefault(); // Previne o scroll padrão
     if (isScrolling) return; // Se já está processando um scroll, ignora o evento
 
     isScrolling = true;
     window.setTimeout(() => { isScrolling = false; }, 1500); // Temporiza para evitar múltiplos scrolls
 
     const sections = Array.from(document.querySelectorAll('section'));
     const currentSectionIndex = sections.findIndex(section => 
         section.getBoundingClientRect().top <= window.innerHeight / 2 &&
         section.getBoundingClientRect().bottom >= window.innerHeight / 2
     );
 
     if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
         // Scroll para baixo
         sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
     } else if (e.deltaY < 0 && currentSectionIndex > 0) {
         // Scroll para cima
         sections[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
     }
 }

 function throttle(fn, wait) {
    let inThrottle, lastFn, lastTime;
    return function() {
        const context = this, args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(function () {
                if (Date.now() - lastTime >= wait) {
                    fn.apply(context, args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
}

window.addEventListener('wheel', throttle(handleScroll, 1500), { passive: false });

function handleScroll(e) {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1; // Detecta a direção do scroll
    const sections = Array.from(document.querySelectorAll('section'));
    const visibleSectionIndex = sections.findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    });

    if (direction === 1 && visibleSectionIndex < sections.length - 1) {
        // Scroll para baixo
        sections[visibleSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
    } else if (direction === -1 && visibleSectionIndex > 0) {
        // Scroll para cima
        sections[visibleSectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
    }
}

//More info button
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const button = section.querySelector('.more-info');
            if (rect.top < window.innerHeight && rect.bottom > 0) { // Section is visible
                button.classList.add('show');
            } else {
                button.classList.remove('show');
            }
        });
    });
});


//Popup function
function openPopup(filePath) {
    fetch(filePath)  // Usa o parâmetro filePath para o caminho do arquivo HTML
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('popup-text').innerHTML = html;
            document.getElementById('popup').style.display = 'block';
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('popup-text').innerHTML = '<p>Ocorreu um erro ao tentar carregar o conteúdo.</p>';
        });
}

// Função para fechar o popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


















/**
//Pop up function
function showPopup(text) {
    var popup = document.getElementById("popup");
    var popupText = document.getElementById("popup-text");
    popupText.textContent = text; // Configura o texto do popup
    popup.style.display = "block"; // Mostra o popup

    var closeButton = document.getElementsByClassName("close")[0];
    closeButton.onclick = function() {
        popup.style.display = "none"; // Esconde o popup quando o botão de fechar é clicado
    };

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none"; // Esconde o popup quando clicado fora do conteúdo do popup
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    // Selecione todos os links internos
    const links = document.querySelectorAll('nav a[href^="#"]');

    // Adicione um listener de evento para cada link
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link
            let target = document.querySelector(this.getAttribute('href')); // Seleciona o alvo do link

            if (target) {
                // Calcula a posição do alvo e realiza o scroll
                const yOffset = -50; // Ajuste este valor se a navbar cobrir parte da seção
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({top: y, behavior: 'smooth'});
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('button-home');
    if (button) {
        button.addEventListener('click', function() {
            loadPopupContent('bio.html');  // Certifique-se que o caminho está correto
        });
    }
});

function loadPopupContent(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('popup-text').innerHTML = xhr.responseText;
            document.getElementById('popup').style.display = 'block';
        }
    };
    xhr.send();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

 */

