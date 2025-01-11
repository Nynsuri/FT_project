<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>About Us</h5>
          <p>Your ultimate resource for World of Warcraft guides and information.</p>
        </div>
        <div class="col-md-4">
          <h5>Quick Links</h5>
          <ul class="footer-links">
            <li><router-link to="/guides/mounts">Mounts</router-link></li>
            <li><router-link to="/guides/pets">Pets</router-link></li>
            <li><router-link to="/guides/toys">Toys</router-link></li>
            <li><router-link to="/guides/transmogs">Transmogs</router-link></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Follow Us</h5>
          <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
            <a href="#" class="social-link"><i class="fab fa-discord"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Guides of Warcraft. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #1a1a1a;
  padding: 3rem 0 1rem;
  margin-top: 3rem;
  border-top: 1px solid #404040;
}

.footer h5 {
  color: #ffd100;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
}

.footer-links a:hover {
  color: #ffd100;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.2s;
}

.social-link:hover {
  color: #ffd100;
}

.footer-bottom {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #404040;
  text-align: center;
  color: #888;
}
</style>
