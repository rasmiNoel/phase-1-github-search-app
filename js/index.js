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
                li.innerText = user.login;
                ul.appendChild(li);
            });
        }
    }

    // Obtain list from GitHub API  
    const getReposList = () => {
        const url = 'https://api.github.com/users';
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








































}
document.addEventListener('DOMContentLoaded', init);