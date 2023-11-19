<template>
    <div class="home">
    <section>
       <b-card
       img-left
       :img-src="personalPicture"
       :img-alt="$t( 'profile-picture' )"
       class="row-1 mb-2 fadeInOut">
       <h1>{{ $t('welcome-message') }}</h1>
      <span class="site-description">
        {{ $t('site-description' )}}
      </span><br>
      <p>{{ $t('billing-advice') }}</p>
      <span>
        {{ $t('share-github')}}
      </span>
      <br>
      <ShareNetwork
      class="facebook-share"
    network="facebook"
    url="https://github.com/Pabos95"
    title="Esteban Aguilar Github Profile"
    description="This is the Github profile of Esteban Aguilar, a professional front-end web developer from Costa Rica"
    hashtags="developer,github"
  >
   {{ $t('facebook-share') }}
</ShareNetwork>
       </b-card>
    </section>
    <section>
      <b-card
      class="mb-3 row-2 fadeInOut">
      <h2>
        {{ $t('hire-me') }}
      </h2>
      <p class="card-text">
        {{ $t('hire-me-text')}}
      </p>
      </b-card>
      <b-card
      class="mb-3 row-2 fadeInOut">
      <h2>
        {{ $t('volunteering-experience')}}
      </h2>
      <ul>
        <h3>Coder Dojo</h3>
        <p class="card-text"> {{ $t('coder-dojo')}}</p>
      </ul>
      </b-card>
      <b-card
      class="mb-3 row-2 fadeInOut">
      <h2>  {{ $t('soft-skills') }} </h2>
      <ul>
        <li> {{ $t('team-worker') }}</li>
        <li> {{ $t('adaptability') }}</li>
        <li> {{ $t('learner')}}</li>
      </ul>
      </b-card>
    </section>
    <section id="stackCarousel">
    <h2> {{ $t('technologies') }}</h2>
       <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="800"
    img-height="480"
  >
    <b-carousel-slide
      active
      caption="Python"
      img-alt="Python"
      img-src="https://3.bp.blogspot.com/-cGRyfwY__RY/WxzvP6USvvI/AAAAAAAC9ng/r9dJhreJ4Aw89W98SCc0-KixTrnCJ1-XgCLcBGAs/s1600/800px-Python-logo-notext.svg.png"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Javascript"
      img-alt="Javascript"
      img-src="https://fortyseven47.com/wp-content/uploads/2020/06/logos-javascript-1.png"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Vue"
      img-alt="Vue"
      img-src="https://cdn.freebiesupply.com/logos/thumbs/2x/vue-9-logo.png"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Adobe Experience Manager"
      img-alt="Adobe Experience Manager"
      img-src="https://th.bing.com/th/id/OIP.mRB4R5gnUjcgOfK9icqIWwHaDt?pid=ImgDet&w=640&h=320&rs=1"
    >
    </b-carousel-slide>
  </b-carousel>
    </section>
    <section>
    <div class="collapse-area">
    <b-button v-b-toggle.collapse-1 variant="primary"> {{ $t('academic-background') }}</b-button>
      <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <p class="card-text">{{ $t('education')}}</p>
      <p class="card-text">{{ $t('project-management')}}</p>
      <p class="card-text">{{ $t('front-end-development')}}</p>
    </b-card>
  </b-collapse>
  </div>
    <div class="collapse-area">
    <b-collapse>
    </b-collapse>
        <b-button v-b-toggle.collapse-2 variant="primary"> {{ $t('professional-experience') }}</b-button>
      <b-collapse id="collapse-2" class="mt-2">
    <b-card>
      <p class="card-text"> {{ $t('professional-experience-2019') }} </p>
      <p class="card-text"> {{ $t('professional-experience-2020') }} </p>
      <p class="card-text"> {{ $t('professional-experience-2023') }} </p>
    </b-card>
  </b-collapse>
  </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data(){
    return {
      personalPicture: require('/src/assets/personalPicture.jpg'),
    }
  },
}
</script>
<style lang="scss">
@import 'src/styles/HomeView.scss';
</style>
