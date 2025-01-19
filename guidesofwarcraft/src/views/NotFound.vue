<template>
  <div class="not-found">
    <div class="container text-center">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <router-link to="/" class="btn btn-secondary mt-4">
        <i class="fas fa-arrow-left me-2"></i>Return Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  padding-top: 80px;
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 8rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

p {
  color: #888;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.btn-secondary {
  background-color: var(--secondary-color);
  border-color: var(--border-color);
  color: var(--text-color);
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: var(--primary-color);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style>
