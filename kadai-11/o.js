<html>
<head>
<style>
    button {
        font-size: 50px;
    }
</style>
</head>
<body>
    <button id="button">おみくじをひく</button>
    <script>
        const button = document.getElementById('button')
        button.addEventListener('click', () => {
            fetch('https://4000-f5003007-95f8-4826-9a8f-08f9c3f364cd.ws-ap01.gitpod.io/')
                .then(res => res.text())
                .then(data => alert(data))
        })
    </script>
</body>
</html>



