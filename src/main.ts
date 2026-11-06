import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));



const navbar = document.getElementById("navbar");

if (navbar) {
  navbar.innerHTML = `
        <nav class="navbar">
            <div class="logo">Eddie's Site</div>

            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="books.html">Books</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="magazines.html">Magazines</a></li>
                <li><a href="newsroom.html">Newsroom</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="television.html">Television</a></li>
            </ul>
        </nav>
    `;
}
