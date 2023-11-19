<template>
  <section class="contact-form">
    <h1>{{$t('inquiry')}}</h1>
    <form accept-charset="UTF-8" action="https://www.formbackend.com/f/8875e588e757de67" method="POST">
      <div class="form-fields">
        <label for="name">{{$t('name')}}</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-fields">
        <label for="email">{{$t('email')}}</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-fields">
        <label for="subject">{{$t('subject')}}</label>
        <input type="text" id="subject" name="subject" required>
      </div>
      <div class="form-fields">
        <label for="message">{{$t('message')}}</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <button type="submit">Send message</button>
    </form>
    </section>
</template>

<style scoped>
  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .form-fields {
    margin-bottom: 1rem;
    justify-content: center;
    @media(min-width: 800px) {
      display: flex;
    }
  }
  label {
    display: block;
    margin-bottom: 4px;
    font-weight: bold;
    font-size: 0.9rem;
    @media  (min-width: 800px) {
      width: 10rem;
    }
  }
  input[type="text"], input[type="email"], textarea {
    border: 1px solid #ccc;
    font-size: 1rem;
    padding: 6px 10px;
    border-radius: 4px;
  }
  button[type="submit"] {
    background-color: darkolivegreen;
    color: white;
    font-size: 0.8rem;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    font-weight: 500;
    @media(min-width: 800px) {
      margin-left: 15%;
    }
  }
  .contact-form {
   background-color: #e0d8b0;
   padding-bottom: 2rem;
  }
</style>
