import { silData } from './data.js';

// Initialize Lucide icons
const initIcons = () => {
    lucide.createIcons();
};

const appContainer = document.getElementById('main-content');
const searchResultsContainer = document.getElementById('search-results');

const router = () => {
    const path = window.location.hash.slice(1) || '/';
    console.log('Navigating to:', path);
    render(path);
};

const navigateTo = (path) => {
    window.location.hash = path;
};

// Make navigateTo global
window.navigateTo = navigateTo;

const render = (path) => {
    if (path === '/' || path === '') {
        renderHome();
    } else if (path === '/resumen') {
        renderResumen();
    } else {
        // Check if path matches a data ID
        const contentId = path.replace('/', '');
        const data = silData.find(item => item.id === contentId);
        if (data) {
            renderContent(data);
        } else {
            renderHome(); // Fallback
        }
    }
    initIcons();
};

const renderHome = () => {
    const template = document.getElementById('template-home');
    const content = template.content.cloneNode(true);

    // Populate Grid
    const grid = content.getElementById('home-grid');
    silData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'nav-card';
        card.onclick = () => navigateTo('/' + item.id);

        // Extract plain text for description (first 100 chars)
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = item.content;
        const text = tempDiv.textContent || tempDiv.innerText || "";
        const description = text.substring(0, 100) + '...';

        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${description}</p>
            <i data-lucide="arrow-right" class="card-icon"></i>
        `;
        grid.appendChild(card);
    });

    // Setup Search
    const searchInput = content.getElementById('main-search');
    const searchResults = content.getElementById('search-results');

    const performSearch = () => {
        const term = searchInput.value.toLowerCase().trim();
        // Force search to get matches
        const matches = getMatches(term);
        if (matches.length > 0) {
            // Auto-navigate to best match if user explicitly asked
            navigateTo('/' + matches[0].id);
            // Hide dropdown
            searchResults.classList.add('hidden');
        } else {
            // Show "No results" in dropdown
            handleSearch(term, searchResults);
        }
    };

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        // Only auto-search if it looks like a keyword (short), 
        // if it's long (question), wait for button or specific keywords
        if (term.length > 2) handleSearch(term, searchResults);
        else searchResults.classList.add('hidden');
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    const searchBtn = content.getElementById('search-btn');
    searchBtn.addEventListener('click', performSearch);

    searchInput.addEventListener('focus', () => {
        if (searchInput.value.length > 0) searchResults.classList.remove('hidden');
    });

    // Close search when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            if (searchResults) searchResults.classList.add('hidden');
        }
    });

    appContainer.innerHTML = '';
    appContainer.appendChild(content);

    // Re-initialize icons for the new button
    initIcons();
};

const getMatches = (rawTerm) => {
    // Question keyword removal for better matching
    const stopWords = ['que', 'es', 'el', 'la', 'los', 'las', 'un', 'una', 'como', 'cuando', 'donde', 'se', 'del', 'para', 'en', 'sobre', 'cuál', 'cual', 'y', 'o'];
    const keywords = rawTerm.split(' ').filter(word => !stopWords.includes(word) && word.length > 2);

    // If filtered out everything, use raw
    const searchTerms = keywords.length > 0 ? keywords : [rawTerm];

    return silData.map(item => {
        let score = 0;
        const titleLower = item.title.toLowerCase();
        const contentLower = item.content.toLowerCase();
        const contentText = item.content.replace(/<[^>]*>/g, '');

        // Check predefined questions for exact matches (High priority)
        if (item.questions) {
            item.questions.forEach(q => {
                // Check if raw term is basically the question
                if (rawTerm.includes(q) || q.includes(rawTerm)) score += 50;

                // Check individual keywords against questions
                searchTerms.forEach(term => {
                    if (q.includes(term)) score += 5;
                });
            });
        }

        searchTerms.forEach(term => {
            if (titleLower.includes(term)) score += 15;
            const count = (contentLower.match(new RegExp(term, 'g')) || []).length;
            score += count * 2;
        });

        // Determine snippet to show
        let snippet = "";
        if (item.shortAnswer && score > 20) {
            // If we have a good match and a short answer, use that!
            snippet = `<span style="color:var(--primary); font-weight:bold;">Respuesta:</span> ${item.shortAnswer}`;
        } else {
            // Standard snippet logic
            let snippetIndex = 0;
            for (let term of searchTerms) {
                const idx = contentLower.indexOf(term);
                if (idx !== -1) {
                    snippetIndex = idx;
                    break;
                }
            }
            snippet = contentText.substring(Math.max(0, snippetIndex - 40), snippetIndex + 100);
            if (snippetIndex > 40) snippet = '...' + snippet;
            if (snippet.length < contentText.length) snippet += '...';
        }

        return { ...item, score, snippet };
    }).filter(item => item.score > 0).sort((a, b) => b.score - a.score);
};

const handleSearch = (rawTerm, resultsContainer) => {
    if (rawTerm.length < 2) {
        resultsContainer.classList.add('hidden');
        return;
    }

    const matches = getMatches(rawTerm);

    if (matches.length > 0) {
        resultsContainer.innerHTML = matches.slice(0, 4).map((item, index) => `
            <div class="result-item" onclick="navigateTo('/${item.id}')">
                <h4>${item.title} ${index === 0 ? '<span style="font-size:0.7em; color:var(--primary); margin-left:5px;">★ Mejor Resultado</span>' : ''}</h4>
                <p>${item.snippet}</p>
            </div>
        `).join('');
        resultsContainer.classList.remove('hidden');
    } else {
        resultsContainer.innerHTML = `
            <div class="result-item" style="cursor: default">
                <h4 style="color:var(--text-muted)">Sin resultados directos</h4>
                <p>Intenta usar palabras clave como "riesgo", "norma", "ciclo", "sil".</p>
            </div>`;
        resultsContainer.classList.remove('hidden');
    }
};

const renderContent = (data) => {
    const template = document.getElementById('template-content');
    const content = template.content.cloneNode(true);

    // Setup Sidebar
    const sidebar = content.getElementById('sidebar-nav');
    silData.forEach(item => {
        const link = document.createElement('a');
        link.className = `sidebar-link ${item.id === data.id ? 'active' : ''}`;
        link.textContent = item.title;
        link.onclick = (e) => {
            e.preventDefault();
            navigateTo('/' + item.id);
        };
        sidebar.appendChild(link);
    });

    // Setup Content
    content.getElementById('article-title').textContent = data.title;
    content.getElementById('article-body').innerHTML = data.content;

    // Navigation Buttons
    const currentIndex = silData.findIndex(item => item.id === data.id);
    const prevBtn = content.getElementById('prev-btn');
    const nextBtn = content.getElementById('next-btn');

    if (currentIndex > 0) {
        prevBtn.onclick = () => navigateTo('/' + silData[currentIndex - 1].id);
    } else {
        prevBtn.disabled = true;
        prevBtn.style.opacity = 0.5;
    }

    if (currentIndex < silData.length - 1) {
        nextBtn.onclick = () => navigateTo('/' + silData[currentIndex + 1].id);
    } else {
        nextBtn.disabled = true;
        nextBtn.style.opacity = 0.5;
    }

    appContainer.innerHTML = '';
    appContainer.appendChild(content);
    window.scrollTo(0, 0);
};

const renderResumen = () => {
    const template = document.getElementById('template-resumen');
    const content = template.content.cloneNode(true);
    appContainer.innerHTML = '';
    appContainer.appendChild(content);
};

// Start
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
