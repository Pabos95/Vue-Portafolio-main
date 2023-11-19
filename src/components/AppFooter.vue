<template>
  <!-- Footer -->
  <MDBFooter bg="dark" :text="['center', 'white']">
    <!-- Grid container -->
    <MDBContainer class="p-4">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://www.facebook.com/pabos95/"
          role="button"
          ><MDBIcon iconStyle="fab" icon="facebook-f"
        /></a>
        <!-- Instagram -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://www.instagram.com/esteban8231/"
          role="button"
          ><MDBIcon iconStyle="fab" icon="instagram"
        /></a>
        <!-- Linkedin -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://www.linkedin.com/in/esteban-aguilar-781b3998/"
          role="button"
          ><MDBIcon iconStyle="fab" icon="linkedin-in"
        /></a>
        <!-- Github -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://github.com/Pabos95"
          role="button"
          ><MDBIcon iconStyle="fab" icon="github"></MDBIcon
        ></a>
      </section>
      <!-- Section: Social media -->
      <!-- Section: Form -->
      <section class="">
        <form action="">
          <!--Grid row-->
          <MDBRow center class="d-flex">
            <!--Grid column-->
            <MDBCol auto>
              <p class="pt-2">
                <strong> {{ $t("sign-up") }}</strong>
              </p>
            </MDBCol>
            <!--Grid column-->
            <!--Grid column-->
            <MDBCol md="5" col="12">
              <!-- Email input -->
              <MDBInput
                white
                type="email"
                id="form5Example2"
                label="Email address"
                wrapperClass="mb-4"
              />
            </MDBCol>
            <!--Grid column-->
            <!--Grid column-->
            <MDBCol auto>
              <!-- Submit button -->
              <MDBBtn outline="light" class="mb-4"> {{ $t("subscribe") }} </MDBBtn>
            </MDBCol>
            <!--Grid column-->
          </MDBRow>
          <!--Grid row-->
        </form>
      </section>
      <!-- Section: Form -->
      <!-- Section: Text -->
      <section class="mb-4">
        <p>
         {{ $t('website-developed') }}
        </p>
          <p>
          <a class="text-white" href="https://vuejs.org/"><span class="footer-link"> Vue </span></a>
        </p>
        <p>
          <a class="text-white" href="https://cdmoro.github.io/bootstrap-vue-3/"><span class="footer-link"> Bootstrap Vue3 </span></a>
        </p>
             <p>
          <a class="text-white" href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVue"><span class="footer-link">MDB Vue3</span></a>
        </p>
      </section>
      <!-- Section: Text -->
      <!-- Section: Links -->
      <section class="">
        <!--Grid row-->
        <MDBRow>
          <!--Grid column-->
          <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
            <h5 class="text-uppercase"> {{ $t('technical-certifications') }}</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a href="https://coursera.org/share/e4be33dee0233cff4b1200d4c8fa9760" class="text-white"><span class="footer-link">Meta - Introduction to Front End Development</span></a>
              </li>
              <li>
                <a href="https://coursera.org/share/808754b24737115290cd839fc4469aec" class="text-white"><span class="footer-link">Meta - Programming with Javascript </span></a>
              </li>

              <li>
                <a href="https://coursera.org/share/7fa188511629ffd8dc260e34e180be7d" class="text-white"><span class="footer-link">Meta - Version Control</span></a>
              </li>
              <li>
                <a href="https://coursera.org/share/aa61bee4466cc9e9d462e16fe4e61015" class="text-white"><span class="footer-link">Meta - HTML and CSS in Depth</span></a>
              </li>
            </ul>
          </MDBCol>
          <!--Grid column-->
          <!--Grid column-->
          <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
            <h5 class="text-uppercase">{{ $t('leadership-courses')}}</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a href="https://coursera.org/share/2962643b45d65f6783bd2b7eaee5d1e7" class="text-white"><span class="footer-link">Google - Foundations of Project Management</span></a>
              </li>
              <li>
                <a href="https://coursera.org/share/2962643b45d65f6783bd2b7eaee5d1e7" class="text-white"><span class="footer-link">Google - Project Planning: Putting it all together</span></a>
              </li>
              <li>
                <a href="https://coursera.org/share/1f07771fd5036c5c7c2f43fd3b2cf8b9" class="text-white"><span class="footer-link">Google - Project Initiation: Starting a Sucessfull </span></a>
              </li>
            </ul>
          </MDBCol>
          <!--Grid column-->
          <!--Grid column-->
          <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
            <h5 class="text-uppercase"> {{ $t('language-certifications') }}</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a download="Esteban Aguilar English Certificate" :href="enCertificate" class="text-white"><span class="footer-link">English</span></a>
              </li>
              <li>
                <a :href="ptCertificate" class="text-white"><span class="footer-link">Português</span></a>
              </li>
              <li>
                <a href="#!" class="text-white"><span class="footer-link">Français</span></a>
              </li>
            </ul>
          </MDBCol>
          <!--Grid column-->
          <!--Grid column-->
          <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
            <h5 class="text-uppercase">{{ $t('contact-me') }}</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a href="mailto:pabloagc95@gmail.com" class="text-white"> <span class="footer-link">{{ $t('email') }} </span></a>
              </li>
              <li>
                <a href="https://wa.me/50689176056" class="text-white"> <span class="footer-link">{{ $t('chat-whatsapp')}} </span> </a>
              </li>
            </ul>
          </MDBCol>
          <!--Grid column-->
        </MDBRow>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->
    </MDBContainer>
    <!-- Grid container -->
    <!-- Copyright -->
    <div
      class="text-center p-3"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © 2022 Copyright: Esteban Aguilar
    </div>
    <!-- Copyright -->
  </MDBFooter>
  <!-- Footer -->
</template>
<script>
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-vue-ui-kit';

  export default {
    components: {
      MDBFooter,
      MDBContainer,
      MDBRow,
      MDBCol,
      MDBIcon,
      MDBBtn
    },
    data(){
      return {
        enCertificate: require('/src/assets/Certificates/BELT_en_certificate1024_1.jpg'),
        ptCertificate: require('/src/assets/Certificates/BELT_pt_certificate1024_1.jpg'),
        frCertificate: require('/src/assets/Certificates/BELT_fr_certificate1024_1.jpg'),
      }
    },
  };
</script>
<style lang="scss">
ul li {
.text-white .footer-link:hover {
  color:#e7cfc7;
}
}
.mb-4 p a .footer-link:hover {
    color:#e7cfc7;
}
</style>