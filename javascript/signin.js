const btnLoginElement = document.getElementById('btn-login');

const btnCreateNewAccountElement = document.getElementById('btn-create-new-account');

const btnAlreadyHaveAccountElement = document.getElementById('btn-already-have-account');

btnLoginElement && btnLoginElement.addEventListener('click', () => location.href = '../index.html');

btnCreateNewAccountElement && btnCreateNewAccountElement.addEventListener('click', () => location.href = '../pages/signup.html');

btnAlreadyHaveAccountElement && btnAlreadyHaveAccountElement.addEventListener('click', () => location.href = '../pages/signin.html');