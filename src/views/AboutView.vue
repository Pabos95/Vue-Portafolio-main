<template>
  <section class="bio">
  <h1>
    {{ $t('biography')}}
  </h1>
  <p>
    {{$t('bio-paragraph1')}}
  </p>
  <p>
    {{$t("bio-paragraph2")}}
  </p>
  </section>
</template>
<style scoped>
.bio {
  background-color: #84c3be;
  display: flex;
  flex-direction: column;
}
p {
  padding-bottom: 1rem;
  margin: 0 15%;
}
</style>
