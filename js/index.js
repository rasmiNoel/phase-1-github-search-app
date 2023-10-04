const init = () => {

    // Obtain list from GitHub API
    const getUserList = () => {
        const url = 'https://api.github.com/users';
        fetch(url)
            .then(response => response.json())
            .then(users => displayUserList(users))

        // Display Use list
        const displayUserList = (users) => {
            const ul = document.querySelector('#user-list');

            users.forEach(user => {
                const li = document.createElement('li');
                const urlParams = new URLSearchParams(window.location.search);
                let userId = urlParams.get('id');
                const a = document.createElement("a");
                a.href = `index.html?id=${user.id}`;
                a.innerText = user.login;
                li.appendChild(a);
                ul.appendChild(li);
            });
        }
    }

    // Obtain list from GitHub API  
    const getReposList = () => {
        const url = 'https://api.github.com/users/repos';
        fetch(url)
            .then(response => response.json())
            .then(repos => displayReposList(repos))

        // Display Repos list
        const displayReposList = (repos) => {
            const ul = document.querySelector('#repos-list');

            repos.forEach(repo => {
                const li = document.createElement('li');
                li.textContent = repo.name;
                ul.appendChild(li);
            });
        }
    }
    getUserList();
    getReposList();

    // Form that searchers for users
    const form = document.querySelector('#github-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('#search');
        const search = input.value;
        const url = `https://api.github.com/search/users?q=${search}`;
        fetch(url)
            .then(response => response.json())
            .then(users => displaySearch(users))

        // Display search results
        const displaySearch = (users) => {
            const ul = document.querySelector('#user-list');
            ul.innerHTML = '';
            users.items.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.login;
                ul.appendChild(li);
            });
        }
    });








































}
document.addEventListener('DOMContentLoaded', init);