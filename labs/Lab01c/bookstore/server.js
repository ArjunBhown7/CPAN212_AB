const http = require("http");

/*

/
/about
/contact

*/

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to the homepage");
    res.end();
  }
  else if (req.url === "/contact") {
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us | Book Haven</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Book Haven</h1>
        <p>Your one-stop shop for all your reading needs</p>
    </header>
    
    <section class="contact-info">
        <h2>Contact Information</h2>
        <p>If you have any questions or concerns, feel free to contact us via any of the methods below.</p>
        <ul>
            <li><strong>Email:</strong> contact@bookhaven.com</li>
            <li><strong>Phone:</strong> +1 (555) 123-4567</li>
            <li><strong>Address:</strong> 123 Book Street, Novel City, Fictionland</li>
            <li><strong>Hours:</strong> Monday - Friday: 9am - 6pm</li>
        </ul>
    </section>
    
    <section class="contact-form">
        <h2>Send Us a Message</h2>
        <form action="#" method="post">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" required>
            
            <label for="message">Your Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
            
            <button type="submit">Send Message</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2024 Book Haven. All Rights Reserved.</p>
    </footer>
</body>
</html>
`);
    res.end();
  }
  else if (req.url === "/about") {
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us | Book Haven</title>
</head>
<body>
    <header>
        <h1>About Book Haven</h1>
        <p>Your one-stop shop for all your reading needs</p>
    </header>

    <section class="about-us">
        <h2>Our Story</h2>
        <p>
            Founded in 1999, Book Haven began as a small local bookstore in the heart of Novel City, Fictionland. 
            With a passion for literature and a vision to bring books closer to everyone, we’ve grown into one of the most beloved bookstores in the country.
            We offer a wide range of books, from timeless classics to the latest bestsellers, catering to readers of all ages and tastes.
        </p>
        <p>
            Over the years, Book Haven has been more than just a bookstore; it has become a community hub where book lovers can come together, attend events, and explore the joy of reading.
            Our mission is simple: to foster a love for reading by making books accessible, affordable, and enjoyable for everyone.
        </p>
    </section>

    <section class="our-values">
        <h2>Our Values</h2>
        <ul>
            <li><strong>Passion for Books:</strong> We believe in the transformative power of literature and are committed to sharing that with the world.</li>
            <li><strong>Community Focused:</strong> We actively engage with our community through book clubs, author events, and literacy programs.</li>
            <li><strong>Customer Commitment:</strong> We strive to offer an exceptional experience for every customer, every time.</li>
            <li><strong>Diversity and Inclusion:</strong> Our shelves are filled with voices from all walks of life, ensuring that everyone can find a story they resonate with.</li>
        </ul>
    </section>

    <section class="team">
        <h2>Meet the Team</h2>
        <p>
            At Book Haven, our team is made up of passionate individuals who live and breathe books. Here are some of the people who make Book Haven what it is today:
        </p>
        <ul>
            <li><strong>John Doe:</strong> Founder & CEO</li>
            <li><strong>Jane Smith:</strong> Head of Operations</li>
            <li><strong>Emily Johnson:</strong> Community Manager</li>
            <li><strong>Michael Lee:</strong> Senior Bookseller</li>
            <li><strong>Sarah Brown:</strong> Events Coordinator</li>
        </ul>
    </section>

    <section class="why-choose-us">
        <h2>Why Choose Book Haven?</h2>
        <p>
            Whether you're looking for your next great read or a thoughtful gift, Book Haven is here for you. Here’s why customers love shopping with us:
        </p>
        <ul>
            <li>Wide selection of books across genres</li>
            <li>Friendly and knowledgeable staff ready to assist</li>
            <li>Exclusive discounts and membership benefits</li>
            <li>Regular author meet-and-greet events and book signings</li>
            <li>Personalized book recommendations</li>
        </ul>
    </section>

    <footer>
        <p>&copy; 2024 Book Haven. All Rights Reserved.</p>
    </footer>
</body>
</html>
`);
    res.end();
  }
  else if (req.url === "/login") {
    if (req.method === "POST") {
      console.log("Request Received")
      res.write("Login Data received")
      res.end()
    }
    else {
      res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
</head>
<body>
    <h2>Login</h2>
    <form action="/login" method="POST">
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>
        
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" required><br><br>
        
        <input type="submit" value="Login">
    </form>
</body>
</html>
`)
      res.end() 
    }
  }
  
  else {
    res.write("Page not found");
    res.end();
  }
});

server.listen(9999);
