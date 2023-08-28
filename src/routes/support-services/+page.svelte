<script>
  import Button from "$lib/components/button.svelte";
  import Image from "$lib/components/image.svelte";
  import { getFileUrl } from "$lib/getFileUrl.js";
  import SupportServices from "$lib/assets/support_services.png";
  let banner = "9cfe6148-c082-4919-931b-47e33e295885.jpg";
</script>

<div class="advocacy_container">
  <figure class="image_container image_border">
    <img
      class="image"
      src={getFileUrl(banner)}
      loading="lazy"
      alt="placeholder" />
  </figure>
  <div class="mb-6 is-flex is-flex-direction-column is-align-items-center">
    <div class="column is-8 mb-4">
      <h1 class="py-4">Support Services</h1>
      <h5 class="block">
        Change 1 provides support services to aid foster alumni in their
        transition from foster care to independence. Our goal is to provide
        alumni with the resources and support they need to succeed in all
        aspects of life. Whether it be help with education, housing, employment,
        or just someone to talk to, we are here to help.
      </h5>
      <img
        class="hero_image"
        src={SupportServices}
        alt="A design depicting the services offered by Change 1" />
      <h2 class="pt-4">Our Process</h2>
      <h3 class="pb-2">1. Intake</h3>
      <p class="block mb-2">
        Before we can provide support, clients must fill out an intake form with
        their primary information and desired support. The intake form can be
        found at the bottom of this page. The client should send the intake form
        to <a href="mailto:volunteer@change1.org" class="has-text-link"
          >this email</a
        >, after which we will review and either accept or deny the request.
      </p>
      <h3 class="pb-2">2. Documentation</h3>
      <p class="block mb-2">
        One of our support managers will help the client fill out a second, more
        extensive form including the client's personal and medical information.
      </p>
      <p class="block mb-2">
        We will also need a letter verifying that the client was previously in
        foster care from one of the following sources:
      </p>
      <div class="list mb-2">
        <p>• Preperation for Adult Living (PAL)</p>
        <p>• Child Protective Services (CPS)</p>
        <p>
          • Third-party agency (eg. Lifeworks, Austin Children Center, etc.)
        </p>
      </div>
      <h3 class="pb-2">3. Assessment</h3>
      <p class="block mb-2">
        A support manager will help the client fill out a third, even more
        extensive form detailing the client's history within the Child Welfare
        System and the fields in which the client requires support. Areas where
        we can provide support include:
      </p>
      <div class="list mb-2 columns">
        <div class="column">
          <p>• Education & Employment</p>
          <p>• Healthcare</p>
          <p>• Housing</p>
        </div>
        <div class="column">
          <p>• Transportation</p>
          <p>• Banking & Finances</p>
          <p>• Food Insecurity</p>
        </div>
      </div>
      <h3 class="pb-2">4. Assignment</h3>
      <p class="block mb-2">
        We will assign the client a support manager to help them in achieving
        the goals determined in the Assessment Phase. Criteria in the assignment
        of support managers include:
      </p>
      <div class="list mb-2 columns">
        <div class="column">
          <h5 class="mb-1">Client preference</h5>
          <p>• Gender</p>
          <p>• Race and ethnicity</p>
          <p>• Shared experience</p>
        </div>
        <div class="column">
          <h5 class="mb-1">Manager preference</h5>
          <p>• Expertise</p>
          <p>• Skills</p>
          <p>• Interests</p>
        </div>
        <div class="column">
          <h5 class="mb-1">Miscellaneous</h5>
          <p>• Personality match</p>
        </div>
      </div>
    </div>
    <Button address={""} text={"Intake Form"} />
  </div>
</div>

<style lang="scss">
  .advocacy_container {
    .hero_image {
      object-fit: fill;
    }
    .image_container:nth-child(1) {
      display: flex;
      align-items: center;
      height: 20vh;
      margin: 0;
      overflow: hidden;
      .image {
        object-fit: cover;
        height: 100%;
        min-width: 100%;
      }
    }
    h1,
    h2 {
      text-align: center;
    }
    h5,
    p {
      text-align: justify;
    }
    .image_container:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
  }
</style>
