<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">About Us</h1>

      <div class="row">
        <div class="col-md-8">
          <div class="about-content">
            <h2>Welcome to WoW Guides</h2>
            <p>We are passionate World of Warcraft players dedicated to providing the most comprehensive and up-to-date guides for collectors and enthusiasts. Our team works tirelessly to ensure that you have access to the best information about mounts, pets, toys, and transmog collections.</p>

            <h3>Our Mission</h3>
            <p>Our mission is to help World of Warcraft players achieve their collection goals by providing detailed guides, tips, and strategies. We believe that collecting in WoW should be an enjoyable experience, and we're here to make it easier for you.</p>

            <h3>What We Offer</h3>
            <ul>
              <li>Detailed guides for rare mount farming</li>
              <li>Battle pet strategies and collecting tips</li>
              <li>Comprehensive toy collection guides</li>
              <li>Transmog set recommendations and farming routes</li>
              <li>Regular updates with each patch</li>
            </ul>

            <h3>Contact Us</h3>
            <p>Have questions or suggestions? We'd love to hear from you! You can reach us through our social media channels or email us at contact@wowguides.com</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="team-section">
            <h3>Our Team</h3>
            <div class="team-member" v-for="member in teamMembers" :key="member.name">
              <img :src="member.avatar" :alt="member.name">
              <h4>{{ member.name }}</h4>
              <p>{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      teamMembers: [
        {
          name: 'Sarah Johnson',
          role: 'Lead Guide Writer',
          avatar: '/images/team/sarah.jpg'
        },
        {
          name: 'Mike Chen',
          role: 'Mount Specialist',
          avatar: '/images/team/mike.jpg'
        },
        {
          name: 'Andrej Šima',
          role: 'Pet Enjoyer',
          avatar: '/images/team/sima.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about-content {
  background: #2b2b2b;
  padding: 2rem;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.about-content h2, .about-content h3 {
  color: #ffd100;
  margin-bottom: 1rem;
}

.about-content ul {
  padding-left: 1.5rem;
  margin-bottom: 2rem;
}

.about-content ul li {
  margin-bottom: 0.5rem;
}

.team-section {
  background: #2b2b2b;
  padding: 2rem;
  border-radius: 4px;
}

.team-member {
  text-align: center;
  margin-bottom: 2rem;
}

.team-member img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
}

.team-member h4 {
  color: #ffd100;
  margin-bottom: 0.5rem;
}

.team-member p {
  color: #888;
}
</style>