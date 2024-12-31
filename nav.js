document.addEventListener('DOMContentLoaded', function() {
    const nav = `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="photos.html">Photos</a></li>
                <li><a href="agnus_dei.html">Agnus Dei</a></li>
            </ul>
        </nav>
    `;
    
    document.getElementById('nav-placeholder').innerHTML = nav;
});