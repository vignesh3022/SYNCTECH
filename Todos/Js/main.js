document.addEventListener('DOMContentLoaded', () => {
    const themeSelectors = document.querySelectorAll('.theme-selector');
    const body = document.body;
    const title = document.getElementById('title');
    const input = document.querySelector('.todo-input');
    const button = document.querySelector('.todo-btn');
    const ul = document.querySelector('.todo-list');

    themeSelectors.forEach(selector => {
        selector.addEventListener('click', (e) => {
            const theme = e.target.classList[0].split('-')[0];
            setTheme(theme);
        });
    });

    const setTheme = (theme) => {
        body.className = theme;
        title.className = theme + '-title';
        input.className = theme + '-input';
        button.className = theme + '-button';
        document.querySelectorAll('li').forEach(li => {
            li.className = theme + '-li';
        });
    };

    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value.trim();
        if (task) {
            addTask(task);
            input.value = '';
        }
    });

    const addTask = (task) => {
        const li = document.createElement('li');
        li.className = body.className + '-li';
        li.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="complete-btn"><i class="fas fa-check"></i></button>
                <button class="trash-btn"><i class="fas fa-trash"></i></button>
            </div>
        `;
        ul.appendChild(li);

        li.querySelector('.complete-btn').addEventListener('click', () => {
            li.querySelector('span').classList.toggle('completed');
        });

        li.querySelector('.trash-btn').addEventListener('click', () => {
            li.remove();
        });
    };
});
