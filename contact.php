<?php include 'header.php'; ?>
            <main class="site-content">
                <h1>Where You Can Find Me:</h1>
                <article class="contact">
                    <section class="card">
                        <a href="https://github.com/meghanduprey" target="_blank"><img src="assets/githubgreen.png" alt="github logo"></a>
                        <a href="https://github.com/meghanduprey" target="_blank"><h2>GitHub</h2></a>
                    </section>

                    <section class="card">
                        <a href="https://meghanmduprey.wordpress.com/" target="_blank"><img src="assets/wordpressgreen.png" width="80" height="80" alt="WordPress logo"></a>
                        <a href="https://meghanmduprey.wordpress.com/" target="_blank"><h2>Blog</h2></a>
                    </section>
                    <section class="card">
                        <a href="https://www.instagram.com/meghanduprey/" target="_blank"><img src="assets/instagram.png" width="80" height="80" alt="Instagram logo"></a>
                        <a href="https://www.instagram.com/meghanduprey/" target="_blank"><h2>Instagram</h2></a>
                    </section>
                </article>
                <section class="contact-form">
                    <form method="POST" action="https://formspree.io/meghan.duprey@gmail.com" name="contact" onsubmit="return validate()">
                        <input type="text" name="name" placeholder="Your name">
                        <input type="email" name="email" placeholder="Your email">
                        <textarea name="message" placeholder="Your Message"></textarea>
                        <button type="submit">Email Me!</button>
                    </form>
                </section>
            </main>
<?php include 'footer.php'; ?>